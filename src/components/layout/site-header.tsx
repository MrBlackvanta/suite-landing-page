import CtaLink from "@/components/cta-link";
import { Logo } from "@/components/icons";

export default function SiteHeader() {
  return (
    <header className="v-container flex items-center justify-between pt-6 md:pt-10 xl:pt-12.5">
      <Logo className="mb-1.5" />
      <CtaLink variant="outline" />
    </header>
  );
}
