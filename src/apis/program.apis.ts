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
const dummyPrograms: ProgramTypes.Item[] = Array.from(
  { length: 50 },
  (_, id): ProgramTypes.Item => ({
    id,
    name: commonUtils.getRandomItemFromArr(dummyNames),
    thumbnailUrl: commonUtils.getRandomItemFromArr(dummyProfileUrl),
    category: commonUtils.getRandomItemFromArr(dummyCategories),
    rate: Math.random() * 5,
  })
);

export const getPrograms = async () => {
  return dummyPrograms;
};
