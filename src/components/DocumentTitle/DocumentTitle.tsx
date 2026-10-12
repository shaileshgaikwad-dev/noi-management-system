import { useEffect } from "react";
import { useLocation, useMatches } from "react-router-dom";

type RouteHandle = {
  title?: string;
};

export function DocumentTitle() {
  const location = useLocation();
  const matches = useMatches();

  useEffect(() => {
    const current_match = [...matches].reverse().find((match) => {
      const handle = match.handle as RouteHandle | undefined;
      return handle?.title;
    });
    const handle = current_match?.handle as RouteHandle | undefined;

    document.title = handle?.title
      ? `${handle.title} | Noi Management`
      : "Noi Management";
  }, [location,matches]);

  return null;
}
