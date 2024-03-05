import { programApis } from "@apis";
import { useQuery } from "@tanstack/react-query";
import getCommonQueryKey from "./getCommonQueryKey";

const useProgramDetail = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: getCommonQueryKey("PROGRAM_LIST"),
    queryFn: () => programApis.getProgramDetail({ id }),
  });
};

export default useProgramDetail;
