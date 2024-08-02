import BuildPcHacom from "@/feature/buildpc/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Build PC Page",
  description: "Build PC Page",
};
const BuildPc = () => {
  return (
    <div>
      <BuildPcHacom></BuildPcHacom>
    </div>
  );
};

export default BuildPc;
