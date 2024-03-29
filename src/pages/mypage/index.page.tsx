import { SignedInUserOnly } from "@contexts";
import { Button, Card, Carousel, Flex, Typography } from "antd";
import { Inter } from "next/font/google";
import Head from "next/head";
import UserProfile from "./components/UserProfile/UserProfile";
import { BannerCarousel, BigMenuButton } from "@components";
import { CommonTypes } from "@types";

const inter = Inter({ subsets: ["latin"] });
const HeadComponent = () => (
  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const menus: CommonTypes.Menu[] = [
  {
    id: "bookings",
    title: "예약 내역",
  },
  {
    id: "coupons",
    title: "나의 쿠폰함",
  },
];

const Index = () => {
  return (
    <SignedInUserOnly>
      <HeadComponent />
      <Flex vertical>
        <UserProfile />
        <BannerCarousel />
        <Flex style={{ paddingTop: 20 }} gap={12}>
          {menus.map((menu) => (
            <Flex flex={1} align={"stretch"}>
              <BigMenuButton {...menu} size={"default"} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </SignedInUserOnly>
  );
};

export default Index;
