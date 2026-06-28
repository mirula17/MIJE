import React from "react";
import { EnvelopeIcon } from "../../components/icons";

export const metadata = { title: "Subscribe — Mijes Tech" };

export default function SubscribePage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#FFF0F4] border border-[#FFD6E4] flex items-center justify-center text-[#E8547A] mx-auto mb-6">
          <EnvelopeIcon />
        </div>
        <p className="section-label mb-3">Newsletter</p>
        <h1 className="heading-serif text-3xl mb-3">Get Weekly Tech Resources</h1>
        <p className="text-[14px] text-[#888] mb-8 leading-relaxed">
          Join 10,000+ learners. Get the best tools, websites, prompts and
          productivity tips straight to your inbox. No spam, ever.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2.5 text-sm border border-[#FFD6E4] rounded-full focus:outline-none focus:border-[#E8547A] bg-[#FFF5F7] placeholder:text-[#bbb]"
          />
          <button className="btn-pink whitespace-nowrap">Subscribe</button>
        </div>
        <p className="text-[11px] text-[#bbb] mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
