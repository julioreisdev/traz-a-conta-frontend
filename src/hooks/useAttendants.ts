import useSWR from "swr";
import { IAttendants } from "../interfaces/attendants.interface";
import { fetcher } from "../utils/api";

export function useAttendants() {
  const { data, error } = useSWR<{attendants: IAttendants[]}>(
    "/companies/attendants/",
    fetcher
  );

  return {
    attendantsList: data?.attendants,
    attendantsListError: error,
  };
}
