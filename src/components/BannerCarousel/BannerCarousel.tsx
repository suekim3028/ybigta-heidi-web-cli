import { Carousel } from "antd";

import Banner from "@components/Banner/Banner";
import { CommonTypes } from "@types";

const BannerCarousel = () => {
  const banners: CommonTypes.Banner[] = Array.from({ length: 4 }, (_, i) => ({
    imageUrl: `/images/banner${i + 1}.png`,
    link: "",
  }));

  return (
    <Carousel autoplay style={{ height: "calc(100vw*0.4)" }}>
      {banners.map((banner) => (
        <Banner {...banner} />
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
