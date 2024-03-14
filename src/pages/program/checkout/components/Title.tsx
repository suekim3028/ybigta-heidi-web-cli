import { Flex, Typography } from "antd";
const { Text } = Typography;

const Title = ({ title }: { title: string }) => {
  return (
    <Flex style={{ padding: "16px 24px" }}>
      <Text>{title}</Text>
    </Flex>
  );
};

export default Title;
