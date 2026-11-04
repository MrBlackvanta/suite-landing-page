import { betaAccess } from "@/data";

type CtaVariant = "outline" | "solid";

const variantClasses: Record<CtaVariant, string> = {
  outline:
    "h-12 border border-ink px-3.75 text-label-xs hover:bg-ink hover:text-paper md:h-14 md:px-5.75 md:text-label-sm",
  solid:
    "relative isolate h-15.25 overflow-hidden bg-ink px-8 text-label text-paper before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br/srgb before:from-violet before:via-magenta before:to-orange before:opacity-0 hover:before:opacity-100 motion-safe:before:transition-opacity motion-safe:before:duration-200 motion-safe:before:ease-out-expo",
};

type Props = {
  variant: CtaVariant;
  className?: string;
};

export default function CtaLink({ variant, className = "" }: Props) {
  return (
    <a
      href={betaAccess.href}
      className={`inline-flex items-center justify-center rounded-button ${variantClasses[variant]} ${className}`}
    >
      {betaAccess.label}
    </a>
  );
}
