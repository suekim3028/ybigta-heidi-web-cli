import { PROGRAM_CONTS } from "@constants";

export type Mini = {
  id: number;
  thumbnailUrl: string;
  name: string;
  rate: number;
  category: Category;
};

export type Category = (typeof PROGRAM_CONTS.CATEGORY_LIST)[number];

export type Detail = Mini & {
  description: string;
  healthResult: number;
  relatedProgramIdList: number[];
  review: Review[];
};

export type Review = {
  nickname: string;
  rate: number;
  imageUrls: string[];
  hashtags: string[];
};
