import React from "react";
import Link from "next/link";
import { categories, resources } from "../data/data";
import {
  MJLogo,
  CheckIcon,
  ClockIcon,
  BadgeIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  CategoryIcon,
  EnvelopeIcon,
} from "../components/icons";

// ─── TRUST BADGES ─────────────────────────────────────────────────────────────
const trustBadges = [
  { icon: <CheckIcon />,  label: "Curated & Tested" },
  { icon: <ClockIcon />,  label: "Regularly Updated" },
  { icon: <BadgeIcon />,  label: "100% Free Resources" },
];

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const featured = resources.filter((r) => r.featured);

  return (
    <div className="bg-[#FFF5F7]">

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Soft pink background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EF] to-[#FFF0F4] pointer-events-none" />

        {/* Decorative sparkles */}
        <div className="absolute top-16 right-1/3 text-[#FFB3CC] text-2xl sparkle pointer-events-none select-none" aria-hidden="true">✦</div>
        <div className="absolute top-8 right-1/4 text-[#E8547A] text-sm sparkle-delay pointer-events-none select-none" aria-hidden="true">✦</div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* ── Left: Copy ─────────────────────────────── */}
            <div className="animate-[fadeIn_0.6s_ease-out]">
              {/* Badge */}
              <div className="pink-badge mb-6">
                <span className="text-[#E8547A]">✦</span>
                Your Ultimate Tech Resource Hub
              </div>

              {/* Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-5">
                Find The Best{" "}
                <span className="text-[#E8547A]">AI Tools</span>,
                Websites,{" "}
                <br className="hidden sm:block" />
                Prompts &amp; Resources.
              </h1>

              {/* Subheading */}
              <p className="text-[15px] text-[#666] leading-relaxed mb-8 max-w-lg">
                Curated, tested, and organized resources to help you learn,
                build, and stay ahead in the tech world.
              </p>

              {/* Trust row */}
              <div className="flex flex-wrap gap-5 mb-9">
                {trustBadges.map((b) => (
                  <div key={b.label} className="flex items-center gap-2 text-[13px] font-medium text-[#555]">
                    <span className="text-[#E8547A]">{b.icon}</span>
                    {b.label}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="#categories" className="btn-pink">
                  Explore Resources <ArrowRightIcon />
                </Link>
                <Link href="#categories" className="btn-outline">
                  Browse By Topic
                </Link>
              </div>
            </div>

            {/* ── Right: Animated MJ Logo ─────────────────── */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow behind logo */}
                <div className="absolute inset-0 rounded-full bg-[#FFB3CC] blur-3xl opacity-30 scale-90 animate-[float_4s_ease-in-out_infinite]" />
                <div className="relative animate-[float_4s_ease-in-out_infinite]">
                  <MJLogo size={360} />
                </div>
                {/* Sparkle accents around logo */}
                <span className="absolute top-8 right-4 text-[#E8547A] text-xl sparkle select-none" aria-hidden="true">✦</span>
                <span className="absolute bottom-12 left-4 text-[#FFB3CC] text-sm sparkle-delay select-none" aria-hidden="true">✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CATEGORIES
      ══════════════════════════════════════════════════════════ */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Section header */}
        <div className="text-center mb-10">
          <p className="section-label mb-3">✦ Explore By Category ✦</p>
          <h2 className="heading-serif text-3xl sm:text-4xl mb-3">
            Find Exactly What You Need
          </h2>
          {/* Pink heart divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#FFD6E4]" />
            <span className="text-[#E8547A] heartbeat text-lg">♥</span>
            <div className="h-px w-16 bg-[#FFD6E4]" />
          </div>
        </div>

        {/* Category cards — 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} href={cat.slug}
              className="card-base flex flex-col items-center text-center group cursor-pointer">

              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-[#FFF0F4] border border-[#FFD6E4] flex items-center justify-center mb-4 text-[#E8547A] group-hover:bg-[#E8547A] group-hover:text-white transition-colors duration-200">
                <CategoryIcon icon={cat.icon} />
              </div>

              <h3 className="text-[14px] font-bold text-[#1A1A1A] mb-1 font-serif">{cat.label}</h3>
              <p className="text-[12px] font-semibold text-[#E8547A] mb-2">{cat.count}</p>
              <p className="text-[12px] text-[#888] leading-relaxed mb-4 flex-1">{cat.description}</p>

              <span className="flex items-center gap-1 text-[13px] font-semibold text-[#E8547A] group-hover:gap-2 transition-all">
                Explore <ArrowRightIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-t border-[#FFD6E4]" />
      </div>

      {/* ══════════════════════════════════════════════════════════
          RECENTLY ADDED & POPULAR
      ══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Section header */}
        <div className="mb-8">
          <p className="section-label mb-1">Latest Resources</p>
          <div className="flex items-start justify-between gap-4">
            <h2 className="heading-serif text-3xl sm:text-4xl">
              Recently Added &amp; Popular
            </h2>
            <Link href="/resources"
              className="shrink-0 text-[13px] font-semibold text-[#E8547A] hover:text-[#C9184A] flex items-center gap-1 mt-2 transition-colors">
              View All Resources <ArrowRightIcon />
            </Link>
          </div>
        </div>

        {/* Resource grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((item) => (
            <div key={item.id}
              className="bg-white border border-[#FFD6E4] rounded-2xl p-5 hover:shadow-md hover:border-[#E8547A] transition-all duration-200">

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-11 h-11 rounded-full bg-[#FFF0F4] border border-[#FFD6E4] flex items-center justify-center text-[#E8547A] shrink-0">
                  <CategoryIcon icon={item.icon} />
                </div>

                <div className="min-w-0 flex-1">
                  {/* Category label */}
                  <p className="text-[10px] font-bold tracking-[0.1em] text-[#E8547A] uppercase mb-1">
                    {item.category}
                  </p>
                  {/* Title */}
                  <h3 className="text-[14px] font-bold text-[#1A1A1A] font-serif leading-snug mb-3">
                    {item.title}
                  </h3>
                  {/* Google Doc link */}
                  <a
                    href={item.googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#E8547A] hover:text-[#C9184A] transition-colors"
                  >
                    Google Doc <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse all button */}
        <div className="text-center mt-10">
          <Link href="/resources" className="btn-pink">
            Browse All Resources <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white border border-[#FFD6E4] rounded-3xl p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left */}
            <div className="flex items-start gap-5">
              {/* Envelope illustration */}
              <div className="w-16 h-16 rounded-2xl bg-[#FFF0F4] border border-[#FFD6E4] flex items-center justify-center text-[#E8547A] shrink-0">
                <EnvelopeIcon />
              </div>
              <div>
                <h3 className="heading-serif text-xl sm:text-2xl mb-2">
                  Get Weekly Tech Resources
                </h3>
                <p className="text-[13px] text-[#888] leading-relaxed">
                  Join 10,000+ learners. Get the best tools, websites, prompts
                  and productivity tips straight to your inbox.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 text-sm border border-[#FFD6E4] rounded-full outline-none focus:border-[#E8547A] focus:ring-2 focus:ring-[#FFD6E4] bg-[#FFF5F7] text-[#1A1A1A] placeholder:text-[#bbb] transition-all"
                />
                <button className="btn-pink whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] text-[#aaa] mt-2 ml-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
