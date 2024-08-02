import { TblItem } from "@/model/ProductList";
import { AspectRatio, Flex } from "@mantine/core";
import React from "react";

const VideoYoutube = ({ data }: VideoYoutubeProps) => {
  function convertToEmbedLink(watchLink: string | null | undefined) {
    // Kiểm tra xem liên kết đã được cung cấp không
    if (!watchLink) {
      return "";
    }

    // Kiểm tra xem liên kết có chứa "watch?v=" không
    let videoId;
    const watchIndex = watchLink.indexOf("watch?v=");
    if (watchIndex !== -1) {
      // Nếu có "watch?v=", lấy ID video từ liên kết
      videoId = watchLink.slice(watchIndex + 8); // 8 là độ dài của chuỗi "watch?v="
    } else {
      // Nếu không có "watch?v=", kiểm tra xem liên kết có dạng "youtu.be/" không
      const idIndex = watchLink.indexOf("youtu.be/");
      if (idIndex !== -1) {
        // Nếu có "youtu.be/", lấy ID video từ liên kết
        videoId = watchLink.slice(idIndex + 9); // 9 là độ dài của chuỗi "youtu.be/"
      } else {
        // Nếu không tìm thấy "watch?v=" hoặc "youtu.be/", liên kết đã được chuyển đổi
        return watchLink;
      }
    }

    // Tạo liên kết embed từ ID video
    const embedLink = `https://www.youtube.com/embed/${videoId}`;
    return embedLink;
  }

  return (
    <div>
      {data?.tblItemYoutubeModels &&
        (data?.tblItemYoutubeModels.length > 1 ? (
          <Flex gap={10} mb={30}>
            <AspectRatio ratio={16 / 9} w={"75%"}>
              <iframe
                // src={data?.tblItemYoutubeModels[0].linkYoutube || ""}
                src={
                  convertToEmbedLink(
                    data?.tblItemYoutubeModels[0].linkYoutube
                  ) || ""
                }
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Flex direction={"column"} w={"25%"}>
              {data?.tblItemYoutubeModels.slice(1, 5).map((item, index) => (
                <AspectRatio
                  ratio={16 / 9}
                  mb={10}
                  w={"100%"}
                  h={`calc(25% - 10px)`}
                  key={index}
                >
                  <iframe
                    key={index}
                    // src={item?.linkYoutube || ""}
                    src={convertToEmbedLink(item?.linkYoutube) || ""}
                    title="YouTube video player"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              ))}
            </Flex>
          </Flex>
        ) : data?.tblItemYoutubeModels.length === 1 ? (
          <AspectRatio ratio={16 / 9} mb={30}>
            <iframe
              src={
                convertToEmbedLink(data?.tblItemYoutubeModels[0].linkYoutube) ||
                ""
              }
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        ) : null)}

      {/* {data?.tblItemYoutubeModels && (
        <AspectRatio ratio={16 / 9} mb={30}>
          <iframe
            src="https://www.youtube.com/embed/dA5pILkH4Cg"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      )} */}
    </div>
  );
};

export default VideoYoutube;

type VideoYoutubeProps = {
  data: TblItem | null;
};
