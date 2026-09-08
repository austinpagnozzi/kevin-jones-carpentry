"use client";

import { useId, useState, type FormEvent } from "react";
import { business, services } from "@/lib/content";

type Status = "idle" | "error" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const nameId = useId();
  const projectId = useId();
  const messageId = useId();
  const errorSummaryId = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Enter your name so Kevin knows who is asking.";
    if (!project) nextErrors.project = "Choose the closest project type.";
    if (!message) nextErrors.message = "Say a little about the project.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    const subject = `Project inquiry: ${project}`;
    const body = [
      `Name: ${name}`,
      `Project type: ${project}`,
      "",
      message,
    ].join("\n");
    const mailtoUrl = `${business.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- mailto: is an external protocol handoff, not an internal route.
    window.location.href = mailtoUrl;
  }

  return (
    <div>
      <p className="mb-5 max-w-xl text-sm text-ink/80">
        This is a preview site with no server behind it. Submitting this form
        opens your own email app with your message already filled in,
        addressed to {business.email}. Nothing is stored here, and nothing is
        sent unless you send it from your email app.
      </p>

      {status === "error" && (
        <div
          id={errorSummaryId}
          role="alert"
          className="mb-4 rounded border border-ink/30 bg-paper-deep px-4 py-3 text-sm"
        >
          <p className="font-semibold">Check the following:</p>
          <ul className="mt-1 list-inside list-disc">
            {Object.values(errors).map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      {status === "sent" && (
        <div
          role="status"
          className="mb-4 rounded border border-ink/30 bg-paper-deep px-4 py-3 text-sm"
        >
          Your email app should be opening now with your message ready to
          send to Kevin. If it did not open, email{" "}
          <a href={business.emailHref} className="underline">
            {business.email}
          </a>{" "}
          directly or call{" "}
          <a href={business.phoneHref} className="underline tabular-nums">
            {business.phoneDisplay}
          </a>
          .
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <div>
          <label htmlFor={nameId} className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorSummaryId : undefined}
            className="min-h-11 w-full rounded border border-ink/30 bg-paper px-3 py-2 focus:border-ink"
          />
        </div>

        <div>
          <label htmlFor={projectId} className="mb-1 block text-sm font-medium">
            Project type
          </label>
          <select
            id={projectId}
            name="project"
            defaultValue=""
            aria-invalid={Boolean(errors.project)}
            aria-describedby={errors.project ? errorSummaryId : undefined}
            className="min-h-11 w-full rounded border border-ink/30 bg-paper px-3 py-2 focus:border-ink"
          >
            <option value="" disabled>
              Choose one
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.label}>
                {s.label}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor={messageId} className="mb-1 block text-sm font-medium">
            Tell Kevin about the project
          </label>
          <textarea
            id={messageId}
            name="message"
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? errorSummaryId : undefined}
            className="w-full rounded border border-ink/30 bg-paper px-3 py-2 focus:border-ink"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded bg-graphite px-6 font-body font-semibold text-paper hover:bg-graphite-deep"
        >
          Prepare email to Kevin
        </button>
      </form>
    </div>
  );
}
