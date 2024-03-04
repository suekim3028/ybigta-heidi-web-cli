import { STYLE_CONSTS } from "@constants";
import { useSignedInUserOnly } from "@contexts";
import {
  Avatar,
  Button,
  Card,
  Col,
  Flex,
  Row,
  Statistic,
  Tag,
  Typography,
} from "antd";

const { Text, Link } = Typography;

const UserProfile = () => {
  const {
    user: { name },
  } = useSignedInUserOnly();

  return (
    <Flex vertical align="flex-start" gap={20} style={{ padding: "30px 0px" }}>
      <Flex gap={12} align={"center"} style={{ paddingLeft: "3%" }}>
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
          <Row>
            <Typography.Text strong>{name} </Typography.Text>
            <Text style={{ whiteSpace: "break-spaces" }}>
              {" 님, 반가워요!"}
            </Text>
          </Row>
          <Button size={"middle"} type={"default"}>
            개인정보 수정
          </Button>
        </Flex>
      </Flex>
      <Flex
        style={{
          width: "100%",
          maxWidth: 450,
        }}
      >
        <Flex vertical align="center" gap={8} style={{ padding: "0px 20px" }}>
          <Text strong>건강 레벨</Text>
          <Tag color={"magenta"}>level. 4</Tag>
        </Flex>
        <Flex justify="center" align="center" flex={1}>
          <Flex vertical align="center" flex={1}>
            <Text type={"secondary"}>누적 건강 효과</Text>
            <Text strong>{(234).toLocaleString()} kcal</Text>
          </Flex>
          <Flex vertical align="center" flex={1}>
            <Text type={"secondary"}>누적 경제적 효과</Text>
            <Text strong>{(234).toLocaleString()} 만원</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
