"use client";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  nprogress.start();
  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    // console.log(url);
    router.push(url);
    return nprogress.complete();
  }, [pathname, searchParams]);

  return <NavigationProgress />;
}
