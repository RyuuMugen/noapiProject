import { useRef } from "react";
import { Badge, Flex } from "@mantine/core";
import {
  ControlledMenu,
  MenuItem,
  useHover,
  useMenuState,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { IconChevronRight } from "@tabler/icons-react";
import style from "./SubMenuContent.module.scss";
import { useHeaderContext } from "@/useContext/useContextSearch";
import { useRouter } from "next/navigation";
import { MegaMenuModels } from "@/model/MegaMenu";
import { useOverlayContext } from "@/useContext/OverLayContext";

const SubMenuContent = ({ data }: SubMenuContentProps) => {
  const { setCategorySearch } = useHeaderContext();
  const { setActive } = useOverlayContext();
  const router = useRouter();
  const convertSpacesToDash = (str: any) => {
    return str.replace(/\s+/g, "-");
  };
  const handleRedirectMegaMenu = (code: string, name: string, id: number) => {
    const finalCode = code.trim() ? code : convertSpacesToDash(name);
    setCategorySearch({
      categoryName: name,
      categoryCode: finalCode,
      categoryId: id,
    });
    setActive(false);
    router.push(`/product-category/${finalCode}`);
  };

  const SubMenuType = ({
    subMenuContent,
  }: {
    subMenuContent: MegaMenuModels;
  }) => {
    return (
      <div className={style.subMenuType}>
        <p
          className={style.subMenuTypeTitle}
          onClick={() =>
            handleRedirectMegaMenu(
              subMenuContent?.urlRedirect || "",
              subMenuContent?.categoryName,
              subMenuContent?.id
            )
          }
        >
          {subMenuContent?.categoryName}
          {subMenuContent?.priorityStatus === "Y" && (
            <Badge color="red" radius="sm" className={style.hotBadge}>
              Hot
            </Badge>
          )}
        </p>

        <div className={style.subMenuTypeItems}>
          {subMenuContent?.megaMenuCategoryChild
            .slice(0, 6)
            .map((item: any, index: number) => (
              <SubMenuItem key={index} item={item} />
            ))}
        </div>
      </div>
    );
  };

  const SubMenuItem = ({ item }: SubMenuItemProps) => {
    const ref = useRef(null);
    const [menuState, toggle] = useMenuState({ transition: true });
    const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

    return (
      <div>
        <Flex
          justify="space-between"
          align="center"
          className={style.item}
          ref={ref}
          {...anchorProps}
        >
          <p
            className={style.itemTitle}
            onClick={() =>
              handleRedirectMegaMenu(
                item?.urlRedirect || "",
                item?.categoryName,
                item?.id
              )
            }
          >
            {item.categoryName}
            {item?.priorityStatus === "Y" && (
              <Badge color="red" radius="sm" className={style.hotBadge}>
                Hot
              </Badge>
            )}
          </p>
          {item?.megaMenuCategoryChild &&
          item.megaMenuCategoryChild.length > 0 ? (
            <IconChevronRight color="#455260" size={15} />
          ) : null}
        </Flex>

        {item?.megaMenuCategoryChild?.length > 0 && (
          <ControlledMenu
            {...hoverProps}
            {...menuState}
            anchorRef={ref}
            onClose={() => toggle(false)}
            direction="right"
            arrow={true}
          >
            {item?.megaMenuCategoryChild.map((lever4: any, index: number) => (
              <MenuItem
                key={index}
                onClick={() =>
                  handleRedirectMegaMenu(
                    lever4?.urlRedirect || "",
                    lever4?.categoryName,
                    lever4?.id
                  )
                }
              >
                {lever4?.categoryName}
                {lever4?.priorityStatus === "Y" && (
                  <Badge color="red" radius="sm" className={style.hotBadge}>
                    Hot
                  </Badge>
                )}
              </MenuItem>
            ))}
          </ControlledMenu>
        )}
      </div>
    );
  };

  return (
    <div className={style.main}>
      {data?.slice(0, 8).map((subMenuContent, index) => (
        <SubMenuType key={index} subMenuContent={subMenuContent} />
      ))}
    </div>
  );
};

export default SubMenuContent;

type SubMenuContentProps = {
  data: MegaMenuModels[] | [];
};

type SubMenuItemProps = {
  item: MegaMenuModels;
};
