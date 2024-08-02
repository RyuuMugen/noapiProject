"use client";
import ListButtonSection from "@/common/ListButtonSection";
import TitleSection from "@/common/TitleSection";
import style from "./HeaderSection.module.scss";
type button = {
  label: string;
  value: string;
};
type HeaderSection = {
  title: string;
  listButton?: button[];
};

const HeaderSection = ({ title, listButton }: HeaderSection) => {
  return (
    <>
      <div className={style.headerSection}>
        <TitleSection title={title} />
        <ListButtonSection listButton={listButton} />
      </div>
    </>
  );
};

export default HeaderSection;
