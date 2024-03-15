import { PROGRAM_CONTS } from "@constants";

export type Mini = {
  id: number;
  name: string;
  rate: number;
  category: Category;
  place: string;
};

export type Category = (typeof PROGRAM_CONTS.CATEGORY_LIST)[number];

export type Detail = Mini & {
  healthResult: number;
  duration: number;
  maxPeople: number;
  fee: number;
  address: string;
  reviews: Review[];
};

export type Review = {
  nickname: string;
  rate: number;
  body: string;
  date: number;
  imageUrls: string[];
  hashtags: string[];
};
