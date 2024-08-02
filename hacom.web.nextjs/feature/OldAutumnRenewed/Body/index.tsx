"use client";
import React, { useRef, useState, useEffect } from "react";
import Search from "./Search";
import { Flex, Text } from "@mantine/core";
import BodyItem from "./BodyItem";
import Form from "./Form";
import { tblCategoryChild } from "@/model/TblTradeIn";
import { getListParent } from "@/api/apiTradeIn";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import style from "./body.module.scss";
import { postLoggingAction } from "@/api/apiLogging";

export default function BodyPage() {
  const params = useSearchParams();
  const search = params.get("type");
  const [idActive, setIdActive] = useState(0);
  const [buttonActive, setButtonActive] = useState(0);
  const [valueActive, setValueActive] = useState(3019);
  const [valueSearch, setValueSearch] = useState("");
  const [valueCategoryChild, setValueCategoryChild] = useState(0);

  const [dataCategoryChild, setDataCategoryChild] = useState<
    tblCategoryChild[]
  >([]);
  const containerRef = useRef(null);

  const dataTopic = [
    { id: 3019, name: "Laptop", param: "laptop" },
    { id: 3023, name: "Màn hình", param: "man-hinh" },
    { id: 3029, name: "CPU", param: "cpu" },
    { id: 3017, name: "VGA", param: "vga" },
  ];

  const handleChangeTopic = (idChild: number) => {
    setIdActive(idChild);
    setValueActive(idChild);
    setValueSearch("");
  };
  const handleChangeValue = (type: number) => {
    setButtonActive(type);
    setValueCategoryChild(type);
    setValueSearch("");
  };

  useEffect(() => {
    if (search === null) {
      setValueActive(3019);
    } else {
      const matchedTopic = dataTopic.find((topic) => topic.param === search);
      if (matchedTopic) {
        setValueActive(matchedTopic.id);
        setIdActive(matchedTopic.id);
      }
    }
  }, [search]);

  useEffect(() => {
    const fetchDataCategoryChild = async () => {
      const data = await getListParent(`Id=${valueActive}`);
      setDataCategoryChild(data.data);
      setValueCategoryChild(data.data[0].id);
    };
    fetchDataCategoryChild();
  }, [valueActive]);

  useEffect(() => {
    postLoggingAction({
      userName: localStorage.getItem("userName") || "",
      actionType: "HomePageClickedLink",
      actionDetail: window.location.href,
    });
  }, []);

  return (
    <div>
      <div className={style.option}>
        <p className={style.title}>Sản phẩm của bạn là:</p>
        <div className={style.tablist}>
          <Flex className={style.topicWrap}>
            {dataTopic.map((topic, index) => (
              <Flex
                key={index}
                align={"center"}
                justify={"center"}
                className={`${style.topic} ${
                  idActive == topic.id && style.topicActive
                }`}
                onClick={() => handleChangeTopic(topic.id)}
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
                  buttonActive == type.id && style.buttonActive
                }`}
                onClick={() => handleChangeValue(type.id)}
              >
                <Text>{type.categoryName}</Text>
              </button>
            ))}
          </div>
          <div className={style.itemlist}>
            <BodyItem value={valueCategoryChild} search={valueSearch} />
          </div>
          <div className={style.form}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
