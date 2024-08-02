export interface TblBuildPcListItemBuild {
  id: number;
  categoryId: number | null;
  itemName: string | null;
  image: string | null;
  description: string | null;
  skuCode: string | null;
  unitPrice: number | null;
  quantity: number | null;
  status: string | null;
  isRel?: boolean;
  warrantyDescription: string | null;
}
