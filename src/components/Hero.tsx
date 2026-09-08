import Image from "next/image";
import { PhoneLink } from "@/components/ContactLinks";
import { business, heroCopy } from "@/lib/content";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:h-[640px] lg:h-[720px]"
    >
      <div
        className="flex flex-col justify-between gap-6 px-5 py-10 sm:px-8 md:py-12"
        style={{
          background:
            "linear-gradient(180deg, #99a1b3 0%, var(--color-sky) 55%, var(--color-sky-deep) 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-xl md:mx-0">
          <h1 className="max-w-md text-balance font-display text-3xl leading-[1.15] text-paper sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
            {heroCopy.headline}
          </h1>
          <p className="mt-4 max-w-sm text-lg text-paper/90 md:text-xl">
            {heroCopy.subline}
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl md:mx-0">
          <PhoneLink className="inline-flex min-h-[52px] items-center gap-2 rounded bg-graphite px-6 font-body text-lg font-semibold text-paper hover:bg-graphite-deep">
            <PhoneIcon />
            <span>
              Call <span className="tabular-nums">{business.phoneDisplay}</span>
            </span>
          </PhoneLink>
        </div>
      </div>

      <div className="relative h-[62vh] min-h-[340px] md:h-auto">
        <Image
          src="/images/roof-framing-zip-sheathing.webp"
          alt="A carpenter standing on the roof edge of a new building with a framing nailer, ZIP System sheathed walls and trusses below, tall cumulus sky above"
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover object-[68%_30%] md:object-[50%_15%]"
        />
      </div>
    </section>
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
