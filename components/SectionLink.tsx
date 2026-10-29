"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

// Scrolls to a section on the current page without putting "#id" in the URL.
// If the section isn't on this page, navigates home to it; HashCleaner then tidies the URL.
export default function SectionLink({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Link href={`/#${id}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
