import { ProgramTag } from "@components";
import useProgramDetail from "@queries/useProgramDetail";
import { commonUtils } from "@utils";
import { Col, Flex, Image, Row, Spin, Tag, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DoubleRightOutlined, StarOutlined } from "@ant-design/icons";

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

  if (typeof id !== "number")
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
        <Flex>
          <Flex
            style={{
              width: "100%",
              padding: 16,
              overflowX: "scroll",
              scrollbarWidth: "none",
            }}
            gap={12}
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
      </Flex>

      <Flex vertical>
        <Text style={{ fontSize: 20, marginLeft: 16 }} strong>
          후기
        </Text>
        <Flex vertical style={{ padding: 20 }} gap={20}>
          {reviews.map((review) => (
            <Flex
              vertical
              flex={1}
              style={{
                padding: "20px",
                borderRadius: 10,
                boxShadow: "0px 0px 20px rgba(0,0,0,0.05)",
              }}
              gap={4}
            >
              <Text strong style={{ fontSize: 18 }}>
                {review.nickname}
              </Text>
              <Text style={{ fontWeight: 400 }}>
                {new Date(review.date).toLocaleString("kr-KR")}
              </Text>
              <Flex style={{ color: "orange" }} gap={2} align="center">
                <StarOutlined size={10} />
                <Text style={{ color: "orange", fontSize: 14 }}>
                  {review.rate.toFixed(1)}
                </Text>
              </Flex>

              <Row gutter={[6, 6]} style={{ margin: "12px 0px" }}>
                {review.imageUrls.slice(0, 4).map((image) => (
                  <Col span={12} style={{ height: "calc(100vw*0.3)" }}>
                    <Image
                      preview={false}
                      src={image}
                      style={{ objectFit: "cover", borderRadius: 12 }}
                      width={"100%"}
                      height={"100%"}
                    />
                  </Col>
                ))}
              </Row>
              <Flex gap={4} style={{ marginTop: 4 }}>
                {review.hashtags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </Flex>
              <Text style={{ whiteSpace: "pre-line", marginTop: 8 }}>
                {review.body}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Index;
