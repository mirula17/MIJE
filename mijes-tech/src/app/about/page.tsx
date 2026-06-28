import React from "react";
import { MJLogo, EnvelopeIcon, HeartIcon } from "../../../components/icons";

export const metadata = {
  title: "About — Mijes Tech",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <MJLogo size={120} />
        </div>
        <p className="section-label mb-3">About Us</p>
        <h1 className="heading-serif text-4xl sm:text-5xl mb-4">
          We curate the internet<br />so you don&apos;t have to.
        </h1>
        <p className="text-[15px] text-[#888] max-w-xl mx-auto leading-relaxed">
          Mijes Tech is your go-to destination for discovering the best AI tools,
          free websites, coding resources, and productivity tips — all tested and
          hand-picked for students and learners.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
        {[
          { title: "Our Mission",  body: "Make high-quality tech resources accessible to every student and learner, for free." },
          { title: "What We Do",   body: "We browse, test, and curate the best tools and resources so you can focus on learning." },
          { title: "Who We Are",   body: "A small team passionate about education, technology, and helping people grow." },
        ].map((card) => (
          <div key={card.title} className="card-base">
            <h3 className="font-serif font-bold text-[#1A1A1A] text-lg mb-2">{card.title}</h3>
            <p className="text-[13px] text-[#888] leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div id="contact" className="bg-white border border-[#FFD6E4] rounded-2xl p-8 text-center">
        <h2 className="heading-serif text-2xl mb-3">Get In Touch</h2>
        <p className="text-[14px] text-[#888] mb-5">
          Have a resource to suggest or want to collaborate? We&apos;d love to hear from you.
        </p>
        <a href="mailto:hello@mijestech.com"
          className="btn-pink inline-flex">
          <EnvelopeIcon /> hello@mijestech.com
        </a>
      </div>
    </div>
  );
}
