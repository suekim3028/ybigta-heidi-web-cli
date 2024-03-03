import { UserTypes } from "@types";
import { atom, selector } from "recoil";

export const userState = atom<UserTypes.User | null>({
  key: "userState",
  default: null,
});

export const hasSignedIn = selector({
  key: "hasSignedInState",
  get: ({ get }) => {
    const user = get(userState);
    return !!user;
  },
});
