import { betaAccess } from "@/data";
import { buttonStyles, type ButtonVariant } from "./button-styles";

type Props = {
  variant: ButtonVariant;
  className?: string;
};

export default function CtaLink({ variant, className }: Props) {
  return (
    <a href={betaAccess.href} className={buttonStyles(variant, className)}>
      {betaAccess.label}
    </a>
  );
}
