import { ProgramTypes } from "@types";
import { Button, Flex, Image, Rate, Tag, Typography } from "antd";
import { DoubleRightOutlined, StarOutlined } from "@ant-design/icons";
import { PROGRAM_CONTS } from "@constants";
import { useRouter } from "next/router";
import { programUtils } from "@utils";
const { Text } = Typography;

const ProgramItem = ({
  name,
  rate,
  category,
  id,
  place,
}: ProgramTypes.Mini) => {
  const router = useRouter();

  return (
    <Flex
      justify="space-between"
      style={{ padding: 10 }}
      align="flex-start"
      onClick={() => router.push(`/program/${id}`)}
    >
      <Flex align={"center"} gap={12} justify="space-between" flex={1}>
        <Flex flex={0}>
          <Image
            src={programUtils.getProgramThumbnail({ category, id })}
            preview={false}
            width={60}
            height={60}
            style={{ borderRadius: 10, display: "flex" }}
          />
        </Flex>
        <Flex vertical align={"flex-start"} flex={1}>
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
          <Text style={{ fontSize: 12, color: "rgba(0,0,0,0.4)" }}>
            {place}
          </Text>
        </Flex>

        <Flex
          style={{ color: "orange", justifySelf: "flex-end" }}
          gap={2}
          align="center"
          flex={0}
        >
          <StarOutlined size={10} />
          <Text style={{ color: "orange", fontSize: 14 }}>
            {rate.toFixed(1)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ProgramItem;
