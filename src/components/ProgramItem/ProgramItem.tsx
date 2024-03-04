import { ProgramTypes } from "@types";
import { Button, Flex, Image, Rate, Tag, Typography } from "antd";
import { DoubleRightOutlined, StarOutlined } from "@ant-design/icons";
const { Text } = Typography;

const ProgramItem = ({
  name,
  rate,
  thumbnailUrl,
  category,
}: ProgramTypes.Item) => {
  return (
    <Flex justify="space-between" style={{ padding: 10 }} align="center">
      <Flex align={"center"} gap={12}>
        <Image
          src={thumbnailUrl}
          preview={false}
          width={50}
          height={50}
          style={{ borderRadius: 10 }}
        />
        <Flex vertical align={"flex-start"} gap={2}>
          <Tag style={{ fontSize: 12, padding: "0px 4px" }}>{category}</Tag>
          <Text style={{ fontSize: 16 }} strong>
            {name}
          </Text>
        </Flex>
      </Flex>
      <Flex
        style={{ color: "orange" }}
        gap={2}
        align="center"

        // flex={1}
      >
        <StarOutlined size={10} />
        <Text style={{ color: "orange", fontSize: 14 }}>{rate.toFixed(1)}</Text>
      </Flex>
    </Flex>
  );
};
export default ProgramItem;
