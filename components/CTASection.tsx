"use client";

import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      // Replace with your waitlist API endpoint when ready
      // await fetch("/api/waitlist", { method: "POST", body: JSON.stringify({ email }) });
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden border-y border-white/10 bg-gradient-to-br from-primary/30 via-accent/20 to-reward/30"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,170,184,0.15),_transparent_50%),radial-gradient(circle_at_80%_80%,rgba(168,223,142,0.12),_transparent_45%)]" />

      <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
          Early access
        </p>
        <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Join the waitlist. Get in first.
        </h2>
        <p className="mt-3 text-balance text-sm text-foreground/75 sm:text-base">
          We&apos;re building LevelUp IRL in public. Join the list for launch
          updates, early access, and a say in what we ship next.
        </p>

        {status === "success" ? (
          <div className="mt-8 rounded-2xl border border-reward/40 bg-reward/15 px-6 py-5 text-sm font-medium text-foreground">
            You&apos;re on the list. We&apos;ll be in touch.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              disabled={status === "loading"}
              className="input-waitlist w-full min-w-0 sm:max-w-xs"
              autoComplete="email"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-reward shrink-0 px-8 py-3 sm:py-2.5"
            >
              {status === "loading" ? "Joining…" : "Join waitlist"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-xs text-red-600 dark:text-red-400">
            Something went wrong. Try again or email us directly.
          </p>
        )}

        <p className="mt-5 text-xs text-foreground/60">
          No spam. Unsubscribe anytime. We only email when it matters.
        </p>
      </div>
    </section>
  );
}
