export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-bg via-bg/95 to-bg/80">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
      </div>

      <div className="relative page-container flex flex-col gap-10 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-xl space-y-6 animate-fade-up-soft">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium text-primary/90 shadow-sm shadow-primary/40 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-reward" />
            <span className="font-semibold text-reward">
              Coming soon — join the waitlist
            </span>
          </div>

          <div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Turn your real life into a game
            </h1>
            <p className="mt-4 text-balance text-sm text-foreground/70 sm:text-base">
              LevelUp IRL turns daily habits into quests: earn XP, keep
              streaks, and unlock rewards. Miss a day and get a small penalty
              task to stay accountable. Join the waitlist for early access.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#cta" className="btn-primary">
              Join the waitlist
            </a>
            <a href="#how-it-works" className="btn-outline">
              How it works
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-foreground/60">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Early access when we launch
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-reward" />
              No spam, only product updates
            </div>
          </div>
        </div>

        <div className="relative mt-4 w-full max-w-md self-stretch lg:mt-0">
          <div className="absolute -inset-4 rounded-[26px] bg-gradient-to-br from-primary/40 via-accent/20 to-reward/30 opacity-70 blur-2xl" />
          <div className="relative h-full rounded-2xl border border-white/10 bg-bg/70 p-5 shadow-2xl shadow-black/60 backdrop-blur-md animate-float-soft">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-foreground/60">
                  Current Character
                </p>
                <p className="text-sm font-semibold text-foreground">
                  You, in real life
                </p>
              </div>
              <div className="rounded-full bg-gradient-to-tr from-primary to-accent px-3 py-1 text-[11px] font-semibold text-white shadow-md shadow-primary/40">
                Lvl 12 • Focused
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
                <div className="flex items-center justify-between text-xs text-foreground/70">
                  <span>XP</span>
                  <span>2,480 / 3,000</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-bg/80">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-primary via-accent to-reward animate-subtle-glow" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl border border-white/10 bg-bg/80 p-3">
                  <p className="text-[11px] text-foreground/60">Daily streak</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    27
                  </p>
                  <p className="mt-1 text-[11px] text-emerald-400">
                    +15% bonus XP
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-bg/80 p-3">
                  <p className="text-[11px] text-foreground/60">Quests today</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    5
                  </p>
                  <p className="mt-1 text-[11px] text-foreground/60">
                    3 completed
                  </p>
                </div>
                <div className="rounded-xl border border-reward/60 bg-reward/10 p-3">
                  <p className="text-[11px] text-foreground/70">
                    Penalty tasks
                  </p>
                  <p className="mt-1 text-lg font-semibold text-reward">2</p>
                  <p className="mt-1 text-[11px] text-foreground/70">
                    Missed workouts
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-accent/40 bg-accent/10 p-3 text-xs">
                <p className="font-medium text-foreground">
                  Tonight&apos;s main quest
                </p>
                <p className="mt-1 text-foreground/70">
                  Deep work sprint • 45 minutes of focused progress on your
                  highest priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
