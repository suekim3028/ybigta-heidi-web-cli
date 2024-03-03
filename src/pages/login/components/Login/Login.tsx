import { commonHooks, userHooks } from "@hooks";
import { UserTypes } from "@types";
import { Button, Form, FormInstance, Input, notification } from "antd";

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

  return (
    <Form
      form={form}
      name="validateOnly"
      //   layout="vertical"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <SubmitButton form={form} />
      </Form.Item>
    </Form>
  );
};

const SubmitButton = ({ form }: { form: FormInstance }) => {
  const { submittable } = commonHooks.useFormSubmittable(form);

  return (
    <Button
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
