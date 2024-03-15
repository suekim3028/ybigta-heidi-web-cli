import { UserTypes } from "@types";

export const GENDER_LIST = ["F", "M"] as const;
export const GENDER_LABEL: Record<UserTypes.Gender, string> = {
  F: "여자",
  M: "남자",
};

export const JOB_LIST = [
  "주부 (전업주부, 파트타임 근무 주부)",
  "사무직 (일반사무직, 공무원, 직업군인)",
  "퇴직/연금생활자",
  "무직",
  "학생 (초중고학생, 대학생, 대학원생)",
  "전문직 (의사, 판검사, 예술가, 종교인)",
  "기타 ",
  "생산/노무직 (생산감독, 경비원, 공장근로자)",
  "교직 (교사, 유치원교사, 학원강사)",
  "자영업 (도소매업, 숙박업, 미용업)",
  "판매직 (상점점원, 보험설계사, 노점상)",
  "관리직 (사장, 간부, 고위공무원)",
  "기능직 (자동차정비, 운전기사, 안경사, 택시기사)",
  "서비스직 (요식업, 숙박업, 미용실종업원)",
  "농/축/광/수산업 (축산, 낙농업, 수산, 임업, 광업)",
] as const;

export const AREA_LIST: {
  area1: string;
  area2: string[];
}[] = [
  {
    area1: "서울시",
    area2: ["강남구", "서대문구"],
  },
];
