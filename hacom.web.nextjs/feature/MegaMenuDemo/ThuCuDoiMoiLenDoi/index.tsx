import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

const ThuCuDoiMoiLenDoi = () => {
  // const content = ``;
  return (
    // <div
    //   classNameName="innerContent"
    //   dangerouslySetInnerHTML={{ __html: content }}
    // />
    <>
      <div className="sub-menu">
        <div className="wrap-col">
          <div className="box-cate-lv1">
            <Link href="/old-autumn-renewed">
              <img
                src="https://hanoicomputercdn.com/media/lib/16-10-2023/banner-web.jpg"
                alt="HACOM - Thu Cũ Đổi Mới"
                style={{ marginTop: 10, borderRadius: "0px 13px 13px 0px" }}
                // style="margin-top: 10px;border-radius: 0px 13px 13px 0px"
              />
            </Link>
          </div>

          <div className="box-cate" id="box-cate-5-1564">
            <Link href="/showroom">
              <img
                src="https://hanoicomputercdn.com/media/lib/12-10-2023/cuahanggannhat-chuan.png"
                alt="HACOM - Tìm Cửa Hàng Gần Nhất"
              />
            </Link>
          </div>
        </div>

        <div className="wrap-col menubanner2023d" id="menubanner2023d-1564">
          <div className="box-cate">
            <div className="hacom-lists-cate-menu-2023">
              <div className="item">
                <div className="cat-image">
                  <Link href="/old-autumn-renewed">
                    <img
                      src="https://hanoicomputercdn.com/media/lib/16-10-2023/laptop.png"
                      className="loading"
                      data-was-processed="true"
                    />
                  </Link>
                </div>
                <div className="cat-content">
                  <div className="cat-content-info">
                    <p className="cat-content-name">
                      <Link href="/old-autumn-renewed">
                        Thu Cũ
                        <br />
                        Lên Đời Laptop
                      </Link>
                    </p>
                    <Link
                      href="/old-autumn-renewed"
                      className="cat-content-btn-buy-now2"
                    >
                      Chi tiết <IconChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-cate">
            <div className="hacom-lists-cate-menu-2023">
              <div className="item">
                <div className="cat-image">
                  <Link href="/old-autumn-renewed?type=cpu">
                    <img
                      src="https://hanoicomputercdn.com/media/lib/16-10-2023/cpu.png"
                      className="loading"
                      data-was-processed="true"
                    />
                  </Link>
                </div>
                <div className="cat-content">
                  <div className="cat-content-info">
                    <p className="cat-content-name">
                      <Link href="/old-autumn-renewed?type=cpu">
                        Thu Cũ
                        <br />
                        Lên Đời CPU
                      </Link>
                    </p>
                    <Link
                      href="/old-autumn-renewed?type=cpu"
                      className="cat-content-btn-buy-now2"
                    >
                      Chi tiết <IconChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-cate">
            <div className="hacom-lists-cate-menu-2023">
              <div className="item">
                <div className="cat-image">
                  <Link href="/old-autumn-renewed?type=vga">
                    <img
                      src="https://hanoicomputercdn.com/media/lib/16-10-2023/vga.png"
                      className="loading"
                      data-was-processed="true"
                    />
                  </Link>
                </div>
                <div className="cat-content">
                  <div className="cat-content-info">
                    <p className="cat-content-name">
                      <Link href="/old-autumn-renewed?type=vga">
                        Thu Cũ
                        <br />
                        Lên Đời VGA
                      </Link>
                    </p>
                    <Link
                      href="https://hacom.vn/thu-cu-doi-moi/vga"
                      className="cat-content-btn-buy-now2"
                    >
                      Chi tiết <IconChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-cate">
            <div className="hacom-lists-cate-menu-2023">
              <div className="item">
                <div className="cat-image">
                  <Link href="/old-autumn-renewed?type=man-hinh">
                    <img
                      src="https://hanoicomputercdn.com/media/lib/16-10-2023/man-hinh.png"
                      className="loading"
                      data-was-processed="true"
                    />
                  </Link>
                </div>
                <div className="cat-content">
                  <div className="cat-content-info">
                    <p className="cat-content-name">
                      <Link href="/old-autumn-renewed?type=man-hinh">
                        Thu Cũ
                        <br />
                        Màn Hình
                      </Link>
                    </p>
                    <Link
                      href="https://hacom.vn/thu-cu-doi-moi/man-hinh"
                      className="cat-content-btn-buy-now2"
                    >
                      Chi tiết <IconChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThuCuDoiMoiLenDoi;
