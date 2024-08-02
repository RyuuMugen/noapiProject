import React, { useRef, useState, useEffect } from "react";
import { Flex, Text } from "@mantine/core";
import Search from "./Search";
import style from "./step3.module.scss";
import { getListParent } from "@/api/apiTradeIn";
import { tblCategoryChild } from "@/model/TblTradeIn";
import BodyItem from "./BodyItem";
interface Step3Props {
  nextStep: () => void;
  totalPrice: number;
  newPrice: number;
  setNewPrice: React.Dispatch<React.SetStateAction<number>>;
  setItemUpgradeId: React.Dispatch<React.SetStateAction<number>>;
  setItemUpgradeCode: React.Dispatch<React.SetStateAction<string>>;
}
const Step3: React.FC<Step3Props> = ({
  nextStep,
  totalPrice,
  newPrice,
  setNewPrice,
  setItemUpgradeId,
  setItemUpgradeCode,
}) => {
  const [idActive, setIdActive] = useState(0);
  const [valueActive, setValueActive] = useState(3019);
  const [buttonActive, setButtonActive] = useState(0);
  const [valueSearch, setValueSearch] = useState("");
  const [dataCategoryChild, setDataCategoryChild] = useState<
    tblCategoryChild[]
  >([]);
  const [valueCategoryChild, setValueCategoryChild] = useState(0);
  const dataTopic = [
    { id: 3019, name: "Laptop" },
    { id: 3023, name: "Màn hình" },
    { id: 3029, name: "CPU" },
    { id: 3017, name: "VGA" },
  ];
  const handleChangeTopic = (index: number, value: string, idChild: number) => {
    setIdActive(index);
    setValueActive(idChild);
    setValueSearch("");
  };

  const handleChangeValue = (index: number, type: number) => {
    setButtonActive(index);
    setValueCategoryChild(type);
    setValueSearch("");
  };

  useEffect(() => {
    const fetchDataCategoryChild = async () => {
      const data = await getListParent(`Id=${valueActive}`);
      setDataCategoryChild(data.data);
      setValueCategoryChild(data.data[0].id);
    };
    fetchDataCategoryChild();
  }, [valueActive]);

  return (
    <div>
      <div className={style.option}>
        <p className={style.title}>Chọn sản phẩm lên đời</p>
        <div className={style.tablist}>
          <div className={style.ligroup}>
            <li>
              Bảng giá mang tính chất tham khảo, có thể thay đổi theo màu sắc.
            </li>
            <li>
              Mức trợ giá không áp dụng với toàn bộ sản phẩm thu vào, Quý Khách
              vui lòng đem máy tới cửa hàng để được định giá và bán lại - lên
              đời với giá tốt nhất.
            </li>
          </div>
          <Flex className={style.topicWrap}>
            {dataTopic.map((topic, index) => (
              <Flex
                key={index}
                align={"center"}
                justify={"center"}
                className={`${style.topic} ${
                  idActive == index && style.topicActive
                }`}
                onClick={() => handleChangeTopic(index, topic.name, topic.id)}
              >
                <Text>{topic.name}</Text>
              </Flex>
            ))}
          </Flex>
          <div className={style.search}>
            <Search setValueSearch={setValueSearch} />
          </div>
          <div className={style.content}>
            {dataCategoryChild.map((type, index) => (
              <button
                key={index}
                className={`${style.button} ${
                  buttonActive == index && style.buttonActive
                }`}
                onClick={() => handleChangeValue(index, type.id)}
              >
                <Text>{type.categoryName}</Text>
              </button>
            ))}
          </div>
          <div className={style.itemlist}>
            <BodyItem
              tabvalue={valueCategoryChild}
              search={valueSearch}
              nextStep={nextStep}
              totalPrice={totalPrice}
              newPrice={newPrice}
              setNewPrice={setNewPrice}
              setItemUpgradeCode={setItemUpgradeCode}
              setItemUpgradeId={setItemUpgradeId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
