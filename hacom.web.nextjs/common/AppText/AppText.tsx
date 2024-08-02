import { Text } from "@mantine/core";
import React, { ReactNode } from "react";

interface AppTextProps {
  textSize: string;
  textWeight: number;
  textColor?: string;
  textHeight: string;
  children: ReactNode;
}

const AppText: React.FC<AppTextProps> = ({
  textSize,
  textWeight,
  textColor = "#1F2123",
  textHeight,
  children,
}) => {
  return (
    <div>
      <Text
        ff="Roboto"
        size={textSize}
        fw={textWeight}
        color={textColor}
        lh={textHeight}
      >
        {children}
      </Text>
    </div>
  );
};

export default AppText;
