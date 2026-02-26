import type { ApiPaginatorDTO } from "~/types/api/shared";

export interface ProductDTO {
  id: number;
  name: string;
  price: number;
  image?: string;
}

export interface ProductCollectionDTO extends ApiPaginatorDTO {
  products: ProductDTO[];
}
