import { useEffect } from "react";
import { SITE } from "../config/site";
export default function usePageTitle(title) {
  useEffect(() => { document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`; }, [title]);
}
