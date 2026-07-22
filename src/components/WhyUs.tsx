import { ImagePlaceholder } from "./ImagePlaceholder";

const points = [
  {
    title: "One licensed network",
    description:
      "Surveyors, advocates and registration specialists coordinated as a single process, not separate contractors.",
  },
  {
    title: "Direct institutional access",
    description:
      "Established working relationships with County Land Registries, Survey of Kenya and the Ministry of Lands.",
  },
  {
    title: "Full transparency",
    description:
      "A clear timeline and document trail at every stage, from first review to title handover.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="mx-auto max-w-[1360px] px-5 py-14 sm:px-8 sm:py-16 lg:py-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="aspect-4/3 w-full overflow-hidden rounded-md">
          <ImagePlaceholder label="Document / site inspection photo" />
        </div>
        <div>
          <span className="text-[13px] font-semibold tracking-[0.12em] text-[#a62e28]">
            WHY WEKEN ACRES
          </span>
          <h2 className="mb-[30px] mt-2.5 font-serif text-3xl font-bold text-[#3A3A3A] sm:text-4xl">
            Built around the Act, not around guesswork
          </h2>
          <div className="flex flex-col gap-[26px]">
            {points.map((point) => (
              <div key={point.title} className="flex gap-[18px]">
                <span className="h-[34px] w-[34px] flex-shrink-0 rounded-full border-[1.5px] border-[#a62e28]" />
                <div>
                  <h3 className="mb-1 text-[17px] font-semibold text-[#3A3A3A]">
                    {point.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#423B31]">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
