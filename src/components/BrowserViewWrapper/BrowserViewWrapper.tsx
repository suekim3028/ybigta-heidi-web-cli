import { FloatButton } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { webViewUtils } from "@utils";

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

export default BrowserViewWrapper;
