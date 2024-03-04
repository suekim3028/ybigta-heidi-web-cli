import { STYLE_CONSTS } from "@constants";
import { useSignedInUserOnly } from "@contexts";
import { Avatar, Button, Col, Flex, Statistic, Tag, Typography } from "antd";

const { Text, Link } = Typography;

const UserProfile = () => {
  const {
    user: { name },
  } = useSignedInUserOnly();

  return (
    <Flex vertical align="flex-start" gap={20}>
      <Flex gap={12} align={"center"}>
        <Avatar
          style={{
            backgroundColor: STYLE_CONSTS.PRIMARY_COLOR,
            verticalAlign: "middle",
          }}
          size="large"
          gap={4}
        >
          {name[0]}
        </Avatar>
        <Flex vertical gap={4}>
          <Typography.Text>{name} 님, 반가워요!</Typography.Text>
          <Button size={"middle"}>개인정보 수정</Button>
        </Flex>
      </Flex>
      <Flex>
        <Flex flex={1} gap={28}>
          <Col span={100}>
            <Statistic title="누적한 건강 효과" value={1123} suffix={"kcal"} />
          </Col>

          <Col span={100}>
            <Statistic title="누적 경제적 효과" value={324} suffix={"만원"} />
          </Col>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
