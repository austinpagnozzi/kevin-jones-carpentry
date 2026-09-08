import type { Metadata } from "next";
import Link from "next/link";
import { PhoneLink } from "@/components/ContactLinks";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="bg-tan">
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-5 py-16 sm:px-8">
        <p className="font-display text-sm tracking-wide text-ink/80">404</p>
        <h1 className="mt-2 font-display text-3xl md:text-4xl">
          That page isn&rsquo;t built yet.
        </h1>
        <p className="mt-4 max-w-md text-lg text-ink/80">
          The page you were looking for doesn&rsquo;t exist on this site.
          Head back to the homepage, or call Kevin directly if you had a
          specific question.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded bg-graphite px-5 font-body font-semibold text-paper hover:bg-graphite-deep"
          >
            Back to home
          </Link>
          <PhoneLink className="inline-flex min-h-[44px] items-center rounded border border-ink/30 px-5 font-body font-medium hover:bg-ink/5">
            <span>
              Call <span className="tabular-nums">{business.phoneDisplay}</span>
            </span>
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
