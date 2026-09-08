import Image from "next/image";
import { PhoneLink } from "@/components/ContactLinks";
import { business, factRule, heroCopy } from "@/lib/content";

const ownWordsFacts = factRule.items.filter((item) => item.attribution);

// The spanning photograph: the sky-bleed device is retired entirely (no
// painted sky field anywhere on the site). Header, hero text and page now
// share one continuous oat paper field with no top edge and no seam to
// fail. The roof-framing photograph runs from the header rule, past the
// bottom of the paper band, through the full depth of the fact rule, and
// lands flush on the top of the Span Rail band -- built as a two-row CSS
// grid where the photograph spans both rows, so the overhang is exactly
// the fact rule's own height by construction, not a hardcoded offset.
export default function Hero() {
  return (
    <div className="hero-shell relative bg-paper">
      <div className="hero-grid">
        <section aria-label="Introduction" className="hero-text order-1 md:order-none">
          <div className="hero-text-inner flex max-w-xl flex-col gap-8 py-10 pr-5 sm:pr-8 md:py-14 lg:py-16">
            <div>
              <h1 className="max-w-md text-balance font-display text-[2.125rem] leading-[1.1] text-graphite sm:text-4xl md:text-[2.75rem] md:leading-[1.08] lg:text-[3.5rem] lg:leading-[1.05]">
                {heroCopy.headline}
              </h1>
              <p className="mt-6 max-w-sm font-body text-base text-muted-on-paper md:text-lg lg:text-[1.1875rem]">
                {heroCopy.subline}
              </p>
            </div>
            <PhoneLink className="inline-flex min-h-[52px] w-fit items-center gap-2 rounded bg-graphite-deep px-6 font-body text-lg font-semibold text-paper hover:bg-graphite">
              <PhoneIcon />
              <span>
                Call <span className="tabular-nums">{business.phoneDisplay}</span>
              </span>
            </PhoneLink>
          </div>
        </section>

        <section
          aria-label="Kevin's own words"
          className="hero-fact order-3 bg-graphite-deep text-paper md:order-none"
        >
          <div className="hero-fact-inner flex h-full flex-wrap items-center py-3 pr-5 font-body text-sm leading-[1.7] sm:pr-8 xl:text-base">
            <span className="mr-2 font-medium">{business.locationShort}</span>
            {/* The separator is glued to the word right after it as one
                unbreakable unit, so a wrap can only ever happen before
                "| Word", never between the pipe and the word (KJC-07):
                no line can end on a lone separator. */}
            <span className="mr-1 whitespace-nowrap">
              <span aria-hidden="true" className="mr-2 text-tan-deep">
                |
              </span>
              <strong className="font-semibold">{ownWordsFacts[0].label}</strong>
            </span>
            <span className="mr-1">&amp;</span>
            <strong className="mr-1 font-semibold">{ownWordsFacts[1].label}</strong>
            <span className="text-[0.9375rem] text-muted-on-graphite">
              ({ownWordsFacts[0].attribution})
            </span>
          </div>
        </section>

        <figure className="hero-photo order-2 relative md:order-none">
          <Image
            src="/images/roof-framing-zip-sheathing.webp"
            alt="A carpenter standing on the roof edge of a new building with a framing nailer, ZIP System sheathed walls and trusses below, tall cumulus sky above"
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 1280px) 46vw, (min-width: 768px) 40vw, 100vw"
            className="object-cover object-[62%_28%] md:object-[55%_36%] lg:object-[50%_42%]"
          />
        </figure>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M6.6 10.8c1.3 2.6 3.5 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1 .3 2.1.5 3.2.5.6 0 1 .4 1 1v3.3c0 .6-.4 1-1 1C10.5 20.4 3.6 13.5 3.6 5.2c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.1.2 2.2.5 3.2.1.3 0 .7-.2 1z"
        fill="currentColor"
      />
    </svg>
  );
}
