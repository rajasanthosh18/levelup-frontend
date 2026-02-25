import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export type WaitlistResponse =
  | { ok: true }
  | { ok: false; message?: string };

export async function POST(request: Request): Promise<NextResponse<WaitlistResponse>> {
  let body: { email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body" },
      { status: 400 }
    );
  }

  const rawEmail = body?.email;
  const email =
    typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";

  if (!email) {
    return NextResponse.json(
      { ok: false, message: "Email is required" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { ok: true },
          { status: 200 }
        );
      }
      console.error("[waitlist] Supabase error:", error);
      return NextResponse.json(
        { ok: false, message: "Could not join waitlist. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[waitlist] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
