import theme from "@styles/themeConfig";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </RecoilRoot>
  );
};

export default App;
