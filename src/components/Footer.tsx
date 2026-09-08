import Link from "next/link";
import Logo from "@/components/Logo";
import { PhoneLink, EmailLink } from "@/components/ContactLinks";
import { business, navLinks, services, siteCredit } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-paper-deep pb-24 pt-12 md:pb-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-ink/15 pb-10 md:grid-cols-[auto_1fr_1fr_1fr]">
          <div className="flex items-start gap-3">
            <Logo size={56} />
            <div className="font-display text-lg leading-tight">
              Kevin Jones
              <br />
              Carpentry
            </div>
          </div>

          <nav aria-label="Pages" className="flex flex-col gap-2">
            <h2 className="mb-1 font-body text-sm font-semibold text-ink/80">
              Pages
            </h2>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded py-0.5 w-fit">
                {link.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Services" className="flex flex-col gap-2">
            <h2 className="mb-1 font-body text-sm font-semibold text-ink/80">
              Services
            </h2>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded py-0.5 w-fit"
              >
                {s.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <h2 className="mb-1 font-body text-sm font-semibold text-ink/80">
              Contact
            </h2>
            <PhoneLink className="rounded w-fit font-semibold tabular-nums">
              {business.phoneDisplay}
            </PhoneLink>
            <EmailLink className="rounded w-fit break-all" />
            <p className="text-ink/80">
              {business.addressLine1}
              <br />
              {business.addressLine2}
            </p>
            <p className="text-sm text-ink/80">Kevin Jones Carpentry is also on Facebook.</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 pt-6 text-sm text-ink/80 sm:flex-row sm:items-center">
          <p>
            This is a preview site built for review. It is not indexed and
            collects no real data.
          </p>
          <p>
            Preview built by{" "}
            <span className="font-medium text-ink/80">
              {siteCredit.builder}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
