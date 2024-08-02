import { Pagination } from "@elastic/eui";

export interface PaginationOptions {
  pageSizeOptions?: number[];
  initialPageIndex?: number;
  initialPageSize?: number;
  pageIndex: number;
  pageSize: number;
  totalItemCount?: number;
}

export const paginationBase: Pagination = {
  pageSizeOptions: [15, 50, 100],
  pageIndex: 0,
  pageSize: 15,
  totalItemCount: 0,
};
