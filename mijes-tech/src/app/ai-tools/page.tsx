import React from "react";
import Link from "next/link";
import { resources } from "../../data/data";
import { CategoryIcon, ExternalLinkIcon, ArrowRightIcon } from "../../components/icons";

export const metadata = {
  title: "AI Tools — Mijes Tech",
  description: "The best AI tools for students, developers and creators. Curated and tested.",
};

export default function AIToolsPage() {
  const items = resources.filter((r) => r.categorySlug === "ai-tools");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <p className="section-label mb-2">AI Tools</p>
        <h1 className="heading-serif text-4xl sm:text-5xl mb-3">Best AI Tools</h1>
        <p className="text-[#888] text-[15px] max-w-xl">
          Handpicked AI-powered tools for productivity, writing, image generation, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.length > 0 ? items.map((item) => (
          <div key={item.id} className="bg-white border border-[#FFD6E4] rounded-2xl p-5 hover:shadow-md hover:border-[#E8547A] transition-all">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#FFF0F4] border border-[#FFD6E4] flex items-center justify-center text-[#E8547A] shrink-0">
                <CategoryIcon icon={item.icon} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-[#E8547A] uppercase mb-1">{item.category}</p>
                <h3 className="text-[14px] font-bold text-[#1A1A1A] font-serif mb-3">{item.title}</h3>
                <a href={item.googleDocUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#E8547A] hover:text-[#C9184A]">
                  Google Doc <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        )) : (
          <p className="text-[#888] col-span-3 py-10 text-center">Coming soon! Check back later.</p>
        )}
      </div>
    </div>
  );
}
