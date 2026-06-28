// ─── CATEGORIES ───────────────────────────────────────────────────────────────
export interface Category {
  id: string;
  label: string;
  count: string;
  description: string;
  slug: string;
  icon: string; // icon key
  color: string;
}

export const categories: Category[] = [
  {
    id: "ai-tools",
    label: "AI Tools",
    count: "150+ Tools",
    description: "The best AI tools for productivity, creativity, development and more.",
    slug: "/ai-tools",
    icon: "sparkle",
    color: "#E8547A",
  },
  {
    id: "chatgpt-prompts",
    label: "ChatGPT Prompts",
    count: "500+ Prompts",
    description: "Ready-to-use prompts for students, developers, marketers and more.",
    slug: "/chatgpt-prompts",
    icon: "chat",
    color: "#E8547A",
  },
  {
    id: "best-free-websites",
    label: "Best Free Websites",
    count: "300+ Websites",
    description: "Handpicked free websites that make your work and life easier.",
    slug: "/best-free-websites",
    icon: "globe",
    color: "#E8547A",
  },
  {
    id: "coding-resources",
    label: "Coding Resources",
    count: "250+ Resources",
    description: "Tutorials, documentation, projects and tools for developers.",
    slug: "/coding-resources",
    icon: "code",
    color: "#E8547A",
  },
  {
    id: "student-productivity",
    label: "Student Productivity",
    count: "200+ Resources",
    description: "Apps, tools and strategies to help students study smart and stay productive.",
    slug: "/student-productivity",
    icon: "graduation",
    color: "#E8547A",
  },
];

// ─── RESOURCES ────────────────────────────────────────────────────────────────
export interface Resource {
  id: string;
  category: string;
  categorySlug: string;
  title: string;
  description: string;
  googleDocUrl: string;
  featured: boolean;
  dateAdded: string;
  icon: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    category: "AI Tools",
    categorySlug: "ai-tools",
    title: "25 Best AI Tools for Students in 2024",
    description: "A comprehensive list of the most powerful AI tools every student needs.",
    googleDocUrl: "https://docs.google.com/",
    featured: true,
    dateAdded: "2024-01-15",
    icon: "ai",
  },
  {
    id: "2",
    category: "ChatGPT Prompts",
    categorySlug: "chatgpt-prompts",
    title: "100 ChatGPT Prompts for Students",
    description: "Unlock the full power of ChatGPT with these student-tested prompts.",
    googleDocUrl: "https://docs.google.com/",
    featured: true,
    dateAdded: "2024-01-18",
    icon: "chat",
  },
  {
    id: "3",
    category: "Best Free Websites",
    categorySlug: "best-free-websites",
    title: "50 Best Free Websites You Should Know",
    description: "Discover websites that will transform the way you work and learn.",
    googleDocUrl: "https://docs.google.com/",
    featured: true,
    dateAdded: "2024-01-20",
    icon: "globe",
  },
  {
    id: "4",
    category: "Coding Resources",
    categorySlug: "coding-resources",
    title: "Top 10 Websites to Learn Coding for Free",
    description: "The best platforms to go from zero to developer without spending a rupee.",
    googleDocUrl: "https://docs.google.com/",
    featured: true,
    dateAdded: "2024-01-22",
    icon: "code",
  },
  {
    id: "5",
    category: "Student Productivity",
    categorySlug: "student-productivity",
    title: "Best Productivity Apps for Students",
    description: "Apps that top students use to stay organized, focused and ahead.",
    googleDocUrl: "https://docs.google.com/",
    featured: true,
    dateAdded: "2024-01-25",
    icon: "graduation",
  },
  {
    id: "6",
    category: "Coding Resources",
    categorySlug: "coding-resources",
    title: "VS Code Extensions Every Developer Should Use",
    description: "Supercharge your VS Code setup with these must-have extensions.",
    googleDocUrl: "https://docs.google.com/",
    featured: true,
    dateAdded: "2024-01-28",
    icon: "code",
  },
];

// ─── ADMIN CONFIG ─────────────────────────────────────────────────────────────
// Change these credentials before deploying!
export const ADMIN_EMAIL    = "admin@mijestech.com";
export const ADMIN_PASSWORD = "MijesTech@2024"; // Change this!
