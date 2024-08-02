import React from "react";

import {
  CriteriaWithPagination,
  EuiBasicTable,
  EuiBasicTableColumn,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiImage,
  EuiLink,
  EuiPagination,
  EuiPanel,
  EuiSpacer,
  EuiTableSelectionType,
  Pagination,
  euiPaletteColorBlindBehindText,
} from "@elastic/eui";
import { Badge, Divider, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useEffect, useState } from "react";
import { tblFixedContentType } from "../../model/FixedContent";
import {
  isNullOrEmpty,
  isNullOrUndefined,
  isNullOrUndefinedArry,
} from "../../_base/extension/StringExtension";
import { NotificationExtension } from "../../_base/extension/NotificationExtension";
import { paginationBase } from "../../_base/model/_base/BaseTable";
import { ParamSearchBase } from "../../_base/model/_base/ParamSearchBase";
import Repository from "../../_base/helper/HttpHelper";
import { API_ROUTE } from "../../const/apiRoute";
import { MessageResponse } from "../../model/MessageResponse";
import CreateView from "./CreateView";
import DeleteView from "./DeleteView";
import EditView from "./EditView";
import AppAction from "../../common/AppAction";
import AppSearch from "../../common/AppSearch";
import ActivatedView from "./ActivatedView";

const visColorsBehindText = euiPaletteColorBlindBehindText();

