import { Flex, Space, Typography } from "antd";
const { Text } = Typography;
const InfoRow = (props: {
  title: string;
  body: string;
  type: "large" | "normal";
}) => {
  const { title, body } = props;

  return (
    <Flex>
      <Text style={{ marginRight: 12, fontSize: 16 }} strong>
        {title}
      </Text>
      <Text>{body}</Text>
    </Flex>
  );
};

export default InfoRow;
