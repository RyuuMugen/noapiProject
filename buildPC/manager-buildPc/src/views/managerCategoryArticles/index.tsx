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

const ManagerCategoryArticles = () => {
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
      name: "Tên danh mục bài viết",
      sortable: true,
      truncateText: true,
    },
    {
      field: "url",
      name: "Link liên kết",
      sortable: true,
      truncateText: true,
      render: (url: string) => (
        <EuiLink target="_blank" href={url}>
          {url}
        </EuiLink>
      ),
      width: "18%",
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

  const [dataArticleCategory, setDataArticleCategory] = useState([]);

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
            <Title order={5}>Thêm mới danh mục bài viết</Title>
          </div>
        </>
      ),
      children: <CreateView onSearch={() => fetchDataArticleCategory()} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });

  const openModalEdit = () => {
    if (
      isSelectedItem &&
      (isSelectedItem.length < 1 || isSelectedItem.length > 1)
    )
      NotificationExtension.Warn("Xin vui lòng chọn 1 sản phẩm để chỉnh sửa");
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
          <Title order={5}>Xóa danh mục bài viết</Title>
        </>
      ),
      children: (
        <DeleteView
          onSearch={() => fetchDataArticleCategory()}
          idItem={idItem}
        />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  function editItem(id: string) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Chỉnh sửa danh mục bài viết</Title>
        </>
      ),

      children: (
        <EditView id={id} onSearch={() => fetchDataArticleCategory()} />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  const fetchDataArticleCategory = async () => {
    // init services
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "/articleCategory");

    getDocs(colRef)
      .then((snapshot) => {
        let itemArticleCategory: any = [];
        snapshot.docs.forEach((doc) => {
          itemArticleCategory.push({ ...doc.data(), id: doc.id });
        });
        setDataArticleCategory(itemArticleCategory);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchDataArticleCategory();
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
        onSearch={() => fetchDataArticleCategory()}
      />
      <EuiSpacer size="l" />
      <EuiBasicTable
        tableCaption="Demo of EuiDataGrid with selection"
        items={dataArticleCategory ? dataArticleCategory : []}
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

export default ManagerCategoryArticles;
