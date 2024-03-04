import { Carousel } from "antd";

import Banner from "@components/Banner/Banner";
import { CommonTypes } from "@types";

const BannerCarousel = () => {
  const banners: CommonTypes.Banner[] = Array.from({ length: 4 }, (_, idx) => ({
    imageUrl:
      "https://www.adobe.com/kr/creativecloud/photography/hub/features/media_1b08f0078230faac6814da00eb20b5f98e9aff78d.png?width=1200&format=pjpg&optimize=medium",
    link: "www.naver.com",
  }));

  return (
    <Carousel autoplay={false} style={{ height: "calc(100vw*0.4)" }}>
      {banners.map((banner) => (
        <Banner {...banner} />
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
