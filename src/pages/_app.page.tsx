import theme from "@styles/themeConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { webUtils, webViewUtils } from "@utils";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ConfigProvider theme={theme}>
          <WebViewWrapper>
            <Component {...pageProps} />
          </WebViewWrapper>
        </ConfigProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

const WebViewWrapper = ({ children }: { children: React.ReactNode }) => {
  return webViewUtils.isWebView() ? children : <>{children}</>;
};

export default App;
