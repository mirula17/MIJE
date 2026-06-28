"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NavLogo, MenuIcon, CloseIcon, SearchIcon } from "./icons";

const navLinks = [
  { label: "Home",               href: "/" },
  { label: "AI Tools",           href: "/ai-tools" },
  { label: "ChatGPT Prompts",    href: "/chatgpt-prompts" },
  { label: "Best Free Websites", href: "/best-free-websites" },
  { label: "Coding Resources",   href: "/coding-resources" },
  { label: "Student Productivity", href: "/student-productivity" },
  { label: "Blog",               href: "/blog" },
  { label: "About",              href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#FFD6E4] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Brand ─────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="shrink-0">
              <NavLogo />
            </div>
            <div className="leading-none">
              <div className="flex items-baseline gap-1">
                <span className="text-[15px] font-bold tracking-wide text-[#1A1A1A] font-serif">
                  MIJES
                </span>
                <span className="text-[15px] font-bold tracking-wide text-[#E8547A] font-serif">
                  TECH
                </span>
              </div>
              <span className="block text-[9px] tracking-[0.12em] text-[#888] uppercase mt-0.5">
                Discover. Learn. Grow.
              </span>
            </div>
          </Link>

          {/* ── Center Nav (desktop) ───────────────────── */}
          <nav className="hidden lg:flex items-center gap-0" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[12.5px] font-medium text-[#555] hover:text-[#E8547A] transition-colors duration-150 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E8547A] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* ── Right CTA ─────────────────────────────── */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex p-2 text-[#888] hover:text-[#E8547A] transition-colors">
              <SearchIcon />
            </button>
            <Link
              href="/subscribe"
              className="hidden sm:inline-flex items-center px-5 py-2 bg-[#E8547A] text-white text-[13px] font-semibold rounded-full hover:bg-[#C9184A] transition-colors duration-200 shadow-sm"
            >
              Subscribe
            </Link>
            <button
              className="lg:hidden p-2 text-[#555] hover:text-[#E8547A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Nav ───────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#FFD6E4] px-4 pb-5 shadow-lg">
          <nav className="flex flex-col pt-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#555] hover:text-[#E8547A] hover:bg-[#FFF0F4] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className="mt-3 btn-pink justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Subscribe
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
