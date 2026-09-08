import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ContactSheet from "@/components/ContactSheet";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call (207) 578-0606 or email kevinjonescarpentry@gmail.com about a carpentry project in the Parkman, Maine area.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        heading="Call, email, or write it out"
        intro="Kevin answers his own phone. Call is fastest; email is a real second option."
        background="tan"
      />
      <ContactSheet />
    </>
  );
}
