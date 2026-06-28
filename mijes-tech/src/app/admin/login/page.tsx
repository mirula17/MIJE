"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { NavLogo } from "../../components/icons";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simple credential check — matches what's in data.ts
    // In production, replace with a real auth API call
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      const data = await res.json();
      setError(data.message || "Invalid credentials. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <NavLogo />
          <h1 className="mt-3 font-serif text-2xl font-bold text-[#1A1A1A]">Admin Panel</h1>
          <p className="text-[13px] text-[#888] mt-1">Sign in to manage your resources</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-[#FFD6E4] rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">

            <div>
              <label className="block text-[12px] font-semibold text-[#555] uppercase tracking-wide mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@mijestech.com"
                className="w-full px-4 py-2.5 text-sm border border-[#FFD6E4] rounded-xl focus:outline-none focus:border-[#E8547A] focus:ring-2 focus:ring-[#FFD6E4] bg-[#FFF5F7] transition-all"
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#555] uppercase tracking-wide mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-2.5 text-sm border border-[#FFD6E4] rounded-xl focus:outline-none focus:border-[#E8547A] focus:ring-2 focus:ring-[#FFD6E4] bg-[#FFF5F7] transition-all"
              />
            </div>

            {error && (
              <p className="text-[13px] text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-pink justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-[12px] text-[#aaa] mt-5">
          This panel is for site admins only. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  );
}
