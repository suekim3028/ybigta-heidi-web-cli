import { CommonTypes } from "@types";
import { Image } from "antd";

const Banner = ({ imageUrl, link }: CommonTypes.Banner) => {
  return (
    <Image
      src={imageUrl}
      style={{ objectFit: "contain", objectPosition: "center" }}
      preview={false}
    />
  );
};

export default Banner;
