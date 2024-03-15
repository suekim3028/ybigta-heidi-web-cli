import { PROGRAM_CONTS } from "@constants";
import { ProgramTypes } from "@types";
import { commonUtils } from "@utils";
import API from "./API";

const dummyNames = [
  "프로그램 1",
  "프로그램 2ㅁㅈㄹ댜ㅕㅗ미ㅑㄷ려ㅗ미ㅑ뎌로미ㅗㄹ뎌",
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
  "숲길",
  "등산로",
  "산림 치유원",
  "숲 체험",
];
const dummyPrograms: ProgramTypes.Mini[] = Array.from(
  { length: 50 },
  (_, id): ProgramTypes.Mini => ({
    id,
    name: commonUtils.getRandomItemFromArr(dummyNames),
    category: commonUtils.getRandomItemFromArr(dummyCategories),
    rate: Math.random() * 5,
    place: "국립산림체험관",
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
    body: `6살 아이와 함께 다녀와써요~
    어쩌고
    저쩌고
    wfiajo]awefij;awoifeja;oif정말좋은 곳이에요 웃음웃ㅇ므`,
  })
);

const dummyProgramDetail: ProgramTypes.Detail = {
  id: 1,
  name: commonUtils.getRandomItemFromArr(dummyNames),
  category: commonUtils.getRandomItemFromArr(dummyCategories),
  rate: Math.random() * 5,
  healthResult: 234,
  place: "국립산림체험관",
  duration: 2,
  maxPeople: 4,
  fee: 23000,
  address: "경기도 화성시 봉담읍 와우리 쌍용 a-2",
  reviews: dummyReviews,
};

type GetProgramsResponse = {
  programs: ProgramTypes.Mini[];
};
export const getPrograms = async (userId: number) => ({
  programs: dummyPrograms,
});
// API.get<GetProgramsResponse>(`/programs/${userId}`);

export const getProgramDetail = async ({
  id,
  userId,
}: {
  id: number;
  userId: number;
}) => ({ program: dummyProgramDetail });
//  => API.get<GetProgramsResponse>(`/program/${userId}/${id}`);

export const getProgramsByIdList = async (idList: number[]) =>
  Array.from({ length: idList.length }, () => dummyPrograms[0]);
