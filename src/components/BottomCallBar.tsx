"use client";

import { useEffect, useState } from "react";
import { PhoneLink } from "@/components/ContactLinks";
import { business } from "@/lib/content";

export default function BottomCallBar() {
  const [scrolled, setScrolled] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 240);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px", threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !nearFooter;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-graphite-deep bg-graphite text-paper shadow-[0_-2px_10px_rgba(0,0,0,0.2)] transition-transform duration-150 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <PhoneLink
        className="on-graphite flex min-h-[52px] items-center justify-center gap-2 py-3 font-body text-base font-semibold"
        {...(!visible ? { tabIndex: -1 } : {})}
      >
        <PhoneIcon />
        <span>
          Call{" "}
          <span className="tabular-nums">{business.phoneDisplay}</span>
        </span>
      </PhoneLink>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M6.6 10.8c1.3 2.6 3.5 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1 .3 2.1.5 3.2.5.6 0 1 .4 1 1v3.3c0 .6-.4 1-1 1C10.5 20.4 3.6 13.5 3.6 5.2c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.1.2 2.2.5 3.2.1.3 0 .7-.2 1z"
        fill="currentColor"
      />
    </svg>
  );
}
