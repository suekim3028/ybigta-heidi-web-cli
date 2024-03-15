import { STYLE_CONSTS } from "@constants";
import { commonHooks, userHooks } from "@hooks";
import { UserTypes } from "@types";
import {
  Button,
  Divider,
  Flex,
  Form,
  FormInstance,
  Input,
  Row,
  Space,
  notification,
} from "antd";
import { useRouter } from "next/router";

export const Login = () => {
  const [form] = Form.useForm();
  const { signIn } = userHooks.useAuth();

  const onFinish = (values: UserTypes.SignInUser) => {
    signIn(values, (user) => {
      notification.success({ message: `${user.name} 님, 안녕하세요!` });
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const router = useRouter();

  return (
    <Flex style={{ padding: "0px 20px" }} vertical align="center" flex={1}>
      <Form
        form={form}
        name="validateOnly"
        labelCol={{ span: 8 }}
        // wrapperCol={{ span: s16 }}
        style={{
          maxWidth: 600,
          width: "100%",
          alignItems: "center",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<UserTypes.SignInUser>
          label="이메일"
          name="email"
          rules={[
            {
              required: true,
              message: "이메일을 입력해주세요.",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<UserTypes.SignInUser>
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
        >
          <Input.Password />
        </Form.Item>

        <Row style={{ width: "100%", marginBottom: 50 }} justify={"center"}>
          <Space>
            <Button
              size="small"
              type={"text"}
              style={{ color: STYLE_CONSTS.PRIMARY_COLOR }}
              onClick={() => router.push("sign-up")}
            >
              회원가입
            </Button>
            <Divider type={"vertical"} />

            <Button
              type="text"
              size="small"
              style={{ color: STYLE_CONSTS.PRIMARY_COLOR }}
            >
              아이디/비밀번호 찾기
            </Button>
          </Space>
        </Row>

        <Form.Item wrapperCol={{ span: 24 }} style={{ marginTop: "auto" }}>
          <SubmitButton form={form} />
        </Form.Item>
      </Form>
    </Flex>
  );
};

const SubmitButton = ({ form }: { form: FormInstance }) => {
  const { submittable } = commonHooks.useFormSubmittable(form);

  return (
    <Button
      style={{ width: "100%" }}
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      size="large"
    >
      로그인
    </Button>
  );
};

export default Login;
