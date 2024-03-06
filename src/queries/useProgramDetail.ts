import { programApis } from "@apis";
import { useQuery } from "@tanstack/react-query";
import getCommonQueryKey from "./getCommonQueryKey";
import { ProgramTypes } from "@types";

const useProgramDetail = ({ id }: { id?: number }) => {
  return useQuery<ProgramTypes.DetailWithRelatedItems>({
    queryKey: getCommonQueryKey("PROGRAM_DETAIL", { id }),
    queryFn: async () => {
      const data = await programApis.getProgramDetail({ id: id as number });

      const relatedProgramList = await programApis.getProgramsByIdList(
        data.relatedProgramIdList
      );

      return { ...data, relatedProgramList };
    },
    enabled: id !== undefined,
  });
};

export default useProgramDetail;
