import Image from "next/image";
import { projectRecord } from "@/lib/content";

const [tallShed, framedWalls, pineCloset, bridgeText] = projectRecord.entries;

export default function ProjectRecord() {
  return (
    <section aria-label="Project record" className="bg-graphite text-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
        <h2 className="font-display text-2xl md:text-3xl">Project record</h2>
        <p className="mt-2 max-w-xl text-paper/80">{projectRecord.intro}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-3 md:grid-rows-2">
          <Photo entry={tallShed} className="md:col-start-1 md:row-span-2" tall />
          <Photo entry={framedWalls} className="md:col-start-2 md:row-start-1" />
          <Photo entry={pineCloset} className="md:col-start-3 md:row-start-1" />
          {bridgeText.kind === "text" && (
            <div className="flex flex-col justify-center border border-paper/25 p-6 md:col-start-2 md:col-span-2 md:row-start-2">
              <p className="font-display text-lg leading-snug text-paper">
                {bridgeText.title}
              </p>
              <p className="mt-3 text-sm text-paper/70">{bridgeText.caption}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Photo({
  entry,
  className,
  tall,
}: {
  entry: (typeof projectRecord.entries)[number];
  className?: string;
  tall?: boolean;
}) {
  if (entry.kind !== "photo") return null;
  return (
    <figure className={`flex flex-col ${className ?? ""}`}>
      <div
        className={`relative w-full overflow-hidden ${tall ? "aspect-[3/4] md:h-full md:aspect-auto" : "aspect-[3/4]"}`}
      >
        <Image
          src={entry.src}
          alt={entry.alt}
          fill
          loading="lazy"
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-2 text-sm text-paper/75">
        <span className="mb-1 block font-medium text-paper/95">
          {entry.label}
        </span>
        {entry.caption}
      </figcaption>
    </figure>
  );
}
