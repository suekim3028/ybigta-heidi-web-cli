import { UserTypes } from "@types";
import { commonUtils } from "@utils";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const userState = atom<UserTypes.User | null>({
  key: "userState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const hasUserState = selector({
  key: "hasUserState",
  get: ({ get }) => {
    const user = get(userState);
    return !!user;
  },
});
