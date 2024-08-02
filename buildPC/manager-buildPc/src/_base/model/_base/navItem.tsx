export interface NavItem {
  label: string;
  icontype?: string;
  path?: string;
  items?: NavItem[]; // Dùng đệ quy cho thằng cha có items
  disabled?: boolean;
}
