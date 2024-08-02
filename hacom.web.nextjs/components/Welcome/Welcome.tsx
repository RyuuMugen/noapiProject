"use client";
import { Title, Text, Anchor } from "@mantine/core";
import classes from "./Welcome.module.css";
import { useRouter } from "next/navigation";

export function Welcome() {
  const router = useRouter();
  const handleGoToHome = () => {
    router.push("home");
  };

  return (
    <>
      <Title
        onClick={handleGoToHome}
        className={classes.title}
        ta="center"
        mt={100}
      >
        {"Chuyển tới "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          trang Home
        </Text>
      </Title>
    </>
  );
}
