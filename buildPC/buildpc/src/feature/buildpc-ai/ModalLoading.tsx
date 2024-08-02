import React from "react";
import { Loader, Text } from "@mantine/core";
import LoadingImage from "@/assets/loading.jpg";
import Image from "next/image";

interface LoadingModalProps {
  opened: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = () => {
  return (
    <div>
      <Image src={LoadingImage} alt="ảnh loading"></Image>
    </div>
  );
};

export default LoadingModal;
