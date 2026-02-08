import CTASection from "../components/CTASection";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const howItWorksSteps = [
  {
    title: "Choose your habits",
    description:
      "Turn the routines you care about into daily quests: workouts, reading, deep work, sleep, and more.",
    icon: (
      <div className="flex h-5 w-5 items-center justify-center rounded-md border border-foreground/40 bg-bg/80 text-[11px] font-semibold">
        1
      </div>
    ),
  },
  {
    title: "Complete daily tasks",
    description:
      "Check in once a day to clear your quest log, keep streaks alive, and avoid penalty tasks.",
    icon: (
      <div className="flex h-5 w-5 items-center justify-center rounded-md border border-emerald-400/60 bg-emerald-500/20 text-[11px] font-semibold text-emerald-300">
        ✓
      </div>
    ),
  },
  {
    title: "Earn XP, levels, streaks",
    description:
      "Watch your level climb, streaks stack, and rewards unlock as your real life habits compound.",
    icon: (
      <div className="flex h-5 w-5 items-center justify-center rounded-md border border-reward/70 bg-reward/20 text-[11px] font-semibold text-reward">
        XP
      </div>
    ),
  },
];

const featureCards = [
  {
    title: "XP & Level System",
    description:
      "Every completed habit grants XP toward your next level, with multipliers for streaks and difficulty.",
    icon: (
      <div className="relative h-4 w-4">
        <div className="absolute inset-0 rounded-full border border-primary/40" />
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary to-accent" />
      </div>
    ),
    highlight: "Progress you can feel",
  },
  {
    title: "Streak Tracking",
    description:
      "See which habits you are protecting with long-term streaks and which ones need a comeback arc.",
    icon: (
      <div className="flex h-4 w-6 items-end justify-between">
        <span className="h-2 w-1 rounded-full bg-foreground/40" />
        <span className="h-3 w-1 rounded-full bg-foreground/60" />
        <span className="h-4 w-1 rounded-full bg-foreground/80" />
        <span className="h-6 w-1 rounded-full bg-accent" />
      </div>
    ),
    highlight: "Consistency engine",
  },
  {
    title: "Penalty Tasks",
    description:
      "Miss a habit and unlock a small, focused penalty task designed to keep you honest without burning you out.",
    icon: (
      <div className="flex h-4 w-4 items-center justify-center rounded-md border border-reward/70 bg-reward/15 text-[10px] font-bold text-reward">
        !
      </div>
    ),
    highlight: "Discipline mechanic",
  },
  {
    title: "Visual Progress Tracking",
    description:
      "Glanceable dashboards for XP, streaks, and quests completed, so you always know how today fits your arc.",
    icon: (
      <div className="h-4 w-6 rounded-md border border-accent/60 bg-accent/10">
        <div className="h-full w-3/4 rounded-md bg-gradient-to-r from-primary to-accent" />
      </div>
    ),
    highlight: "See your arc",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-foreground">
      <Navbar />
      <Hero />

      <section
        id="how-it-works"
        className="border-b border-white/10 bg-bg/95 py-14 sm:py-16"
      >
        <div className="page-container">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
              How it works
            </p>
            <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              Simple structure, deeply motivating loop.
            </h2>
            <p className="mt-3 text-sm text-foreground/70">
              LevelUp IRL keeps the mechanics simple so you focus on the only
              thing that matters: showing up today.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.title}
                className={`animate-fade-up-soft ${
                  index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""
                }`}
              >
                <FeatureCard
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_#ffaab8,_transparent_60%),radial-gradient(circle_at_bottom,_#ffaab8,_transparent_60%)] bg-bg py-14 sm:py-16"
      >
        <div className="page-container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
                Features
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                Everything you love about games, pointed at your real life.
              </h2>
              <p className="mt-3 text-sm text-foreground/70">
                Designed for builders, creatives, and ambitious humans who want
                their daily grind to feel more like a well-designed game loop
                than an endless to-do list.
              </p>
            </div>
            <p className="max-w-xs text-xs text-foreground/60">
              No feeds. No notifications arms race. Just a focused system that
              rewards the version of you who keeps showing up.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featureCards.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                highlight={feature.highlight}
              />
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-foreground/70">
            Want early access?{" "}
            <a
              href="#cta"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
            >
              Join the waitlist
            </a>
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
