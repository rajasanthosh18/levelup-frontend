import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg/95">
      <div className="page-container flex flex-col gap-4 py-8 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-foreground">
            LevelUp IRL
          </span>
          <span className="text-[11px] max-w-sm">
            Gamified habits for people who want their real life to feel as
            rewarding as their favorite games. Join the waitlist for early
            access.
          </span>
          <Link
            href="#cta"
            className="mt-2 inline-flex items-center text-[11px] font-medium text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Join waitlist →
          </Link>
        </div>
        <div className="flex flex-col items-start gap-1 text-[11px] sm:items-end">
          <span>
            © {new Date().getFullYear()} LevelUp IRL. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
