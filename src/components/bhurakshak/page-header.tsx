import type { ReactNode } from "react";
export function PageHeader({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description?: string; actions?: ReactNode }) {
  return <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4"><div className="min-w-0"><p className="text-[11px] font-semibold uppercase tracking-widest text-primary">{eyebrow}</p><h1 className="mt-1 truncate text-2xl font-semibold text-foreground sm:text-3xl">{title}</h1>{description && <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p>}</div>{actions && <div className="shrink-0">{actions}</div>}</div>;
}
