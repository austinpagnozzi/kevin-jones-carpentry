"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { PhoneLink } from "@/components/ContactLinks";
import { navLinks, business } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    // Close the disclosure whenever the route changes via a link click inside it.
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A") setOpen(false);
    };
    panel.addEventListener("click", handler);
    return () => panel.removeEventListener("click", handler);
  }, [open]);

  return (
    <header className="bg-paper border-b border-ink/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded"
          aria-label={`${business.name}, home`}
        >
          <Logo size={44} />
          <span className="hidden font-display text-lg leading-tight sm:block">
            Kevin Jones
            <br />
            Carpentry
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 font-body text-[0.95rem] font-medium md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded hover:underline underline-offset-4 decoration-2 decoration-tan-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <PhoneLink className="hidden rounded font-body text-base font-semibold hover:underline underline-offset-4 sm:inline-block">
            {business.phoneDisplay}
          </PhoneLink>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded border border-ink/20 md:hidden"
          >
            <span className="sr-only">
              {open ? "Close menu" : "Open menu"}
            </span>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="border-t border-ink/10 bg-paper md:hidden"
      >
        <nav aria-label="Primary" className="flex flex-col px-5 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-ink/10 py-3 font-body text-base font-medium last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
          <PhoneLink className="py-3 font-body text-base font-semibold">
            <span className="tabular-nums">Call {business.phoneDisplay}</span>
          </PhoneLink>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          d="M5 5l14 14M19 5L5 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
