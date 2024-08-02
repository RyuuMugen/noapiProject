import {
  CriteriaWithPagination,
  EuiBasicTable,
  EuiBasicTableColumn,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiSpacer,
  EuiTableSelectionType,
  Pagination,
} from "@elastic/eui";
import { Divider, Image, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { paginationBase } from "../../_base/model/_base/BaseTable";
import { ParamSearchBase } from "../../_base/model/_base/ParamSearchBase";
import AppAction from "../../common/AppAction";
import AppSearch from "../../common/AppSearch";
import { NotificationExtension } from "../../extension/NotificationExtension";
import {
  isNullOrUndefined,
  isNullOrUndefinedArry,
} from "../../extension/StringExtension";
import CreateView from "./CreateView";
import DeleteView from "./DeleteView";
import EditView from "./EditView";
import { ItemShopeModel } from "../../model/ItemsShopeModel";

const ManagerCategory = () => {
  const columns: Array<EuiBasicTableColumn<any>> = [
    {
      field: "id",
      name: "ID",
      sortable: true,
      truncateText: true,
      width: "8%",
    },
    {
      field: "name",
      name: "Tên danh mục",
      sortable: true,
      truncateText: true,
    },
    {
      field: "icon",
      name: "Icon",
      sortable: true,
      truncateText: true,
      width: "13%",
      render: (primaryImage: any) => {
        return (
          <EuiImage
            size=""
            width={60}
            height={80}
            src={primaryImage}
            alt="alt"
          />
        );
      },
    },

    {
      name: "Actions",
      width: "5%",
      render: (online: any) => {
        return (
          <>
            <EuiFlexGroup
              responsive={true}
              wrap={false}
              gutterSize="s"
              alignItems="center"
            >
              <EuiFlexItem grow={false}>
                <EuiButtonIcon
                  iconType="documentEdit"
                  aria-label="Dashboard"
                  color="success"
                  onClick={(e: any) => {
                    if (isNullOrUndefined(online))
                      console.log("xin vui lòng chọn dữ liệu !");
                    else {
                      editItem(online.id);
                    }
                  }}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButtonIcon
                  iconType="trash"
                  color="danger"
                  onClick={(e: any) => {
                    if (isNullOrUndefined(online))
                      console.log("xin vui lòng chọn dữ liệu !");
                    else {
                      deleteItem([online.id]);
                    }
                  }}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </>
        );
      },
    },
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [pagination, setPagination] = useState<Pagination>(paginationBase);
  const [selectedOptions, setSelected] = useState();
  const [paramSearch, setParamSearch] = useState<ParamSearchBase>();
  const [isSelectedItem, setSelectedItems] = useState<any[]>([]);
  const [datas, setDatas] = useState<ItemShopeModel[]>([]);
  const [total, setTotal] = useState(0);

  const [dataCategory, setDataCategory] = useState([]);

  const onTableChange = async ({
    page: { index, size },
  }: CriteriaWithPagination<any>) => {
    setPagination({
      ...pagination,
      pageIndex: index,
      pageSize: size,
      totalItemCount: 1000,
    });
  };

  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
    if (!isNullOrUndefinedArry(selectedOptions)) {
      const value = selectedOptions[0].value;
      if (!isNullOrUndefined(value))
        setParamSearch({ ...paramSearch, inActive: value });
    } else setParamSearch({ ...paramSearch, inActive: undefined });
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.value;
    if (!isNullOrUndefined(key))
      setParamSearch({ ...paramSearch, keyWord: key });
  };

  const onSelectionChange = (selectedItems: any[]) => {
    setSelectedItems(selectedItems);
  };
  const selection: EuiTableSelectionType<any> = {
    selectable: (user: any) => true,
    selectableMessage: (selectable: boolean) =>
      !selectable ? "User is currently offline" : "",
    onSelectionChange,
  };

  const openModal = () =>
    modals.openConfirmModal({
      title: (
        <>
          <div color="white">
            <Title order={5}>Thêm mới danh mục</Title>
          </div>
        </>
      ),
      children: <CreateView onSearch={() => fetchDataCategory()} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });

  const openModalEdit = () => {
    if (
      isSelectedItem &&
      (isSelectedItem.length < 1 || isSelectedItem.length > 1)
    )
      NotificationExtension.Warn("Xin vui lòng chọn 1 danh mục để chỉnh sửa");
    else {
      editItem(isSelectedItem[0].id);
    }
  };

  const openModalDelete = () => {
    if (isSelectedItem && isSelectedItem.length < 1)
      NotificationExtension.Warn("Xin vui lòng chọn dữ liệu !");
    else {
      const ids = isSelectedItem;
      deleteItem(ids.map((item) => item?.id));
    }
  };

  function deleteItem(idItem: string[]) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Xóa danh mục</Title>
        </>
      ),
      children: (
        <DeleteView onSearch={() => fetchDataCategory()} idItem={idItem} />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  function editItem(id: string) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Chỉnh sửa danh mục</Title>
        </>
      ),

      children: <EditView id={id} onSearch={() => fetchDataCategory()} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  const fetchDataCategory = async () => {
    // init services
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "/category");

    getDocs(colRef)
      .then((snapshot) => {
        let itemCategory: any = [];
        snapshot.docs.forEach((doc) => {
          itemCategory.push({ ...doc.data(), id: doc.id });
        });
        setDataCategory(itemCategory);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchDataCategory();
    };
    fetchData();
  }, []);
  return (
    <>
      <AppAction
        openModal={openModal}
        openModalDelete={openModalDelete}
        openModalEdit={openModalEdit}
      ></AppAction>
      <Divider my="sm" />
      <AppSearch
        loading={loading}
        onChange={onChange}
        onChangeText={onChangeText}
        onSearch={() => fetchDataCategory()}
      />
      <EuiSpacer size="l" />
      <EuiBasicTable
        tableCaption="Demo of EuiDataGrid with selection"
        items={dataCategory ? dataCategory : []}
        itemId="id"
        error={error}
        loading={loading}
        noItemsMessage={"Không có dữ liệu"}
        selection={selection}
        columns={columns}
        pagination={pagination}
        isSelectable={true}
        hasActions={true}
        responsive={true}
        onChange={onTableChange}
        compressed={true}
      />
    </>
  );
};

export default ManagerCategory;
