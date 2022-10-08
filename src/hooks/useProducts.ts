import useSWR from "swr";
import { IProduct } from "../interfaces/products.interface";
import { fetcher } from "../utils/api";

export function useProducts() {
  const { data, error } = useSWR<{products: IProduct[]}>(
    "/companies/products/",
    fetcher
  );

  return {
    productsList: data?.products,
    productsListError: error,
  };
}
