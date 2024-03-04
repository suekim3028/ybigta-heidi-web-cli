import { ProgramTypes } from "@types";
import { Button, Flex, Image, Tag, Typography } from "antd";
import Stars from "./components/Stars/Stars";
import { DoubleRightOutlined } from "@ant-design/icons";
const { Text } = Typography;

const ProgramItem = ({ name, rate, thumbnailUrl }: ProgramTypes.Item) => {
  return (
    <Flex justify="space-between">
      <Flex>
        <Image
          src={thumbnailUrl}
          preview={false}
          width={40}
          height={40}
          style={{ borderRadius: 10 }}
        />
        <Flex vertical>
          <Text>{name}</Text>
          <Flex>
            <Stars rate={rate} />
            <Tag>{rate.toFixed(1)}</Tag>
          </Flex>
        </Flex>
      </Flex>
      <Button type={"text"} icon={<DoubleRightOutlined />} />
    </Flex>
  );
};
export default ProgramItem;