const UserManagement = () => {
  const columns: Array<EuiBasicTableColumn<any>> = [
    // {
    //   field: "id",
    //   name: "ID",
    //   sortable: true,
    //   truncateText: true,
    //   width: "15%",
    //   render: (itemName: string) => (
    //     <EuiLink
    //       target="_blank"
    //       onClick={(e: any) => {
    //         const item = datas.find((x) => x.name === itemName);
    //         if (item !== undefined && item.id > 0) handleEditData(item?.id);
    //       }}
    //     >
    //       {itemName}
    //     </EuiLink>
    //   ),
    // },
    {
      field: "userName",
      name: "Tài khoản",
      sortable: true,
      truncateText: true,
      width: "15%",
    },
    {
      field: "fullName",
      name: "Tên đầy đủ",
      sortable: true,
      truncateText: true,
      width: "20%",
    },

    {
      field: "phone",
      name: "Số điện thoại",
      sortable: true,
      truncateText: true,
      width: "15%",
    },
    {
      field: "roleNumber",
      name: "Hạng quyền",
      sortable: true,
      truncateText: true,
      width: "10%",
      render: (orderNumber: number) => (
        <EuiLink target="_blank">{orderNumber}</EuiLink>
      ),
    },
    {
      field: "inActive",
      name: "Trạng thái",
      sortable: true,
      truncateText: true,
      render: (online: any) => {
        return (
          <Badge size="sm" color={online === true ? "green" : "red"}>
            {online === true ? "Kích hoạt" : "Chưa kích hoạt"}
          </Badge>
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
                      NotificationExtension.Warn("Xin vui lòng chọn dữ liệu !");
                    else {
                      editItem(online.id, online.userName);
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
                      NotificationExtension.Warn("Xin vui lòng chọn dữ liệu !");
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

  const getStatusColor = (status: any) => {
    switch (status) {
      case "I":
        return "red";
      case "A":
        return "green";
      default:
        return "subdued";
    }
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [pagination, setPagination] = useState<Pagination>(paginationBase);
  const [selectedOptions, setSelected] = useState();
  const [paramSearch, setParamSearch] = useState<ParamSearchBase>();
  const [isSelectedItem, setSelectedItems] = useState<any[]>([]);
  const [datas, setDatas] = useState<tblFixedContentType[]>([]);
  const [total, setTotal] = useState(0);

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

  const pageCount = Math.ceil(pagination.totalItemCount);

  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
    if (!isNullOrUndefinedArry(selectedOptions)) {
      const value = selectedOptions[0].value;
      if (!isNullOrUndefined(value))
        setParamSearch({ ...paramSearch, inActive: value });
    } else setParamSearch({ ...paramSearch, inActive: undefined });
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event?.target?.value;
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
            <Title order={5}>Thêm mới tài khoản</Title>
          </div>
        </>
      ),
      children: (
        <CreateView
          onSearch={() =>
            fetchDataFixedContentType(
              pagination.pageIndex,
              pagination.pageSize,
              paramSearch?.keyWord,
              paramSearch?.inActive
            )
          }
        />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });

  const openModalEdit = () => {
    if (
      isSelectedItem &&
      (isSelectedItem.length < 1 || isSelectedItem.length > 1)
    )
      NotificationExtension.Warn(
        "Xin vui lòng chọn 1 danh mục tài khoản để chỉnh sửa !"
      );
    else {
      editItem(isSelectedItem[0].id, isSelectedItem[0].userName);
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

  const openModalActivated = () => {
    if (isSelectedItem && isSelectedItem.length < 1)
      NotificationExtension.Warn("Xin vui lòng chọn dữ liệu !");
    else {
      const ids = isSelectedItem;
      activatedItem(ids.map((item) => item?.id));
    }
  };

  function deleteItem(idItem: number[]) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Xóa danh mục tài khoản</Title>
        </>
      ),
      children: (
        <DeleteView
          onSearch={() =>
            fetchDataFixedContentType(
              pagination.pageIndex,
              pagination.pageSize,
              paramSearch?.keyWord,
              paramSearch?.inActive
            )
          }
          idItem={idItem}
        />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  function activatedItem(idItem: number[]) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Kích hoạt tài khoản đã chọn</Title>
        </>
      ),
      children: (
        <ActivatedView
          onSearch={() =>
            fetchDataFixedContentType(
              pagination.pageIndex,
              pagination.pageSize,
              paramSearch?.keyWord,
              paramSearch?.inActive
            )
          }
          idItem={idItem}
        />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }
  function editItem(id: number, name: any) {
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Chỉnh sửa tài khoản!</Title>
        </>
      ),

      children: (
        <EditView
          id={id}
          name={name}
          onSearch={() =>
            fetchDataFixedContentType(
              pagination.pageIndex,
              pagination.pageSize,
              paramSearch?.keyWord,
              paramSearch?.inActive
            )
          }
        />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  const fetchDataFixedContentType = async (
    index: number,
    size?: number,
    keyWord?: string,
    inActive?: boolean
  ) => {
    setLoading(true);
    setDatas([]);
    setError(undefined);
    const repository = new Repository(process.env.REACT_APP_Auth_APP_API_URL);
    try {
      let urlSearch = `${API_ROUTE.GET_LIST_MANAGEMENT}?Skip=${
        index * (size ?? 0)
      }&Take=${size}`;
      if (!isNullOrEmpty(keyWord))
        urlSearch = urlSearch + `&KeySearch=` + keyWord;
      if (!isNullOrUndefined(inActive))
        urlSearch = urlSearch + `&Active=` + inActive;
      let callapi = await repository.get<MessageResponse<any[]>>(urlSearch);
      if (isNullOrUndefined(callapi) || isNullOrUndefinedArry(callapi?.data)) {
        setTotal(0);
      } else {
        setDatas(callapi?.data ?? []);
        setPagination({
          ...pagination,
          totalItemCount: callapi?.totalCount ?? 0,
        });
        setTotal(callapi?.totalCount ?? 0);
      }
      return callapi?.data;
    } catch (error: any) {
      setError("Có lỗi xảy ra khi tải dữ liệu !");
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchDataFixedContentType(
        pagination.pageIndex,
        pagination.pageSize,
        paramSearch?.keyWord,
        paramSearch?.inActive
      );
    };
    fetchData();
  }, [pagination.pageIndex, pagination.pageSize]);

  return (
    <>
      <AppAction
        openModal={openModal}
        openModalDelete={openModalDelete}
        openModalEdit={openModalEdit}
        openActivated={openModalActivated}
      ></AppAction>
      <Divider my="sm" />
      <AppSearch
        loading={loading}
        onChange={onChange}
        onChangeText={onChangeText}
        onSearch={() =>
          fetchDataFixedContentType(
            pagination.pageIndex,
            pagination.pageSize,
            paramSearch?.keyWord,
            paramSearch?.inActive
          )
        }
      />
      <EuiSpacer size="l" />
      <EuiPanel
        paddingSize="none"
        style={{ height: "520px", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: 1, overflowY: "auto" }}>
          <EuiBasicTable
            tableCaption="Demo of EuiDataGrid with selection"
            items={datas || []}
            itemId="id"
            error={error}
            loading={loading}
            noItemsMessage={"Không có dữ liệu"}
            selection={selection}
            columns={columns}
            // pagination={{
            //   pageIndex: pagination.pageIndex,
            //   pageSize: pagination.pageSize,
            //   totalItemCount: pagination.totalItemCount,
            // }}
            isSelectable={true}
            hasActions={true}
            responsive={true}
            // onChange={onTableChange}
            compressed={true}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <EuiPagination
            pageCount={pageCount}
            activePage={pagination.pageIndex}
            onPageClick={(pageIndex) =>
              onTableChange({
                page: { index: pageIndex, size: pagination.pageSize ?? 10 },
              })
            }
          />
        </div>
      </EuiPanel>
    </>
  );
};

export default UserManagement;
