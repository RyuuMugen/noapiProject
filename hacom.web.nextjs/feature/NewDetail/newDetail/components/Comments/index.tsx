"use client";
import {
  createUserComment,
  createUserCommentReply,
} from "@/api/apiUserComment";
import ReplyComment from "@/common/ReplyComment";
import UserComment from "@/common/UserComment";
import { TblUserComment } from "@/model/TblUserComment";
import { Box, Button, Flex, Text, TextInput, Textarea } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import style from "./Comments.module.scss";
import { DataArticle } from "@/model/DataArticle";
import { useAuthContext } from "@/useContext/useAuthContext";

const Comments = ({ dataItem, dataComment }: CommentsProps) => {
  const { userInfo } = useAuthContext();
  const [seeMore, setSeeMore] = useState(false);
  const [inputComment, setInputComment] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputReply, setInputReply] = useState("");
  const [isNull, setIsNull] = useState(false);
  const [nullNotificationd, setNullNotificationd] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [isReply, setIsReply] = useState<{
    index: number;
    idComment: number;
  }>();

  const handleSubmitComment = async () => {
    // Kiểm tra xem các trường đã được điền đầy đủ chưa
    if (!inputUserEmail || !inputUserName || !inputComment) {
      setIsNull(true);
      setNullNotificationd(
        "x Vui lòng điền đầy đủ thông tin trước khi gửi bình luận."
      );
    } else {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputUserEmail);
      if (isValidEmail) {
        const data = {
          id: 0,
          itemType: "article",
          replyCount: null,
          itemId: dataItem?.id,
          itemTitle: dataItem?.title,
          isUserAdmin: null,
          userId: null,
          userEmail: inputUserEmail,
          userName: inputUserName,
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
        setInputUserName("");
        setInputUserEmail("");
      } else {
        setNullNotificationd("x Email không hợp lệ");
      }
    }
  };

  const handleSubmitCommentReply = async () => {

    if (!inputUserEmail || !inputUserName || !inputReply) {
      setIsNull(true);
      setNullNotificationd(
        "x Vui lòng điền đầy đủ thông tin trước khi gửi bình luận."
      );
      return;
    } else {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputUserEmail);
      if (isValidEmail) {
        const data = {
          id: 0,
          commentId: isReply?.idComment,
          isUserAdmin: null,
          userId: null,
          userEmail: inputUserEmail,
          userName: inputUserName,
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
        setNullNotificationd("");
        setInputUserName("");
        setInputUserEmail("");
        setIsReply(undefined);
      } else {
        setNullNotificationd("x Email không hợp lệ");
      }
    }
  };

  const handleAddReply = (index: number, idComment: number) => {
    if (index === isReply?.index) {
      setIsReply(undefined);
    } else setIsReply({ index: index, idComment: idComment });
  };

  const handleClickSeeMore = () => {
    setPageSize(pageSize + 10);
  };

  useEffect(() => {
    const user = userInfo?.data;
    if (user) {
      setInputUserName(user.customerName || "");
      setInputUserEmail(user.email || "");
    }
  }, []);
  return (
    <div className={style.main}>
      <Box className={style.submitComment}>
        <Flex className={style.inputTop} gap="20px">
          <TextInput
            label="Họ và tên"
            placeholder="Họ và tên"
            mt={"md"}
            withAsterisk
            value={inputUserName}
            onChange={(event) => setInputUserName(event.currentTarget.value)}
          />

          <TextInput
            label="Email"
            placeholder="Email (Để nhận phản hồi qua mail)"
            mt={"md"}
            type="email"
            withAsterisk
            value={inputUserEmail}
            onChange={(event) => setInputUserEmail(event.currentTarget.value)}
          />
        </Flex>
        <Flex className={style.inputBottom}>
          <Textarea
            label="Bình luận"
            placeholder="Nhập bình luận của bạn..."
            withAsterisk
            value={inputComment}
            onChange={(event) => setInputComment(event.currentTarget.value)}
          />
        </Flex>

        {isNull && <p className={style.notificationd}>{nullNotificationd}</p>}
        <Button
          className={style.button}
          radius="md"
          onClick={handleSubmitComment}
        >
          Gửi bình luận
        </Button>
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
                  <Flex className={style.inputTop} gap="20px">
                    <TextInput
                      label="Họ và tên"
                      placeholder="Họ và tên"
                      mt={"md"}
                      withAsterisk
                      value={inputUserName}
                      onChange={(event) =>
                        setInputUserName(event.currentTarget.value)
                      }
                    />

                    <TextInput
                      label="Email"
                      placeholder="Email (Để nhận phản hồi qua mail)"
                      mt={"md"}
                      type="email"
                      withAsterisk
                      value={inputUserEmail}
                      onChange={(event) =>
                        setInputUserEmail(event.currentTarget.value)
                      }
                    />
                  </Flex>
                  <Flex className={style.inputBottom}>
                    <TextInput
                      label="Bình luận"
                      placeholder="Nhập bình luận của bạn..."
                      withAsterisk
                      value={inputReply}
                      onChange={(event) =>
                        setInputReply(event.currentTarget.value)
                      }
                    />
                  </Flex>

                  {isNull && (
                    <p className={style.notificationd}> {nullNotificationd}</p>
                  )}
                  <Button
                    className={style.button}
                    radius="md"
                    onClick={handleSubmitCommentReply}
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
  dataItem: DataArticle | null;
  dataComment: TblUserComment[] | null;
};
