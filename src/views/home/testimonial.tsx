import jeremyLarge2x from "@/assets/image-jeremy-large-2x.webp";
import jeremyLarge from "@/assets/image-jeremy-large.webp";
import jeremySmall2x from "@/assets/image-jeremy-small-2x.webp";
import jeremySmall from "@/assets/image-jeremy-small.webp";
import { testimonial } from "@/data";
import QuoteCurve from "./quote-curve";

export default function Testimonial() {
  return (
    <section
      aria-labelledby="testimonial-title"
      className="relative isolate mt-14 before:absolute before:inset-x-0 before:bottom-0 before:-z-10 before:h-33.5 before:bg-sand md:mt-23 md:before:h-116 xl:mt-38.5 xl:before:h-66"
    >
      <div className="md:v-container">
        <div className="relative isolate flex flex-col items-center text-center text-sand before:absolute before:inset-x-0 before:top-45 before:bottom-0 before:-z-10 before:rounded-card before:bg-ink xl:grid xl:grid-cols-[auto_auto] xl:items-end xl:justify-between xl:px-31 xl:text-left xl:before:top-11">
          <div className="relative flex w-full justify-center overflow-clip pl-5 xl:block xl:w-auto xl:overflow-visible xl:pl-0">
            <div
              aria-hidden="true"
              className="absolute bottom-15 left-1/2 -z-10 size-25 -translate-x-1/2 rounded-full bg-orchid/48 blur-glow md:bottom-7 md:size-49 xl:bottom-10 xl:size-73.5"
            />
            <picture>
              <source
                media="(min-width: 80rem)"
                srcSet={`${jeremyLarge.src} 361w, ${jeremyLarge2x.src} 722w`}
                sizes="361px"
                width={jeremyLarge.width}
                height={jeremyLarge.height}
              />
              <img
                src={jeremySmall.src}
                srcSet={`${jeremySmall.src} 243w, ${jeremySmall2x.src} 486w`}
                sizes="247px"
                width={jeremySmall.width}
                height={jeremySmall.height}
                alt=""
                loading="lazy"
                decoding="async"
                className="block h-100.5 w-auto xl:h-147.5"
              />
            </picture>
          </div>

          <div className="relative flex flex-col items-center px-4 pb-16 xl:mt-11 xl:w-87.5 xl:items-start xl:self-center xl:px-0 xl:py-10">
            <QuoteCurve className="mt-10 h-10 translate-x-full xl:absolute xl:top-28 xl:-left-13 xl:mt-0 xl:h-13 xl:translate-x-0" />
            <h2
              id="testimonial-title"
              className="mt-9 text-heading-sm text-paper xl:mt-0 xl:text-heading"
            >
              It just works.
            </h2>
            <figure className="mt-10 max-w-143.25">
              <blockquote className="text-body tracking-quote xl:text-quote">
                <p>{testimonial.quote}</p>
              </blockquote>
              <figcaption className="mt-10">
                <p className="text-label text-paper uppercase">
                  {testimonial.name}
                </p>
                <p className="text-caption uppercase">{testimonial.role}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
