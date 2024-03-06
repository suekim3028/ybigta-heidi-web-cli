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
    <Flex style={{ padding: "0px 20px" }}>
      <Form
        form={form}
        name="validateOnly"
        //   layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<UserTypes.SignInUser>
          label="아이디"
          name="id"
          rules={[{ required: true, message: "아이디를 입력해주세요." }]}
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

        <Row>
          <Button
            size="large"
            type={"text"}
            onClick={() => router.push("sign-up")}
          >
            회원가입
          </Button>
          <Divider type={"vertical"} />
          <Button type="text" size="large">
            아이디/비밀번호 찾기
          </Button>
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
      Submit
    </Button>
  );
};

export default Login;
