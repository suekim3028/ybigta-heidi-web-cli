import { StarOutlined } from "@ant-design/icons";
import { ProgramTag } from "@components";
import { SignedInUserOnly, useSignedInUserOnly } from "@contexts";
import { commonHooks } from "@hooks";
import usePrograms from "@queries/usePrograms";
import { programUtils } from "@utils";
import { Button, Col, Flex, Image, Row, Spin, Tag, Typography } from "antd";
import { useRouter } from "next/router";

const { Text, Title } = Typography;

const IndexComponent = () => {
  const router = useRouter();

  const {
    user: { id: userId },
  } = useSignedInUserOnly();
  const { data } = commonHooks.useProductDetailOnIdQuery(userId);
  const { data: recommendedProgramsData } = usePrograms(userId);

  if (!data || !recommendedProgramsData)
    return (
      <Flex style={{ padding: "60px" }} justify="center">
        <Spin />
      </Flex>
    );

  const { name, healthResult, reviews, category, id } = data.program;

  return (
    <>
      <Flex vertical>
        <Flex vertical style={{ padding: 15 }}>
          <Flex>
            <Image
              src={""} // TODO
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
            <Text style={{ whiteSpace: "pre-line" }}>{"....."}</Text>
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
              style={{
                fontSize: 18,
                color: "rgba(0,0,0,0.6)",
                fontWeight: 500,
              }}
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
              {recommendedProgramsData.programs.map((program) => (
                <Flex
                  vertical
                  style={{
                    padding: "20px ",
                    borderRadius: 10,
                    boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
                  }}
                  onClick={() => router.push(`/program/${program.id}`)}
                  gap={4}
                >
                  <Image
                    preview={false}
                    src={programUtils.getProgramThumbnail(program)}
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
      <Button
        onClick={() => router.push(`checkout/${id}`)}
        type={"primary"}
        style={{
          width: "calc(100vw - 40px)",
          position: "fixed",
          bottom: 20,
          left: 20,
        }}
        size={"large"}
      >
        예약하기
      </Button>
    </>
  );
};

const Index = () => {
  return (
    <SignedInUserOnly>
      <IndexComponent />
    </SignedInUserOnly>
  );
};

export default Index;
