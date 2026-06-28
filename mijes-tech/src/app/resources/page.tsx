import React from "react";
import Link from "next/link";
import { resources, categories } from "../../data/data";
import { CategoryIcon, ExternalLinkIcon, ArrowRightIcon } from "../../components/icons";

export const metadata = {
  title: "All Resources — Mijes Tech",
  description: "Browse all curated tech resources, AI tools, ChatGPT prompts, coding guides and more.",
};

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="section-label mb-3">✦ All Resources ✦</p>
        <h1 className="heading-serif text-4xl sm:text-5xl mb-3">
          Browse Everything
        </h1>
        <p className="text-[#888] text-[15px] max-w-xl mx-auto">
          Every resource, tool, and guide — curated and organized for you.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        <Link href="/resources"
          className="px-4 py-1.5 text-[13px] font-semibold bg-[#E8547A] text-white rounded-full">
          All
        </Link>
        {categories.map((cat) => (
          <Link key={cat.id} href={cat.slug}
            className="px-4 py-1.5 text-[13px] font-medium text-[#555] bg-white border border-[#FFD6E4] rounded-full hover:border-[#E8547A] hover:text-[#E8547A] transition-colors">
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Resources grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((item) => (
          <div key={item.id}
            className="bg-white border border-[#FFD6E4] rounded-2xl p-5 hover:shadow-md hover:border-[#E8547A] transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#FFF0F4] border border-[#FFD6E4] flex items-center justify-center text-[#E8547A] shrink-0">
                <CategoryIcon icon={item.icon} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold tracking-[0.1em] text-[#E8547A] uppercase mb-1">
                  {item.category}
                </p>
                <h3 className="text-[14px] font-bold text-[#1A1A1A] font-serif leading-snug mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-[12px] text-[#888] mb-3 leading-relaxed">{item.description}</p>
                )}
                <a href={item.googleDocUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#E8547A] hover:text-[#C9184A] transition-colors">
                  Google Doc <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
