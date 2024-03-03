import { UserTypes } from "@types";
import { atom, selector } from "recoil";

export const userState = atom<UserTypes.User | null>({
  key: "userState",
  default: null,
});

export const hasUserState = selector({
  key: "hasUserState",
  get: ({ get }) => {
    const user = get(userState);
    return !!user;
  },
});
