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
      name: "전국 스탬프 투어 맵",
    },
  ];

  return (
    <Flex vertical align="center" flex={1} style={{ padding: "20px 0px" }}>
      <Flex
        vertical
        align={"stretch"}
        style={{ maxWidth: 600, width: "100%" }}
        gap={20}
      >
        <Row justify={"space-around"} style={{ width: "100%" }}>
          {menus.map(({ logoUrl, name }) => (
            <Col>
              <Flex
                style={{
                  width: 60,
                  height: 60,

                  backgroundColor: "rgba(0,0,0,0.1)",
                  border: "1px solid gray",
                  borderRadius: 20,
                }}
                align="center"
                justify="center"
              >
                <Image width={"90%"} src={logoUrl} />
              </Flex>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: 500,
                  whiteSpace: "pre-line",
                }}
              >
                {name}
              </Text>
            </Col>
          ))}
        </Row>
        <Row justify={"space-around"}>
          {bigMenus.map(({ logoUrl, name }) => (
            <Col
              span={10}
              style={{
                alignItems: "center",

                justifyContent: "center",
              }}
            >
              <Card>
                <Image width={50} src={logoUrl} />
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: 500,
                    wordBreak: "break-all",
                  }}
                >
                  {name}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Flex>
    </Flex>
  );
};

export default MenuList;
