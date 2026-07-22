const services = [
  {
    number: "01",
    title: "Sectional Plan Preparation",
    description:
      "We work with licensed surveyors to prepare sectional plans and lodge them for County and Survey of Kenya approval.",
  },
  {
    number: "02",
    title: "Title Registration",
    description:
      "We manage registration of each unit in the Sectional Register, giving buyers a clean, individual title.",
  },
  {
    number: "03",
    title: "Survey & Subdivision Coordination",
    description:
      "We coordinate the cadastral survey and subdivision work that must precede a valid sectional plan.",
  },
  {
    number: "04",
    title: "Regulatory & County Liaison",
    description:
      "Direct liaison with County Land Registries, Survey of Kenya and the Ministry of Lands on your behalf.",
  },
  {
    number: "05",
    title: "Compliance Documentation",
    description:
      "Management corporation rules, unit schedules and common-area declarations, drafted to standard.",
  },
  {
    number: "06",
    title: "Post-Registration Support",
    description:
      "Amendments, unit transfers and ongoing management-corporation compliance after handover.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1360px] px-5 py-14 sm:px-8 sm:py-16 lg:py-24"
    >
      <div className="mb-12 max-w-[62ch]">
        <span className="text-[13px] font-semibold tracking-[0.12em] text-[#a62e28]">
          WHAT WE DO
        </span>
        <h2 className="mt-2.5 font-serif text-3xl font-bold text-[#3A3A3A] sm:text-4xl">
          A single consultancy for every stage of registration
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-px border border-[#E4E0D8] bg-[#E4E0D8] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.number} className="bg-[#FAF8F4] p-8">
            <span className="font-serif text-sm text-[#A79A85]">
              {service.number}
            </span>
            <h3 className="mb-2 mt-2.5 text-lg font-semibold text-[#3A3A3A]">
              {service.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[#423B31]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
