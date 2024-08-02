import AppContainer from "@/common/AppContainer";
import ProductQuote from "@/feature/ProductQuote/ProductQuote";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Suspense } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Product Quote",
  description: "Product Quote",
};

const ProductQuotePage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const type = searchParams.type as string | undefined;
  const download = searchParams.download as string | undefined;

  return (
    <div className={roboto.className}>
      <Suspense fallback={<p>Loading feed...</p>}>
        <AppContainer>
          <div style={{ width: "70%", margin: "auto" }}>
            <ProductQuote type={type} download={download} />
          </div>
        </AppContainer>
      </Suspense>
    </div>
  );
};

export default ProductQuotePage;
