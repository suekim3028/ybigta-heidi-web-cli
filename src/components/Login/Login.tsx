import { commonHooks } from "@hooks";
import { UserType } from "@types";
import { Button, Form, Input } from "antd";
import React from "react";

export const Login = () => {
  const [form] = Form.useForm();
  const { submittable } = commonHooks.useFormSubmittable(form);

  const onFinish = (values: UserType.SignInUser) => {
    console.log("Success:", values);
  };

  console.log({ submittable });
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
      <Form.Item<UserType.SignInUser>
        label="아이디"
        name="id"
        rules={[{ required: true, message: "아이디를 입력해주세요." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<UserType.SignInUser>
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" disabled={!submittable}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
