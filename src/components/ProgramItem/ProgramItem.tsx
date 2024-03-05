import { ProgramTypes } from "@types";
import { Button, Flex, Image, Rate, Tag, Typography } from "antd";
import { DoubleRightOutlined, StarOutlined } from "@ant-design/icons";
import { PROGRAM_CONTS } from "@constants";
import { useRouter } from "next/router";
const { Text } = Typography;

const ProgramItem = ({
  name,
  rate,
  thumbnailUrl,
  category,
  id,
}: ProgramTypes.Mini) => {
  const router = useRouter();

  return (
    <Flex
      justify="space-between"
      style={{ padding: 10 }}
      align="center"
      onClick={() => router.push(`/program/${id}`)}
    >
      <Flex align={"center"} gap={12}>
        <Image
          src={thumbnailUrl}
          preview={false}
          width={60}
          height={60}
          style={{ borderRadius: 10 }}
        />
        <Flex vertical align={"flex-start"} gap={2}>
          <Tag
            color={PROGRAM_CONTS.CATEGORY_TAG_COLOR[category]}
            style={{ fontSize: 12, padding: "0px 4px" }}
            bordered={false}
          >
            {category}
          </Tag>
          <Text style={{ fontSize: 16 }} strong>
            {name}
          </Text>
        </Flex>
      </Flex>
      <Flex style={{ color: "orange" }} gap={2} align="center">
        <StarOutlined size={10} />
        <Text style={{ color: "orange", fontSize: 14 }}>{rate.toFixed(1)}</Text>
      </Flex>
    </Flex>
  );
};
export default ProgramItem;
