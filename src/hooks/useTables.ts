import useSWR from "swr";
import { ITable } from "../interfaces/tables.interface";
import { fetcher } from "../utils/api";

export function useTables() {
  const { data, error } = useSWR<{ tables: ITable[] }>(
    "/companies/tables/",
    fetcher
  );

  return {
    tablesList: data?.tables,
    tablesListError: error,
  };
}
