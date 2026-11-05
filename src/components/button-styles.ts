export type ButtonVariant = "outline" | "solid";

const baseClasses = "inline-flex items-center justify-center rounded-button";

const variantClasses: Record<ButtonVariant, string> = {
  outline:
    "h-12 border border-ink px-3.75 text-label-xs hover:bg-ink hover:text-paper md:h-14 md:px-5.75 md:text-label-sm",
  solid:
    "relative isolate h-15.25 overflow-hidden bg-ink px-8 text-label text-paper before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br/srgb before:from-violet before:via-magenta before:to-orange before:opacity-0 hover:before:opacity-100 motion-safe:before:transition-opacity motion-safe:before:duration-200 motion-safe:before:ease-out-expo",
};

export function buttonStyles(variant: ButtonVariant, className = "") {
  return `${baseClasses} ${variantClasses[variant]} ${className}`;
}
