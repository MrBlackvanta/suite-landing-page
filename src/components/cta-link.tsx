import { betaAccess } from "@/data";

type CtaVariant = "outline";

const variantClasses: Record<CtaVariant, string> = {
  outline:
    "h-12 border border-ink px-3.75 text-label-xs hover:bg-ink hover:text-paper md:h-14 md:px-5.75 md:text-label-sm",
};

export default function CtaLink({ variant }: { variant: CtaVariant }) {
  return (
    <a
      href={betaAccess.href}
      className={`inline-flex items-center justify-center rounded-button ${variantClasses[variant]}`}
    >
      {betaAccess.label}
    </a>
  );
}
