import { ProgramTypes } from "@types";
import { Tag, TagProps } from "antd";

export const CATEGORY_LIST = [
  "등산로",
  "숲 체험",
  "숲길",
  "산림 치유원",
] as const;

export const CATEGORY_TAG_COLOR: Record<
  ProgramTypes.Category,
  TagProps["color"]
> = {
  숲길: "blue",
  등산로: "green",
  "산림 치유원": "magenta",
  "숲 체험": "purple",
};
