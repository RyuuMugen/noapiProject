export interface ArticlesModel {
  id?: string | null;
  title?: string | null;
  url?: string | null;
  imageThumbnail?: string | null;
  summary?: string | null;
  metaTitle?: string | null;
  metaKeyWords?: string | null;
  metaDescription?: string | null;
  content?: string | null;
  articleCategoryId?: Array<string> | [];
}
