import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/PageIntro";
import CallStrip from "@/components/CallStrip";
import { PhoneLink } from "@/components/ContactLinks";
import { services, type ServiceSlug } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.label,
    description: `${service.label} from Kevin Jones Carpentry, Parkman, Maine. ${service.summary}`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: ServiceSlug }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageIntro
        eyebrow="Services"
        heading={service.label}
        intro={service.summary}
        background="tan"
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:py-16">
          <div>
            <p className="max-w-md text-lg text-ink/85">{service.detail}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PhoneLink className="inline-flex min-h-[44px] items-center gap-2 rounded bg-graphite px-5 font-body font-semibold text-paper hover:bg-graphite-deep">
                {service.ctaPhrase}
              </PhoneLink>
            </div>
            <p className="mt-6 text-sm text-ink/80">
              Kevin also takes on{" "}
              {otherServices.map((s, i) => (
                <span key={s.slug}>
                  {i > 0 && (i === otherServices.length - 1 ? " and " : ", ")}
                  <Link href={`/services/${s.slug}`} className="underline">
                    {s.label.toLowerCase()}
                  </Link>
                </span>
              ))}
              .
            </p>
          </div>

          {service.photo && (
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded">
              <Image
                src={service.photo.src}
                alt={service.photo.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
        {service.photo && (
          <p className="mx-auto -mt-8 max-w-5xl px-5 pb-10 text-sm text-ink/80 sm:px-8">
            {service.photo.caption}
          </p>
        )}
      </section>

      <CallStrip
        text={`Ready to talk about ${service.label.toLowerCase()}?`}
        background="paperDeep"
      />
    </>
  );
}
