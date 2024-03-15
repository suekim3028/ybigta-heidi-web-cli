import { Flex, Typography } from "antd";
const { Text } = Typography;

const InfoRow = ({ title, body }: { title: string; body: string }) => {
  return (
    <Flex align={"center"} gap={12}>
      <Text strong style={{ fontSize: 17, color: "rgba(0,0,0,0.6)" }}>
        {title}
      </Text>
      <Text color={"rgba(0,0,0,0.8)"}>{body}</Text>
    </Flex>
  );
};

export default InfoRow;
