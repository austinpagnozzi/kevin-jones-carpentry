const backgrounds = {
  paper: "bg-paper text-ink",
  tan: "bg-tan text-ink",
  graphite: "bg-graphite text-paper",
  paperDeep: "bg-paper-deep text-ink",
} as const;

export default function PageIntro({
  eyebrow,
  heading,
  intro,
  background = "paper",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  background?: keyof typeof backgrounds;
}) {
  return (
    <section className={backgrounds[background]}>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
        {eyebrow && (
          <p className="mb-2 font-body text-sm font-medium opacity-80">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-2xl text-balance font-display text-3xl md:text-4xl">
          {heading}
        </h1>
        {intro && (
          <p className="mt-4 max-w-xl text-lg opacity-85">{intro}</p>
        )}
      </div>
    </section>
  );
}
