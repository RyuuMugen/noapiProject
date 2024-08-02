export interface TblCategory {
  id: number;
  categroyCode: string | null;
  categroyName: string;
  idParent: number | null;
  description: string | null;
  creationDate: string | null;
  createdBy: string | null;
  lastUpdateDate: string | null;
  lastUpdatedBy: string | null;
  lastUpdateLogin: number | null;
  orgId: number | null;
  categoryType: string | null;
  content: string | null;
  tags: string | null;
  imageIcon: File | null;
  imageOwner: File | null;
  priceRange: string | null;
  visibleType: string | null;
  fixedContent: string | null;
  orderedNumber: number | null;
  urlRedirect: string | null;
  templateFile: string | null;
  visibleItemQty: number | null;
  urlCanonicalForSeo: string | null;
  linkForSeo: string | null;
  idexForSeo: string | null;
  enableChangeLink: string | null;
  metaTitle: string | null;
  metaKeyword: string | null;
  metaDescription: string | null;
}

export interface attributeValue {
  id: number;
  value: string;
  attributeId: number;
}

export interface TblAttributeFilter {
  id: number;
  attributeName: string | null;
  attributeValues: attributeValue[] | [];
}

export interface AttributeOptionType {
  value: string;
  label: string;
  placeholder?: string | null;
  idKey?: number;
}

export interface TblAttributeFilterOption {
  id: number;
  attributeName: string | null;
  options: AttributeOptionType[];
}




