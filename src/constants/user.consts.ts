import { UserTypes } from "@types";

export const GENDER_LIST = ["F", "M"] as const;
export const GENDER_LABEL: Record<UserTypes.Gender, string> = {
  F: "여자",
  M: "남자",
};


export const JOB_LIST = ["학생","주부"] as const

export const AREA_LIST : ({
  area1: string;
  area2: string[]
})[] = [
  {
    area1: "서울시",
    area2:["강남구","서대문구"],
  }
]