import { PhoneLink, EmailLink } from "@/components/ContactLinks";
import { business } from "@/lib/content";

export default function CallStrip({
  text = "Call or email about your project.",
  background = "paper",
}: {
  text?: string;
  background?: "paper" | "tan" | "paperDeep";
}) {
  const bg =
    background === "tan"
      ? "bg-tan"
      : background === "paperDeep"
        ? "bg-paper-deep"
        : "bg-paper";
  return (
    <section className={bg}>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-xl">{text}</p>
        <div className="flex flex-wrap gap-3">
          <PhoneLink className="inline-flex min-h-[44px] items-center gap-2 rounded bg-graphite px-5 font-body font-semibold text-paper hover:bg-graphite-deep">
            <span>
              Call <span className="tabular-nums">{business.phoneDisplay}</span>
            </span>
          </PhoneLink>
          <EmailLink
            subject="Project inquiry"
            className="inline-flex min-h-[44px] items-center rounded border border-ink/30 px-5 font-body font-medium hover:bg-ink/5"
          >
            Email Kevin
          </EmailLink>
        </div>
      </div>
    </section>
  );
}
