"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  NavLogo, PlusIcon, TrashIcon, EditIcon, LogoutIcon,
  ExternalLinkIcon, ArrowRightIcon,
} from "../../components/icons";

interface Resource {
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

const CATEGORIES = [
  { label: "AI Tools",             slug: "ai-tools",             icon: "sparkle" },
  { label: "ChatGPT Prompts",      slug: "chatgpt-prompts",      icon: "chat" },
  { label: "Best Free Websites",   slug: "best-free-websites",   icon: "globe" },
  { label: "Coding Resources",     slug: "coding-resources",     icon: "code" },
  { label: "Student Productivity", slug: "student-productivity", icon: "graduation" },
];

const EMPTY_FORM = {
  category:     "AI Tools",
  categorySlug: "ai-tools",
  title:        "",
  description:  "",
  googleDocUrl: "",
  featured:     true,
  icon:         "sparkle",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading]     = useState(true);
  const [showForm, setShowForm]   = useState(false);
  const [editId, setEditId]       = useState<string | null>(null);
  const [form, setForm]           = useState({ ...EMPTY_FORM });
  const [saving, setSaving]       = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState("");

  // ── Load resources ────────────────────────────────────────
  const loadResources = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/resources");
    if (res.status === 401) { router.push("/admin/login"); return; }
    const data = await res.json();
    setResources(data);
    setLoading(false);
  }, [router]);

  useEffect(() => { loadResources(); }, [loadResources]);

  // ── Logout ────────────────────────────────────────────────
  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  // ── Category change helper ────────────────────────────────
  const handleCategoryChange = (label: string) => {
    const cat = CATEGORIES.find((c) => c.label === label);
    if (cat) setForm((f) => ({ ...f, category: cat.label, categorySlug: cat.slug, icon: cat.icon }));
  };

  // ── Save (create or update) ───────────────────────────────
  const handleSave = async () => {
    if (!form.title.trim() || !form.googleDocUrl.trim()) {
      alert("Please fill in the title and Google Doc URL.");
      return;
    }
    setSaving(true);

    if (editId) {
      await fetch("/api/admin/resources", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editId, ...form }),
      });
      setSuccessMsg("Resource updated!");
    } else {
      await fetch("/api/admin/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSuccessMsg("Resource added!");
    }

    setSaving(false);
    setShowForm(false);
    setEditId(null);
    setForm({ ...EMPTY_FORM });
    loadResources();
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  // ── Edit ─────────────────────────────────────────────────
  const startEdit = (r: Resource) => {
    setForm({
      category:     r.category,
      categorySlug: r.categorySlug,
      title:        r.title,
      description:  r.description,
      googleDocUrl: r.googleDocUrl,
      featured:     r.featured,
      icon:         r.icon,
    });
    setEditId(r.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Delete ────────────────────────────────────────────────
  const handleDelete = async (id: string) => {
    await fetch("/api/admin/resources", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setDeleteConfirm(null);
    setSuccessMsg("Resource deleted.");
    loadResources();
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  // ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FFF5F7]">

      {/* ── Admin Navbar ──────────────────────────────────── */}
      <div className="bg-white border-b border-[#FFD6E4] sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <NavLogo />
              <div>
                <span className="text-sm font-bold text-[#1A1A1A] font-serif">MIJES TECH</span>
                <span className="text-[10px] text-[#E8547A] font-semibold ml-2 bg-[#FFF0F4] px-2 py-0.5 rounded-full border border-[#FFD6E4]">
                  Admin Panel
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/" target="_blank"
                className="text-[12px] text-[#888] hover:text-[#E8547A] flex items-center gap-1 transition-colors">
                View Site <ExternalLinkIcon />
              </Link>
              <button onClick={handleLogout}
                className="flex items-center gap-1.5 text-[12px] text-[#888] hover:text-red-500 transition-colors">
                <LogoutIcon /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Success banner */}
        {successMsg && (
          <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm">
            ✓ {successMsg}
          </div>
        )}

        {/* ── Stats row ───────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Resources",  value: resources.length },
            { label: "Featured",         value: resources.filter((r) => r.featured).length },
            { label: "Categories",       value: CATEGORIES.length },
            { label: "This Month",       value: resources.filter((r) => r.dateAdded.startsWith(new Date().toISOString().slice(0, 7))).length },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-[#FFD6E4] rounded-2xl p-5">
              <p className="text-2xl font-bold text-[#E8547A] font-serif">{stat.value}</p>
              <p className="text-[12px] text-[#888] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Add / Edit Form ─────────────────────────────── */}
        {showForm ? (
          <div className="bg-white border border-[#FFD6E4] rounded-2xl p-6 mb-8 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-5">
              {editId ? "Edit Resource" : "Add New Resource"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Category */}
              <div>
                <label className="block text-[11px] font-bold tracking-wide text-[#555] uppercase mb-1.5">
                  Category *
                </label>
                <select
                  value={form.category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-[#FFD6E4] rounded-xl focus:outline-none focus:border-[#E8547A] bg-[#FFF5F7]"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.label}>{c.label}</option>
                  ))}
                </select>
              </div>

              {/* Featured toggle */}
              <div className="flex items-end gap-3 pb-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div
                    onClick={() => setForm((f) => ({ ...f, featured: !f.featured }))}
                    className={`w-11 h-6 rounded-full transition-colors cursor-pointer flex items-center px-1 ${
                      form.featured ? "bg-[#E8547A]" : "bg-[#ddd]"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${
                      form.featured ? "translate-x-5" : "translate-x-0"
                    }`} />
                  </div>
                  <span className="text-[13px] font-medium text-[#555]">Show on homepage</span>
                </label>
              </div>

              {/* Title */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold tracking-wide text-[#555] uppercase mb-1.5">
                  Title *
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="e.g. 25 Best AI Tools for Students in 2024"
                  className="w-full px-3 py-2.5 text-sm border border-[#FFD6E4] rounded-xl focus:outline-none focus:border-[#E8547A] bg-[#FFF5F7]"
                />
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold tracking-wide text-[#555] uppercase mb-1.5">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  rows={2}
                  placeholder="Brief description of this resource..."
                  className="w-full px-3 py-2.5 text-sm border border-[#FFD6E4] rounded-xl focus:outline-none focus:border-[#E8547A] bg-[#FFF5F7] resize-none"
                />
              </div>

              {/* Google Doc URL */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold tracking-wide text-[#555] uppercase mb-1.5">
                  Google Doc URL *
                </label>
                <input
                  type="url"
                  value={form.googleDocUrl}
                  onChange={(e) => setForm((f) => ({ ...f, googleDocUrl: e.target.value }))}
                  placeholder="https://docs.google.com/document/d/..."
                  className="w-full px-3 py-2.5 text-sm border border-[#FFD6E4] rounded-xl focus:outline-none focus:border-[#E8547A] bg-[#FFF5F7]"
                />
                <p className="text-[11px] text-[#aaa] mt-1">
                  Paste the sharable link from Google Docs. Make sure it&apos;s set to &ldquo;View only&rdquo; so users cannot edit.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <button onClick={handleSave} disabled={saving} className="btn-pink disabled:opacity-60">
                {saving ? "Saving…" : editId ? "Update Resource" : "Add Resource"}
              </button>
              <button
                onClick={() => { setShowForm(false); setEditId(null); setForm({ ...EMPTY_FORM }); }}
                className="btn-outline"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A]">All Resources</h2>
            <button
              onClick={() => setShowForm(true)}
              className="btn-pink"
            >
              <PlusIcon /> Add New Resource
            </button>
          </div>
        )}

        {/* ── Resources Table ─────────────────────────────── */}
        {loading ? (
          <div className="text-center py-16 text-[#888]">Loading resources…</div>
        ) : (
          <div className="bg-white border border-[#FFD6E4] rounded-2xl overflow-hidden shadow-sm">
            {resources.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#888] mb-4">No resources yet.</p>
                <button onClick={() => setShowForm(true)} className="btn-pink">
                  <PlusIcon /> Add Your First Resource
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#FFF0F4] border-b border-[#FFD6E4]">
                    <tr>
                      <th className="text-left px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-[#555] uppercase">Category</th>
                      <th className="text-left px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-[#555] uppercase">Title</th>
                      <th className="text-left px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-[#555] uppercase">Google Doc</th>
                      <th className="text-left px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-[#555] uppercase">Featured</th>
                      <th className="text-left px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-[#555] uppercase">Date</th>
                      <th className="text-right px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-[#555] uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#FFD6E4]">
                    {resources.map((r) => (
                      <tr key={r.id} className="hover:bg-[#FFF5F7] transition-colors">
                        <td className="px-5 py-3.5">
                          <span className="text-[11px] font-bold text-[#E8547A] uppercase bg-[#FFF0F4] px-2 py-0.5 rounded-full">
                            {r.category}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 font-medium text-[#1A1A1A] max-w-xs">
                          <span className="line-clamp-1">{r.title}</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <a href={r.googleDocUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[#E8547A] hover:underline text-[12px]">
                            View Doc <ExternalLinkIcon />
                          </a>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            r.featured
                              ? "bg-green-50 text-green-600 border border-green-200"
                              : "bg-gray-50 text-gray-400 border border-gray-200"
                          }`}>
                            {r.featured ? "Yes" : "No"}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-[12px] text-[#aaa]">{r.dateAdded}</td>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => startEdit(r)}
                              className="p-1.5 text-[#888] hover:text-[#E8547A] hover:bg-[#FFF0F4] rounded-lg transition-colors">
                              <EditIcon />
                            </button>
                            {deleteConfirm === r.id ? (
                              <div className="flex items-center gap-1">
                                <button onClick={() => handleDelete(r.id)}
                                  className="text-[11px] font-bold text-white bg-red-500 px-2 py-1 rounded-lg hover:bg-red-600 transition-colors">
                                  Confirm
                                </button>
                                <button onClick={() => setDeleteConfirm(null)}
                                  className="text-[11px] text-[#888] hover:text-[#555] px-1">
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <button onClick={() => setDeleteConfirm(r.id)}
                                className="p-1.5 text-[#888] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                <TrashIcon />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Quick tip */}
        <div className="mt-6 p-4 bg-[#FFF0F4] border border-[#FFD6E4] rounded-xl text-[12px] text-[#888]">
          <strong className="text-[#E8547A]">Tip:</strong> When sharing Google Docs, go to{" "}
          <em>Share → Anyone with the link → Viewer</em>. This lets users read but not edit.
          Paste that link here and it will open for your site visitors in view-only mode.
        </div>
      </div>
    </div>
  );
}
