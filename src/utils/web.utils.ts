import { notification } from "antd";

export const copyToClipboard = (text: string) => {
  if (window.navigator.clipboard === undefined) {
    copyToClipboardWithoutNavigator(text);
  } else {
    window.navigator.clipboard.writeText(text).then(
      () => {
        notification.success({
          message: "링크가 복사되었어요.",
        });
      },
      () => {
        copyToClipboardWithoutNavigator(text);
      }
    );
  }
};

const copyToClipboardWithoutNavigator = (text: string) => {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  notification.success({
    message: "링크가 복사되었어요.",
  });
};

export const getOS = () => {
  if (!window) return null;
  const userAgent = navigator.userAgent,
    platform = navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];
  let os: string | null = null;

  if (macosPlatforms.includes(platform)) {
    os = "Mac OS";
  } else if (iosPlatforms.includes(platform)) {
    os = "iOS";
  } else if (windowsPlatforms.includes(platform)) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
};

export const getIOSVersion = () => {
  if (!window) return -1;
  const matches = navigator.userAgent.match(/OS ((\d+_?){2,3})\s/);
  if (!matches || !matches[1] || typeof matches[1] !== "string") return -1;
  return parseFloat(matches[1].replace(/_/g, "."));
};
