const companyLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Us" },
  { href: "#request", label: "Contact" },
];

const serviceLinks = [
  { href: "#services", label: "Sectional Plan Preparation" },
  { href: "#services", label: "Title Registration" },
  { href: "#services", label: "Survey & Subdivision" },
  { href: "#services", label: "Regulatory & County Liaison" },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M4.5 4.5h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3.5a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3 5.1a1.5 1.5 0 0 1 1.5-1.6Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.297-.372.446-.557.15-.174.198-.298.297-.497.099-.198.05-.371-.05-.52-.099-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.058 3.146 4.996 4.29 2.938 1.144 2.938.763 3.469.714.53-.05 1.758-.718 2.005-1.412.248-.694.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.05 2C6.505 2 2 6.477 2 11.995c0 1.99.582 3.842 1.588 5.402L2 22l4.72-1.545a10.05 10.05 0 0 0 5.33 1.523c5.545 0 10.05-4.477 10.05-9.995C22.1 6.477 17.595 2 12.05 2zm0 18.174a8.14 8.14 0 0 1-4.457-1.32l-.32-.203-3.24 1.061 1.084-3.161-.213-.324a8.104 8.104 0 0 1-1.28-4.232c0-4.5 3.681-8.157 8.226-8.157 4.545 0 8.226 3.657 8.226 8.157s-3.681 8.179-8.226 8.179z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-[#a62e28] bg-[#2E2E2E]">
      <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.95fr_1fr] lg:gap-10">
          <div>
            <p className="font-serif text-2xl font-bold text-[#FAF8F4]">
              Weken Acres
            </p>
            <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-[#a62e28]">
              PROPERTIES &amp; CONSULTANCY LIMITED
            </p>
            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-[#B5B5B5]">
              Sectional property registration consultancy for developers
              across Kenya — from survey to title, handled end-to-end.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="mb-1 text-xs font-semibold tracking-[0.1em] text-[#9C9C9E]">
              COMPANY
            </span>
            {companyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#E2E2E2] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="mb-1 text-xs font-semibold tracking-[0.1em] text-[#9C9C9E]">
              OUR SERVICES
            </span>
            {serviceLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#E2E2E2] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="mb-1 text-xs font-semibold tracking-[0.1em] text-[#9C9C9E]">
              GET IN TOUCH
            </span>
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2.5 text-sm text-[#E2E2E2] hover:text-white"
            >
              <PhoneIcon />
              +254 700 000 000
            </a>
            <a
              href="mailto:wkrealtors254@outlook.com"
              className="flex items-center gap-2.5 text-sm text-[#E2E2E2] hover:text-white"
            >
              <MailIcon />
              wkrealtors254@outlook.com
            </a>
            <a
              href="https://wa.me/254700000000"
              className="flex items-center gap-2.5 text-sm text-[#E2E2E2] hover:text-white"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <p className="flex items-start gap-2.5 text-sm leading-relaxed text-[#B5B5B5]">
              <PinIcon />
              Weken House, Waiyaki Way
              <br />
              Nairobi, Kenya
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-[#464646] pt-7 sm:flex-row">
          <p className="text-[13px] text-[#8A8A8A]">
            © 2026 Weken Acres Properties &amp; Consultancy Limited. All
            rights reserved.
          </p>
          <p className="text-[13px] font-medium tracking-wide text-[#8A8A8A]">
            Sectional Properties Act, 2020 Specialists
          </p>
        </div>
      </div>
    </footer>
  );
}
