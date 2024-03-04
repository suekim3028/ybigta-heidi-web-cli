import { useQuery } from "@tanstack/react-query";
import getCommonQueryKey from "./getCommonQueryKey";
import { commonApis } from "@apis";

const useBanners = () => {
  return useQuery({
    queryKey: getCommonQueryKey("BANNER_LIST"),
    queryFn: commonApis.getBanners,
  });
};

export default useBanners;
