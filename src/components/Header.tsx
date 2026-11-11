"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {site.shortName} — {site.role}
        </a>

        <nav aria-label="Primary" className="hidden gap-7 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="font-display text-base text-muted transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="font-display text-base md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block py-3 font-display text-lg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
