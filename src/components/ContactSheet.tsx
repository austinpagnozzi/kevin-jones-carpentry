import { PhoneLink, EmailLink } from "@/components/ContactLinks";
import ContactForm from "@/components/ContactForm";
import { business, contactSheet } from "@/lib/content";

export default function ContactSheet() {
  return (
    <section aria-label="Contact" className="bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">
              {contactSheet.heading}
            </h2>
            <p className="mt-2 max-w-sm text-ink/80">{contactSheet.intro}</p>

            <div className="mt-6 flex flex-col gap-4">
              <PhoneLink className="inline-flex min-h-[52px] w-fit items-center gap-2 rounded bg-graphite px-6 font-body text-lg font-semibold text-paper hover:bg-graphite-deep">
                <PhoneIcon />
                <span className="tabular-nums">{business.phoneDisplay}</span>
              </PhoneLink>

              <EmailLink
                subject="Project inquiry"
                className="inline-flex w-fit items-center gap-2 rounded border border-ink/30 px-5 py-2.5 font-body font-medium hover:bg-ink/5"
              >
                <MailIcon /> {business.email}
              </EmailLink>

              <p className="text-sm text-ink/80">
                Kevin Jones Carpentry is also on Facebook.
              </p>

              <div className="mt-2 border-t border-ink/15 pt-4 text-ink/85">
                <p className="font-medium">
                  {business.addressLine1}
                  <br />
                  {business.addressLine2}
                </p>
                <p className="mt-1 text-sm text-ink/80">
                  A working location, not a shop open to visitors.
                </p>
              </div>

              <p className="mt-2 max-w-sm text-sm text-ink/80">
                {contactSheet.whatToHave}
              </p>
            </div>
          </div>

          <div className="rounded border border-ink/15 bg-paper p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M6.6 10.8c1.3 2.6 3.5 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1 .3 2.1.5 3.2.5.6 0 1 .4 1 1v3.3c0 .6-.4 1-1 1C10.5 20.4 3.6 13.5 3.6 5.2c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.1.2 2.2.5 3.2.1.3 0 .7-.2 1z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
