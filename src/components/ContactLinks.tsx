import { business } from "@/lib/content";

export function PhoneLink({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a href={business.phoneHref} className={className}>
      {children ?? (
        <span className="tabular-nums">{business.phoneDisplay}</span>
      )}
    </a>
  );
}

export function EmailLink({
  className,
  children,
  subject,
}: {
  className?: string;
  children?: React.ReactNode;
  subject?: string;
}) {
  const href = subject
    ? `${business.emailHref}?subject=${encodeURIComponent(subject)}`
    : business.emailHref;
  return (
    <a href={href} className={className}>
      {children ?? business.email}
    </a>
  );
}
