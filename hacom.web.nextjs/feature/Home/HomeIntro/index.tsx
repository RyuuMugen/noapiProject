import AppContainer from "@/common/AppContainer";
import style from "./HomeIntro.module.scss";
import { Container, Grid, GridCol, Overlay } from "@/library/mantine";
// import MegaMenu from "@/common/MegaMenu";
import MegaMenu from "@/common/MegaMenu/MenuDemo";
import { getDataMegaMenu } from "@/api/apiMegaMenu";
import { getListBannerSlideData } from "@/api/apiBanner";
import ShipContent from "./ShipContent";

const HomeIntro = async () => {
  const fetchData = async () => {
    const dataMenu = await getDataMegaMenu();
    return dataMenu?.data;
  };
  const fetchDataBanner = async () => {
    // Sử dụng Promise.all để gửi các yêu cầu API đồng thời
    const [dataBanner, dataBannerSide, dataBannerBottom] = await Promise.all([
      getListBannerSlideData("LocationIds=2&Status=A&Take=50"),
      getListBannerSlideData("LocationIds=3&Status=A&Take=1"),
      getListBannerSlideData("LocationIds=89&Status=A&Take=2"),
    ]);
    // Trả về dữ liệu đã được gọi trong một lần
    return {
      slide: dataBanner?.data,
      slideSide: dataBannerSide?.data,
      slideBottom: dataBannerBottom?.data,
    };
  };
  const dataMenu = await fetchData();
  const dataBanner = await fetchDataBanner();
  return (
    <div className={style.layout}>
      <AppContainer>
        <Container style={{ minWidth: "100%", padding: 0 }} my="md">
          <div>
            <Grid classNames={style} style={{ position: "relative" }}>
              <GridCol span={{ base: 12, xs: 12 }} className={style.megaMenu}>
                <MegaMenu
                  dataMenu={dataMenu}
                  headerMenu={false}
                  dataBanner={dataBanner}
                />
              </GridCol>
            </Grid>
            <div className={style.ship}>
              <ShipContent />
            </div>
          </div>
        </Container>
      </AppContainer>
    </div>
  );
};

export default HomeIntro;
