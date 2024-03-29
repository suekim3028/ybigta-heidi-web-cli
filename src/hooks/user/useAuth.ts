import { API, userApis } from "@apis";
import { userState } from "@atoms/user.atoms";
import { UserTypes } from "@types";
import { commonUtils } from "@utils";
import { useSetRecoilState } from "recoil";

export const useAuth = () => {
  const setUser = useSetRecoilState(userState);

  const signIn = (
    data: UserTypes.SignInUser,
    onSuccess: (user: UserTypes.User) => void | Promise<void>
  ) => {
    commonUtils.withErrorHandling(() => userApis.signIn(data), {
      onSuccess: ({ token, user }) => {
        API.setHeaderToken(token);
        setUser(user);
        onSuccess(user);
      },
    });
  };

  const signUp = (
    data: UserTypes.SignUpUser,
    onSuccess: (user: UserTypes.User) => void | Promise<void>
  ) => {
    commonUtils.withErrorHandling(() => userApis.signUp(data), {
      onSuccess: ({ token, user }) => {
        API.setHeaderToken(token);
        setUser(user);
        onSuccess(user);
      },
    });
  };

  return { signIn, signUp };
};
