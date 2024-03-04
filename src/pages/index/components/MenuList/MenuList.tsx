import { CommonTypes } from "@types";
import { Card, Col, Flex, Image, Row, Typography } from "antd";
const { Text } = Typography;
const MenuList = () => {
  const menus: CommonTypes.Menu[] = [
    {
      id: "flower",
      logoUrl: "https://cdn-icons-png.flaticon.com/512/4216/4216757.png",
      name: `벚꽃 명소\n숙소 예약`,
    },
    {
      id: "event",
      logoUrl:
        "https://cdn-icons-png.freepik.com/512/5024/5024442.png?ga=GA1.1.1044121950.1708461851&",
      name: "이벤트",
    },
    {
      id: "hot-deal",
      logoUrl:
        "https://cdn-icons-png.freepik.com/512/673/673011.png?ga=GA1.1.1044121950.1708461851&",
      name: "특가",
    },
    {
      id: "with-children",
      logoUrl:
        "https://cdn-icons-png.freepik.com/512/7433/7433655.png?ga=GA1.1.1044121950.1708461851&",
      name: "봄 맞이\n아이 투어",
    },
  ];

  const bigMenus: CommonTypes.Menu[] = [
    {
      id: "game",
      logoUrl:
        "https://cdn-icons-png.freepik.com/512/4832/4832398.png?ga=GA1.1.1044121950.1708461851&",
      name: "재배하러\n가기",
    },
    {
      id: "map",
      logoUrl:
        "https://cdn-icons-png.freepik.com/512/2006/2006586.png?ga=GA1.1.1044121950.1708461851&",
      name: "전국 스탬프\n투어 맵",
    },
  ];

  return (
    <Flex vertical align="center" flex={1}>
      <Flex
        vertical
        align={"stretch"}
        style={{ maxWidth: 600, width: "100%" }}
        gap={20}
      >
        <Row justify={"center"} style={{ width: "100%" }} gutter={12}>
          {menus.map(({ logoUrl, name }) => (
            <Col>
              <Flex vertical gap={8}>
                <Flex
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: "rgba(0,0,0,0.04)",
                    borderRadius: 10,
                  }}
                  align="center"
                  justify="center"
                >
                  <Image width={40} src={logoUrl} preview={false} />
                </Flex>
                <Text
                  strong
                  style={{
                    fontSize: 12,
                    textAlign: "center",
                    lineHeight: 1.1,
                    whiteSpace: "pre-line",
                  }}
                >
                  {name}
                </Text>
              </Flex>
            </Col>
          ))}
        </Row>
        <Row justify={"center"} gutter={10}>
          {bigMenus.map(({ logoUrl, name }) => (
            <Col
              span={10}
              style={{
                alignItems: "center",

                justifyContent: "center",
              }}
            >
              <Card size="small" style={{ overflow: "hidden" }}>
                <div
                  style={{
                    position: "absolute",
                    zIndex: 0,
                    opacity: 0.5,
                    left: -10,
                    top: 10,
                    height: "100%",
                    width: "50%",
                  }}
                >
                  <Image
                    preview={false}
                    height={"100%"}
                    style={{ objectFit: "contain" }}
                    src={logoUrl}
                  />
                </div>
                <Flex
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                  justify="flex-end"
                >
                  <Text
                    style={{
                      lineHeight: 1.2,
                      textAlign: "right",
                      fontWeight: 600,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {name}
                  </Text>
                </Flex>
              </Card>
            </Col>
          ))}
        </Row>
      </Flex>
    </Flex>
  );
};

export default MenuList;
