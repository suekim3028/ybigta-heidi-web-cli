import useProgramDetail from "@queries/useProgramDetail";
import { commonUtils } from "@utils";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useProductDetailOnIdQuery = () => {
  const router = useRouter();
  const _id = router.query.id;

  const id = typeof _id === "string" ? commonUtils.parseNum(_id) : null;
  const { data, isLoading } = useProgramDetail({ id: id ?? undefined });

  useEffect(() => {
    if (_id !== undefined && id === null) {
      router.replace("/");
    }
  }, [_id, id]);

  return { data: typeof id !== "number" || !data ? null : data };
};
