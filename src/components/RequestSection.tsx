"use client";

import { useState, type FormEvent } from "react";

const developmentTypes = [
  { value: "apartments", label: "Apartments / Flats" },
  { value: "townhouses", label: "Gated Community / Townhouses" },
  { value: "commercial", label: "Commercial Units" },
  { value: "mixed", label: "Mixed-Use" },
];

const inputClasses =
  "rounded-[3px] border border-[#D8D2C4] px-3.5 py-3 text-[15px] text-[#16202B] focus:outline-none focus:ring-2 focus:ring-[#a62e28]/40";
const labelClasses =
  "flex flex-col gap-1.5 text-[13px] font-semibold text-[#423B31]";

export function RequestSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    devType: "",
    units: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="request"
      className="bg-[#F1ECE3] px-5 py-14 sm:px-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-11 max-w-[62ch]">
          <span className="text-[13px] font-semibold tracking-[0.12em] text-[#a62e28]">
            GET STARTED
          </span>
          <h2 className="mt-2.5 font-serif text-3xl font-bold text-[#3A3A3A] sm:text-4xl">
            Request our registration service
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-[#423B31]">
            Tell us about your development and we&apos;ll come back to you
            within one business day.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="rounded-md border border-[#E4E0D8] bg-white p-7 sm:p-11">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClasses}>
                    Full name
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Jane Mwangi"
                      className={inputClasses}
                    />
                  </label>
                  <label className={labelClasses}>
                    Phone
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange("phone")}
                      placeholder="07XX XXX XXX"
                      className={inputClasses}
                    />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClasses}>
                    Email
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="jane@developer.co.ke"
                      className={inputClasses}
                    />
                  </label>
                  <label className={labelClasses}>
                    Company / development name
                    <input
                      type="text"
                      value={form.company}
                      onChange={handleChange("company")}
                      placeholder="Riverside Gardens Ltd"
                      className={inputClasses}
                    />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClasses}>
                    Development type
                    <select
                      value={form.devType}
                      onChange={handleChange("devType")}
                      className={`${inputClasses} bg-white`}
                    >
                      <option value="">Select type</option>
                      {developmentTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={labelClasses}>
                    Number of units
                    <input
                      type="number"
                      min={1}
                      value={form.units}
                      onChange={handleChange("units")}
                      placeholder="e.g. 24"
                      className={inputClasses}
                    />
                  </label>
                </div>
                <label className={labelClasses}>
                  Message
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder="Tell us where you are in the process."
                    className={`${inputClasses} resize-y font-sans`}
                  />
                </label>
                <button
                  type="submit"
                  className="self-start rounded-[3px] bg-[#545454] px-8 py-[15px] text-[15px] font-semibold text-[#FAF8F4] hover:bg-[#454545]"
                >
                  Send Request
                </button>
              </form>
            ) : (
              <div className="px-1 py-6">
                <h3 className="mb-2.5 font-serif text-2xl font-bold text-[#3A3A3A]">
                  Request received.
                </h3>
                <p className="text-[15px] leading-relaxed text-[#423B31]">
                  Thank you — a member of our team will be in touch within one
                  business day to discuss your development.
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[22px]">
            <div className="rounded-md bg-[#3A3A3A] p-8">
              <h3 className="mb-5 font-serif text-lg font-semibold text-[#FAF8F4]">
                Prefer to reach us directly?
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+254700000000"
                  className="text-[15px] font-medium text-[#E9E4D9] hover:text-white"
                >
                  📞 &nbsp;+254 700 000 000
                </a>
                <a
                  href="https://wa.me/254700000000"
                  className="text-[15px] font-medium text-[#E9E4D9] hover:text-white"
                >
                  WhatsApp &nbsp;+254 700 000 000
                </a>
                <a
                  href="mailto:wkrealtors254@outlook.com"
                  className="text-[15px] font-medium text-[#E9E4D9] hover:text-white"
                >
                  ✉️ &nbsp;wkrealtors254@outlook.com
                </a>
              </div>
            </div>
            <div className="rounded-md border border-[#E4E0D8] p-8">
              <h3 className="mb-2.5 text-[15px] font-semibold text-[#3A3A3A]">
                Office
              </h3>
              <p className="text-sm leading-relaxed text-[#423B31]">
                Weken House, Waiyaki Way
                <br />
                <br />
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
