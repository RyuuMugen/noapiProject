"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import style from "./Comments.module.scss";
import UserComment from "@/common/UserComment";
import ReplyComment from "@/common/ReplyComment";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import {
  createUserComment,
  createUserCommentReply,
  getDataUserCommentDetail,
} from "@/api/apiUserComment";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { TblUserComment } from "@/model/TblUserComment";
import { modals } from "@mantine/modals";
import FormInfoUser from "./FormInfoUser";
import { useAuthContext } from "@/useContext/useAuthContext";
import { TblItem } from "@/model/ProductList";
import { Console } from "console";

const Comments = ({ dataItem, dataComment }: CommentsProps) => {
  const { userInfo } = useAuthContext();
  const [seeMore, setSeeMore] = useState(false);
  const [inputComment, setInputComment] = useState("");
  const [inputReply, setInputReply] = useState("");
  const [isNull, setIsNull] = useState(false);
  const [nullNotificationd, setNullNotificationd] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [isReply, setIsReply] = useState<{
    index: number;
    idComment: number;
  }>();
  // const [data, setData] = useState<TblUserComment[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSendComment = () => {
    if (!inputComment) {
      setIsNull(true);
      setNullNotificationd("x Vui lòng nhập bình luận.");
    } else {
      modals.openConfirmModal({
        modalId: "FormInfoUser",
        title: (
          <>
            <Title order={5}>Nhập thông tin</Title>
          </>
        ),
        centered: true,
        children: (
          <FormInfoUser
            data={userInfo?.data || []}
            handleSubmitComment={handleSubmitComment}
          />
        ),
        confirmProps: { display: "none" },
        cancelProps: { display: "none" },
      });
    }
  };

  const handleSendReply = () => {
    if (!inputReply) {
      setIsNull(true);
      setNullNotificationd("x Vui lòng nhập bình luận.");
    } else {
      modals.openConfirmModal({
        modalId: "FormInfoUser",
        title: (
          <>
            <Title order={5}>Nhập thông tin</Title>
          </>
        ),
        centered: true,
        children: (
          <FormInfoUser
            data={userInfo?.data || []}
            handleSubmitCommentReply={handleSubmitCommentReply}
          />
        ),
        confirmProps: { display: "none" },
        cancelProps: { display: "none" },
      });
    }
  };

  const handleSubmitComment = async (dataSummit: {
    userName: string;
    userEmail: string;
  }) => {
    const data = {
      id: 0,
      itemType: "product",
      replyCount: null,
      itemId: dataItem?.id,
      itemTitle: dataItem?.itemName,
      isUserAdmin: null,
      userId: null,
      userEmail: dataSummit.userEmail,
      userName: dataSummit.userName,
      relatedOrder: null,
      userAvatar: null,
      userNote: null,
      rate: null,
      title: null,
      content: inputComment,
      files: null,
      searchFulltext: null,
      approved: "0",
      postTime: null,
      ipAddress: null,
      userAgent: null,
      orderNumber: null,
      isFeatured: null,
      peopleIdVote: null,
      peopleLikeCount: null,
      peopleDislikeCount: null,
      priorStatus: null,
      status: null,
      creationDate: null,
      createdBy: null,
      lastUpdateDate: null,
      lastUpdateBy: null,
    };

    await createUserComment(data);
    setInputComment("");
    setNullNotificationd("");
    modals.close("FormInfoUser");
  };

  const handleSubmitCommentReply = async (dataSummit: {
    userName: string;
    userEmail: string;
  }) => {
    const data = {
      id: 0,
      commentId: isReply?.idComment,
      isUserAdmin: null,
      userId: null,
      userEmail: dataSummit.userEmail,
      userName: dataSummit.userName,
      userAvatar: null,
      userNote: null,
      rate: null,
      title: null,
      content: inputReply,
      files: null,
      approved: null,
      postTime: null,
      ipAddress: null,
      orderNumber: null,
      isFeatured: null,
      peopleIdVote: null,
      peopleLikeCount: null,
      peopleDislikeCount: null,
      creationDate: null,
      createdBy: null,
      lastUpdateDate: null,
      lastUpdateBy: null,
    };

    await createUserCommentReply(data);
    setInputReply("");
    setIsReply(undefined);
    setNullNotificationd("");
    modals.close("FormInfoUser");
    // fetchDataComment();
  };

  const handleAddReply = (index: number, idComment: number) => {
    if (index === isReply?.index) {
      setIsReply(undefined);
    } else setIsReply({ index: index, idComment: idComment });
  };

  const handleClickSeeMore = () => {
    setPageSize(pageSize + 10);
  };
  return (
    <div className={style.main}>
      <Box className={style.title}>
        <Text>Bình luận</Text>
      </Box>
      <Box>
        <Box className={style.submitComment}>
          <Textarea
            variant="unstyled"
            placeholder="Nhập bình luận của bạn..."
            value={inputComment}
            onChange={(event) => setInputComment(event.currentTarget.value)}
          />
          {isNull && inputComment === "" && (
            <p className={style.notificationd}>{nullNotificationd}</p>
          )}
          <Button
            className={style.button}
            radius="md"
            onClick={handleSendComment}
          >
            Gửi bình luận
          </Button>
        </Box>
      </Box>
      {dataComment && dataComment?.length > 0 && (
        <Box className={`${style.commentWrap} ${seeMore && style.expand} `}>
          {dataComment?.slice(0, pageSize).map((item, index) => (
            <Box key={index} className={style.comment}>
              <UserComment
                data={item}
                handleAddReply={() => handleAddReply(index, item.id)}
              />
              {item?.tblUserCommentReplyModels && (
                <ReplyComment data={item?.tblUserCommentReplyModels} />
              )}
              {isReply?.index === index && (
                <Box className={style.replyComment}>
                  <Textarea
                    variant="unstyled"
                    placeholder="Nhập bình luận của bạn..."
                    value={inputReply}
                    onChange={(event) =>
                      setInputReply(event.currentTarget.value)
                    }
                  />
                  {isNull && inputReply === "" && (
                    <p className={style.notificationd}> {nullNotificationd}</p>
                  )}
                  <Button
                    className={style.button}
                    radius="md"
                    onClick={handleSendReply}
                  >
                    Gửi bình luận
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}

      {!dataComment ? (
        <div></div>
      ) : pageSize === 5 && dataComment && pageSize > dataComment?.length ? (
        <div></div>
      ) : dataComment && pageSize >= dataComment?.length ? (
        <Flex className={style.seeMore} onClick={() => setPageSize(5)}>
          <Text>Ẩn bớt</Text>
          <IconChevronUp size={18} color="#0052CC" />
        </Flex>
      ) : (
        <Flex className={style.seeMore} onClick={() => handleClickSeeMore()}>
          <Text>Xem thêm</Text>
          <IconChevronDown size={18} color="#0052CC" />
        </Flex>
      )}
    </div>
  );
};

export default Comments;

type CommentsProps = {
  dataItem: TblItem | null;
  dataComment: TblUserComment[] | null;
};
