import Image from "next/image";
import { business } from "@/lib/content";

export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <Image
      src="/images/logo-kevin-jones-carpentry.png"
      alt={`${business.name} badge logo`}
      width={size}
      height={size}
      className="aspect-square h-auto shrink-0"
      style={{ width: size, height: size }}
    />
  );
}
