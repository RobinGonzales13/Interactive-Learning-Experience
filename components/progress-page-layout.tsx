import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { ReactNode } from "react";

const progressTabs = [
  { label: "Overview", href: "/my-progress/overview" },
  { label: "Courses", href: "/my-progress/courses" },
  { label: "Certificates", href: "/my-progress/certificates" },
  { label: "Timeline", href: "/my-progress/timeline" },
];

export function ProgressPageLayout({
  activeTab,
  children,
}: {
  activeTab: string;
  children: ReactNode;
}) {
  return (
    <AppShell title="My Progress" dark>
      <main className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-visible bg-[#07111f] text-white md:h-[calc(100svh-5rem)] md:min-h-0 md:overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-48 -top-56 size-[36rem] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute -left-48 top-[28rem] size-[30rem] rounded-full bg-orange-500/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="mx-auto my-auto flex h-auto w-[90%] flex-col gap-4 py-5 md:h-[90%] md:min-h-0">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              My Progress
            </h1>
            <div className="flex w-full max-w-[440px] items-center gap-3 sm:w-auto sm:flex-1">
              <label className="relative min-w-0 flex-1">
                <span className="sr-only">Search progress</span>
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="h-9 rounded-xl border-white/10 bg-[#0b1728]/80 pl-9 text-xs text-slate-200 placeholder:text-slate-500 focus-visible:border-sky-300/40 focus-visible:ring-sky-300/20"
                  placeholder="Search your progress..."
                  type="search"
                />
              </label>
              <Avatar className="size-9 border border-sky-300/20 bg-[#10283f] text-sky-100">
                <AvatarFallback className="bg-sky-300/10 text-[10px] font-semibold text-sky-100">
                  AM
                </AvatarFallback>
              </Avatar>
            </div>
          </header>

          <nav
            aria-label="My Progress sections"
            className="grid grid-cols-4 rounded-xl border border-white/10 bg-[#0b1728]/80 p-1"
          >
            {progressTabs.map((tab) => {
              const active = tab.label === activeTab;

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-9 items-center justify-center rounded-lg px-2 text-[11px] font-medium transition sm:text-xs ${
                    active
                      ? "border border-sky-300/40 bg-sky-300/10 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.08)]"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                  href={tab.href}
                  key={tab.href}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>

          <section
            aria-label={`${activeTab} progress`}
            className="min-h-[460px] flex-1 rounded-2xl border border-white/10 bg-[#0a1422]/75 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:p-5 md:min-h-0 md:overflow-auto lg:p-6"
          >
            {children}
          </section>
        </div>
      </main>
    </AppShell>
  );
}
