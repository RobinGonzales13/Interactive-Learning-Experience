import type { LucideIcon } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export function DevelopmentPage({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <AppShell title={title} dark>
      <main className="relative isolate flex min-h-[calc(100svh-4rem)] flex-1 items-center justify-center overflow-hidden bg-[#07111f] px-5 py-10 text-white md:min-h-[calc(100svh-5rem)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-40 -top-44 size-[32rem] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute -bottom-48 -left-40 size-[30rem] rounded-full bg-orange-500/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <section className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-sky-300/20 bg-gradient-to-br from-[#102238]/95 via-[#0b1728]/95 to-[#111827]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 size-80 rounded-full border border-sky-300/[0.08]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-20 size-56 rounded-full border border-orange-300/[0.08]"
          />
          <div className="relative grid items-center gap-8 sm:grid-cols-[0.85fr_1.15fr] sm:gap-10">
            <div
              aria-hidden="true"
              className="relative mx-auto flex aspect-square w-full max-w-[230px] items-center justify-center rounded-[2rem] border border-sky-200/15 bg-[#081321]/80 shadow-[inset_0_0_50px_rgba(56,189,248,0.06)]"
            >
              <div className="absolute inset-4 rounded-[1.5rem] border border-white/[0.06]" />
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.12),transparent_62%)]" />
              <div className="relative flex size-24 items-center justify-center rounded-3xl border border-sky-200/25 bg-gradient-to-br from-sky-300/15 to-blue-500/10 text-sky-200 shadow-[0_0_45px_rgba(56,189,248,0.14)]">
                <Icon aria-hidden="true" className="size-11" strokeWidth={1.5} />
              </div>
              <span className="absolute right-[18%] top-[19%] size-2 rounded-full bg-orange-300 shadow-[0_0_15px_rgba(253,186,116,0.7)]" />
              <span className="absolute bottom-[20%] left-[18%] size-1.5 rounded-full bg-sky-200 shadow-[0_0_12px_rgba(125,211,252,0.7)]" />
              <span className="absolute bottom-4 rounded-full border border-white/10 bg-[#07111f]/80 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-slate-400">
                Innodata Learning
              </span>
            </div>

            <div className="relative text-center sm:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-300/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-200">
                <span className="size-1.5 animate-pulse rounded-full bg-orange-300" />
                Currently in development
              </span>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h1>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400 sm:mx-0">
                {description}
              </p>
              <div className="mt-7 flex items-center justify-center gap-2 sm:justify-start">
                <span className="h-1.5 w-10 rounded-full bg-sky-300/80" />
                <span className="h-1.5 w-5 rounded-full bg-sky-300/30" />
                <span className="h-1.5 w-5 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
