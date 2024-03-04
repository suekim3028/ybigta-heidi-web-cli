import { InfiniteData } from "@tanstack/react-query";
import { UtilTypes } from "@types";

export const getNextPageParam = <
  T extends { isEnd: boolean },
  K extends keyof Omit<T, "isEnd">
>(
  lastPage: T,
  dataKey: K
) => {
  if (lastPage.isEnd) return undefined;
  const lastData = lastPage[dataKey];
  if (Array.isArray(lastData)) {
    const _lastItem = lastData.slice(-1);

    if (_lastItem.length) {
      const lastItem = _lastItem[0];
      if ("id" in lastItem && typeof lastItem["id"] === "number") {
        return lastItem.id;
      }
    }
  }
  return undefined;
};

export const withInfiniteLoad =
  <Fn extends (args: any) => Promise<any>>(
    api: Fn,
    params: Fn extends (args: infer R) => Promise<any>
      ? Omit<R, "lastId">
      : never
  ) =>
  async ({
    pageParam: lastId = 0,
  }): Promise<Awaited<Fn extends (...args: any) => infer R ? R : never>> => {
    const r = await api({ ...params, lastId });
    return {
      nextOffset: lastId,
      ...r,
    };
  };

/**
 *
 * @param data infinite data
 * @param key infinite data 중에서 pluck 하고자 하는 array 형태 data
 * @param identifier array 데이터 중 uniqueness 구분자
 */
export const flatMapInfiniteData = <
  Data extends InfiniteData<any> | undefined,
  Response extends Data extends InfiniteData<infer V> ? V : never,
  Key extends UtilTypes.KeysMatching<Response, Array<any>>,
  Identifier extends keyof Response[Key][number],
  Result extends Response[Key]
>(
  data: Data,
  key: Key,
  identifier: Identifier
): Result => {
  return (
    data?.pages?.reduce((acc, curr) => {
      const nextPage = curr[key];

      if (!nextPage) return acc;

      const filtered = nextPage.filter(
        (v: Result) => !acc.find((p: Result) => p[identifier] === v[identifier])
      );

      return [...acc, ...filtered];
    }, []) || []
  );
};

export const createQueryKeyFactory =
  <List extends Record<string, any>>() =>
  <Key extends keyof List>(
    ...[key, params]: undefined extends List[Key]
      ? [Key]
      : [Key, List[Key] | "KEY_BASE"]
  ) => {
    if (params === "KEY_BASE") return [key];
    return params ? [key, params] : [key];
  };
