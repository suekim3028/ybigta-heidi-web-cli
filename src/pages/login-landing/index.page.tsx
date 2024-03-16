import { STYLE_CONSTS } from "@constants";
import { Button, Divider, Flex, Image, Space } from "antd";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <Flex vertical align="center" style={{ padding: "50px 0px" }} gap={20}>
      <Image
        preview={false}
        width={200}
        src={"/images/logo.png"}
        style={{ borderRadius: "100%" }}
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
