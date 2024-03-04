import { Flex } from "antd";

import FullStar from "@public/images/star_full.png";
import EmptyStar from "@public/images/star_empty.png";
import HalfStar from "@public/images/star_half.png";
import Image from "next/image";

const Stars = ({ rate }: { rate: number }) => {
  const floor = Math.floor(rate);

  const float = rate - floor;

  return (
    <Flex>
      {Array.from({ length: Math.floor(rate) }, (_, idx) => (
        <FullStarComponent key={idx} />
      ))}
      {float < 0.3 ? (
        <EmptyStarComponent />
      ) : float > 0.7 ? (
        <FullStarComponent />
      ) : (
        <HalfStarComponent />
      )}
      {Array.from({ length: 5 - Math.ceil(rate) }, (_, idx) => (
        <EmptyStarComponent />
      ))}
    </Flex>
  );
};

const FullStarComponent = () => <Image src={FullStar} alt={"FULL_STAR"} />;
const EmptyStarComponent = () => <Image src={EmptyStar} alt={"EMPTY_STAR"} />;
const HalfStarComponent = () => <Image src={HalfStar} alt={"HALF_STAR"} />;

export default Stars;

//  3 3.2  3.5 3.7 5
