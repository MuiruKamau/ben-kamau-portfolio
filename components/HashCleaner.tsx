"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// After arriving on a page via "/#section", scroll to it and drop the hash from the address bar.
export default function HashCleaner() {
  const pathname = usePathname();

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
      window.history.replaceState(null, "", pathname);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
