import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../../../../data/data";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    // Set a simple session cookie
    const cookieStore = await cookies();
    cookieStore.set("mijes_admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { message: "Invalid email or password." },
    { status: 401 }
  );
}
