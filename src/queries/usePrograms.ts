import { programApis } from "@apis";
import { useQuery } from "@tanstack/react-query";
import getCommonQueryKey from "./getCommonQueryKey";

const usePrograms = () => {
  return useQuery({
    queryKey: getCommonQueryKey("PROGRAM_LIST"),
    queryFn: programApis.getPrograms,
  });
};

export default usePrograms;
