const steps = [
  {
    number: "01",
    title: "Consultation & Document Review",
    description:
      "We review existing title, survey and approval documents for your development.",
  },
  {
    number: "02",
    title: "Survey & Plan Preparation",
    description:
      "Licensed surveyors prepare the sectional plan for each unit and common area.",
  },
  {
    number: "03",
    title: "Regulatory Submission",
    description:
      "Plans are lodged with the County and Survey of Kenya for examination and approval.",
  },
  {
    number: "04",
    title: "Title Registration",
    description:
      "Each unit is entered into the Sectional Register and individual titles are issued.",
  },
  {
    number: "05",
    title: "Handover & Support",
    description:
      "Titles handed to your buyers; we remain on call for amendments and transfers.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#3A3A3A] px-5 py-14 sm:px-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-13 max-w-[62ch]">
          <span className="text-[13px] font-semibold tracking-[0.12em] text-[#a62e28]">
            HOW IT WORKS
          </span>
          <h2 className="mt-2.5 font-serif text-3xl font-bold text-[#FAF8F4] sm:text-4xl">
            A clear path from plan to title
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="border-t-2 border-[#55565A] pt-5">
              <span className="font-serif text-[22px] font-semibold text-[#9C9C9E]">
                {step.number}
              </span>
              <h3 className="mb-1.5 mt-3 text-base font-semibold text-[#FAF8F4]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#BEBEBE]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
