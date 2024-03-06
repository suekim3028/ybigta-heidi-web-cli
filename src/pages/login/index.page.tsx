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
        width={250}
        height={250}
        src={
          "https://static.vecteezy.com/system/resources/thumbnails/011/883/296/small/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg"
        }
      />

      <Login />
    </Flex>
  );
};

export default LoginPage;
