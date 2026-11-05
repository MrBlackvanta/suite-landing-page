import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
} from "@/components/icons";
import Signature from "./signature";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
  { label: "Twitter", href: "https://twitter.com/", Icon: TwitterIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: InstagramIcon,
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative bg-sand pt-14 pb-20 md:py-18 xl:pt-24">
      <div className="v-container grid justify-items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Logo className="mb-1.5 md:justify-self-start" />
        <p className="text-footer text-muted">Copyright - Suite</p>
        <ul className="flex gap-7 md:justify-self-end">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="-m-3 flex size-11 items-center justify-center hover:opacity-50 motion-safe:transition-opacity motion-safe:duration-200 motion-safe:ease-out-expo"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Signature />
    </footer>
  );
}
