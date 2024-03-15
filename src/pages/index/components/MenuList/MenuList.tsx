import { BigMenuButton } from "@components";
import { CommonTypes } from "@types";
import { Card, Col, Flex, Image, Row, Typography } from "antd";
import MenuItem from "../MenuItem";
const { Text } = Typography;
const MenuList = () => {
  const menus: CommonTypes.Menu[] = [
    {
      id: "flower",
      logoUrl: "	https://cdn-icons-png.flaticon.com/512/6919/6919863.png",
      title: `벚꽃 명소\n숙소 예약`,
    },
    {
      id: "event",
      logoUrl: "	https://cdn-icons-png.flaticon.com/512/3656/3656889.png",
      title: "이벤트",
    },
    {
      id: "hot-deal",
      logoUrl: "	https://cdn-icons-png.flaticon.com/512/5074/5074524.png",
      title: "특가",
    },
    {
      id: "with-children",
      logoUrl: "https://cdn-icons-png.flaticon.com/512/547/547525.png",
      title: "봄 맞이\n아이 투어",
    },
  ];

  const bigMenus: CommonTypes.Menu[] = [
    {
      id: "map",
      logoUrl:
        "https://cdn-icons-png.freepik.com/512/2006/2006586.png?ga=GA1.1.1044121950.1708461851&",
      title: "전국 스탬프\n투어 맵",
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
          {menus.map((menu) => (
            <Col>
              <MenuItem {...menu} />
            </Col>
          ))}
        </Row>
      </Flex>
    </Flex>
  );
};

export default MenuList;
