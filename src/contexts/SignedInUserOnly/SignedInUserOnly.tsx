import { userState } from "@atoms/user.atoms";
import { commonHooks } from "@hooks";
import { UserTypes } from "@types";
import { notification } from "antd";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";
import { useRecoilValue } from "recoil";

type SignedInUserOnlyContextValue = {
  user: UserTypes.User;
};

const SignInUserOnlyContext = createContext<SignedInUserOnlyContextValue>({
  user: {} as UserTypes.User,
});

const SignedInUserOnly = ({ children }: { children: React.ReactNode }) => {
  const state = commonHooks.useSsrRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
    if (state.initialized) {
      const [user] = state.state;

      if (!user) {
        router.replace("/login-landing");
        notification.info({ message: "서비스 이용 전 로그인이 필요합니다 :)" });
      }
    }
  }, [state]);

  if (!state.initialized) {
    return <></>;
  }

  const [user] = state.state;
  if (!user) return <></>;

  return (
    <SignInUserOnlyContext.Provider value={{ user }}>
      {children}
    </SignInUserOnlyContext.Provider>
  );
};

export const useSignedInUserOnly = () => {
  const context = useContext(SignInUserOnlyContext);

  if (!context)
    throw new Error(
      "You have to use this hook within SignedInUserOnly context."
    );

  return context;
};

export default SignedInUserOnly;
