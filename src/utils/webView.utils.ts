export const isWebView = () => typeof window !== "undefined";
export const onSwitchPlatform = (fn: Record<"web" | "app", () => void>) => {
  isWebView() ? fn.app() : fn.web();
};
