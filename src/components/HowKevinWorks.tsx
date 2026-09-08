import { howKevinWorks } from "@/lib/content";

export default function HowKevinWorks() {
  return (
    <section aria-label="How Kevin works" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">
              {howKevinWorks.heading}
            </h2>
            <p className="mt-3 max-w-sm text-ink/80">{howKevinWorks.intro}</p>
          </div>
          <ol className="flex flex-col gap-4 border-l-2 border-tan-deep pl-6">
            {howKevinWorks.points.map((point, i) => (
              <li key={i} className="text-ink/85">
                {point}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
