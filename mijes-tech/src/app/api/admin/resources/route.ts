import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { resources as defaultResources } from "../../../../data/data";

// In-memory store (resets on server restart — for production use a database)
// To persist, replace with a JSON file read/write or a real DB
let resourceStore = [...defaultResources];

function isAuthenticated() {
  // We can't easily use cookies() in a sync context in Next 15
  // The check is done by the admin page middleware
  return true; // Cookie auth is enforced at the page level
}

// GET all resources
export async function GET() {
  return NextResponse.json(resourceStore);
}

// POST — add new resource
export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("mijes_admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const newResource = {
    id: String(Date.now()),
    category:     body.category     || "AI Tools",
    categorySlug: body.categorySlug || "ai-tools",
    title:        body.title        || "Untitled Resource",
    description:  body.description  || "",
    googleDocUrl: body.googleDocUrl || "#",
    featured:     body.featured     ?? true,
    dateAdded:    new Date().toISOString().split("T")[0],
    icon:         body.icon         || "sparkle",
  };

  resourceStore.unshift(newResource);
  return NextResponse.json(newResource, { status: 201 });
}

// DELETE — remove resource
export async function DELETE(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("mijes_admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();
  resourceStore = resourceStore.filter((r) => r.id !== id);
  return NextResponse.json({ ok: true });
}

// PUT — update resource
export async function PUT(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("mijes_admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  resourceStore = resourceStore.map((r) =>
    r.id === body.id ? { ...r, ...body } : r
  );
  return NextResponse.json({ ok: true });
}
