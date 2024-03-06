import { hasUserState } from "@atoms/user.atoms";
import { Button, Flex, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Login from "./components/Login/Login";
import { userHooks } from "@hooks";

const LoginPage = () => {
  const router = useRouter();
  userHooks.useGuestOnly();
  return (
    <Flex vertical flex={1} justify="space-between">
      <Flex vertical style={{ padding: 20 }}>
        <Typography.Title>Login</Typography.Title>
      </Flex>
      <Login />
    </Flex>
  );
};

export default LoginPage;
