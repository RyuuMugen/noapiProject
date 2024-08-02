import { BASE_WEB_URL } from "@/config";

const LinhKienMayTinh = () => {
  const content = `<!--Linh kiện máy tính-->
    <div class="sub-menu">
       <div class="wrap-col">
          <div class="box-cate">
             <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly" class="cat2">CPU - Bộ Vi Xử Lý</a></div>
             <div class="item-sub">
                <div class="position-relative">
                   <a href="${BASE_WEB_URL}/product-category/cpu-intel">CPU Intel</a>
                   <a href="https://khuyenmai.hacom.vn/amd" target="_blank">CPU AMD</a>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Dòng CPU</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/cpu-inlel-celeron">Intel Celeron</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-intel-pentium">Intel Pentium</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-intel-core-i3">Intel Core i3</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-intel-core-i5">Intel Core i5</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-intel-core-i7">Intel Core i7</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-intel-core-i9">Intel Core i9</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-intel-xeon">Intel Xeon</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-amd-athlon">AMD Athlon</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-amd-ryzen-3">AMD Ryzen 3</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-amd-ryzen-5">AMD Ryzen 5</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-amd-ryzen-7">AMD Ryzen 7</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-amd-ryzen-9">AMD Ryzen 9</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-amd-ryzen-threadripper">AMD Ryzen Threadripper</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-amd-epyc">AMD Ryzen Epyc</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">CPU Theo Socket</a>
                   <div class="list-sub-hover">
                    <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=4125">Intel LGA 1200</a>
                    <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=4461">Intel LGA 1700</a>
                    <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3588">Intel LGA 2011</a>
                    <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3590">Intel LGA 2011-v3</a>
                    <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3593">Intel LGA 2066</a>
                    <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3594">Intel LGA 3647</a>
                    <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3595">AMD AM4</a>
                    <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3757">AMD sTRX4</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Thế Hệ CPU</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=4460">Intel Alder Lake</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=4364">Intel Rocket Lake S</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=4124">Intel Comet Lake S</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3600">Intel Cascade Lake X</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3602">Intel Cascade Lake</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3596">Intel Coffee Lake</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3598">Intel Kaby Lake</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3599">Intel Skylake X</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3606">Intel Skylake W</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3605">Intel Skylake SP</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3604">Intel Broadwell E</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3601">Intel Haswell E</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3608">Intel Ivy Bridge EP</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3609">AMD Ryzen 3000 Series</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=4306">AMD Ryzen 5000 Series</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=4437">AMD Ryzen 7000 Series</a>
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?the-he-cpu-lkmt=amd-ryzen-10000-series">AMD Ryzen 10000 Series</a> 
                      <a href="${BASE_WEB_URL}/product-category/cpu-bo-vi-xu-ly?attributeValue=3758">AMD Ryzen Threadripper 3000 Series</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
              <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/o-cung-ssd" class="cat2">Ổ Cứng SSD</a></div>
              <div class="item-sub">
                <div class="position-relative">
                  <a class="right-arrow-link">SSD Theo Hãng</a>
                  <div class="list-sub-hover">
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=adata">Adata</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=gigabyte">Gigabyte</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=intel">Intel</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=kingfast">KingFast</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=kingston">Kingston</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=lexar">Lexar</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=msi">MSI</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=samsung">SamSung</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=team">Team</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=westerndigital">Western Digital</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?brand=pny">PNY</a>
                  </div>
                </div>
              </div>
              <!--item-sub-->
              
              <div class="item-sub">
                <div class="position-relative">
                  <a class="right-arrow-link">Dung Lượng</a>
                  <div class="list-sub-hover">
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3853">120GB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3854">128GB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3855">240GB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3856">250GB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3857">256GB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3858">480GB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3859">500GB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3860">512GB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3866">960GB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3861">1TB</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3867">Trên 1TB</a>
                  </div>
                </div>
              </div>
              <!--item-sub-->
              <div class="item-sub">
                <div class="position-relative">
                  <a class="right-arrow-link">Loại Ổ Cứng</a>
                  <div class="list-sub-hover">
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=1924">2.5" SATA</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=2409">M.2 SATA</a>
                    <a href="${BASE_WEB_URL}/product-category/o-cung-ssd?attributeValue=3232">M.2 NVME</a>
                  </div>
                </div>
              </div>
              <!--item-sub-->
            <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop" class="cat2">Ổ Cứng HDD</a></div>
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">HDD Theo Hãng</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?brand=seagate">Seagate</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?brand=toshiba">Toshiba</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?brand=westerndigital">Western Digital</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
             <div class="position-relative">
                <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=4368">HDD lưu Trữ Mạng (NAS)</a>
             </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Dung Lượng</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3833">500GB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3834">1TB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3835">2TB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3836">3TB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3837">4TB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3838">6TB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3839">8TB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3840">10TB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3841">12TB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3862">Trên 12TB</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Tốc Độ Vòng Quay</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3842">5400RPM</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3863">5700RPM</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3843">5900RPM</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3844">7200RPM</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Bộ Nhớ Đệm</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3850">16MB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3845">32MB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3846">64MB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3847">128MB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3849">256MB</a>
                      <a href="${BASE_WEB_URL}/product-category/o-cung-hdd-desktop?attributeValue=3865">512MB</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
            
          </div> <!--box-cate-->
          <div class="box-cate">
             <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu" class="cat2">Mainboard - Bo Mạch Chủ</a></div>
             <div class="item-sub">
                <div class="position-relative">
                   <a href="${BASE_WEB_URL}/product-category/mainboard-intel">Mainboard Intel</a>
                   <a href="${BASE_WEB_URL}/product-category/mainboard-amd">Mainboard AMD</a>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Mainboard Theo Hãng</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?brand=asrock">ASROCK</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?brand=asus">ASUS</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?brand=gigabyte">GIGABYTE</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?brand=intel">INTEL</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?brand=msi">MSI</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?brand=supermicro">SUPERMICRO</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Socket Hỗ Trợ</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=4123">Intel LGA 1200</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=4456">Intel LGA 1700</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3698">Intel Dual LGA 2011</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3699">Intel Dual LGA 2011-v3</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3700">Intel LGA 2066</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3701">Intel LGA 3647</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3745">Intel Dual LGA 3647</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3702">AMD AM4</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3703">AMD TR4</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3751">AMD TRX4</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3756">AMD sTRX4</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Chipset</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-b460">Intel B460</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-b560">Intel B560</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-b660">Intel B660</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-b760">Intel B760</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-c246">Intel C246</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-h410">Intel H410</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-h470">Intel H470</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-h510">Intel H510</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-h610">Intel H610</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-z690">Intel Z690</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-intel-z790">Intel Z790</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-a320">AMD A320</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-b450">AMD B450</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-b550">AMD B550</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-b650">AMD B650</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-b650e">AMD B650E</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-x399">AMD X399</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-x570">AMD X570</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-x670">AMD X670</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-x670e">AMD X670E</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-amd-trx40">AMD TRX40</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Kiểu Kích Thước (Form Factor)</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3704">Mini ITX</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3705">M-ATX</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3749">U-ATX</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3706">ATX</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3707">E-ATX</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3708">EEB</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3709">SSI EEB</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3734">CEB</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Số Khe Cắm RAM</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3725">2 Khe</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3726">4 Khe</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3727">8 Khe</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3728">12 Khe</a>
                      <a href="${BASE_WEB_URL}/product-category/mainboard-bo-mach-chu?attributeValue=3729">16 Khe</a>
                   </div>
                </div>
             </div>
            <!--item-sub-->
            <br/>
            <br/>
            <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/odd-o-dia-quang" class="cat2">ODD - Ổ Đĩa Quang</a></div>
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Chủng Loại</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/odd-o-dia-quang?attributeValue=350">DVD ROM</a>
                      <a href="${BASE_WEB_URL}/product-category/odd-o-dia-quang?attributeValue=1027">DVD Rewrite</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Chuẩn Kết Nối</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/odd-o-dia-quang?attributeValue=1573">USB</a>
                      <a href="${BASE_WEB_URL}/product-category/odd-o-dia-quang?attributeValue=1572">SATA</a>
                   </div>
                </div>
             </div>
            <!--item-sub-->
            <br/>
             <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/card-am-thanh" class="cat2">Card Âm Thanh</a></div>
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Hãng Sản Xuất</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/card-am-thanh?brand=creative">Creative</a>
                      <a href="${BASE_WEB_URL}/product-category/card-am-thanh?brand=ugreen">Ugreen</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             
          </div> <!--box-cate-->
          <div class="box-cate">
             <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong" class="cat2">RAM - Bộ Nhớ Trong</a></div>
             <div class="item-sub">
                <div class="position-relative">
                   <a href="${BASE_WEB_URL}/product-category/ram-ddr4">RAM DDR4</a>
                   <a href="${BASE_WEB_URL}/product-category/ram-ddr5">RAM DDR5</a>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">RAM Theo Hãng</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=kingston">Kingston</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=corsair">Corsair</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=gskill">Gskill</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=adata">Adata</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=team">Team</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=avexir">Avexir</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=lexar">Lexar</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=kingmax">Kingmax</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=apacer">Apacer</a>
                        <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?brand=pny">PNY</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Dung Lượng</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3676">2GB</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3665">4GB</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3666">8GB (1 x 8GB)</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3667">8GB (2 x 4GB)</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3668">16GB (1 x 16GB)</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3669">16GB (2 x 8GB)</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3670">16GB (4 x 4GB)</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3671">32GB (1 x 32GB)</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3672">32GB (2 x 16GB)</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3673">32GB (4 x 8GB)</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3675">64GB (1 x 64GB)</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">BUS RAM</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3677">DDR3 1333MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3679">DDR3 1600MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3679">DDR4 2133MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3680">DDR4 2400MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3681">DDR4 2666MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3682">DDR4 2800MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3683">DDR4 3000MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3684">DDR4 3200MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3686">DDR4 3600MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=4519">DDR4 3733MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3687">DDR4 4000MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3693">DDR4 4266MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3694">DDR4 4600MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=4462">DDR5 4800MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=4459">DDR5 5200MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=4469">DDR5 5600MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=4472">DDR5 6000MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=4548">DDR5 6200MHz</a>
                      <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=4549">DDR5 6400MHz</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3688">RAM ECC</a>
                   <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3688">RAM Non-ECC</a>
                   <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3690">RAM Có LED</a>
                   <a href="${BASE_WEB_URL}/product-category/ram-bo-nho-trong?attributeValue=3691">RAM Không Có LED</a>
                </div>
             </div>
             <!--item-sub-->
              <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/vo-case" class="cat2">Case - Vỏ Máy Tính</a></div>
              <div class="item-sub">
                <div class="position-relative">
                  <a class="right-arrow-link">Vỏ Case Theo Hãng</a>
                  <div class="list-sub-hover">
                            <div class="item-sub-des">
                                <div class="position-relative-des">
                                    <a class="right-arrow-link">Các Thương Hiệu Khác</a>
                                    <div class="list-sub-hover-des">
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=azza">Azza</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=antec">Antec</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=cougar">Cougar</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=deepcool">Deep Cool</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=gameMax">GameMax</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=goldenfield">Golden Field</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=hawk">Hawk</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=fsp">FSP</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=gigabyte">Gigabyte</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=thermaltake">Thermaltake</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=infinity">Infinity</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=jetek">Jetek</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=msi">MSI</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=phanteks">Phanteks</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=sama">Sama</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=xtech">Xtech</a>
                                        <a href="${BASE_WEB_URL}/product-category/vo-case?brand=hangkhac">Hãng Khác</a>
                                    </div>
                                </div>
                            </div>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=hacom">Hacom</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=fractal-design">Fractal Design</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=asus">Asus</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=coolermaster">Cooler Master</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=corsair">Corsair</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=darkflash">Darkflash</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=hyte">Hyte</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=kenoo">Kenoo</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=mik">Mik</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=inwin">In Win</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=jonsbo">Jonsbo</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=lianli">Lian-Li</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=vitradragon">Vitra Dragon</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=vps">VPS</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=xigmatek">Xigmatek</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=nzxt">NZXT</a>
                            <a href="${BASE_WEB_URL}/product-category/vo-case?brand=segotep">Segotep</a>
    
                  </div>
                </div>
              </div>
              <!--item-sub-->
              <div class="item-sub">
                <div class="position-relative">
                  <a class="right-arrow-link">Case Theo Nhu Cầu</a>
                  <div class="list-sub-hover">
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=4783">Case Phiên Bản Giới Hạn</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=4784">Case Độc, Lạ</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=4785">Case Gaming, Đồ Họa</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=4786">Case Siêu Nhỏ Gọn</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=4787">Case Văn Phòng</a>
                    <a href="${BASE_WEB_URL}/collection/kit-tan-nuoc-theo-case?id=568">KIT Tản Nước Theo Case</a>
                  </div>
                </div>
              </div>
              <!--item-sub-->
              <div class="item-sub">
                <div class="position-relative">
                  <a class="right-arrow-link">Kích Cỡ</a>
                  <div class="list-sub-hover">
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=4638">ATX Super Tower</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3311">ATX Full Tower</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3312">ATX Mid Tower</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3313">Micro ATX</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3314">Mini ITX</a>
                  </div>
                </div>
              </div>
              <!--item-sub-->
              <div class="item-sub">
                <div class="position-relative">
                  <a class="right-arrow-link">Kích Thước Mainboard</a>
                  <div class="list-sub-hover">
                    <a href="">Mini ITX</a>
                    <a href="">M-ATX</a>
                    <a href="">ATX</a>
                    <a href="">E-ATX</a>
                    <a href="">EEB</a>
                    <a href="">CEB</a>
                  </div>
                </div>
              </div>
              <!--item-sub-->
              <div class="item-sub">
                <div class="position-relative">
                  <a class="right-arrow-link">Màu Sắc</a>
                  <div class="list-sub-hover">
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3335">Xanh dương</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3331">Đen</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3336">Xanh lá</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3332">Đỏ</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3346">Xám</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3333">Trắng</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3347">Hồng</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3334">Bạc</a>
                  </div>
                </div>
              </div>
              <!--item-sub-->
              <div class="item-sub">
                <div class="position-relative">
                  <a class="right-arrow-link">Số Quạt Đi Kèm</a>
                  <div class="list-sub-hover">
                    <a href="${BASE_WEB_URL}/product-category/vo-case">0</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3337">1</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3338">2</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3340">3</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3341">4</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3342">5</a>
                    <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3343">6</a>
                  </div>
                </div>
              </div>
              <!--item-sub-->
            
             
          </div>
          <!--box-cate-->
          <div class="box-cate">
             <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh" class="cat2">VGA - Card Màn Hình</a></div>
             <div class="item-sub">
                <div class="position-relative">
                   <a href="${BASE_WEB_URL}/product-category/vga-nvidia" class="right-arrow-link">VGA NVIDIA</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/nvidia-gt-1030">NVIDIA GT 1030</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-gtx-1050-ti">NVIDIA GTX 1050 Ti</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-gtx-1650">NVIDIA GTX 1650</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-gtx-1660">NVIDIA GTX 1660</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-gtx-1660-super">NVIDIA GTX 1660 Super</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-gtx-1660-ti">NVIDIA GTX 1660 Ti</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-2060">NVIDIA RTX 2060</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-2060-super">NVIDIA RTX 2060 Super</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-3050">NVIDIA RTX 3050</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-3060">NVIDIA RTX 3060</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-3060-ti">NVIDIA RTX 3060 Ti</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-3070">NVIDIA RTX 3070</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-3070-ti">NVIDIA RTX 3070 Ti</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-3080">NVIDIA RTX 3080</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-3080-ti">NVIDIA RTX 3080 Ti</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-3090">NVIDIA RTX 3090</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-4060">NVIDIA RTX 4060</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-4060-ti">NVIDIA RTX 4060Ti</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-4070">NVIDIA RTX 4070</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-4070-ti">NVIDIA RTX 4070Ti</a>
                       <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-4070-super">NVIDIA RTX 4070 Super</a>
                       <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-4070-ti-super">NVIDIA RTX 4070Ti Super</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-4080">NVIDIA RTX 4080</a>
                     <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-4080-super">NVIDIA RTX 4080 Super</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-rtx-4090">NVIDIA RTX 4090</a>
                      <a href="${BASE_WEB_URL}/product-category/nvidia-quadro">NVIDIA Quadro</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a href="${BASE_WEB_URL}/product-category/vga-amd" class="right-arrow-link">VGA AMD</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/amd-rx-550">AMD RX 550</a>
                      <a href="${BASE_WEB_URL}/product-category/amd-rx-5600-xt">AMD RX 5600 XT</a>
                      <a href="${BASE_WEB_URL}/product-category/amd-rx-5700">AMD RX 5700</a>
                      <a href="${BASE_WEB_URL}/product-category/amd-rx-5700-xt">AMD RX 5700 XT</a>
                      <a href="${BASE_WEB_URL}/product-category/rx-6500-xt">AMD RX 6500 XT</a>
                      <a href="${BASE_WEB_URL}/product-category/rx-6600">AMD RX 6600</a>
                      <a href="${BASE_WEB_URL}/product-category/rx-6600-xt">AMD RX 6600 XT</a>
                      <a href="${BASE_WEB_URL}/product-category/rx-6800">AMD RX 6800</a>
                      <a href="${BASE_WEB_URL}/product-category/rx-6800-xt">AMD RX 6800 XT</a>
                      <a href="${BASE_WEB_URL}/product-category/rx-7900-xt">AMD RX 7900 XT</a>
                      <a href="${BASE_WEB_URL}/product-category/rx-7900-xtx">AMD RX 7900 XTX</a>
                      <a href="${BASE_WEB_URL}/product-category/amd-rx-vega-64">AMD RX Vega 64</a>
                      <a href="${BASE_WEB_URL}/product-category/amd-firepro">AMD FirePro</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Nhu Cầu Sử Dụng</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3883">Gaming</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3884">VGA Đồ Họa, Kiến Trúc</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3885">VGA Phổ Thông</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">VGA Theo Hãng</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=asus">ASUS</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=msi">MSI</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=gigabyte">GIGABYTE</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=evga">EVGA</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=inno3d">INNO3D</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=galax">GALAX</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=leadtek">LEADTEK</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=pny">PNY</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=asrock">ASROCK</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=palit">PALIT</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=sapphire">SAPPHIRE</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=ocpc">OCPC</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?brand=colorful">COLORFUL</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Kiểu Bộ Nhớ</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3875">GDDR3</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3876">GDDR5</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3877">GDDR6</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=4267">GDDR6X</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3909">HBM2</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Dung Lượng</a>
                   <div class="list-sub-hover">
                    <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3897">2GB</a>
                    <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3899">4GB</a>
                    <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3900">6GB</a>
                    <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3901">8GB</a>
                    <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3903">12GB</a>
                    <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3916">16GB</a>
                    <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3917">24GB</a>
                    <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3922">32GB</a>
                    <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3918">48GB</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Giao Diện Bộ Nhớ</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3905">64-bit</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3878">128-bit</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3910">160-bit</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3879">192-bit</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3880">256-bit</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3904">352-bit</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3881">384-bit</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3908">2048-bit</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=3923">3072-bit</a>
                      <a href="${BASE_WEB_URL}/product-category/vga-card-man-hinh?attributeValue=4272">4096-bit</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
            <br/>
            <br/>
            <div class="item-sub"><a href="${BASE_WEB_URL}/product-category/nguon-may-tinh" class="cat2">PSU - Nguồn Máy Tính</a></div>
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Nguồn Theo Hãng</a>
                   <div class="list-sub-hover">
                          <div class="item-sub-des">
                            <div class="position-relative-des">
                                <a class="right-arrow-link">Nguồn Các Hãng Khác</a>
                                <div class="list-sub-hover-des">
                                    <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=aigo">Aigo</a>
                                    <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=antec">Antec</a>
                                    <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=mik">Mik</a>
                                    <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=gamemax">GameMax</a>
                                    <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=xtech">Xtech</a>
                                    <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=jetek">Jetek</a>
                                </div>
                            </div>
                        </div>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=asus">Asus</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=coolermaster">Cooler Master</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=corsair">Corsair</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=deepcool">Deepcool</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=fsp">FSP</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=gigabyte">Gigabyte</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=kenoo">Kenoo</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=msi">MSI</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=nzxt">NZXT</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=thermaltake">Thermaltake</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=segotep">Segotep</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?brand=xigmatek">Xigmatek</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Công Suất Nguồn</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3194">Dưới 400W</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3195">400W - 550W</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3196">550W - 650W</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3197">650W - 800W</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3198">800W - 1000W</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3199">Trên 1000W</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Chuẩn Nguồn</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3295">80 Plus</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3296">80 Plus Bronze</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3297">80 Plus Gold</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3299">80 Plus Platinum</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3300">80 Plus Titanium</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Kiểu Dây Nguồn</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3569">Full Modular</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3570">Semi Modular</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3571">Non Modular</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             <div class="item-sub">
                <div class="position-relative">
                   <a class="right-arrow-link">Kích Cỡ</a>
                   <div class="list-sub-hover">
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3449">ATX</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3568">Flex ATX</a>
                      <a href="${BASE_WEB_URL}/product-category/nguon-may-tinh?attributeValue=3450">SFX</a>
                   </div>
                </div>
             </div>
             <!--item-sub-->
             
          </div>
          <!--box-cate-->
          <div class="box-cate">
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=adata"><img src="https://hanoicomputercdn.com/media/brand/adata.png" style="max-width: 117px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=amd"><img src="https://hanoicomputercdn.com/media/brand/amd.png"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=asrock"><img src="https://hanoicomputercdn.com/media/brand/asrock.png" style="max-width: 89px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=asus"><img src="https://hanoicomputercdn.com/media/brand/asus.png"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=fsp"><img src="https://hanoicomputercdn.com/media/brand/fsp.png" style="max-width: 108px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=coolermaster"><img src="https://hanoicomputercdn.com/media/brand/coolermaster.png" style="max-width: 122px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=gskill"><img src="https://hanoicomputercdn.com/media/brand/gskill.png" style="max-width: 108px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=deepcool"><img src="https://hanoicomputercdn.com/media/brand/deepcool.png" style="max-width: 89px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=intel"><img src="https://hanoicomputercdn.com/media/brand/intel.png" style="max-width: 90px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=inno3d"><img src="https://hanoicomputercdn.com/media/brand/inno3d.png" style="max-width: 69px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=kingston"><img src="https://hanoicomputercdn.com/media/brand/kingston.png" style="max-width: 92px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=jonsbo"><img src="https://hanoicomputercdn.com/media/brand/jonsbo.png" style="max-width: 92px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=inwin"><img src="https://hanoicomputercdn.com/media/brand/inwin.png" style="max-width: 93px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=lianli"><img src="https://hanoicomputercdn.com/media/brand/lianli.png" style="max-width: 93px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=msi"><img src="https://hanoicomputercdn.com/media/brand/msi.png" style="max-width: 102px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=nzxt"><img src="https://hanoicomputercdn.com/media/brand/nzxt.png" style="max-width: 79px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=palit"><img src="https://hanoicomputercdn.com/media/brand/palit.png" style="max-width: 79px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=phanteks"><img src="https://hanoicomputercdn.com/media/brand/phanteks.png" style="max-width: 99px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=seagate"><img src="https://hanoicomputercdn.com/media/brand/seagate.png" style="max-width: 102px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=westerndigital"><img src="https://hanoicomputercdn.com/media/brand/westerndigital.png" style="max-width: 117px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=xigmatek"><img src="https://hanoicomputercdn.com/media/brand/xigmatek.png" style="max-width: 118px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=antec"><img src="https://hanoicomputercdn.com/media/brand/antec.png" style="max-width: 85px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=corsair"><img src="https://hanoicomputercdn.com/media/brand/corsair.png" style="max-width: 93px;"></a></div>
             <div class="item-brand"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=gigabyte"><img src="https://hanoicomputercdn.com/media/brand/gigabyte.png" style="max-width: 90px;"></a></div>
             <div class="item-brand hide-max-width-1649"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=colorful"><img src="https://hanoicomputercdn.com/media/brand/colorful.png" style="max-width: 79px;"></a></div>
             <div class="item-brand hide-max-width-1649"><a href="${BASE_WEB_URL}/product-category/linh-kien-may-tinh?brand=samsung"><img src="https://hanoicomputercdn.com/media/brand/samsung.png" style="max-width: 79px;"></a></div>
          </div>
          <!--box-cate-->
       </div>
    <!--wrap-col-->
          <div class="wrap-col menubanner2023d" id="menubanner2023d-6"><!--wrap-col-->
        <div class="box-cate">
         <div class="hacom-lists-cate-menu-2023">
                 <div class="item">
                    <div class="cat-image">
                      <a href="${BASE_WEB_URL}/search?q=pccu">
                        <img src="https://hanoicomputercdn.com/media/lib/26-08-2023/6-1.jpg" class="loading" data-was-processed="true">  	
                      </a>
                    </div>
                    <div class="cat-content">
                      <div class="cat-content-info">
                          <p class="cat-content-name"><a href="${BASE_WEB_URL}/search?q=pccu">Siêu Phẩm<br />Độc Quyền</a></p>
                        <a href="${BASE_WEB_URL}/search?q=pccu" class="cat-content-btn-buy-now">
                          Mới Về <i style="font-weight: 900;">></i>
                        </a>
                      </div>
                    </div>
                 </div>
            </div>
        </div>
        <div class="box-cate">
            <div class="hacom-lists-cate-menu-2023">
                 <div class="item">
                    <div class="cat-image">
                      <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=4783">
                        <img src="https://hanoicomputercdn.com/media/lib/26-08-2023/6-2.jpg" class="loading" data-was-processed="true">  	
                      </a>
                    </div>
                    <div class="cat-content">
                      <div class="cat-content-info">
                          <p class="cat-content-name"><a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=4783">Siêu Phẩm<br/>Bản Giới Hạn</a></p>
                        <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=4783" class="cat-content-btn-buy-now">
                          Sẵn Hàng <i style="font-weight: 900;">></i>
                        </a>
                      </div>
                    </div>
                 </div>
            </div>
        </div>
        <div class="box-cate">
                 <div class="hacom-lists-cate-menu-2023">
                 <div class="item">
                    <div class="cat-image">
                      <a href="${BASE_WEB_URL}/collection/case-doc-la?id=569">
                        <img src="https://hanoicomputercdn.com/media/lib/26-08-2023/6-3.jpg" class="loading" data-was-processed="true">  	
                      </a>
                    </div>
                    <div class="cat-content">
                      <div class="cat-content-info">
                          <p class="cat-content-name"><a href="${BASE_WEB_URL}/collection/case-doc-la?id=569">Vỏ Case Độc Lạ</a></p>
                        <a href="${BASE_WEB_URL}/collection/case-doc-la?id=569" class="cat-content-btn-buy-now">
                          Chỉ từ 1.299.000đ <i style="font-weight: 900;">></i>
                        </a>
                      </div>
                    </div>
                 </div>
            </div>
        </div>
            <div class="box-cate">
                 <div class="hacom-lists-cate-menu-2023">
                 <div class="item">
                    <div class="cat-image">
                      <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3333">
                        <img src="https://hanoicomputercdn.com/media/lib/31-08-2023/6-4.jpg" class="loading" data-was-processed="true">  	
                      </a>
                    </div>
                    <div class="cat-content">
                      <div class="cat-content-info">
                          <p class="cat-content-name"><a href="${BASE_WEB_URL}/product-category/vo-case?mau-case=trang">Vỏ Case<br />White Editon</a></p>
                        <a href="${BASE_WEB_URL}/product-category/vo-case?attributeValue=3333" class="cat-content-btn-buy-now">
                          Xem Thêm <i style="font-weight: 900;">></i>
                        </a>
                      </div>
                    </div>
                 </div>
            </div>
        </div>
        </div><!--End wrap col -->
    </div>`;
  return (
    <div
      className="innerContent"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
export default LinhKienMayTinh;
