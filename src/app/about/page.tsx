import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import HowKevinWorks from "@/components/HowKevinWorks";
import CallStrip from "@/components/CallStrip";
import { business, ownWords } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kevin Jones Carpentry works rough frame to finished room, based at 106 North Dexter Road, Parkman, Maine.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        heading="Both ends of the job"
        intro="Kevin Jones Carpentry runs a job from the rough framing through the finish work, based in Parkman, Maine."
        background="tan"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
          <p className="text-lg text-ink/85">
            The work on this site runs from the rough end of a job, the
            foundation, the walls, the trusses, to the finish end, the
            closets, the wainscoting, the trim. That range across the whole
            job, not just one part of it, is why the site is organized as one
            span from Rough to Finish instead of a list of separate
            specialties.
          </p>
          <p className="mt-5 text-lg text-ink/85">
            On his own page Kevin describes the business as{" "}
            <strong className="font-semibold">{ownWords.experience}</strong>{" "}
            and <strong className="font-semibold">{ownWords.insurance}</strong>.
            Those are his own words about his own business.
          </p>
          <p className="mt-5 text-lg text-ink/85">
            Kevin Jones Carpentry is based at {business.addressLine1},{" "}
            {business.addressLine2}, in Piscataquis County. That is a working
            location, not a shop with regular hours open to visitors.
          </p>
        </div>
      </section>

      <HowKevinWorks />
      <CallStrip text="Talk to Kevin about your project." background="paperDeep" />
    </>
  );
}
