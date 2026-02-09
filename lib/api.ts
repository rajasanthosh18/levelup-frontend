/**
 * Backend API configuration and helpers.
 * Base URL is set via NEXT_PUBLIC_API_BASE_URL (e.g. http://localhost:4000 or your deployed API).
 */

function getApiBaseUrl(): string {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base?.trim()) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not set");
  }
  return base.replace(/\/$/, "");
}

export type JoinWaitlistResult = { ok: true } | { ok: false; message?: string };

/**
 * POST /api/waitlist with { email }. Use for join-waitlist forms.
 */
export async function joinWaitlist(email: string): Promise<JoinWaitlistResult> {
  const base = getApiBaseUrl();
  const url = `${base}/api/waitlist`;

  const res = await fetch(url, {
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
