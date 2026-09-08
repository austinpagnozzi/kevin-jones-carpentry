import Image from "next/image";
import { projectRecord } from "@/lib/content";

const [newConstruction, barns, remodel, bridge] = projectRecord.entries;

// One photograph row at a single fixed media height for all three tiles
// (identical heights make the captions share a baseline by construction,
// not by manual nudging), widths 5:4:3 in build order. The crossing bridge
// has no photograph, so it leaves the row entirely and becomes a
// full-width ruled entry sized to its own content -- it can never stretch
// to match a photograph because it is not part of that grid.
export default function ProjectRecord() {
  return (
    <section aria-label="Project record" className="bg-graphite text-paper">
      {/* mx-auto max-w-6xl px-5 sm:px-8 is the identical box every other
          section uses, so the left edge lands on the shared alignment line
          at every width below 1440 with no custom code at all. The
          project-record-shell class (see globals.css) adds only the
          1440px-and-up override: it switches to the addendum's wider 5:4:3
          media track, its left edge still pinned to the identical
          shared-line formula the hero already uses, while the right edge
          is allowed to run wider (only shell-pad, not the full symmetric
          gutter) so the Remodel tile keeps its own aspect-ratio floor
          without ever moving the left edge off the line. */}
      <div className="project-record-shell mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
        <h2 className="font-display text-2xl md:text-3xl">Project record</h2>
        <p className="mt-2 max-w-xl text-muted-on-graphite">{projectRecord.intro}</p>

        {/* Tablet (768-1439) uses two rows -- New Construction and Barns
            share row one, Remodel takes row two -- at a 400px media height
            (.record-media in globals.css). Desktop (1440+) is the
            addendum's single 5:4:3 row at 520px, on the wider track
            described above. All three tiles always share one media height,
            so their captions always share a baseline by construction. */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-6">
          <Photo
            entry={newConstruction}
            className="record-tile-new-construction md:col-span-7"
            mediaHeightClass="record-media"
          />
          <Photo
            entry={barns}
            className="record-tile-barns md:col-span-5"
            mediaHeightClass="record-media"
          />
          <Photo
            entry={remodel}
            className="record-tile-remodel md:col-span-7"
            mediaHeightClass="record-media"
          />
        </div>

        {bridge.kind === "text" && (
          <div className="mt-10 border-t border-tan-deep/60 pt-6 md:grid md:grid-cols-12 md:gap-6">
            <h3 className="font-display text-xl md:col-span-4 md:text-[1.375rem]">
              {bridge.title}
            </h3>
            <p className="mt-2 max-w-md text-muted-on-graphite md:col-span-5 md:mt-0">
              {bridge.body}
            </p>
            <p className="mt-2 text-sm text-muted-on-graphite md:col-span-3 md:mt-0">
              {bridge.note}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Photo({
  entry,
  className,
  mediaHeightClass,
}: {
  entry: (typeof projectRecord.entries)[number];
  className?: string;
  mediaHeightClass: string;
}) {
  if (entry.kind !== "photo") return null;
  return (
    <figure className={`flex flex-col ${className ?? ""}`}>
      <div className={`relative w-full overflow-hidden ${mediaHeightClass}`}>
        <Image
          src={entry.src}
          alt={entry.alt}
          fill
          loading="lazy"
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
          style={{ objectPosition: entry.objectPosition }}
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted-on-graphite">
        <span className="mb-1 block font-semibold text-paper">
          {entry.label}
        </span>
        {entry.caption}
      </figcaption>
    </figure>
  );
}
