import { Box, Button, Table, Text, Title } from "@mantine/core";
import style from "./Specifications.module.scss";
import { modals } from "@mantine/modals";
import { TblItem } from "@/model/ProductList";
import { postLoggingAction } from "@/api/apiLogging";

const Specifications = ({ data }: { data: TblItem | null }) => {
  const handleOpenDetail = () => {
    postLoggingAction({
      userName: localStorage.getItem("userName"),
      actionType: "MoreProductInfoLink",
      actionDetail: `[${data?.id}] ${data?.itemName}`,
    });
    modals.openConfirmModal({
      title: (
        <>
          <Title order={5}>Thông số chi tiết</Title>
        </>
      ),
      centered: true,
      children: (
        <Box
          className={`${style.specTable} ${style.tableDetail}`}
          dangerouslySetInnerHTML={{ __html: data?.itemSpec || "" }}
        ></Box>
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
      size: "1200px",
      radius: "12px",
    });
  };
  return (
    data?.itemSpec && (
      <Box className={style.main}>
        <Text className={style.titleHeader}>Thông số kỹ thuật</Text>
        <Box
          className={style.specTable}
          dangerouslySetInnerHTML={{ __html: data?.itemSpec || "" }}
        ></Box>
        <Box className={style.buttonDetailWrapper}>
          <Button className={style.buttonDetail} onClick={handleOpenDetail}>
            Xem thông số đầy đủ
          </Button>
        </Box>
      </Box>
    )
  );
};

export default Specifications;
