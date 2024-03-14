import { useSignedInUserOnly } from "@contexts";
import { Flex, Typography } from "antd";
import InfoRow from "./InfoRow";

const { Text } = Typography;
const ReserveInfo = () => {
  const { user } = useSignedInUserOnly();
  return (
    <Flex vertical gap={12}>
      <Text strong style={{ fontSize: 18 }}>
        예약자 정보
      </Text>
      <InfoRow title={"이름"} body={user.name} type={"normal"} />
      <InfoRow
        title={"전화번호"}
        body={`${user.phoneCountryCode} ${user.phoneLocalNumber}`}
        type={"normal"}
      />
      <InfoRow title={"이메일"} body={user.email} type={"normal"} />
    </Flex>
  );
};

export default ReserveInfo;
