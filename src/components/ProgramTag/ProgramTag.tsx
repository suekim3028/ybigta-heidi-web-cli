import { PROGRAM_CONTS } from "@constants";
import { ProgramTypes } from "@types";
import { Tag } from "antd";

const ProgramTag = ({ category }: { category: ProgramTypes.Category }) => {
  return (
    <Tag
      color={PROGRAM_CONTS.CATEGORY_TAG_COLOR[category]}
      style={{ fontSize: 12, padding: "0px 4px", alignSelf: "flex-start" }}
      bordered={false}
    >
      {category}
    </Tag>
  );
};

export default ProgramTag;
