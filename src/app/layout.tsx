import { Signature, SiteHeader } from "@/components/layout";
import { SITE_NAME, SITE_URL } from "@/data";
import type { Metadata, Viewport } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

const title = `${SITE_NAME} | Marketing and sales automation`;
const description =
  "Marketing and sales automations that scale your outreach and bring in more leads for your company. Request beta access.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The suite headline, A super solution for your business, beside a phone charting rising leads on a yellow-to-violet gradient.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${epilogue.variable} antialiased`}>
      <body className="relative flex min-h-dvh flex-col">
        <SiteHeader />
        {children}
        <Signature />
      </body>
    </html>
  );
}
