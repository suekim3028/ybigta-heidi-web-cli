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
    <>
      <Flex vertical>
        <Typography.Title>Login</Typography.Title>
        <Login />
        <Flex vertical={false} gap={"small"}>
          <Button
            size="large"
            type={"dashed"}
            onClick={() => router.push("sign-up")}
          >
            회원가입
          </Button>
          <Button type="text" size="large">
            아이디/비밀번호 찾기
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
