import React from "react";

export const metadata = { title: "Blog — Mijes Tech" };

const posts = [
  { title: "10 AI Tools That Will Change How You Study", category: "AI Tools", date: "Jan 28, 2024", readTime: "5 min read" },
  { title: "How to Use ChatGPT for Academic Research", category: "ChatGPT Prompts", date: "Jan 22, 2024", readTime: "7 min read" },
  { title: "Best Free Tools for Web Developers in 2024", category: "Coding Resources", date: "Jan 18, 2024", readTime: "6 min read" },
  { title: "The Ultimate Student Productivity Setup", category: "Productivity", date: "Jan 15, 2024", readTime: "8 min read" },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <p className="section-label mb-2">Blog</p>
        <h1 className="heading-serif text-4xl sm:text-5xl mb-3">Articles & Guides</h1>
        <p className="text-[#888] text-[15px]">In-depth guides and tips for the modern tech learner.</p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.title}
            className="bg-white border border-[#FFD6E4] rounded-2xl p-6 hover:shadow-md hover:border-[#E8547A] transition-all cursor-pointer group">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#E8547A] uppercase tracking-wider bg-[#FFF0F4] px-2 py-0.5 rounded-full mb-3 inline-block">
                  {post.category}
                </span>
                <h2 className="font-serif font-bold text-[#1A1A1A] text-xl mb-2 group-hover:text-[#E8547A] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[12px] text-[#aaa]">{post.date} · {post.readTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
