import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import CallStrip from "@/components/CallStrip";
import { allServiceNamesSentence, plusMark, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Seven verified Kevin Jones Carpentry project types, rough frame to finished room: new construction, barns, garages, sheds, decks, remodel and repairs.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        heading="Rough to finish, one project type at a time"
        intro={allServiceNamesSentence}
        background="tan"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
          <ol className="flex flex-col">
            {services.map((service, i) => (
              <li
                key={service.slug}
                className="border-b border-ink/15 py-5 first:pt-0 last:border-b-0"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col gap-1 rounded sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-sm text-ink/50 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl group-hover:underline">
                      {service.label}
                    </span>
                  </span>
                  <span className="max-w-md text-ink/80">
                    {service.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-8 border-t-2 border-tan-deep pt-6">
            <h2 className="font-display text-xl">{plusMark.title}</h2>
            <p className="mt-2 max-w-xl text-ink/80">{plusMark.body}</p>
          </div>
        </div>
      </section>

      <CallStrip text="Not sure which one fits?" background="paperDeep" />
    </>
  );
}
