import Image from "next/image";
import { basePath } from "@/lib/base-path";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Us" },
  { href: "#request", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-6 border-b border-[#E4E0D8] bg-[#FAF8F4]/94 px-5 py-0 backdrop-blur-sm sm:px-8">
      <a href="#top" className="flex items-center">
        <Image
          src={`${basePath}/weken-acres-logo.svg`}
          alt="Weken Acres Properties & Consultancy Limited"
          height={200}
          width={200}
          className="h-24 w-24 sm:h-28 sm:w-28"
          priority
        />
      </a>
      <nav className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[15px] font-medium text-[#16202B] hover:text-[#a62e28]"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#request"
          className="rounded-[3px] bg-[#545454] px-[22px] py-[11px] text-sm font-semibold text-[#FAF8F4] hover:text-[#FAF8F4]/90"
        >
          Request Service
        </a>
      </nav>
    </header>
  );
}
