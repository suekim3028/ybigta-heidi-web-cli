import { PROGRAM_CONTS } from "@constants";
import { ProgramTypes } from "@types";
import { commonUtils } from "@utils";

const dummyNames = [
  "프로그램 1",
  "프로그램 2",
  "프로그램 3",
  "프로그램 4",
  "프로그램 5",
  "프로그램 6",
  "프로그램 7",
  "프로그램 8",
  "프로그램 9",
  "프로그램 10",
];

const dummyProfileUrl = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlGS___Q2WyZKycy0JEDd9rZZSusgk-TBbnrfdigr-_5hn23D53C2Bl98qcM57ISctCw&usqp=CAU",
  "https://www.gangneungnews.kr/news/photo/202306/38851_39182_4558.png",
  "https://m.pressian.com/data/photos/cdn/20190519/art_1557470205.jpg",
  "https://www.ibabynews.com/news/photo/202104/94851_44271_056.jpg",
];

const dummyCategories: ProgramTypes.Category[] = [
  "둘레길",
  "등산로",
  "산림 치유원",
  "숲 체험",
];
const dummyPrograms: ProgramTypes.Mini[] = Array.from(
  { length: 50 },
  (_, id): ProgramTypes.Mini => ({
    id,
    name: commonUtils.getRandomItemFromArr(dummyNames),
    thumbnailUrl: commonUtils.getRandomItemFromArr(dummyProfileUrl),
    category: commonUtils.getRandomItemFromArr(dummyCategories),
    rate: Math.random() * 5,
  })
);

const dummyReviews: ProgramTypes.Review[] = Array.from(
  { length: 10 },
  (_, idx): ProgramTypes.Review => ({
    rate: Math.random() * 5,
    nickname: "닉네임",
    imageUrls: dummyProfileUrl,
    hashtags: ["30대", "가족과 함께"],
    date: new Date().getTime(),
  })
);

const dummyProgramDetail: ProgramTypes.Detail = {
  id: 1,
  name: commonUtils.getRandomItemFromArr(dummyNames),
  thumbnailUrl: commonUtils.getRandomItemFromArr(dummyProfileUrl),
  category: commonUtils.getRandomItemFromArr(dummyCategories),
  rate: Math.random() * 5,
  description: `아이부터 어른까지 즐겁게 체험할 수 있는 밤줍기!
장소: 경기도 오산
비용: 2만원
추천 연령대: 4세 이상`,
  healthResult: 234,
  relatedProgramIdList: [1, 2, 3, 4],
  reviews: dummyReviews,
};

export const getPrograms = async () => {
  await new Promise((resolve: (value: null) => void) => {
    setTimeout(resolve, 2000);
  });
  return dummyPrograms;
};

export const getProgramDetail = async ({ id }: { id: number }) => {
  return dummyProgramDetail;
};

export const getProgramsByIdList = async (idList: number[]) =>
  Array.from({ length: idList.length }, () => dummyPrograms[0]);
