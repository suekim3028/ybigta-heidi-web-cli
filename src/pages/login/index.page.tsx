import { hasUserState } from "@atoms/user.atoms";
import { Button, Flex, Image, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Login from "./components/Login/Login";
import { userHooks } from "@hooks";
import { STYLE_CONSTS } from "@constants";

const { Text } = Typography;
const LoginPage = () => {
  const router = useRouter();
  userHooks.useGuestOnly();
  return (
    <Flex vertical flex={1} justify="space-between" align="center">
      <Image
        preview={false}
        width={150}
        src={"/images/logo.png"}
        style={{ borderRadius: "100%", margin: "40px 0px" }}
      />

      <Login />
    </Flex>
  );
};

export default LoginPage;
