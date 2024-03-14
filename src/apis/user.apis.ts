import { UserTypes } from "@types";
import API from "./API";

type SignInResponse = {
  token: string;
  user: UserTypes.User;
};

export const signIn = async (data: UserTypes.SignInUser) =>
  API.get<SignInResponse>("/users");

//

type SignUpData = Omit<
  UserTypes.SignUpUser,
  keyof Pick<
    UserTypes.SignUpUser,
    | "birthYear"
    | "hasChildren"
    | "phoneCountryCode"
    | "phoneLocalNumber"
    | "area"
  >
> & {
  birth_year: number;
  has_children: boolean;
  phone_country_code: string;
  phone_local_number: string;
  area_level_1: string;
  area_level_2: string;
};

export const signUp = async (signUpUser: UserTypes.SignUpUser) => {
  const {
    birthYear,
    hasChildren,
    phoneCountryCode,
    phoneLocalNumber,
    area,
    ...signUpUserData
  } = signUpUser;

  const data: SignUpData = {
    ...signUpUserData,
    birth_year: birthYear,
    has_children: hasChildren,
    phone_country_code: phoneCountryCode,
    phone_local_number: phoneLocalNumber,
    area_level_1: area[0],
    area_level_2: area[1],
  };
  const res = await API.post<SignInResponse>("/users", data);
  console.log(res);

  return res;
};
