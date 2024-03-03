import { UserTypes } from "@types";
import { commonUtils } from "@utils";
import { atom, selector } from "recoil";

export const userState = atom<UserTypes.User | null>({
  key: "userState",
  default: null,
  // effects_UNSTABLE: [commonUtils.getPersistAtom("userState")],
});

export const hasUserState = selector({
  key: "hasUserState",
  get: ({ get }) => {
    const user = get(userState);
    return !!user;
  },
});
