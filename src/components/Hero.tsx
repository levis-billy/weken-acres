import { ImagePlaceholder } from "./ImagePlaceholder";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1360px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24"
    >
      <div>
        <span className="mb-5 inline-block rounded-sm bg-[#a62e28] px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] text-white">
          SECTIONAL PROPERTIES ACT, 2020 SPECIALISTS
        </span>
        <h1 className="mb-5 font-serif text-4xl font-bold leading-[1.08] text-[#3A3A3A] sm:text-5xl lg:text-[58px]">
          Registering sectional properties, handled end-to-end.
        </h1>
        <p className="mb-8 max-w-[52ch] text-base leading-relaxed text-[#423B31] sm:text-lg">
          We work alongside property developers across Kenya to prepare
          sectional plans, coordinate survey and subdivision, and secure
          title registration — so your units are legally sellable, sooner.
        </p>
        <div className="mb-7 flex flex-wrap gap-4">
          <a
            href="#request"
            className="rounded-[3px] bg-[#545454] px-7 py-[15px] text-[15px] font-semibold text-[#FAF8F4] hover:text-[#FAF8F4]/90"
          >
            Request Our Service
          </a>
          <a
            href="tel:+254700000000"
            className="rounded-[3px] border-[1.5px] border-[#a62e28] px-7 py-3.5 text-[15px] font-semibold text-[#a62e28] hover:text-[#8c2620]"
          >
            Call +254 700 000 000
          </a>
        </div>
        <p className="text-[13px] tracking-wide text-[#6B6153]">
          Serving developers in Nairobi, Kiambu, Mombasa &amp; beyond.
        </p>
      </div>
      <div className="aspect-4/3 w-full overflow-hidden rounded-md">
        <ImagePlaceholder label="Development or site photo" />
      </div>
    </section>
  );
}
