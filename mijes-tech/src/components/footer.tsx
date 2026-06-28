import React from "react";
import Link from "next/link";
import { NavLogo, HeartIcon, EnvelopeIcon } from "./icons";

const topCategories = [
  { label: "AI Tools",             href: "/ai-tools" },
  { label: "ChatGPT Prompts",      href: "/chatgpt-prompts" },
  { label: "Best Free Websites",   href: "/best-free-websites" },
  { label: "Coding Resources",     href: "/coding-resources" },
  { label: "Student Productivity", href: "/student-productivity" },
];

const quickLinks = [
  { label: "Blog",           href: "/blog" },
  { label: "All Resources",  href: "/resources" },
  { label: "About Us",       href: "/about" },
  { label: "Contact",        href: "/about#contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

const popularTopics = [
  { label: "AI Tools for Students",  href: "/ai-tools" },
  { label: "ChatGPT Study Prompts",  href: "/chatgpt-prompts" },
  { label: "Free Coding Websites",   href: "/coding-resources" },
  { label: "Python Resources",       href: "/coding-resources" },
  { label: "Notion Templates",       href: "/student-productivity" },
];

const socialLinks = [
  { label: "Pinterest", href: "https://pinterest.com", icon: "P" },
  { label: "YouTube",   href: "https://youtube.com",   icon: "▶" },
  { label: "Twitter",   href: "https://twitter.com",   icon: "𝕏" },
  { label: "Instagram", href: "https://instagram.com", icon: "◎" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#FFD6E4] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top grid ─────────────────────────────────────────── */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand col — spans 1 wide */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <NavLogo />
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-[#1A1A1A] font-serif">MIJES</span>
                  <span className="text-sm font-bold text-[#E8547A] font-serif">TECH</span>
                </div>
                <span className="block text-[9px] tracking-[0.1em] text-[#888] uppercase">
                  Discover. Learn. Grow.
                </span>
              </div>
            </Link>
            <p className="text-[13px] text-[#888] leading-relaxed mb-5">
              Your ultimate hub for the best AI tools, websites, coding resources,
              ChatGPT prompts and productivity tips.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-[#FFF0F4] border border-[#FFD6E4] flex items-center justify-center text-[#E8547A] text-xs font-bold hover:bg-[#E8547A] hover:text-white transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#1A1A1A] uppercase mb-4">
              Top Categories
            </p>
            <ul className="flex flex-col gap-2.5">
              {topCategories.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-[13px] text-[#888] hover:text-[#E8547A] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#1A1A1A] uppercase mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-[13px] text-[#888] hover:text-[#E8547A] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Topics */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#1A1A1A] uppercase mb-4">
              Popular Topics
            </p>
            <ul className="flex flex-col gap-2.5">
              {popularTopics.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-[13px] text-[#888] hover:text-[#E8547A] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#1A1A1A] uppercase mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@mijestech.com"
                className="flex items-center gap-2 text-[13px] text-[#888] hover:text-[#E8547A] transition-colors">
                <EnvelopeIcon />
                hello@mijestech.com
              </a>
              <a href="https://mijestech.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-[#888] hover:text-[#E8547A] transition-colors">
                <span className="text-[#E8547A]">◎</span>
                mijestech.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────── */}
        <div className="border-t border-[#FFD6E4] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#aaa]">
            &copy; {year} Mijes Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[12px] text-[#aaa]">
            Made with <HeartIcon /> in India
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms"   className="text-[12px] text-[#aaa] hover:text-[#E8547A] transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="text-[12px] text-[#aaa] hover:text-[#E8547A] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
