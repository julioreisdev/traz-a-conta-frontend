import useSWR from "swr";
import { IBalance, IRequests } from "../interfaces/requests.interfaces";
import { fetcher } from "../utils/api";

export function useRequests(id: number) {
  const { data, error } = useSWR<{ balance: IBalance; requests: IRequests[] }>(
    `/requests/${id}`,
    fetcher
  );

  return {
    requestList: data,
    requestListError: error,
  };
}
