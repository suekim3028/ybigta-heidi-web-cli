import ApiError, { isApiErrorObj } from "@apis/ApiError";
import { notification } from "antd";
import { recoilPersist } from "recoil-persist";

export const withErrorHandling = async <
  F extends (...args: any) => Promise<any>
>(
  fn: F,
  {
    onApiError,
    onSuccess,
  }: {
    onApiError?: (error: {
      userMessage?: string;
      userTitle?: string;
    }) => void | Promise<void>;
    onSuccess?: (
      data: F extends (...args: any) => Promise<infer R> ? R : never
    ) => void | Promise<void>;
  }
): Promise<void> => {
  try {
    const response = await fn();
    if (onSuccess) await onSuccess(response);
  } catch (error) {
    if (error instanceof ApiError && !!onApiError) {
      const {
        errorData: { userMessage, userTitle },
      } = error;
      onApiError({ userMessage, userTitle });
    } else {
      throw error;
    }
  }
};

export const handleUnknownError = (error: unknown) => {
  if (isApiErrorObj(error)) {
    notification.error({
      message: error.errorData.userTitle,
      description: error.errorData.userMessage || "",
    });
  } else {
    notification.error({
      message: "오류가 발생하였습니다. 다시 시도해주세요.",
    });
  }
};

/**
 * string 으로 쓰여진 숫자를 Number로 변환하는 함수.
 * 빈 스트링인 경우, 숫자형식이 아니거나 NaN인 경우 null 반환
 */

export const parseNum = (str: string) => {
  if (str === "") return null;

  const parsed = Number(str.replace(/[^0-9+.]/g, ""));

  if (typeof parsed !== "number" || Number.isNaN(parsed)) return null;

  return parsed;
};

const sessionStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

export const getPersistAtom = (key: string) => {
  const { persistAtom } = recoilPersist({
    key,
    storage: sessionStorage,
  });
  return persistAtom;
};

/**
 * 특정 key로 Object[]를 groupBy 하는 함수
 */
export const groupBy = <T, V>(
  data: T[],
  by: (item: T) => V,
  groupsAreEqual?: (a: V, b: V) => boolean
) => {
  const groupList: V[] = [];

  const grouped = data.reduce(
    (prev, curr) => {
      const group = by(curr);
      const idx = groupList.findIndex((g) =>
        groupsAreEqual ? groupsAreEqual(g, group) : g === group
      );

      if (idx === undefined || !prev[idx]?.dataList) {
        groupList.push(group);
        return [
          ...prev,
          {
            group,
            dataList: [curr],
          },
        ];
      } else {
        return [
          ...prev.slice(0, idx),
          {
            ...prev[idx],
            dataList: [...prev[idx].dataList, curr],
          },
          ...prev.slice(idx + 1),
        ];
      }
    },
    [] as {
      group: V;
      dataList: T[];
    }[]
  );

  return grouped;
};
