import { CommonTypes } from "@types";
import { Flex, Image, Typography } from "antd";
const { Text } = Typography;

const MenuItem = ({ logoUrl, title }: CommonTypes.Menu) => {
  return (
    <Flex vertical gap={8} style={{ height: 90 }}>
      <Flex
        style={{
          width: 55,
          height: 55,
          backgroundColor: "rgba(0,0,0,0.04)",
          borderRadius: 10,
        }}
        align="center"
        justify="center"
      >
        <Image width={30} src={logoUrl} preview={false} />
      </Flex>
      <Text
        strong
        style={{
          fontSize: 12,
          textAlign: "center",
          lineHeight: 1.1,
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default MenuItem;
