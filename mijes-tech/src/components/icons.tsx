"use client";
import React from "react";

// ─── MJ Logo — matches the actual Mijes Tech brand logo ───────────────────────
export const MJLogo = ({ size = 48 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Mijes Tech Logo"
  >
    {/* Outer circle ring */}
    <circle cx="60" cy="60" r="54" stroke="#E8547A" strokeWidth="2.5" strokeLinecap="round"
      strokeDasharray="280 60" strokeDashoffset="30" opacity="0.85" />

    {/* Circuit lines left */}
    <line x1="8" y1="52" x2="28" y2="52" stroke="#E8547A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <line x1="8" y1="60" x2="28" y2="60" stroke="#E8547A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <line x1="8" y1="68" x2="28" y2="68" stroke="#E8547A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <circle cx="7" cy="52" r="2.5" stroke="#E8547A" strokeWidth="1.5" fill="none" opacity="0.7" />
    <circle cx="7" cy="60" r="2.5" stroke="#E8547A" strokeWidth="1.5" fill="none" opacity="0.7" />
    <circle cx="7" cy="68" r="2.5" stroke="#E8547A" strokeWidth="1.5" fill="none" opacity="0.7" />

    {/* Leaf sprigs right */}
    <path d="M95 72 Q105 62 100 50" stroke="#E8547A" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round" />
    <path d="M97 76 Q110 68 108 55" stroke="#E8547A" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
    <ellipse cx="103" cy="56" rx="5" ry="8" fill="#FFB3CC" opacity="0.6" transform="rotate(-30 103 56)" />
    <ellipse cx="108" cy="65" rx="4" ry="7" fill="#FFB3CC" opacity="0.5" transform="rotate(-15 108 65)" />
    <ellipse cx="104" cy="74" rx="4" ry="6" fill="#FFB3CC" opacity="0.4" transform="rotate(5 104 74)" />

    {/* Sparkle top right */}
    <path d="M76 18 L77.5 22 L81 23.5 L77.5 25 L76 29 L74.5 25 L71 23.5 L74.5 22 Z"
      fill="#E8547A" opacity="0.9" className="sparkle" />
    <path d="M84 12 L85 15 L88 16 L85 17 L84 20 L83 17 L80 16 L83 15 Z"
      fill="#E8547A" opacity="0.6" className="sparkle-delay" />

    {/* Heart */}
    <path d="M75 10 C75 8, 72 6, 70 8 C68 6, 65 8, 65 10 C65 13, 70 17, 70 17 C70 17, 75 13, 75 10 Z"
      fill="#E8547A" className="heartbeat" />

    {/* M letter — bold serif black */}
    <text
      x="22" y="88"
      fontFamily="'Playfair Display', Georgia, serif"
      fontSize="62"
      fontWeight="800"
      fill="#1A1A1A"
      letterSpacing="-2"
    >M</text>

    {/* J letter — pink/rose gradient overlay */}
    <text
      x="66" y="88"
      fontFamily="'Playfair Display', Georgia, serif"
      fontSize="62"
      fontWeight="800"
      fill="#E8547A"
      letterSpacing="-2"
    >J</text>
  </svg>
);

// ─── Inline nav logo (small) ───────────────────────────────────────────────────
export const NavLogo = () => (
  <svg width="40" height="40" viewBox="0 0 120 120" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-label="MJ">
    <circle cx="60" cy="60" r="54" stroke="#E8547A" strokeWidth="3"
      strokeDasharray="260 80" strokeDashoffset="20" opacity="0.9" />
    <text x="18" y="85" fontFamily="'Playfair Display', Georgia, serif"
      fontSize="66" fontWeight="800" fill="#1A1A1A">M</text>
    <text x="65" y="85" fontFamily="'Playfair Display', Georgia, serif"
      fontSize="66" fontWeight="800" fill="#E8547A">J</text>
  </svg>
);

// ─── Utility icons ─────────────────────────────────────────────────────────────
export const CheckIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ClockIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 6V10L12.5 12.5" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BadgeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2L12.1 7.1H17.6L13.2 10.4L14.9 15.6L10 12.4L5.1 15.6L6.8 10.4L2.4 7.1H7.9Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const ArrowRightIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 3H3C2.45 3 2 3.45 2 4V13C2 13.55 2.45 14 3 14H12C12.55 14 13 13.55 13 13V10"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M9 2H14V7" stroke="currentColor" strokeWidth="1.3"
      strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2L8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export const MenuIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CloseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SearchIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SparkleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3L13.5 9H19L14.5 13L16 19L12 16L8 19L9.5 13L5 9H10.5Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" opacity="0.15" />
  </svg>
);

export const ChatIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const GlobeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 3C12 3 9 7 9 12C9 17 12 21 12 21" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 3C12 3 15 7 15 12C15 17 12 21 12 21" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CodeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 6L22 12L16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const GraduationIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L22 8L12 14L2 8L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 11V17C6 17 8 20 12 20C16 20 18 17 18 17V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const HeartIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 17.5S2 12.5 2 7a4 4 0 018-1.5A4 4 0 0118 7c0 5.5-8 10.5-8 10.5z" />
  </svg>
);

export const EnvelopeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 7L10 12L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PlusIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const TrashIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 5H17M8 5V3H12V5M6 5L7 17H13L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const EditIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M14 2L18 6L7 17H3V13L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const LogoutIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M8 3H4C3.45 3 3 3.45 3 4V16C3 16.55 3.45 17 4 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 7L17 10M17 10L13 13M17 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Category icon resolver
export const CategoryIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "sparkle":    return <SparkleIcon />;
    case "chat":       return <ChatIcon />;
    case "globe":      return <GlobeIcon />;
    case "code":       return <CodeIcon />;
    case "graduation": return <GraduationIcon />;
    default:           return <SparkleIcon />;
  }
};
