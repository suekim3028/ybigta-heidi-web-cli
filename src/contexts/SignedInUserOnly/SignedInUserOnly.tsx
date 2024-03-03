import { userState } from "@atoms/user.atoms";
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
  const user = useRecoilValue(userState);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
      notification.info({ message: "먼저 로그인 해주세요 :)" });
    }
  }, [!!user]);

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
