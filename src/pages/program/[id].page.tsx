import { commonUtils } from "@utils";
import { Flex, Spin } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  const _id = router.query.id;

  const id = typeof _id === "string" ? commonUtils.parseNum(_id) : null;

  useEffect(() => {
    if (_id !== undefined && id === null) {
      router.replace("/");
    }
  }, [_id, id]);

  if (!id)
    return (
      <Flex style={{ padding: "60px" }} justify="center">
        <Spin />
      </Flex>
    );

  return <></>;
};
export default Index;
