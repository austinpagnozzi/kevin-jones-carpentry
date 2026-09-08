import { business, ownWords } from "@/lib/content";

export default function FactRule() {
  return (
    <section
      aria-label="Kevin's own words"
      className="border-y-2 border-ink/15 bg-paper py-4"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-5 font-body text-[0.95rem] sm:px-8">
        <span className="font-medium">{business.locationShort}</span>
        <span aria-hidden="true" className="text-ink/30">
          |
        </span>
        <span>
          <strong className="font-semibold">{ownWords.experience}</strong>
          <span className="text-ink/80"> (Kevin&rsquo;s own words)</span>
        </span>
        <span aria-hidden="true" className="text-ink/30">
          |
        </span>
        <span>
          <strong className="font-semibold">{ownWords.insurance}</strong>
          <span className="text-ink/80"> (Kevin&rsquo;s own words)</span>
        </span>
      </div>
    </section>
  );
}
