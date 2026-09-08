import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectRecord from "@/components/ProjectRecord";
import CallStrip from "@/components/CallStrip";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real Kevin Jones Carpentry projects: new construction framing, a rough-sawn run-in shed, a built-in pine closet, and a custom crossing bridge.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        heading="What Kevin Jones Carpentry has actually built"
        intro="A short, honest record. No stock photography and nothing staged, just jobs Kevin Jones Carpentry has done."
        background="tan"
      />
      <ProjectRecord />
      <CallStrip text="See something close to your project?" background="paperDeep" />
    </>
  );
}
