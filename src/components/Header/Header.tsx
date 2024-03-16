import { Button, Flex, Image, Typography } from "antd";
import { ReactNode } from "react";
const { Text } = Typography;
import { LeftOutlined } from "@ant-design/icons";

const Header = ({ home }: { home?: boolean }) => {
  return (
    <Flex
      style={{
        padding: "10px 20px",
        position: "sticky",
        top: 0,
        zIndex: 3,
        backgroundColor: "white",
      }}
      gap={12}
      align="center"
    >
      {home ? (
        <>
          <Image
            src={"/images/logo.png"}
            width={40}
            style={{ borderRadius: "100%" }}
          />
          <Flex vertical>
            <Text strong style={{ fontSize: 19, fontWeight: 700 }}>
              HEIDI
            </Text>
          </Flex>
        </>
      ) : (
        <>
          <Button shape="circle" icon={<LeftOutlined />} />
        </>
      )}
    </Flex>
  );
};

export default Header;
