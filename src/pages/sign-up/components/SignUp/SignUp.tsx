import { userApis } from "@apis";
import { STYLE_CONSTS, USER_CONSTS } from "@constants";
import { commonHooks, userHooks } from "@hooks";
import { UserTypes } from "@types";
import {
  Button,
  Cascader,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Typography,
  notification,
} from "antd";

const { Option } = Select;

const { Text } = Typography;

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const areaOptions: Option[] = USER_CONSTS.AREA_LIST.map(
  ({ area1, area2: area2List }): Option => ({
    value: area1,
    label: area1,
    children: area2List.map((area2) => ({ value: area2, label: area2 })),
  })
);

export const SignUp = () => {
  const [form] = Form.useForm<UserTypes.SignUpUser>();
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

  const prefixSelector = (
    <Form.Item<UserTypes.SignUpUser> name="phoneCountryCode" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="82">+82</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Flex style={{ padding: "60px 40px" }} vertical gap={40}>
      <Text style={{ fontSize: 24 }} strong>
        회원가입
      </Text>
      <Form
        form={form}
        name="validateOnly"
        //   layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 600,
        }}
        labelAlign={"left"}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Flex style={{ padding: "30px 0px 20px" }}>
          <Typography.Text
            style={{ fontSize: 20, color: STYLE_CONSTS.PRIMARY_COLOR }}
          >
            기본 정보
          </Typography.Text>
        </Flex>
        <Form.Item<UserTypes.SignUpUser>
          label="이름"
          name="name"
          rules={[{ required: true, message: "이름을 입력해주세요." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<UserTypes.SignUpUser>
          label="이메일"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "이메일을 입력해주세요.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<UserTypes.SignUpUser>
          name="phoneLocalNumber"
          label="전화번호"
          rules={[{ required: true, message: "전화번호를 입력해주세요." }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item<UserTypes.SignUpUser>
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<UserTypes.SignUpUser>
          label="출생연도"
          name="birthYear"
          rules={[{ required: true, message: "출생연도를 입력해주세요." }]}
        >
          <InputNumber min={1900} max={new Date().getFullYear()} />
        </Form.Item>

        <Form.Item<UserTypes.SignUpUser>
          label="직업"
          name="job"
          rules={[{ required: true, message: "직업을 입력해주세요." }]}
        >
          <Select>
            {USER_CONSTS.JOB_LIST.map((job) => (
              <Select.Option value={job}>{job}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item<UserTypes.SignUpUser>
          label="자녀 유무"
          name="hasChildren"
          rules={[{ required: true, message: "자녀 유무를 입력해주세요." }]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={true}>자녀 있음</Radio>
              <Radio value={false}>자녀 없음</Radio>
          </Space>
          </Radio.Group>
        </Form.Item>

        <Flex style={{ padding: "30px 0px 20px" }}>
          <Typography.Text
            style={{ fontSize: 20, color: STYLE_CONSTS.PRIMARY_COLOR }}
          >
            건강 정보
          </Typography.Text>
        </Flex>
        <Flex vertical align="stretch">
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
            <InputNumber
              min={100}
              max={200}
              step="0.1"
              defaultChecked
              addonAfter={"cm"}
            />
          </Form.Item>

          <Form.Item<UserTypes.SignUpUser>
            label="몸무게"
            name="weight"
            rules={[{ required: true, message: "몸무게를 입력해주세요." }]}
          >
            <InputNumber
              min={20}
              max={200}
              step="0.1"
              defaultChecked
              addonAfter={"kg"}
            />
          </Form.Item>

          <Form.Item<UserTypes.SignUpUser>
            rules={[{ required: true, message: "키를 입력해주세요." }]}
            label={"사는 지역"}
            name={"area"}
          >
            <Cascader options={areaOptions} />
          </Form.Item>
        </Flex>

        <Form.Item
          wrapperCol={{ span: 24 }}
          style={{ alignSelf: "center", marginTop: 20 }}
        >
          <Button
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            disabled={!submittable}
            size="large"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default SignUp;
