export type Nullable<T extends object> = {
  [key in keyof T]: T[key] extends undefined ? T[key] : T[key] | null;
};

export type AnyVoidFn = (...args: any) => void;

export type AsyncAbleVoidFn<T extends AnyVoidFn = AnyVoidFn> =
  | T
  | ((...p: Parameters<T>) => Promise<void>);

type RequiredAndNotNull<T> = {
  [P in keyof T]-?: Exclude<T[P], null | undefined>;
};

export type RemoveNullValues<T> = RequiredAndNotNull<Pick<T, keyof T>> &
  Omit<T, keyof T>;

export type KeysMatching<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];
