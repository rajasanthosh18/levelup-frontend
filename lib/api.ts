/**
 * API helpers. Waitlist uses the same-origin Next.js API route (Supabase-backed).
 */

export type JoinWaitlistResult = { ok: true } | { ok: false; message?: string };

/**
 * POST /api/waitlist with { email }. Stores signups in Supabase via the API route.
 */
export async function joinWaitlist(email: string): Promise<JoinWaitlistResult> {
  const res = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.trim() }),
  });

  if (!res.ok) {
    const text = await res.text();
    let message: string | undefined;
    try {
      const json = JSON.parse(text) as { message?: string; error?: string };
      message = json.message ?? json.error ?? (text || res.statusText);
    } catch {
      message = text || res.statusText;
    }
    return { ok: false, message };
  }

  return { ok: true };
}
