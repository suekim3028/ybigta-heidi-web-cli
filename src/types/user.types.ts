import { USER_CONSTS } from "@constants";


export type Gender = (typeof USER_CONSTS.GENDER_LIST)[number];
export type Job = (typeof USER_CONSTS.JOB_LIST)[number];

type AreaLevel1 = string;
type AreaLevel2 = string
export type SignUpUser = {
  password: string;
  name: string;
  gender: Gender;
  height: number;
  weight: number;
  email: string;
  birthYear: number;
  job: Job;
  phoneLocalNumber: string;
  phoneCountryCode: string;
  area : [AreaLevel1, AreaLevel2];
  hasChildren: boolean
};

export type User = Omit<SignUpUser, "password"> & {id: string};
export type SignInUser = Pick<SignUpUser, "email" | "password">;
