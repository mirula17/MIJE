import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Mijes Tech — Discover. Learn. Grow.",
  description:
    "Curated AI tools, ChatGPT prompts, free websites, coding resources and student productivity tips. Your ultimate tech resource hub.",
  keywords: [
    "AI tools", "ChatGPT prompts", "coding resources",
    "student productivity", "free websites", "tech directory",
    "mijes tech",
  ],
  openGraph: {
    title: "Mijes Tech — Discover. Learn. Grow.",
    description: "Curated AI tools, ChatGPT prompts, free websites, coding resources and student productivity tips.",
    type: "website",
    url: "https://mijestech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mijes Tech",
    description: "Your ultimate tech resource hub.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>" />
      </head>
      <body className="bg-[#FFF5F7] text-[#1A1A1A] antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
