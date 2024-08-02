import AppContainer from "@/common/AppContainer";
import NewCategory from "@/feature/NewsCategory";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Danh mục tin tức",
  description: "Danh mục tin tức",
};

const NewsCategoryPage = () => {
  return (
    <main className={roboto.className}>
      <AppContainer>  
        <NewCategory />
      </AppContainer>
    </main>
  );
};
export default NewsCategoryPage;
