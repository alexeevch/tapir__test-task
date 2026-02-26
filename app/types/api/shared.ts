export type ApiPaginatorDTO = {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
};

export type ApiPaginatorQueryDTO = {
  page?: number;
  limit?: number;
};
