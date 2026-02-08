import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Waitlist", href: "#cta" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
      <nav className="page-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40">
            <span className="text-lg font-semibold text-white">L</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-foreground/90">
              LevelUp IRL
            </span>
            <span className="text-xs text-foreground/60">
              Gamify your growth
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-4 text-sm text-foreground/70 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="#cta" className="btn-reward">
            Join waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}
