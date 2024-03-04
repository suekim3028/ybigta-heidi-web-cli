import theme from "@styles/themeConfig";
import { webUtils, webViewUtils } from "@utils";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ConfigProvider theme={theme}>
        <WebViewWrapper>
          <Component {...pageProps} />
        </WebViewWrapper>
      </ConfigProvider>
    </RecoilRoot>
  );
};

const WebViewWrapper = ({ children }: { children: React.ReactNode }) => {
  return webViewUtils.isWebView() ? children : <>{children}</>;
};

export default App;
