import { totalCartPrice } from "@/api/apiCart";
import { getCustomerInfo } from "@/api/apiCustomer";
import { getHomeSuggestSearch } from "@/api/apiHome";
import styleGLobal from "@/app/layout.module.scss";
import Logo from "@/assets/dichvutot-01-01.png";
import ButtonsCollection from "@/common/ButtonsCollection/ButtonsCollection";
import SelectBox from "@/common/SelectBox/SelectBox";
import SidebarMenu from "@/components/ContentMenu/SidebarMenu/SidebarMenu";
import SearchTrends from "@/components/Header/HearderNavbar/SearchTrends/SearchTrends";
import { isNullOrUndefined } from "@/extension/StringExtension";
import Booking from "@/feature/Booking/Booking";
import { getUserInfo } from "@/redux/slices/authSlice";
import { updateCart } from "@/redux/slices/cartSlice";
import {
  Box,
  Flex,
  Image,
  Input,
  MantineSize,
  Popover,
  Text,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import {
  IconCalendarMonth,
  IconCalendarWeek,
  IconCategoryPlus,
  IconChevronDown,
  IconDots,
  IconHome,
  IconLoader2,
  IconMapPin,
  IconMenu2,
  IconMessageCircle2Filled,
  IconPhoneFilled,
  IconSearch,
  IconSend2,
  IconShieldFilled,
  IconShoppingCartFilled,
  IconTruckDelivery,
  IconUserCircle,
  IconX,
} from "@tabler/icons-react";
import Image2 from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartHeader from "./CartHeader";
import CategoryHeader from "./CategoryHeader/CategoryHeader";
import style from "./HearderNavbar.module.scss";
import SeeMoreHeader from "./SeeMoreHeader/SeeMoreHeader";
import SuggestedList from "./SuggestedList/SuggestedList";

const HearderNavbar = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state: any) => state.auth);
  const cart = useSelector((state: any) => state.cart);
  const dataLocation = [
    { id: 1, text: "Bà Rịa - Vũng Tàu", href: "/" },
    { id: 2, text: "Bình Dương", href: "/home" },
    { id: 3, text: "Hồ Chí Minh", href: "/HoChiMinh" },
    { id: 4, text: "Hà Nội", href: "/HaNoi" },
  ];

  const dataPath = [
    {
      id: 1,
      title: "Gọi Miễn phí",
      text: "18008091",
      href: "/home",
      Icon: <IconPhoneFilled size={24} />,
    },
    {
      id: 2,
      title: "Hệ thống",
      text: "2 cửa hàng",
      href: "/store",
      Icon: <IconHome size={24} />,
    },
    {
      id: 3,
      title: "Tra cứu",
      text: "Bảo hành",
      // href: "/Guarantee",
      href: "#",
      Icon: <IconShieldFilled size={24} />,
    },
    {
      id: 4,
      title: "Tra cứu",
      text: "Đơn hàng",
      href: "/OrderCheck",
      Icon: <IconTruckDelivery size={24} />,
    },
  ];

  const outsideClickRef = useRef<HTMLDivElement>(null);
  const outsideMobileRef = useRef<HTMLDivElement>(null);
  const [handelText, setHandleText] = useState<String>("Bà Rịa - Vũng Tàu");
  const [isfocus, setIsFocus] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [coating, setCoating] = useState(false);
  const [inputSize, setInputSize] = useState<MantineSize | undefined>("xs");
  const [handelActive, setHandeActive] = useState<any>();
  const [handelSeeMore, setHandeSeeMore] = useState<any>();
  const [hiddenSideBar, setHiddenSideBar] = useState(false);

  const [valueActive, setValueActive] = useState<boolean>();
  const [seeMore, setMore] = useState(false);
  const [hiddenDrawerCategory, setHiddenDrawerCategory] = useState(false);
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);
  const [suggestData, setSuggestData] = useState<string[]>([]);
  const [openedCart, setOpenedCart] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const handleSpecificPoint = (text: string) => {
    setHandleText(text);
  };

  const openFormCalendar = () => {
    modals.openConfirmModal({
      size: "700px",
      radius: "20px",
      centered: true,
      title: "Đặt lịch bảo hành",
      children: <Booking />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
      zIndex: 1000,
      classNames: {
        header: style.headerModal,
        content: style.content,
      },
    });
  };

  const headerResponsive = [
    {
      id: 1,
      text: "Trang chủ",
      link: "/",
      icon: <IconHome size={24} />,
    },
    {
      id: 2,
      text: "Danh mục",
      link: "",
      icon: <IconCategoryPlus size={24} />,
      onClick: (e: any) => handleBox(e),
    },
    {
      id: 3,
      text: "Cửa hàng",
      link: "/store",
      icon: <IconMapPin size={24} />,
    },
    {
      id: 4,
      text: "Đặt lịch sửa",
      link: "",
      icon: <IconCalendarWeek size={24} />,
      onClick: openFormCalendar,
    },
    {
      id: 5,
      text: "Xem thêm",
      link: "",
      icon: <IconDots size={24} />,
      onClick: (e: any) => seeMoreHeader(e),
    },
  ];

  const handleBox = (e: any) => {
    setHiddenDrawerCategory(!hiddenDrawerCategory);
    if (e) {
      setMore(false);
      setValueActive(!valueActive);
      setHandeActive(e.text);
    }
  };

  const seeMoreHeader = (e: any) => {
    setMore(!seeMore);
    if (e) {
      setHiddenDrawerCategory(false);
      setValueActive(!valueActive);
      setHandeActive(e.text);
    }
  };

  const HandleSidebar = () => {
    setHiddenSideBar(!hiddenSideBar);
  };

  const handleClear = () => {
    setSearchInput("");
    setIsFocus(false);
  };

  const handleInputClick = () => {
    setIsFocus(true);
  };

  const searchInputFunction = () => (
    <>
      <Input
        value={searchInput}
        className={style.input_search}
        radius="md"
        {...(inputSize && { size: inputSize })}
        styles={{
          wrapper: { border: "none" },
          input: { border: "none", paddingRight: "55px" },
        }}
        placeholder="Bạn cần tìm gì ?"
        onChange={(e) => handleSearch(e)}
        onClick={handleInputClick}
        onKeyDown={handleKeyDown}
        leftSection={
          isTyping ? (
            <IconLoader2 className={style.rotateLoader} size={20} />
          ) : (
            <IconSearch color="#000" size={16} />
          )
        }
      />
      {searchInput.length > 0 && (
        <Flex className={style.exit_send}>
          <IconSend2 onClick={() => handleSendClick()} size={20} />
          <IconX
            className={style.close}
            onClick={() => handleClear()}
            size={20}
          />
        </Flex>
      )}
      {isfocus && (
        <>
          <Box className={style.searchHidden}>
            {searchInput.length > 0 ? (
              <>
                <SuggestedList
                  setIsFocus={setIsFocus}
                  data={suggestData}
                  handleSendClick={handleSendClick}
                />
                {/* <SuggestedProduct setIsFocus={setIsFocus} /> */}
              </>
            ) : (
              <>
                <Image
                  p={5}
                  radius="md"
                  src="https://image.dienthoaivui.com.vn/720x,webp,q/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/ddadc6377f98591df963846c2d21ae94.png"
                  alt="advertisement"
                />
                <SearchTrends setIsFocus={setIsFocus} />
              </>
            )}
          </Box>
        </>
      )}
    </>
  );

  const headerResFunction = () => (
    <>
      {headerResponsive?.map((value) => {
        const Component = value.link ? Link : Box;

        return (
          <Box
            className={`${style.header_reps_container} ${
              pathname === value.link ||
              (handelActive === value.text && valueActive) ||
              (handelActive === value.text && seeMore === true)
                ? style.active
                : null
            }`}
            key={value.id}
            onClick={(e) => {
              value.onClick?.(value);
            }}
          >
            <Component className={style.content_header} href={value.link}>
              <Box>{value.icon}</Box>
              <Text mt={5} size="xs" fw={700}>
                {value.text}
              </Text>
            </Component>
          </Box>
        );
      })}
    </>
  );

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      if (newWindowWidth <= 801) {
        setInputSize("xs");
      } else {
        setCoating(false);
        setInputSize(undefined);
      }
    };
    const timeoutId = setTimeout(handleResize, 500);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
      setIsTyping(false);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  useEffect(() => {
    if (debouncedSearchInput) {
      console.log(`Searching for: ${debouncedSearchInput}`);
    }
  }, [debouncedSearchInput]);

  useEffect(() => {
    setHiddenDrawerCategory(false);
    setValueActive(false);
    setMore(false);
    setHandeSeeMore(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle(styleGLobal.noScroll, hiddenDrawerCategory);
    document.body.classList.toggle(styleGLobal.noScroll, seeMore);

    return () => document.body.classList.remove(styleGLobal.noScroll);
  }, [hiddenDrawerCategory, seeMore]);

  const handleSearch = async (e: any) => {
    setSearchInput(e.currentTarget.value);
    const dataApi = await getHomeSuggestSearch(`?q=${e.currentTarget.value}`);

    if (dataApi && dataApi.success) {
      setSuggestData(dataApi.data);
    } else setSuggestData([]);

    setIsTyping(true);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      router.push(`/Search/${e.currentTarget.value}`);
      setSearchInput("");
      setIsFocus(false);
    }
  };

  const handleSendClick = (textSearch?: string) => {
    if (textSearch?.trim()) {
      router.push(`/Search/${textSearch}`);
      setSearchInput("");
      setIsFocus(false);
    } else if (searchInput.trim() !== "") {
      router.push(`/Search/${searchInput}`);
      setSearchInput("");
      setIsFocus(false);
    }
  };

  //xử lý sự kiện click out modal filter
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        outsideClickRef.current &&
        !outsideClickRef.current.contains(event.target as Node)
      ) {
        setIsFocus(false);
        setSearchInput("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleOutsideMobileRef = (event: MouseEvent) => {
      if (
        outsideMobileRef.current &&
        !outsideMobileRef.current.contains(event.target as Node)
      ) {
        setHiddenSideBar(false);
      }
    };
    document.addEventListener("click", handleOutsideMobileRef);

    return () => {
      document.removeEventListener("click", handleOutsideMobileRef);
    };
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const customerInfo = await getCustomerInfo();

      if (
        !isNullOrUndefined(customerInfo) &&
        !isNullOrUndefined(customerInfo?.data)
      ) {
        dispatch(getUserInfo(customerInfo));
        localStorage.setItem("userInfo", JSON.stringify(customerInfo));
        localStorage.setItem("userName", customerInfo.data.userName);
        const totalData = await totalCartPrice(customerInfo?.data?.customerId);
        const newCartHeader = {
          totalItem: totalData?.data?.quantity,
          totalPrice: totalData?.data?.totalAmount,
        };
        dispatch(updateCart(newCartHeader));
      } else {
        const userData = localStorage.getItem("userInfo");
        dispatch(getUserInfo(userData ? JSON.parse(userData) : ""));
        const id = userData ? JSON.parse(userData).data.customerId : 0;
        const totaldata = await totalCartPrice(id);
        const newCartHeader = {
          totalItem: totaldata?.data?.quantity,
          totalPrice: totaldata?.data?.totalAmount,
        };
        dispatch(updateCart(newCartHeader));
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <Box className={style.Hearder_Navbar}>
        <nav className={style.header}>
          <Link href="/" className={style.logo}>
            <Image2 src={Logo} alt="Logo" />
          </Link>
          <Flex className={style.text_box} align="center">
            <ButtonsCollection
              ref={outsideMobileRef}
              hidden
              background
              leftIcon={<IconMenu2 size={24} />}
              onClick={() => HandleSidebar()}
            >
              Danh mục
            </ButtonsCollection>

            <Box
              ref={outsideClickRef}
              className={`${style.search} ${style.hiddenSearch}`}
            >
              {searchInputFunction()}
            </Box>

            <ButtonsCollection
              // href="/calendar"
              hover
              hidden
              leftIcon={<IconCalendarMonth size={24} />}
              onClick={openFormCalendar}
            >
              Đặt lịch
            </ButtonsCollection>
            <Popover position="bottom" shadow="md">
              <Popover.Target>
                <ButtonsCollection
                  hover
                  leftIcon={<IconMessageCircle2Filled size={24} />}
                  rightIcon={<IconChevronDown size={20} />}
                  hidden
                >
                  Liên hệ
                </ButtonsCollection>
              </Popover.Target>
              <Popover.Dropdown p={0}>
                <SelectBox dataPath={dataPath} />
              </Popover.Dropdown>
            </Popover>
            <Popover
              position="bottom"
              shadow="md"
              opened={openedCart}
              onChange={setOpenedCart}
              classNames={{
                dropdown: style.dropdown,
              }}
            >
              <Popover.Target>
                <ButtonsCollection
                  // href="/cart"
                  hover
                  transparent
                  leftIcon={<IconShoppingCartFilled size={24} />}
                  totalItem={cart?.totalItem || null}
                  onClick={() => setOpenedCart((o) => !o)}
                >
                  Giỏ hàng
                </ButtonsCollection>
              </Popover.Target>
              <Popover.Dropdown p={0}>
                <CartHeader setOpenedCart={setOpenedCart} />
              </Popover.Dropdown>
            </Popover>

            {auth.userInfo ? (
              <Link href={"/account/user-information"}>
                <ButtonsCollection
                  background
                  hover
                  leftIcon={<IconUserCircle size={24} />}
                >
                  <Text fw={"700"} truncate="end">
                    {auth?.userInfo?.data?.customerName}
                  </Text>
                </ButtonsCollection>
              </Link>
            ) : (
              <Link href={"/login"} style={{ textDecoration: "none" }}>
                <ButtonsCollection
                  background
                  hover
                  leftIcon={<IconUserCircle size={24} />}
                >
                  Đăng nhập
                </ButtonsCollection>
              </Link>
            )}
          </Flex>
          {hiddenSideBar && (
            <Box className={style.sidebarMenu}>
              <SidebarMenu />
            </Box>
          )}
        </nav>
        {hiddenSideBar && (
          <Box
            className={`${style.total_coating} ${style.coating_tablet}`}
          ></Box>
        )}

        {isfocus && (
          <Box
            className={`${style.total_coating} ${style.coating_tablet}`}
          ></Box>
        )}
      </Box>

      <Box className={style.header_responsive}>
        <Flex justify="space-between">{headerResFunction()}</Flex>
      </Box>
      <Box
        className={`${style.mainstream} ${
          hiddenDrawerCategory ? style.drawer_visible : style.drawer_hidden
        }`}
      >
        <CategoryHeader
          setHiddenDrawerCategory={setHiddenDrawerCategory}
          hiddenDrawerCategory={hiddenDrawerCategory}
          valueActive={valueActive}
          setValueActive={setValueActive}
        />
      </Box>
      <Box
        className={`${style.mainstream} ${
          seeMore ? style.drawer_visible : style.drawer_hidden
        }`}
      >
        <SeeMoreHeader />
      </Box>
    </>
  );
};

export default HearderNavbar;
