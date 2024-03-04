import { PROGRAM_CONTS } from "@constants";

export type Item = {
  id: number;
  thumbnailUrl: string;
  name: string;
  rate: number;
  category: Category;
};

export type Category = (typeof PROGRAM_CONTS.CATEGORY_LIST)[number];
