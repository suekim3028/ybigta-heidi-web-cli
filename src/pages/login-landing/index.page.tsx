import { STYLE_CONSTS } from "@constants";
import { Button, Divider, Flex, Image, Space } from "antd";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <Flex vertical align="center">
      <Image
        preview={false}
        width={250}
        src={
          "https://static.vecteezy.com/system/resources/thumbnails/011/883/296/small/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg"
        }
      />
      <Flex gap={12} vertical>
        <Space>
          <Button
            size="large"
            type={"text"}
            style={{ color: STYLE_CONSTS.PRIMARY_COLOR }}
            onClick={() => router.push("login")}
          >
            로그인
          </Button>
          <Divider type="vertical" />
          <Button
            size="large"
            style={{ color: STYLE_CONSTS.PRIMARY_COLOR }}
            type={"text"}
            onClick={() => router.push("sign-up")}
          >
            회원가입
          </Button>
        </Space>
      </Flex>
    </Flex>
  );
};

export default Index;
