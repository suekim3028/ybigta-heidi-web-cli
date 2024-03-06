import theme from "@styles/themeConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();
declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (data: string) => void;
    };
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ConfigProvider theme={theme}>
            <Component {...pageProps} />
          </ConfigProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
