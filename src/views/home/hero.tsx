import heroLandscape from "@/assets/image-hero-landscape-2x.webp";
import heroPortrait2x from "@/assets/image-hero-portrait-2x.webp";
import heroPortrait from "@/assets/image-hero-portrait.webp";
import CtaLink from "@/components/cta-link";
import Stats from "./stats";
import Swoosh from "./swoosh";

export default function Hero() {
  return (
    <section className="v-container grid md:grid-cols-[1fr_17.5rem] md:pt-20 xl:grid-cols-[1fr_auto_auto] xl:pt-17">
      <div className="relative z-10 mt-21 flex flex-col items-start md:col-span-2 md:col-start-1 md:row-start-1 md:mt-22 xl:mt-26">
        <h1 className="text-hero-sm text-balance md:max-w-xl md:text-hero-md xl:max-w-2xl xl:text-hero">
          A super{" "}
          <span className="relative">
            solution
            <Swoosh className="absolute bottom-full left-[0.15em] mb-[0.3em] w-[4em]" />
          </span>{" "}
          for your business.
        </h1>
        <p className="mt-8 text-body-sm text-muted md:mt-10 md:max-w-87.5 xl:text-body">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>
        <CtaLink variant="solid" className="mt-8 md:mt-10 xl:mt-13" />
      </div>

      <picture className="mt-14 md:col-start-2 md:row-start-1 md:mt-0 xl:w-87.5">
        <source
          media="(min-width: 48rem)"
          srcSet={`${heroPortrait.src} 350w, ${heroPortrait2x.src} 700w`}
          sizes="(min-width: 80rem) 350px, 280px"
          width={heroPortrait.width}
          height={heroPortrait.height}
        />
        <img
          src={heroLandscape.src}
          width={heroLandscape.width}
          height={heroLandscape.height}
          alt="A phone showing a bar chart of leads climbing"
          fetchPriority="high"
          className="w-full"
        />
      </picture>

      <Stats className="mt-14 md:col-span-2 md:mt-22 xl:col-span-1 xl:col-start-3 xl:row-start-1 xl:mt-26 xl:ml-24 xl:w-47.5 xl:self-start" />
    </section>
  );
}
