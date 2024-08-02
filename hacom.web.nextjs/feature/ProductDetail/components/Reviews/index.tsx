import { getDataUserReviewDetail } from "@/api/apiUserReview";
import iconStar from "@/assets/iconStar.svg";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { TblItem } from "@/model/ProductList";
import { TblUserReview } from "@/model/TblUserReview";
import { Box, Button, Flex, Grid, Rating, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconCheck, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { useAuthContext } from "@/useContext/useAuthContext";
import style from "./Reviews.module.scss";

interface CountSynthetic {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
}

const Reviews = ({ dataItem, dataReview }: ReviewProps) => {
  // const [data, setData] = useState<TblUserReview[]>([]);
  const [pageSize, setPageSize] = useState(4);
  // const [totalCount, setTotalCount] = useState(0);
  const [averageStar, setAverageStar] = useState(0);
  const [dataSynthetic, setDataSynthetic] = useState<CountSynthetic>({
    1: 0,
    4: 0,
    3: 0,
    2: 0,
    5: 0,
  });
  const ratingOrder = [5, 4, 3, 2, 1];
  const [loading, setLoading] = useState(true);
  const { userInfo } = useAuthContext();
  const openModal = () => {
    modals.openConfirmModal({
      modalId: "formInput",
      title: (
        <Flex gap={20} align={"center"}>
          {/* <Image
            src={dataItem?.primaryImage || ""}
            alt="image"
            width={97}
            height={97}
          /> */}
          <Text fw={700} lineClamp={2}>
            {dataItem?.itemName}
          </Text>
        </Flex>
      ),
      centered: true,
      children: (
        <FormInput
          dataItem={dataItem || null}
          dataUser={userInfo?.data || []}
          // fetchDataReview={fetchDataReview}
        />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
      size: "lg",
    });
  };

  const handleControlBgColor = (ratingStar: number) =>
    ratingStar === 4 || ratingStar === 5
      ? "#1F67D2"
      : ratingStar === 3
      ? "#6782AA"
      : "#EF1010";

  const handleClickSeeMore = () => {
    setPageSize(pageSize + 4);
  };

  useEffect(() => {
    let count: CountSynthetic = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let average = 0;
    if (dataReview && dataReview.length > 0) {
      dataReview?.map((item) => {
        if (item.rate !== null && item.rate !== undefined) {
          count[item.rate as keyof CountSynthetic]++;
          average += item.rate;
        }
      });
      setDataSynthetic(count);
      setAverageStar(+(average / dataReview?.length).toFixed(2));
    }
  }, [dataReview]);


  return (
    <div className={style.main}>
      <Box className={style.title}>
        <Text>Xếp hạng đánh giá của khách hàng</Text>
      </Box>
      <Box>
        <Box>
          <div className={style.form}>
            <div>
              <Flex
                align={"center"}
                direction={"column"}
                justify={"center"}
                className={style.rightForm}
                gap={"xs"}
              >
                <Text>{averageStar || 0}/5</Text>
                <Flex align={"center"} gap={5}>
                  <Rating
                    value={averageStar}
                    size={"md"}
                    fractions={10}
                    readOnly
                  />
                  <Text span>({dataReview?.length || 0} lượt bình chọn)</Text>
                </Flex>
                <Button onClick={openModal}>Viết nhận xét của bạn</Button>
              </Flex>
            </div>
            <Box mr={15}>
              {ratingOrder.map((rating) => (
                <Flex align={"center"} key={rating} gap={"sm"}>
                  <span className={style.text}>
                    {rating}
                    <Image
                      style={{ marginLeft: 5 }}
                      src={iconStar}
                      alt="iconStar"
                    />
                  </span>
                  <div className={style.bgRate}>
                    <div
                      style={{
                        borderRadius: 12,
                        height: 5,
                        width: `${
                          dataReview && dataReview.length
                            ? (dataSynthetic[rating as keyof CountSynthetic] /
                                dataReview.length) *
                              100
                            : 0
                        }%`,
                        backgroundColor: handleControlBgColor(Number(rating)),
                      }}
                    ></div>
                  </div>
                  <Text className={style.text}>
                    {dataSynthetic[rating as keyof CountSynthetic]}
                  </Text>
                </Flex>
              ))}
            </Box>
          </div>
        </Box>

        <Grid>
          {dataReview?.slice(0, pageSize).map((item, index) => (
            <Grid.Col span={{ base: 12, xs: 6 }} key={index}>
              <Box className={style.review}>
                <Flex align={"center"} gap={20}>
                  <Rating defaultValue={item.rate || 0} size={"xs"} readOnly />
                  <Flex align={"center"} gap={5}>
                    <Text className={style.checkTitle}>
                      Đã chứng nhận mua hàng
                    </Text>
                    <IconCheck size={15} className={style.iconCheckBg} />
                  </Flex>
                </Flex>
                <Flex className={style.commentbox} align={"center"} gap={"sm"}>
                  <Text className={style.comment}>{item.content}</Text>
                </Flex>
                <Text className={style.name}>{item.userName}</Text>
                <Text className={style.date}>{item.creationDate}</Text>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
        {!dataReview ? (
          <div></div>
        ) : pageSize === 4 && dataReview && pageSize > dataReview.length ? (
          <div></div>
        ) : dataReview && pageSize >= dataReview.length ? (
          <Flex className={style.seeMore} onClick={() => setPageSize(4)}>
            <Text>Ẩn bớt</Text>
            <IconChevronUp size={18} color="#0052CC" />
          </Flex>
        ) : (
          <Flex className={style.seeMore} onClick={() => handleClickSeeMore()}>
            <Text>Xem thêm đánh giá</Text>
            <IconChevronDown size={18} color="#0052CC" />
          </Flex>
        )}
      </Box>
    </div>
  );
};

export default Reviews;

type ReviewProps = {
  dataItem: TblItem | null;
  dataReview: TblUserReview[] | null;
};
