import { buttonStyles } from "@/components/button-styles";
import { SITE_NAME } from "@/data";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "There’s nothing at this address. Head back to the home page to see how our automations bring in more leads.";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Page not found`,
  description,
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="v-container flex grow flex-col items-start justify-center py-16">
      <p className="text-caption text-muted uppercase">Error 404</p>
      <h1 className="mt-4 text-hero-sm text-balance md:text-hero-md xl:text-hero">
        Page not found.
      </h1>
      <p className="mt-8 text-body-sm text-muted md:mt-10 md:max-w-87.5 xl:text-body">
        {description}
      </p>
      <Link
        href="/"
        className={buttonStyles("solid", "mt-8 md:mt-10 xl:mt-13")}
      >
        Back to the home page
      </Link>
    </main>
  );
}
