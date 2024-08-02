import {
  CriteriaWithPagination,
  EuiBasicTable,
  EuiBasicTableColumn,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiSpacer,
  EuiTableSelectionType,
  Pagination,
} from "@elastic/eui";
import React, { useEffect, useState } from "react";
import {
  isNullOrUndefined,
  isNullOrUndefinedArry,
} from "../../extension/StringExtension";
import { Divider, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import DeleteView from "./DeleteView";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { BrandModel } from "../../model/BrandModel";
import EditView from "./EditView";
import AppAction from "../../common/AppAction";
import AppSearch from "../../common/AppSearch";
import { paginationBase } from "../../_base/model/_base/BaseTable";
import { ParamSearchBase } from "../../_base/model/_base/ParamSearchBase";
import { ItemShopeModel } from "../../model/ItemsShopeModel";
import { NotificationExtension } from "../../extension/NotificationExtension";
import CreateView from "./CreateView";

const Attribute = () => {
  const columns: Array<EuiBasicTableColumn<any>> = [
    {
      field: "id",
      name: "ID",
      sortable: true,
      truncateText: true,
      // width: '5%',
    },
    {
      field: "attributeName",
      name: "AttributeName",
      sortable: true,
      truncateText: true,
      height: "80px",
    },
    {
      field: "categoryName",
      name: "Category Name",
      sortable: true,
      truncateText: true,
      // width: '5%',
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

  const [dataattribute, setDataattribute] = useState<BrandModel[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [pagination, setPagination] = useState<Pagination>(paginationBase);
  const [selectedOptions, setSelected] = useState();
  const [paramSearch, setParamSearch] = useState<ParamSearchBase>();
  const [isSelectedItem, setSelectedItems] = useState<any[]>([]);
  const [datas, setDatas] = useState<ItemShopeModel[]>([]);
  const [total, setTotal] = useState(0);

  const handleEditData = async (id: string) => {
    if (id) editItem(id);
    else NotificationExtension.Warn("Xin vui lòng chọn dữ liệu");
  };

  function editItem(id: string) {
    modals.openConfirmModal({
      title: <Title order={5}>Chỉnh sửa thuộc tính</Title>,
      children: <EditView id={id} onSearch={() => fetchDataBrands()} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  const openModalEdit = () => {
    if (
      isSelectedItem &&
      (isSelectedItem.length < 1 || isSelectedItem.length > 1)
    )
      NotificationExtension.Warn("Xin vui lòng chọn 1 thuộc tính để chỉnh sửa");
    else editItem(isSelectedItem[0].id);
  };

  const openModalCreate = () => {
    modals.openConfirmModal({
      title: <Title order={5}>Thêm thuộc tính mới</Title>,
      children: <CreateView onSearch={() => fetchDataBrands()} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  };

  const fetchDataBrands = async () => {
    // init services
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "/attribute");

    getDocs(colRef)
      .then((snapshot) => {
        let attribute: any = [];
        snapshot.docs.forEach((doc) => {
          attribute.push({ ...doc.data(), id: doc.id });
        });
        setDataattribute(attribute);
        console.log(attribute);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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

  function deleteItem(idItem: string[]) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Xóa thuộc tính</Title>
        </>
      ),
      children: (
        <DeleteView onSearch={() => fetchDataBrands()} idItem={idItem} />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  const openModalDelete = () => {
    if (isSelectedItem && isSelectedItem.length < 1)
      NotificationExtension.Warn("Xin vui lòng chọn dữ liệu !");
    else {
      const ids = isSelectedItem;
      deleteItem(ids.map((item) => item?.id));
    }
  };

  useEffect(() => {
    fetchDataBrands();
  }, []);

  return (
    <>
      <AppAction
        openModal={openModalCreate}
        openModalDelete={openModalDelete}
        openModalEdit={openModalEdit}
      ></AppAction>
      <Divider my="sm" />
      <AppSearch
        loading={loading}
        onChange={onChange}
        onChangeText={onChangeText}
        onSearch={() => fetchDataBrands()}
      />
      <EuiSpacer size="l" />
      <EuiBasicTable
        tableCaption="Demo of EuiDataGrid with selection"
        items={dataattribute ? dataattribute : []}
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

export default Attribute;
