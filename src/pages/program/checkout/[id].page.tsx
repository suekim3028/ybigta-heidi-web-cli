import { SignedInUserOnly, useSignedInUserOnly } from "@contexts";
import { commonHooks } from "@hooks";
import {
  Button,
  Divider,
  Flex,
  Form,
  Radio,
  Row,
  Select,
  Spin,
  Typography,
} from "antd";
import { useRouter } from "next/router";
import ReserveInfo from "./components/ReserveInfo";
import { STYLE_CONSTS } from "@constants";

const { Text } = Typography;

const IndexComponent = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const { user } = useSignedInUserOnly();
  const { data } = commonHooks.useProductDetailOnIdQuery(user.id);

  if (!data)
    return (
      <Flex style={{ padding: "60px" }} justify="center">
        <Spin />
      </Flex>
    );

  const { name } = data.program;

  return (
    <Flex
      style={{
        width: "100%",
        height: "100%",
        padding: 0,
      }}
      vertical
    >
      <Form
        form={form}
        name="validateOnly"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 600,
        }}
        labelAlign={"left"}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Flex vertical style={{ padding: 20 }}>
          <Flex align="center">
            <Text
              strong
              style={{ fontSize: 20, color: STYLE_CONSTS.PRIMARY_COLOR }}
            >
              {name}
            </Text>

            <Divider type="vertical" />
            <Text
              style={{
                fontSize: 18,
                color: "rgba(0,0,0,0.7)",
                whiteSpace: "break-spaces",
                verticalAlign: "center",
              }}
            >
              예약
            </Text>
          </Flex>

          <Divider />
          <ReserveInfo />
          <Divider />

          <Text strong style={{ fontSize: 18 }}>
            할인 / 쿠폰
          </Text>

          <Flex style={{ marginTop: 15 }}>
            <Flex
              flex={1}
              style={{ marginRight: 20, alignItems: "center" }}
              align="center"
            >
              <Select
                style={{ width: "100%" }}
                defaultValue={"스탬프 10개 달성 15% 할인"}
              >
                {["스탬프 10개 달성 15% 할인"].map((value) => (
                  <Radio value={value} defaultChecked>
                    {value}
                  </Radio>
                ))}
              </Select>
            </Flex>

            <Text strong style={{ color: "rgba(0,0,0,0.7)" }}>
              -2000원
            </Text>
          </Flex>
          <Divider />
          <Flex justify="space-between">
            <Text strong style={{ fontSize: 18 }}>
              결제금액
            </Text>
            <Text strong style={{ color: "rgba(0,0,0,0.7)" }}>
              {(27000).toLocaleString()} 원
            </Text>
          </Flex>
          <Divider />
          <Flex vertical>
            <Text strong style={{ fontSize: 18, marginBottom: 20 }}>
              결제방식
            </Text>

            <Radio.Group
              defaultValue="a"
              buttonStyle="outline"
              style={{ width: "100%" }}
              size="large"
            >
              <Radio.Button value="a">신용카드</Radio.Button>
              <Radio.Button value="b">카카오페이</Radio.Button>
            </Radio.Group>
          </Flex>
        </Flex>
      </Form>

      <Button
        onClick={() => router.replace("checkout-complete")}
        type={"primary"}
        style={{
          width: "calc(100vw - 40px)",
          position: "fixed",
          bottom: 20,
          left: 20,
        }}
        size={"large"}
      >
        예약하기
      </Button>
    </Flex>
  );
};

const Index = () => (
  <SignedInUserOnly>
    <IndexComponent />
  </SignedInUserOnly>
);
export default Index;
