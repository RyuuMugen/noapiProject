import { TblItem } from "@/model/ProductList";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";

type ImageGroupProps = {
  data: TblItem | null;
};

const ImageGroup = ({ data }: ImageGroupProps) => {
  const OPTIONS: EmblaOptionsType = {};
  return (
    <div>
      <EmblaCarousel
        data={data}
        slides={data?.tblItemImageModels || []}
        options={OPTIONS}
      />
    </div>
  );
};

export default ImageGroup;
