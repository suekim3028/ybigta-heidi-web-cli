import { CommonTypes } from "@types";
import { Card, Col, Flex, Image, Typography } from "antd";
const { Text } = Typography;
const BigMenuButton = ({
  title,
  path,
  link,
  logoUrl,
  size,
}: CommonTypes.Menu & { size: "small" | "default" }) => {
  return (
    <Flex
      style={{
        // width: "100%",
        padding: "10px 20px",
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.1)",
        // boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
      }}
    >
      {!!logoUrl && (
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
      )}
      <Flex
        style={{
          position: "relative",
          width: "100%",
        }}
        justify={logoUrl ? "flex-end" : "center"}
      >
        <Text
          style={{
            lineHeight: 1.2,
            textAlign: "right",
            fontWeight: 600,
            whiteSpace: "pre-line",
          }}
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default BigMenuButton;
