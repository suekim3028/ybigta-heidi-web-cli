import { SignedInUserOnly } from "@contexts";

import {
  Button,
  Card,
  Carousel,
  Flex,
  Image,
  Tabs,
  TabsProps,
  Typography,
} from "antd";
import { Inter } from "next/font/google";
import Head from "next/head";
import MenuList from "./index/components/MenuList/MenuList";
import { BannerCarousel, BrowserViewWrapper, ProgramList } from "@components";
const { Text } = Typography;
const inter = Inter({ subsets: ["latin"] });
import MdCurating from "@public/images/md_curating.png";
const HeadComponent = () => (
  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const TabComponent = () => {
  return (
    <Flex vertical>
      <MenuList />
      <Flex vertical flex={1} align="center">
        <Image
          src={"/images/md_curating.png"}
          // width={"90%"}
        />
      </Flex>
      <BannerCarousel />
      <Flex style={{ padding: "20px 20px 0px" }} vertical>
        <Text> 지금 떠나고 싶은 당신을 위한</Text>
        <Text style={{ fontSize: 20, fontWeight: 600 }} strong>
          맞춤 추천 프로그램
        </Text>
      </Flex>
      <ProgramList />
    </Flex>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "숙소",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "추천",
    children: <TabComponent />,
  },
  {
    key: "3",
    label: "투어",
    children: (
      <Flex vertical gap={20}>
        <Flex
          style={{
            margin: "10px 20px",
            // border: "1px solid gray",
            padding: 20,
            borderRadius: 15,
            boxShadow: "2px 2px 20px rgba(0,0,0,0.15)",
          }}
          gap={20}
          align="center"
        >
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/5609/5609566.png"}
            width={60}
            height={60}
          />
          <Flex
            vertical

            // align="flex-end"
          >
            <Text> 나의 여행 기록을 한번에</Text>
            <Text style={{ fontSize: 20, fontWeight: 600 }} strong>
              스탬프 투어 하러 가기
            </Text>
          </Flex>
        </Flex>

        <ProgramList showCategoryFilter />
      </Flex>
    ),
  },
];

const Index = () => {
  return (
    <SignedInUserOnly>
      <BrowserViewWrapper>
        <HeadComponent />
        <Tabs
          defaultActiveKey="2"
          items={items}
          size="large"
          style={{ display: "flex" }}
          tabBarStyle={{ padding: "0px 20px" }}
        />
      </BrowserViewWrapper>
    </SignedInUserOnly>
  );
};

export default Index;
