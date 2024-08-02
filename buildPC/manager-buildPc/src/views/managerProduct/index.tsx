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
import {
  CloseButton,
  Divider,
  Image,
  Input,
  Menu,
  Select,
  Text,
  Title,
} from "@mantine/core";
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

const dataCategory = [
  "Bộ vi xử lý",
  "Bo mạch chủ",
  "RAM",
  "VGA",
  "SSD",
  "HDD",
  "Nguồn",
  "Vỏ case",
  "Màn hình",
  "Chuột",
  "Bàn phím",
  "Tai nghe",
  "Loa",
  "Ghế",
  "Quạt làm mát",
  "Tản nhiệt khí",
  "Tản nước all in one",
  "Tản nước custom",
  "Thiết bị mạng",
];
const ManagerProduct = () => {
  const columns: Array<EuiBasicTableColumn<any>> = [
    {
      field: "id",
      name: "ID",
      sortable: true,
      truncateText: true,
      width: "15%",
    },
    {
      field: "name",
      name: "Tên sản phẩm",
      sortable: true,
      truncateText: true,
    },
    {
      field: "linkAffiliate",
      name: "Link liên kết",
      sortable: true,
      truncateText: true,
      render: (linkAffiliate: string) => (
        <EuiLink target="_blank" href={linkAffiliate}>
          {linkAffiliate}
        </EuiLink>
      ),
      width: "18%",
    },

    {
      field: "categoryName",
      name: "Tên danh mục",
      sortable: true,
      truncateText: true,
    },

    {
      field: "image",
      name: "Ảnh sản phẩm",
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
      field: "price",
      name: "Giá tiền",
      sortable: true,
      truncateText: true,
      width: "13%",
      render: (price: number) => {
        return (
          <>
            <Text fw={600} style={{ color: "red", marginRight: 4 }}>
              {convertToVnd(price)}
            </Text>
            <Text>vnd</Text>
          </>
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
  const [selectedType, setSelectedType] = useState("");

  const onChangeType = (value: any) => {
    setSelectedType(value);
  };

  function convertToVnd(amount: number): string {
    const amountStr: string = amount?.toString();
    const chunks: string[] = [];

    for (let i = amountStr?.length - 1; i >= 0; i -= 3) {
      const chunk = amountStr?.slice(Math.max(i - 2, 0), i + 1);
      chunks.push(chunk);
    }

    const result: string = chunks.reverse().join(".");
    return result;
  }

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

  const openModal = () =>
    modals.openConfirmModal({
      title: (
        <>
          <div color="white">
            <Title order={5}>Thêm mới sản phẩm</Title>
          </div>
        </>
      ),
      children: <CreateView onSearch={() => fetchDataProduct()} />,
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

  function deleteItem(idItem: number[]) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Xóa sản phẩm</Title>
        </>
      ),
      children: (
        <DeleteView onSearch={() => fetchDataProduct()} idItem={idItem} />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  function editItem(id: number) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Chỉnh sửa sản phẩm</Title>
        </>
      ),

      children: <EditView id={id} onSearch={() => fetchDataProduct()} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  const fetchDataProduct = async () => {
    // init services
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "/products");

    getDocs(colRef)
      .then((snapshot) => {
        let itemPc: any = [];
        snapshot.docs.forEach((doc) => {
          itemPc.push({ ...doc.data(), id: doc.id });
        });

        if (selectedType !== "" && selectedType !== null) {
          itemPc = itemPc.filter(
            (product: any) => product.categoryName === selectedType
          );
          // setSelectedType("");
        }

        if (paramSearch?.keyWord && paramSearch.keyWord !== "") {
          itemPc = itemPc.filter((product: any) =>
            product.name.includes(paramSearch.keyWord)
          );
        }
        setDatas(itemPc);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchDataProduct();
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
        onSearch={() => fetchDataProduct()}
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

export default ManagerProduct;
