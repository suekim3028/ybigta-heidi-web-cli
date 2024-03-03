import { hasUserState } from "@atoms/user.atoms";
import { Flex, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Login from "./components/Login/Login";

const LoginPage = () => {
  const hasUser = useRecoilValue(hasUserState);
  const router = useRouter();

  useEffect(() => {
    if (hasUser) {
      router.replace("/");
    }
  }, [hasUser]);

  return (
    <>
      <Flex vertical>
        <Typography.Title>Login</Typography.Title>
        <Login />
      </Flex>
    </>
  );
};

export default LoginPage;
