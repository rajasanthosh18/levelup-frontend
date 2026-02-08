import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  highlight?: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  highlight,
}: FeatureCardProps) {
  return (
    <article className="group card-elevated flex flex-col">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/70 via-accent/70 to-bg text-white shadow-md shadow-primary/50">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            {highlight ? (
              <span className="rounded-full bg-accent/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent/90">
                {highlight}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-xs text-foreground/70">{description}</p>
        </div>
      </div>
    </article>
  );
}
