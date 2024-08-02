"use client";
import topBanner from "@/assets/carousel/carousel1.jpg";
import topBanner2 from "@/assets/carousel/carousel2.jpg";
import topBanner3 from "@/assets/carousel/carousel3.jpg";
import topBanner4 from "@/assets/carousel/carousel4.jpg";
import topBanner5 from "@/assets/carousel/carousel5.jpg";
import topBanner6 from "@/assets/carousel/carousel6.jpg";
import contentimg1 from "@/assets/contentAI1.jpg";
import contentimg2 from "@/assets/contentAI2.jpg";
import contentimg3 from "@/assets/contentAI3.jpg";
import contentimg4 from "@/assets/contentAI4.jpg";
import { Carousel } from "@mantine/carousel";
import { Button, Container, Flex, Text } from "@mantine/core";
import Image from "next/image";
import { useContext, useState } from "react";
import style from "./contentFooter.module.scss";
import { AppContext } from "@/useContext/DeviceContext";

const dataBanner = [
  topBanner,
  topBanner2,
  topBanner3,
  topBanner4,
  topBanner5,
  topBanner6,
];

function Content() {
  const [showMore, setShowMore] = useState(false);

  const { isMobile, isTablet } = useContext(AppContext);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Container>
      <div
        className={
          showMore ? `${style.showMoreContainer}` : `${style.contentContainer}`
        }
      >
        <div className={style.header}>
          <Text fw={700} size="xl">
            Giới thiệu về lợi ích của việc xây dựng cấu hình PC bằng AI
          </Text>
          <Text size="md">
            Việc tự xây dựng máy tính - hay còn gọi là Build PC - trở thành một
            nhu cầu phổ biến trong cộng đồng người dùng máy tính. Thực tế, nó
            mang lại sự linh hoạt cho người dùng khi họ có thể tùy chỉnh máy
            tính theo nhu cầu, sở thích và ngân sách của mình. Tùy chỉnh máy
            tính không chỉ giúp người dùng thỏa mãn sở thích cá nhân mà còn mở
            ra cơ hội cho việc tạo ra các bản mod độc đáo hoặc điều chỉnh máy
            tính theo ý muốn.
          </Text>
          <Text size="md">
            Tuy nhiên, việc xây dựng một bộ máy tính đòi hỏi người dùng phải
            hiểu rõ về tính tương thích giữa các linh kiện và phải cân nhắc kỹ
            lưỡng về ngân sách để tạo ra một cấu hình phù hợp với mục đích sử
            dụng của mình, có thể là văn phòng, gaming, đồ họa hoặc AI. Nguyễn
            Công PC có hiểu được những thách thức mà bạn gặp phải trong quá
            trình xây dựng PC. Build PC bằng AI sẽ giúp bạn đơn giản hoá hầu hết
            những vấn đề ở trên.
          </Text>
        </div>
        <div className={style.step1}>
          <Text size="lg" fw={700}>
            1. Phân tích và gợi ý cấu hình tối ưu
          </Text>
          <Text>
            Việc sử dụng trí tuệ nhân tạo (AI) để xây dựng cấu hình PC theo yêu
            cầu về mức giá và loại PC mang lại nhiều lợi ích vượt trội. Đầu
            tiên, AI có khả năng xử lý và phân tích lượng dữ liệu khổng lồ về
            các linh kiện phần cứng trên thị trường. Thông qua việc phân tích
            các yếu tố như hiệu năng, giá cả và độ phổ biến, AI có thể nhanh
            chóng đề xuất những cấu hình tối ưu nhất, đảm bảo sự cân bằng giữa
            hiệu năng và chi phí. Điều này giúp người dùng tiết kiệm thời gian
            và công sức so với việc phải tự mình nghiên cứu và so sánh từng linh
            kiện một.
          </Text>
          <div className={style.imgbox}>
            <Image
              src={contentimg1}
              alt="Build PC"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className={style.step2}>
          <Text size="lg" fw={700}>
            2. Cập nhật thông tin và tiết kiệm chi phí
          </Text>
          <Text size="md">
            Thứ hai, AI có thể cập nhật liên tục thông tin về giá cả, xu hướng
            công nghệ và sự xuất hiện của các linh kiện mới. Nhờ đó, người dùng
            sẽ luôn được đề xuất những linh kiện hiện đại nhất, phù hợp nhất với
            yêu cầu sử dụng của mình mà không cần tốn thời gian tìm kiếm và so
            sánh thủ công. AI cũng có khả năng tự động nhận diện các chương
            trình khuyến mãi hoặc giảm giá, giúp người dùng tiết kiệm chi phí
            tối đa khi mua sắm linh kiện.
          </Text>
          <div className={style.imgbox}>
            <Image
              src={contentimg3}
              alt="Build PC"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className={style.step3}>
          <Text size="lg" fw={700}>
            3. Hiểu và phân loại nhu cầu sử dụng
          </Text>
          <Text size="md">
            Ngoài ra, AI còn có khả năng hiểu và phân loại nhu cầu sử dụng của
            người dùng. Chẳng hạn, AI có thể xác định chính xác nhu cầu về PC
            chơi game, PC làm việc đồ họa, hay PC văn phòng thông qua các thông
            tin đầu vào mà người dùng cung cấp. Dựa trên các tiêu chí này, AI sẽ
            đưa ra cấu hình phù hợp nhất, đảm bảo rằng từng linh kiện được chọn
            đều đáp ứng tốt nhất cho nhu cầu cụ thể của người dùng. Điều này
            không chỉ giúp nâng cao hiệu quả sử dụng mà còn mang lại trải nghiệm
            tốt nhất cho người dùng.
          </Text>
          <div className={style.imgbox}>
            <Image
              src={contentimg2}
              alt="Build PC"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className={style.step4}>
          <Text size="lg" fw={700}>
            4. Giảm thiểu rủi ro và đảm bảo hiệu năng
          </Text>
          <Text size="md">
            AI cũng giúp giảm thiểu rủi ro lựa chọn sai linh kiện không tương
            thích hoặc không tối ưu. Với khả năng phân tích chính xác, AI có thể
            đảm bảo rằng tất cả các linh kiện được đề xuất đều tương thích với
            nhau, từ bo mạch chủ, bộ xử lý, RAM, ổ cứng, đến nguồn điện và hệ
            thống làm mát. Điều này giúp hệ thống PC hoạt động ổn định, bền bỉ
            và đạt hiệu năng cao nhất. Hơn nữa, AI còn có thể đưa ra các gợi ý
            về nâng cấp trong tương lai, giúp người dùng dễ dàng mở rộng và nâng
            cấp hệ thống mà không gặp phải các vấn đề về tương thích.
          </Text>
          <div className={style.imgbox}>
            <Image
              src={contentimg4}
              alt="Build PC"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
              }}
            />
          </div>

          <Text size="md">
            Tóm lại, việc sử dụng AI trong xây dựng cấu hình PC không chỉ giúp
            tiết kiệm thời gian và chi phí, mà còn đảm bảo tính chính xác và
            hiệu quả cao. Điều này mang lại lợi ích lớn cho người dùng, từ những
            người dùng phổ thông đến các chuyên gia và game thủ, đảm bảo rằng họ
            luôn sở hữu được một hệ thống PC mạnh mẽ, phù hợp nhất với nhu cầu
            và ngân sách của mình.
          </Text>
        </div>
        {!showMore ? (
          <div className={style.overlay}>
            <Button
              variant="light"
              color="orange"
              radius={"md"}
              id="showMoreButton"
              onClick={handleShowMoreClick}
            >
              Xem thêm
            </Button>
          </div>
        ) : (
          <Flex justify={"center"} mb={20}>
            <Button
              variant="light"
              color="orange"
              radius={"md"}
              onClick={handleShowMoreClick}
            >
              Thu gọn
            </Button>
          </Flex>
        )}
      </div>
    </Container>
  );
}

export default Content;
