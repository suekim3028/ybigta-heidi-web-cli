import { useEffect, useState } from "react";
import { RecoilState, SetterOrUpdater, useRecoilState } from "recoil";

export const useSsrRecoilState = <T extends any>(
  store: RecoilState<T>
):
  | { initialized: false; state: null }
  | { initialized: true; state: [T, SetterOrUpdater<T>] } => {
  // TODO: post 작성;;
  const [initialized, setInitialized] = useState(false);
  const [value, setValue] = useRecoilState(store);

  useEffect(() => {
    setInitialized(true);
  }, []);

  if (initialized) {
    return {
      initialized,
      state: [value, setValue] as const,
    };
  } else {
    return {
      initialized,
      state: null,
    };
  }
};
