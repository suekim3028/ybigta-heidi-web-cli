import { programApis } from "@apis";
import { useQuery } from "@tanstack/react-query";
import getCommonQueryKey from "./getCommonQueryKey";
import { ProgramTypes } from "@types";

const useProgramDetail = ({ id, userId }: { id?: number; userId: number }) => {
  return useQuery({
    queryKey: getCommonQueryKey("PROGRAM_DETAIL", { id }),
    queryFn: () => programApis.getProgramDetail({ id: id as number, userId }),
    enabled: id !== undefined,
  });
};

export default useProgramDetail;
