export interface BannerModel {
  id?: string | null;
  //fix cứng 3 loại là home , article , articleCategory
  // để ở các màn thì lấy ra banner theo type này
  type?: string | null;
  url?: string | null;
  image?: string | null;
  isShow?: string | null;
  alt?: string | null;
}
