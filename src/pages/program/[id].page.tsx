import { ProgramTag } from "@components";
import useProgramDetail from "@queries/useProgramDetail";
import { commonUtils } from "@utils";
import { Flex, Image, Spin, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

const { Text, Title } = Typography;

const Index = () => {
  const router = useRouter();
  const _id = router.query.id;

  const id = typeof _id === "string" ? commonUtils.parseNum(_id) : null;
  const { data, isLoading } = useProgramDetail({ id: id ?? undefined });

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

  if (!data) return <></>;

  const {
    thumbnailUrl,
    name,
    description,
    healthResult,
    relatedProgramList,
    reviews,
    category,
  } = data;

  return (
    <Flex vertical>
      <Flex vertical style={{ padding: 15 }}>
        <Flex>
          <Image
            src={thumbnailUrl}
            width={"100%"}
            height={"100%"}
            preview={false}
            style={{ borderRadius: 20, objectFit: "cover", minWidth: 200 }}
          />
        </Flex>
        <Flex vertical flex={1} style={{ padding: "20px 0px" }} gap={12}>
          <Flex vertical gap={10}>
            <ProgramTag category={category} />
            <Text strong style={{ fontSize: 20 }}>
              {name}
            </Text>
          </Flex>
          <Text style={{ whiteSpace: "pre-line" }}>{description}</Text>
        </Flex>
        <Flex
          style={{
            backgroundColor: "rgba(0,0,0,0.04)",
            borderRadius: 20,
            padding: "12px 20px",
          }}
          vertical
        >
          <Text
            style={{ fontSize: 18, color: "rgba(0,0,0,0.6)", fontWeight: 500 }}
          >
            건강효과
          </Text>

          <Flex
            align="flex-end"
            justify="center"
            style={{ padding: "12px 0px" }}
          >
            <Text style={{ fontSize: 32, fontWeight: 600 }}>
              {healthResult.toLocaleString()}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 8, marginLeft: 4 }}>
              kcal
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex style={{ padding: "16px 0px" }} vertical>
        <Text style={{ fontSize: 20, marginLeft: 16 }} strong>
          연관 상품
        </Text>
        <Flex
          style={{
            width: "100%",
            padding: 16,
            // overflowY: "visible",
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
          gap={10}
        >
          {relatedProgramList.map((program) => (
            <Flex
              vertical
              style={{
                padding: "20px ",
                borderRadius: 10,
                boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
              }}
              gap={4}
            >
              <Image
                preview={false}
                src={program.thumbnailUrl}
                width={120}
                style={{ borderRadius: 10, marginBottom: 12 }}
              />
              <ProgramTag category={program.category} />
              <Text strong>{program.name}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex vertical>
        <Text style={{ fontSize: 20, marginLeft: 16 }} strong>
          후기
        </Text>
        {reviews.map((review) => (
          <Flex vertical>
            <Text>{review.nickname}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
export default Index;
