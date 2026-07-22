"use client";

import { useState } from "react";
import Image from "next/image";
import { basePath } from "@/lib/base-path";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Us" },
  { href: "#request", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E0D8] bg-[#FAF8F4]/94 px-5 backdrop-blur-sm sm:px-8">
      <div className="flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={`${basePath}/weken-acres-logo.svg`}
            alt="Weken Acres Properties & Consultancy Limited"
            height={200}
            width={200}
            className="h-16 w-16 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
            priority
          />
        </a>

        <nav className="hidden items-center gap-4 md:flex md:gap-6 lg:gap-8">
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

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-[#16202B] transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[#16202B] transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#E4E0D8] pb-5 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-[3px] px-2 py-2.5 text-[15px] font-medium text-[#16202B] hover:bg-[#F1ECE3] hover:text-[#a62e28]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#request"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-[3px] bg-[#545454] px-[22px] py-3 text-center text-sm font-semibold text-[#FAF8F4] hover:text-[#FAF8F4]/90"
          >
            Request Service
          </a>
        </nav>
      )}
    </header>
  );
}
