"use client";
import topBanner from "@/assets/carousel/carousel1.jpg";
import topBanner2 from "@/assets/carousel/carousel2.jpg";
import topBanner3 from "@/assets/carousel/carousel3.jpg";
import topBanner4 from "@/assets/carousel/carousel4.jpg";
import topBanner5 from "@/assets/carousel/carousel5.jpg";
import topBanner6 from "@/assets/carousel/carousel6.jpg";
import contentimg1 from "@/assets/content1.jpg";
import contentimg2 from "@/assets/content2.jpg";
import contentimg3 from "@/assets/content3.jpg";
import contentimg4 from "@/assets/content4.jpg";
import { Carousel } from "@mantine/carousel";
import { Button, Flex, Text } from "@mantine/core";
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
    <>
      <div className={style.carouselTop}>
        <Carousel
          slideSize={isMobile ? "50%" : isTablet ? "33%" : "25%"}
          slideGap="10"
          loop
          align="start"
          withControls
          controlSize={50}
          // plugins={[autoplay.current]}
          // onMouseEnter={autoplay.current.stop}
          // onMouseLeave={autoplay.current.reset}
        >
          {dataBanner.map((item, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={item}
                alt="Build PC"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "400px",
                }}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <div
        className={
          showMore ? `${style.showMoreContainer}` : `${style.contentContainer}`
        }
      >
        <div className={style.header}>
          <Text fw={700} size="xl">
            Hướng dẫn build PC - Xây dựng cấu hình máy tính PC dễ dàng nhất
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
            trình xây dựng PC. Bạn có thể tham khảo các lời khuyên dưới đây để
            có cái nhìn tổng quan trước khi bắt đầu xây dựng máy tính của mình.
          </Text>
        </div>
        <div className={style.step1}>
          <Text size="lg" fw={700}>
            1. Lên kế hoạch và chọn linh kiện để build PC
          </Text>
          <Text>
            Để bắt đầu xây dựng PC, việc đầu tiên bạn cần làm là xác định ngân
            sách của mình. Với sự đa dạng về giá cả trong việc xây dựng PC, cùng
            một mục đích sử dụng như làm đồ họa cũng có thể có các cấu hình với
            giá khác nhau. Do đó, quan trọng để bạn biết rõ ngân sách tối đa mà
            bạn có thể dành cho việc này, tránh việc tốn thời gian tìm kiếm các
            cấu hình quá nhiều so với khả năng chi trả của bạn.
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
          <Text size="md">
            Bên cạnh đó, việc xác định mục đích sử dụng PC cũng là một yếu tố
            quan trọng. Mỗi mục đích sử dụng sẽ đòi hỏi một cấu hình tối ưu khác
            nhau. Xác định rõ liệu bạn đang cần PC cho công việc văn phòng, chơi
            game, đồ họa, hay có thể cả hai mục đích, sẽ giúp bạn xây dựng một
            PC có hiệu suất tối ưu trong khung ngân sách của mình. Đương nhiên,
            nếu bạn không quan trọng đến giá cả và muốn xây dựng một PC hoàn hảo
            với các linh kiện cao cấp nhất, thì điều này không được đề cập ở
            đây.
          </Text>
          <Text size="md">
            Các thành phần cơ bản cần thiết cho một bộ PC bao gồm: bộ vi xử lý
            (CPU), bo mạch chủ (mainboard), bộ nhớ RAM, ổ cứng (SSD/HDD), card
            đồ họa (VGA), nguồn điện (PSU), Case máy tính và màn hình máy tính.
          </Text>
        </div>
        <div className={style.step2}>
          <Text size="lg" fw={700}>
            2. Chuẩn bị công cụ để lắp ráp các phụ kiện PC
          </Text>
          <Text size="md">
            Nếu bạn đam mê công nghệ và thích khám phá, tự lắp ráp máy tính sẽ
            mang lại trải nghiệm vô cùng tuyệt vời. Đảm bảo rằng bạn đã chuẩn bị
            các công cụ cần thiết như: tua vít, kẹp cái, băng dính điện và một
            bộ đèn pin. Quan trọng hơn, bạn cần có kiến thức cơ bản về máy tính
            để đảm bảo an toàn trong quá trình lắp ráp, tránh nguy cơ cháy nổ do
            cắm sai nguồn điện hoặc làm hỏng linh kiện.
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
          <Text size="md">
            Một cách khác để thỏa mãn đam mê lắp ráp máy tính là đến trực tiếp
            showroom nơi bạn mua máy. Tại đây, bạn có thể quan sát kỹ thuật viên
            lắp ráp máy và họ sẽ sẵn lòng chia sẻ thông tin về các bước lắp đặt
            và những điều cần lưu ý. Thậm chí, bạn có thể tự tay lắp ráp dưới sự
            hướng dẫn của kỹ thuật viên. Nếu không tự tin, bạn nên để các chuyên
            gia lắp ráp và chỉ cần quan sát quá trình để học hỏi, điều này sẽ
            đảm bảo an toàn và hiệu quả nhất.
          </Text>
        </div>
        <div className={style.step3}>
          <Text size="lg" fw={700}>
            3. Hướng dẫn tự build PC cơ bản
          </Text>
          <Text size="md">
            Trước khi bắt đầu lắp ráp các linh kiện, hãy kiểm tra một lần nữa
            tính tương thích giữa chúng. Điều này rất quan trọng để tránh gặp
            phải các vấn đề như kẹt RAM, kẹt tản nhiệt, hoặc card đồ họa không
            vừa. Đảm bảo rằng tất cả các linh kiện tương thích sẽ giúp PC của
            bạn hoạt động tối ưu.
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

          <Text size="md" fw={600}>
            Bước 1: Đọc kỹ hướng dẫn lắp ráp đi kèm với từng linh kiện.
          </Text>

          <Text size="md" fw={600}>
            Bước 2: Bắt đầu lắp ráp
          </Text>
          <ul>
            <li>Gắn CPU lên bo mạch chủ.</li>
            <li>Lắp RAM vào khe cắm RAM.</li>
            <li>Cài đặt card đồ họa và các linh kiện khác theo thứ tự.</li>
          </ul>

          <Text size="md" fw={600}>
            Bước 3: Kết nối các dây cáp.
          </Text>

          <Text size="md" fw={600}>
            Bước 4: Kết nối các cáp điện
          </Text>
          <ul>
            <li>
              Kết nối cáp từ nguồn điện đến bo mạch chủ, card đồ họa và các ổ
              cứng.
            </li>
          </ul>

          <Text size="md" fw={600}>
            Bước 5: Kết nối cáp nguồn và dữ liệu cho các thiết bị lưu trữ.
          </Text>

          <Text size="md" fw={600}>
            Bước 6: Kiểm tra và khởi động
          </Text>
          <ul>
            <li>
              Kiểm tra lại xem tất cả các kết nối đã được thực hiện chính xác và
              chắc chắn.
            </li>
          </ul>

          <Text size="md" fw={600}>
            Bước 7: Kiểm tra hoạt động
          </Text>
          <ul>
            <li>Kết nối màn hình, bàn phím, chuột và nguồn điện.</li>
            <li>
              Bật nguồn và kiểm tra xem máy tính có hoạt động như mong đợi
              không.
            </li>
          </ul>
        </div>
        <div className={style.step4}>
          <Text size="lg" fw={700}>
            4. Chuẩn bị công cụ để lắp ráp các phụ kiện PC
          </Text>
          <Text size="md">
            Khi xây dựng cấu hình máy tính, chúng ta thường phải đối mặt với
            nhiều vấn đề và đưa ra các quyết định ưu tiên, bởi vì linh kiện máy
            tính rất đa dạng trong khi ngân sách thì có hạn. Dưới đây là một số
            lưu ý giúp bạn đi đúng hướng khi build PC.
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
            Trước hết, xác định rõ ngân sách và nhu cầu của bản thân để xây dựng
            cấu hình máy tính tối ưu về hiệu năng trên giá thành. Đừng chạy theo
            xu hướng bên ngoài, vì điều đó có thể dẫn đến việc bộ PC của bạn
            không được tối ưu. Bạn càng xác định rõ nhu cầu của mình, bộ PC của
            bạn sẽ càng được tối ưu. Hãy đặt ra các câu hỏi về mục đích sử dụng
            và trả lời chúng, từ đó bạn sẽ biết mình cần gì.
          </Text>
          <Text size="md">
            Tiếp theo, chú ý đến chính sách bảo hành của linh kiện. Vì là đồ
            công nghệ nên chính sách bảo hành rất quan trọng. Hiểu rõ về chính
            sách này sẽ giúp bạn tiết kiệm thời gian và tiền bạc khi máy tính
            gặp sự cố.
          </Text>
          <Text size="md">
            Tóm lại, xây dựng cấu hình máy tính là một trải nghiệm bạn nên thử.
            Việc tự tay mày mò, tìm hiểu thông tin và đọc hiểu các tài liệu sẽ
            giúp bạn hiểu rõ hơn về công cụ mà bạn sử dụng hàng ngày. Tuy nhiên,
            nếu bạn không tự tin trong việc build PC tối ưu về hiệu năng và giá
            thành, hãy tìm đến một đơn vị uy tín. Họ sẽ giúp bạn thực hiện điều
            này. Chúc bạn build được bộ PC ưng ý, tối ưu cả về hiệu năng và giá
            thành.
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
    </>
  );
}

export default Content;
