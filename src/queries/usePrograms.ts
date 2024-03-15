import { programApis } from "@apis";
import { useQuery } from "@tanstack/react-query";
import getCommonQueryKey from "./getCommonQueryKey";

const usePrograms = (userId: number) => {
  return useQuery({
    queryKey: getCommonQueryKey("PROGRAM_LIST"),
    queryFn: () => programApis.getPrograms(userId),
  });
};

export default usePrograms;
