import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { NotificationDrawer } from "@/components/notification-drawer";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Search,
  UserRound,
} from "lucide-react";

const pendingCourses = [
  { title: "AI fluency for everyone", detail: "Module 3 · 18 min left" },
  { title: "Data essentials", detail: "New learning path" },
];

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <AppShell title="Interactive Learning Experience" dark>
      <main className="relative isolate flex min-h-[calc(100svh-4rem)] flex-none flex-col overflow-visible bg-[#07111f] text-white md:h-[calc(100svh-5rem)] md:min-h-0 md:overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-48 -top-56 size-[36rem] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute -left-48 top-[28rem] size-[30rem] rounded-full bg-orange-500/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="mx-auto flex h-auto w-[90%] max-w-none flex-col gap-5 self-center py-4 sm:py-5 md:h-[90%] lg:my-auto">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-4">
              <h1 className="text-3xl font-semibold uppercase tracking-[0.04em] text-sky-300 sm:text-4xl">
                Welcome Back!
              </h1>
              <div className="flex w-full max-w-[430px] items-center gap-3 sm:ml-auto sm:w-auto sm:flex-1">
                <label className="relative block min-w-0 flex-1">
                  <span className="sr-only">Search courses and learning paths</span>
                  <Search
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500"
                  />
                  <Input
                    className="h-10 rounded-xl border-white/10 bg-[#0b1728]/80 pl-9 text-sm text-slate-200 placeholder:text-slate-500 focus-visible:border-sky-300/40 focus-visible:ring-sky-300/20"
                    placeholder="Search courses, skills..."
                    type="search"
                  />
                </label>
                <NotificationDrawer />
              </div>
            </div>
          </header>

          <section
            aria-label="Learning dashboard"
            className="grid flex-1 grid-cols-1 gap-3.5 sm:grid-cols-2 lg:min-h-0 lg:grid-cols-12 lg:grid-rows-[repeat(4,minmax(0,1fr))]"
          >
            <Link
              aria-label="View profile for Alex Morgan"
              className="group relative isolate flex min-h-[250px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-sky-300/15 bg-gradient-to-br from-[#12304a] via-[#10283f] to-[#0e1b2b] p-6 text-center transition hover:border-sky-300/30 sm:col-span-1 lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:row-start-1"
              href="/profile"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-24 -z-10 size-64 rounded-full border border-sky-300/10"
              />
              <div className="absolute -left-16 -bottom-24 -z-10 size-64 rounded-full bg-sky-400/[0.08] blur-3xl" />
              <div className="relative flex size-[88px] items-center justify-center rounded-full border border-sky-200/30 bg-[#0b1b2c] text-sky-100 shadow-[0_0_40px_rgba(56,189,248,0.14)]">
                <UserRound
                  aria-hidden="true"
                  className="size-10"
                  strokeWidth={1.4}
                />
                <span className="absolute bottom-1 right-1 size-3 rounded-full border-2 border-[#10283f] bg-emerald-300" />
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-wide text-white">
                Alex Morgan
              </h2>
              <p className="mt-1 text-xs text-slate-300">
                alex.morgan@innodata.com
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-medium text-sky-200/70">
                View profile
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <Link
              aria-label="View learning progress: 45 training hours, 5 courses completed, 100 percent completion rate"
              className="group flex min-h-[116px] items-center justify-center rounded-2xl border border-white/[0.08] bg-[#101d2e] p-4 transition hover:border-sky-300/25 hover:bg-[#122239] sm:col-span-1 lg:col-span-4 lg:col-start-5 lg:row-start-1"
              href="/my-progress/overview"
            >
              <div className="grid w-full grid-cols-3 divide-x divide-white/10">
                <div className="px-2 text-center sm:px-3">
                  <p className="text-3xl font-semibold tracking-tight text-sky-300">
                    45
                  </p>
                  <p className="mt-1 text-[10px] leading-3 text-slate-400">
                    Total hrs spent
                    <br />
                    training
                  </p>
                </div>
                <div className="px-2 text-center sm:px-3">
                  <p className="text-3xl font-semibold tracking-tight text-sky-300">
                    5
                  </p>
                  <p className="mt-1 text-[10px] leading-3 text-slate-400">
                    Courses
                    <br />
                    completed
                  </p>
                </div>
                <div className="px-2 text-center sm:px-3">
                  <p className="text-3xl font-semibold tracking-tight text-sky-300">
                    100%
                  </p>
                  <p className="mt-1 text-[10px] leading-3 text-slate-400">
                    Completion
                    <br />
                    rate
                  </p>
                </div>
              </div>
              <span className="sr-only">Open My Progress</span>
            </Link>

            <Link
              aria-label="Browse the course catalog"
              className="group flex min-h-[116px] items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#101d2e] p-4 transition hover:border-sky-300/20 hover:bg-[#122239] sm:col-span-1 lg:col-span-4 lg:col-start-5 lg:row-start-2"
              href="/catalog"
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white">Catalog</p>
                <p className="mt-1.5 max-w-[15ch] text-[11px] leading-4 text-slate-400">
                  Find courses to learn something new.
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-sky-300">
                  Explore
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
              <div className="flex h-[82px] w-[42%] shrink-0 items-center justify-center rounded-xl border border-sky-300/15 bg-[#0a1728] text-sky-300">
                <BookOpen aria-hidden="true" className="size-7" />
              </div>
            </Link>

            <Link
              aria-label="View certificates: 2 earned"
              className="group relative flex min-h-[92px] items-center justify-center overflow-visible rounded-2xl border border-orange-300/15 bg-gradient-to-r from-[#342719] to-[#241e1a] p-5 text-center transition hover:border-orange-200/30 sm:col-span-1 lg:col-span-4 lg:col-start-1 lg:row-start-3"
              href="/my-progress/certificates"
            >
              <span className="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-lg border border-orange-300/30 bg-[#5b2a25] text-sm font-semibold text-orange-200 shadow-lg">
                2
              </span>
              <span className="text-base font-semibold uppercase tracking-wide text-white">
                Certificates
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="absolute bottom-3 right-3 size-3.5 text-orange-200/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <div
              aria-label="23 badges earned"
              className="flex min-h-[92px] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#101d2e] p-3 text-center sm:col-span-1 lg:col-span-2 lg:col-start-5 lg:row-start-3"
            >
              <p className="text-2xl font-semibold text-sky-300">23+</p>
              <p className="mt-1 text-[10px] text-slate-400">badges earned</p>
            </div>

            <Link
              aria-label="Open Quiz Center"
              className="flex min-h-[92px] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#101d2e] p-3 text-center transition hover:border-orange-300/25 hover:bg-[#201e20] sm:col-span-1 lg:col-span-2 lg:col-start-7 lg:row-start-3"
              href="/quiz-center"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                Quiz
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                Center
              </span>
            </Link>

            <Link
              aria-label="View schedule and calendar: November 2, 2026, Module 1 deadline"
              className="group flex min-h-[92px] flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#101d2e] px-5 py-4 transition hover:border-sky-300/25 hover:bg-[#122239] sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4"
              href="/schedule-calendar"
            >
              <div className="flex items-center gap-3">
                <CalendarDays
                  aria-hidden="true"
                  className="size-5 text-sky-300"
                />
                <div>
                  <p className="text-xl font-semibold tracking-wide text-sky-300">
                    NOV 2, 2026
                  </p>
                  <p className="text-[10px] text-slate-500">Monday</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock3 aria-hidden="true" className="size-3.5 text-orange-300" />
                Deadline for module 1
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300"
              />
            </Link>

            <Link
              aria-label="View 2 pending courses"
              className="group relative isolate flex min-h-[460px] flex-col overflow-hidden rounded-2xl border border-sky-300/15 bg-gradient-to-b from-[#102a42] via-[#101d2e] to-[#111a27] p-5 transition hover:border-sky-300/25 sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-span-4 lg:row-start-1 lg:min-h-0"
              href="/my-courses"
            >
              <div className="absolute -right-16 -top-24 -z-10 size-64 rounded-full bg-sky-400/[0.1] blur-3xl" />
              <div className="flex flex-1 flex-col">
                <div className="relative flex min-h-[220px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-sky-200/10 bg-[#0a1728]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <div className="absolute -right-10 top-4 size-40 rounded-full border border-sky-300/10" />
                  <div className="absolute -right-2 top-12 size-28 rounded-full border border-orange-300/10" />
                  <div className="relative flex size-20 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/10 text-sky-200 shadow-[0_0_36px_rgba(56,189,248,0.12)]">
                    <BookOpen aria-hidden="true" className="size-9" />
                  </div>
                  <div className="absolute bottom-4 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-orange-300" />
                    <span className="size-2 rounded-full border border-sky-200/60" />
                  </div>
                </div>

                <div className="px-2 pb-1 pt-5 text-center">
                  <p className="text-sm font-medium text-orange-200">
                    2 Pending Courses
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.06em] text-white">
                    My courses
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Continue where you left off
                  </p>
                </div>
              </div>

              <ul className="mt-4 divide-y divide-white/[0.07] rounded-xl border border-white/[0.06] bg-[#0b1728]/55 px-3">
                {pendingCourses.map((course) => (
                  <li className="py-2.5" key={course.title}>
                    <p className="truncate text-[11px] font-medium text-slate-200">
                      {course.title}
                    </p>
                    <p className="mt-0.5 text-[9px] text-slate-500">
                      {course.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </Link>
          </section>
        </div>
      </main>
    </AppShell>
  );
}
