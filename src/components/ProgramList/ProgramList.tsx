import ProgramItem from "@components/ProgramItem/ProgramItem";
import { PROGRAM_CONTS } from "@constants";
import { useSignedInUserOnly } from "@contexts";
import usePrograms from "@queries/usePrograms";
import { ProgramTypes } from "@types";
import { Empty, Flex, Row, Space, Spin, Typography } from "antd";
import { useState } from "react";
const { Text } = Typography;

type EntireCategory = "전체";
type SelectableCategory = ProgramTypes.Category | EntireCategory;

const SELECTABLE_CATEGORIES: SelectableCategory[] = [
  "전체",
  ...PROGRAM_CONTS.CATEGORY_LIST,
];

const ProgramList = ({
  showCategoryFilter,
}: {
  showCategoryFilter?: boolean;
}) => {
  const { user } = useSignedInUserOnly();
  const { data: _data, isLoading } = usePrograms(user.id);
  const [category, setCategory] = useState<SelectableCategory>("전체");

  if (!_data)
    return isLoading ? <Spin style={{ margin: "60px 0px" }} /> : <Empty />;

  const data = _data.programs.filter(({ category: _category }) =>
    category === "전체" ? true : category === _category
  );

  return (
    <Flex vertical>
      {showCategoryFilter ? (
        <Flex
          gap={4}
          style={{
            alignSelf: "center",
            justifyContent: "center",
            padding: "0px 20px",
          }}
          align="center"
        >
          <Flex>
            <Text strong style={{ marginRight: 10 }}>
              체험종류
            </Text>
          </Flex>
          <Flex
            flex={1}
            style={{
              width: "100%",
              overflowX: "scroll",
              scrollbarWidth: "none",
            }}
            justify="flex-start"
            gap={4}
          >
            {SELECTABLE_CATEGORIES.map((_category) => (
              <Flex
                onClick={() => setCategory(_category)}
                style={{
                  flexShrink: 0,
                  padding: "4px 8px",
                  border: "1px solid rgba(0,0,0,0.2)",
                  borderRadius: 24,
                  backgroundColor:
                    _category === category ? "rgba(0,0,0,0.05)" : undefined,
                }}
              >
                <Text
                  style={{
                    color: _category === category ? "black" : "rgba(0,0,0,0.8)",
                  }}
                  strong
                >
                  {_category}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      ) : (
        <></>
      )}
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
    </Flex>
  );
};

export default ProgramList;
