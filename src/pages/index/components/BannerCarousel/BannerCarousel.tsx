import { Carousel, Image } from "antd";

import dummyBanner1 from "@public/images/dummy_banner.jpeg";
import dummyBanner2 from "@public/images/dummy_banner_2.jpeg";
import { CommonTypes } from "@types";

const BannerCarousel = () => {
  const banners: CommonTypes.Banner[] = Array.from({ length: 4 }, (_, idx) => ({
    imageUrl:
      "https://www.adobe.com/kr/creativecloud/photography/hub/features/media_1b08f0078230faac6814da00eb20b5f98e9aff78d.png?width=1200&format=pjpg&optimize=medium",
    link: "www.naver.com",
  }));

  return (
    <Carousel autoplay={false}>
      {banners.map((banner) => (
        <Banner {...banner} />
      ))}
    </Carousel>
  );
};

const Banner = ({ imageUrl, link }: CommonTypes.Banner) => {
  return (
    <div style={{ width: "100%", height: 200 }}>
      <Image src={imageUrl} style={{ objectFit: "cover" }} />
    </div>
  );
};

export default BannerCarousel;
