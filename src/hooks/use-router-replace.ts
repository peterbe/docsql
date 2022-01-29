import { useRouter } from "next/router";
import type { NextRouter } from "next/router";
import { useRef, useState } from "react";

export default function useRouterReplace(): NextRouter["replace"] {
  const router = useRouter();
  const routerRef = useRef(router);

  routerRef.current = router;

  const [{ replace }] = useState<Pick<NextRouter, "replace">>({
    replace: (path) => routerRef.current.replace(path),
  });

  return replace;
}
