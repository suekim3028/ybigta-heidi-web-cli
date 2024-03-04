import { queryUtils } from "@utils";

export type CommonQueryKeyList = {
  BANNER_LIST: undefined;
  PROGRAM_LIST: undefined;
};

export default queryUtils.createQueryKeyFactory<CommonQueryKeyList>();
