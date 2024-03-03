import { hasUserState } from "@atoms/user.atoms";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const useGuestOnly = () => {
  const hasUser = useRecoilValue(hasUserState);
  const router = useRouter();

  useEffect(() => {
    if (hasUser) {
      router.replace("/");
    }
  }, [hasUser]);
};
