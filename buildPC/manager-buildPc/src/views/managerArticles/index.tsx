import {
  CriteriaWithPagination,
  EuiBasicTable,
  EuiBasicTableColumn,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiImage,
  EuiLink,
  EuiSpacer,
  EuiTableSelectionType,
  Pagination,
} from "@elastic/eui";
import { Divider, Image, Menu, Select, Text, Title } from "@mantine/core";
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

const ManagerArticles = () => {
  const columns: Array<EuiBasicTableColumn<any>> = [
    {
      field: "id",
      name: "ID",
      sortable: true,
      truncateText: true,
      width: "7%",
    },
    {
      field: "imageThumbnail",
      name: "Ảnh sản phẩm",
      sortable: true,
      truncateText: true,
      width: "8%",
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
      field: "title",
      name: "Tên bài viết",
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
      field: "articleCategoryId",
      name: "Id danh mục",
      sortable: true,
      truncateText: true,
    },
    {
      field: "summary",
      name: "Nội dung tóm tắt",
      sortable: true,
      truncateText: true,
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
  const [dataCategory, setDataCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [pagination, setPagination] = useState<Pagination>(paginationBase);
  const [selectedOptions, setSelected] = useState();
  const [paramSearch, setParamSearch] = useState<ParamSearchBase>();
  const [isSelectedItem, setSelectedItems] = useState<any[]>([]);
  const [datas, setDatas] = useState<ItemShopeModel[]>([]);
  const [total, setTotal] = useState(0);
  const [selectedType, setSelectedType] = useState("");

  const onChangeType = (value: any) => {
    setSelectedType(value);
  };

  const handleEditData = async (id: string) => {
    if (id) {
      editItem(id);
    } else {
      console.log("Xin vui lòng chọn dữ liệu !");
    }
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

  const openModal = () =>
    modals.openConfirmModal({
      title: (
        <>
          <div color="white">
            <Title order={5}>Thêm mới bài viết</Title>
          </div>
        </>
      ),
      children: <CreateView onSearch={() => fetchDataArticle()} />,
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
          <Title order={5}>Xóa sản phẩm</Title>
        </>
      ),
      children: (
        <DeleteView onSearch={() => fetchDataArticle()} idItem={idItem} />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  function editItem(id: string) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Chỉnh sửa sản phẩm</Title>
        </>
      ),
      children: <EditView id={id} onSearch={() => fetchDataArticle()} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  const elementSearch = [
    <Menu.Item closeMenuOnClick={false}>
      <EuiFormRow label="Danh mục">
        <Select
          placeholder={"Chọn danh mục"}
          searchable
          value={selectedType}
          nothingFoundMessage="Không có dữ liệu"
          data={dataCategory}
          onChange={onChangeType}
          clearable
        />
      </EuiFormRow>
    </Menu.Item>,
  ];

  const fetchDataArticle = async () => {
    // init services
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "/articles");

    getDocs(colRef)
      .then((snapshot) => {
        let itemPc: any = [];
        snapshot.docs.forEach((doc) => {
          itemPc.push({ ...doc.data(), id: doc.id });
        });

        if (selectedType !== "" && selectedType !== null) {
          itemPc = itemPc.filter((item: any) =>
            item.articleCategoryId.includes(selectedType)
          );
        }

        if (paramSearch?.keyWord && paramSearch.keyWord !== "") {
          itemPc = itemPc.filter((item: any) =>
            item.title.includes(paramSearch.keyWord)
          );
        }
        setDatas(itemPc);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchDataCategory = async () => {
    // init services
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "/articleCategory");

    getDocs(colRef)
      .then((snapshot) => {
        let attribute: any = [];
        snapshot.docs.forEach((doc) => {
          attribute.push({ value: doc.data(), label: doc.id });
        });
        const newArray = attribute.map((item: any) => ({
          label: item.value.name,
          value: item.label,
        }));
        setDataCategory(newArray);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchDataArticle();
    };
    fetchData();
    fetchDataCategory();
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
        onSearch={() => fetchDataArticle()}
        elementSearch={elementSearch}
      />
      <EuiSpacer size="l" />
      <EuiBasicTable
        tableCaption="Demo of EuiDataGrid with selection"
        items={datas ? datas : []}
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

export default ManagerArticles;
