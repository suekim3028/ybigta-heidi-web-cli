import { UserTypes } from "@types";
import API from "./API";

type SignInResponse = {
  token: string;
  user: UserTypes.User;
};

const dummySignUpUser: UserTypes.SignUpUser = {
  id: "suebin1029",
  password: "12341234",
  gender: "F",
  height: 185,
  weight: 30,
  name: "김수빈",
  strength: "BAD",
};

export const signIn = async (
  data: UserTypes.SignInUser
): Promise<SignInResponse> => {
  return {
    token: "",
    user: dummySignUpUser,
  };
};

export const signUp = async (
  data: UserTypes.SignUpUser
): Promise<SignInResponse> => {
  return {
    token: "",
    user: dummySignUpUser,
  };
};
