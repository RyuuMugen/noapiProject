"use client";
import { LoadingOverlay, Skeleton } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import Loader from "@/common/Loader";
export default function Loading() {
  // nprogress.start();
  return (
    <>
      {/* <LoadingOverlay
        visible={true}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "pink", type: "bars" }}
      /> */}
      <NavigationProgress />
      {/* <Skeleton height={50} circle mb="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" /> */}
      <Loader />
    </>
  );
}
