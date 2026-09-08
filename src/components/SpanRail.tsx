import Image from "next/image";
import Link from "next/link";
import { PhoneLink } from "@/components/ContactLinks";
import {
  allServiceNamesSentence,
  business,
  plusMark,
  services,
} from "@/lib/content";

// The Span Rail: a ticked carpenter's rule running Rough to Finish, carrying
// the seven verified project types plus the +++ mark. Built as native
// <details>/<summary> disclosures sharing one `name` group, so the browser
// itself enforces one open panel at a time and every mark works with no
// JavaScript at all. On mobile each panel opens directly beneath its own
// tick, in normal document flow. On desktop the ticks sit in one flex row
// and the open panel detaches (position: absolute) to land in one shared
// strip spanning the full rail, directly under that row.
export default function SpanRail() {
  return (
    <section aria-label="Services, Rough to Finish" className="bg-tan">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 md:py-10">
        <div className="mb-5 flex items-baseline justify-between gap-4">
          <span className="font-display text-sm tracking-wide text-ink/80 md:text-base">
            Rough
          </span>
          <span className="hidden font-display text-sm tracking-wide text-ink/80 md:block md:text-base">
            Finish
          </span>
        </div>

        <div className="relative md:flex md:items-start md:gap-1 md:pb-2">
          {services.map((service, i) => (
            <details
              key={service.slug}
              name="span-rail"
              open={i === 0}
              className="rail-mark border-b border-ink/20 last:border-b-0 md:flex-1 md:border-none"
            >
              <summary className="rail-tick relative flex cursor-pointer list-none items-center gap-3 py-3 font-body text-[0.95rem] font-medium outline-none md:flex-col md:items-stretch md:gap-2 md:py-0 md:text-center md:text-sm">
                <span
                  aria-hidden="true"
                  className="hidden h-4 w-px shrink-0 self-center bg-ink/60 md:block"
                />
                <span
                  aria-hidden="true"
                  className="block h-4 w-1 shrink-0 rounded bg-ink/60 md:hidden"
                />
                <span className="rail-tick-label">{service.railTick}</span>
              </summary>
              <div className="rail-panel border-t border-ink/20 py-6 md:absolute md:inset-x-0 md:top-full md:border-t-2 md:border-graphite/40 md:py-8">
                <ServicePanel service={service} />
              </div>
            </details>
          ))}

          <p
            aria-hidden="true"
            className="my-2 font-display text-sm tracking-wide text-ink/80 md:hidden"
          >
            Finish
          </p>

          <details
            name="span-rail"
            className="rail-mark border-b border-ink/20 last:border-b-0 md:w-16 md:flex-none md:border-none"
          >
            <summary className="rail-tick relative flex cursor-pointer list-none items-center gap-3 py-3 font-body text-[0.95rem] font-medium outline-none md:flex-col md:items-stretch md:gap-2 md:py-0 md:text-center md:text-sm">
              <span
                aria-hidden="true"
                className="hidden h-4 w-px shrink-0 self-center bg-ink/60 md:block"
              />
              <span
                aria-hidden="true"
                className="block h-4 w-1 shrink-0 rounded bg-ink/60 md:hidden"
              />
              <span className="rail-tick-label font-display text-lg md:text-xl">
                {plusMark.label}
              </span>
            </summary>
            <div className="rail-panel border-t border-ink/20 py-6 md:absolute md:inset-x-0 md:top-full md:border-t-2 md:border-graphite/40 md:py-8">
              <div className="mx-auto max-w-4xl">
                <h3 className="font-display text-xl">{plusMark.title}</h3>
                <p className="mt-2 max-w-2xl text-ink/85">{plusMark.body}</p>
                <PhoneLink className="mt-4 inline-flex min-h-[44px] items-center rounded bg-graphite px-5 font-body font-semibold text-paper">
                  Call about your project
                </PhoneLink>
              </div>
            </div>
          </details>
        </div>

        {/* Reserves room on desktop for the shared, absolutely positioned
            panel so it never overlaps the sentence below. */}
        <div aria-hidden="true" className="hidden md:block md:h-[23rem]" />

        <p className="mt-6 max-w-2xl text-sm text-ink/80">
          {allServiceNamesSentence} Shed work he lists as &ldquo;Shed +++&rdquo;
          on his own page, meaning that list is not the whole story either.
        </p>
      </div>
    </section>
  );
}

function ServicePanel({ service }: { service: (typeof services)[number] }) {
  return (
    <div
      className={`mx-auto grid max-w-4xl gap-6 md:items-start ${
        service.photo ? "md:grid-cols-[1.3fr_1fr]" : "md:grid-cols-1"
      }`}
    >
      <div className={service.photo ? "" : "max-w-2xl"}>
        <h3 className="font-display text-xl">{service.label}</h3>
        <p className="mt-2 text-ink/85">{service.detail}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex min-h-[44px] items-center rounded border border-ink/30 px-4 font-body font-medium hover:bg-ink/5"
          >
            More on {service.label.toLowerCase()}
          </Link>
          <PhoneLink className="inline-flex min-h-[44px] items-center rounded bg-graphite px-5 font-body font-semibold text-paper">
            Call {business.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
      {service.photo && (
        <figure>
          <div className="relative h-56 w-full overflow-hidden rounded sm:h-64">
            <Image
              src={service.photo.src}
              alt={service.photo.alt}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-ink/80">
            {service.photo.caption}
          </figcaption>
        </figure>
      )}
    </div>
  );
}
