// theme/themeConfig.ts
import { STYLE_CONSTS } from "@constants";
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: STYLE_CONSTS.PRIMARY_COLOR,
  },
  components: {
    Form: {
      marginLG: 25,
    },
  },
};

export default theme;
