"use client";
import React, { useState } from "react";

import HomeSectionProduct from "@/feature/ProductCategory/Product";

const ProductCategory: React.FC<{ type: string; page: number }> = ({
  type,
  page,
}) => {
  return (
    <div>
      <HomeSectionProduct page={page} type={type} />
    </div>
  );
};

export default ProductCategory;
