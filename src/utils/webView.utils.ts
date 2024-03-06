export const getWebView = () => {
  return typeof window !== "undefined"
    ? window.ReactNativeWebView || null
    : null;
};

export const isWebView = () =>
  typeof window !== "undefined" && !!window.ReactNativeWebView;
export const onSwitchPlatform = (fn: Record<"web" | "app", () => void>) => {
  isWebView() ? fn.app() : fn.web();
};
