import ProgramItem from "@components/ProgramItem/ProgramItem";
import usePrograms from "@queries/usePrograms";
import { Col, Divider, Empty, Flex, Space } from "antd";

const ProgramList = () => {
  const { data, isLoading } = usePrograms();

  if (!data) return <Empty />;
  return (
    <Flex vertical style={{ padding: "20px 12px" }}>
      <Space
        direction="vertical"
        split={
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          />
        }
        // size={0}
      >
        {data.map((program) => (
          <ProgramItem {...program} key={program.id} />
        ))}
      </Space>
    </Flex>
  );
};

export default ProgramList;
