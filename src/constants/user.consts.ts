import { UserTypes } from "@types";

export const GENDER_LIST = ["F", "M"] as const;
export const GENDER_LABEL: Record<UserTypes.Gender, string> = {
  F: "여자",
  M: "남자",
};

export const STRENGTH_LIST = ["WEAK", "NORMAL", "STRONG"] as const;
export const STRENGTH_LABEL: Record<UserTypes.Strength, string> = {
  NORMAL: "보통",
  STRONG: "좋음",
  WEAK: "약함",
};
