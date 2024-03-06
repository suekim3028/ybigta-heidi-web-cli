import theme from "@styles/themeConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { webUtils, webViewUtils } from "@utils";
import { ConfigProvider, FloatButton } from "antd";
import type { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";

import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
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
            <BrowserViewWrapper>
              <Component {...pageProps} />
            </BrowserViewWrapper>
          </ConfigProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

const BrowserViewWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (webViewUtils.isWebView()) return children;

  return (
    <div>
      {children}
      <FloatButton
        icon={<UserOutlined />}
        type="primary"
        onClick={() => router.push("mypage")}
      />
    </div>
  );
};

export default App;
