import { programApis } from "@apis";
import { useQuery } from "@tanstack/react-query";
import getCommonQueryKey from "./getCommonQueryKey";

const useBanners = () => {
  return useQuery({
    queryKey: getCommonQueryKey("PROGRAM_LIST"),
    queryFn: programApis.getPrograms,
  });
};

export default useBanners;
