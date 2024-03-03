import { USER_CONSTS } from "@constants";

export type Gender = (typeof USER_CONSTS.GENDER_LIST)[number];

export type Strength = (typeof USER_CONSTS.STRENGTH_LIST)[number];

export type SignUpUser = {
  id: string;
  password: string;
  name: string;
  gender: Gender;
  height: number;
  weight: number;
  strength: Strength;
};

export type User = Omit<SignUpUser, "password">;
export type SignInUser = Pick<SignUpUser, "id" | "password">;
