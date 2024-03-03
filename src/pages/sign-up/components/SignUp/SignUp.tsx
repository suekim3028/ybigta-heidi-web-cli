import { USER_CONSTS } from "@constants";
import { commonHooks, userHooks } from "@hooks";
import { UserTypes } from "@types";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Typography,
  notification,
} from "antd";

export const SignUp = () => {
  const [form] = Form.useForm();
  const { submittable } = commonHooks.useFormSubmittable(form);
  const { signUp } = userHooks.useAuth();

  const onFinish = (values: UserTypes.SignUpUser) => {
    signUp(values, (user) => {
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
      <Form.Item<UserTypes.SignUpUser>
        label="이름"
        style={{ marginBottom: 50 }}
        name="name"
        rules={[{ required: true, message: "이름 입력해주세요." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<UserTypes.SignUpUser>
        label="아이디"
        name="id"
        rules={[{ required: true, message: "아이디를 입력해주세요." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<UserTypes.SignUpUser>
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
      >
        <Input.Password />
      </Form.Item>

      <Typography.Text>건강 정보</Typography.Text>

      <Form.Item<UserTypes.SignUpUser>
        label="성별"
        name="gender"
        rules={[{ required: true, message: "키를 입력해주세요." }]}
      >
        <Radio.Group>
          {USER_CONSTS.GENDER_LIST.map((value) => (
            <Radio value={value}> {USER_CONSTS.GENDER_LABEL[value]} </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<UserTypes.SignUpUser>
        label="키"
        name="height"
        rules={[{ required: true, message: "키를 입력해주세요." }]}
      >
        <InputNumber min={100} max={200} step="0.1" defaultChecked />
      </Form.Item>

      <Form.Item<UserTypes.SignUpUser>
        label="몸무게"
        name="weight"
        rules={[{ required: true, message: "몸무게를 입력해주세요." }]}
      >
        <InputNumber min={20} max={200} step="0.1" defaultChecked />
      </Form.Item>

      <Form.Item<UserTypes.SignUpUser>
        label="평소 체력"
        name="strength"
        rules={[{ required: true, message: "키를 입력해주세요." }]}
      >
        <Select>
          {USER_CONSTS.STRENGTH_LIST.map((value) => (
            <Radio value={value}> {USER_CONSTS.STRENGTH_LABEL[value]} </Radio>
          ))}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!submittable}
          size="large"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
