import banner1 from "@/assets/bannerCard_1.png";
import banner10 from "@/assets/bannerCard_10.png";
import banner11 from "@/assets/bannerCard_11.png";
import banner12 from "@/assets/bannerCard_12.png";
import banner2 from "@/assets/bannerCard_2.png";
import banner3 from "@/assets/bannerCard_3.png";
import banner4 from "@/assets/bannerCard_4.png";
import banner5 from "@/assets/bannerCard_5.png";
import banner6 from "@/assets/bannerCard_6.png";
import banner7 from "@/assets/bannerCard_7.png";
import banner8 from "@/assets/bannerCard_8.png";
import banner9 from "@/assets/bannerCard_9.png";
import Banner from "@/common/Banner";
import HomeAccessory from "@/feature/Home/HomeAccessory";
import HomeCategory from "@/feature/Home/HomeCategory";
import HomeCollection from "@/feature/Home/HomeCollection";
import HomeFlashSale from "@/feature/Home/HomeFlashSale";
import HomeFooterCustomer from "@/feature/Home/HomeFooterCustomer";
import HomeFooterIconCard from "@/feature/Home/HomeFooterIconCards";
import HomeFurniture from "@/feature/Home/HomeFurniture";
import HomeIntro from "@/feature/Home/HomeIntro";
import HomeLaptop from "@/feature/Home/HomeLaptop";
import HomeMic from "@/feature/Home/HomeMic";
import HomeMouse from "@/feature/Home/HomeMouse";
import HomeNews from "@/feature/Home/HomeNews";
import HomePC from "@/feature/Home/HomePC";
import HomePlaystation from "@/feature/Home/HomePlaystation";
import HomeCardCarousel from "@/feature/Home/HomeProductCarousel";
import HomeRecommend from "@/feature/Home/HomeRecommend";
import HomeScreen from "@/feature/Home/HomeScreen";
import HomeStyleAndLifestyle from "@/feature/Home/HomeStyleAndLifestyle";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page",
};

const HomePage = () => {
  const bannerImgs = [banner1, banner2, banner3];
  const bannerImgs2 = [banner4, banner5, banner6];
  const bannerImgs3 = [banner7, banner8, banner9];
  const bannerImgs4 = [banner10, banner11, banner12];

  return (
    <div>
      {/* <HomeContacts /> */}
      <Suspense fallback={<p>Loading feed...</p>}>
        <HomeIntro />
      </Suspense>
      <HomeFlashSale />
      <HomeCardCarousel />
      <HomeRecommend />
      <HomeCategory />
      {/* <Banner bannerImgs={bannerImgs2} />
      <HomeLiquidationBooth /> */}
      <Banner bannerImgs={bannerImgs4} />
      <HomeStyleAndLifestyle />
      {/* <Banner bannerImgs={bannerImgs2} /> */}
      <HomeLaptop />
      <Banner bannerImgs={bannerImgs3} />
      <HomePC />
      <Banner bannerImgs={bannerImgs} />
      <HomeScreen />
      <Banner bannerImgs={bannerImgs2} />
      {/* <HomeCollection /> */}
      {/* <Banner bannerImgs={bannerImgs3} /> */}
      <HomeAccessory />
      <Banner bannerImgs={bannerImgs4} />
      <HomeFurniture />
      <Banner bannerImgs={bannerImgs2} />
      <HomeMouse />
      <Banner bannerImgs={bannerImgs3} />
      <HomeMic />
      <Banner bannerImgs={bannerImgs} />
      <HomePlaystation />
      <HomeFooterIconCard />
      <HomeFooterCustomer />
      <HomeNews />
    </div>
  );
};

export default HomePage;
