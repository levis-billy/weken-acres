export function Footer() {
  return (
    <footer className="bg-[#3A3A3A] px-5 pb-7 pt-10 sm:px-8 sm:pt-14">
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-wrap justify-between gap-10 border-b border-[#464646] pb-9">
          <div className="max-w-80">
            <p className="mb-2 font-serif text-lg font-semibold text-[#FAF8F4]">
              Weken Acres
            </p>
            <p className="text-sm leading-relaxed text-[#B5B5B5]">
              Sectional property registration consultancy for developers across
              Kenya.
            </p>
          </div>
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.1em] text-[#9C9C9E]">
                COMPANY
              </span>
              <a
                href="#services"
                className="text-sm text-[#E2E2E2] hover:text-white"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-sm text-[#E2E2E2] hover:text-white"
              >
                Process
              </a>
              <a
                href="#why"
                className="text-sm text-[#E2E2E2] hover:text-white"
              >
                Why Us
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.1em] text-[#9C9C9E]">
                CONTACT
              </span>
              <a
                href="tel:+254700000000"
                className="text-sm text-[#E2E2E2] hover:text-white"
              >
                +254 700 000 000
              </a>
              <a
                href="mailto:wkrealtors254@outlook.com"
                className="text-sm text-[#E2E2E2] hover:text-white"
              >
                wkrealtors254@outlook.com
              </a>
              <a
                href="https://wa.me/254700000000"
                className="text-sm text-[#E2E2E2] hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-[13px] text-[#8A8A8A]">
          © 2026 Weken Acres Properties &amp; Consultancy Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
