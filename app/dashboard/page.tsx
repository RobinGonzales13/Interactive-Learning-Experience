import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { NotificationDrawer } from "@/components/notification-drawer";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  UserRound,
} from "lucide-react";

export const metadata = {
  title: "Dashboard",
};

export const instant = false;

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard" dark actions={<NotificationDrawer />}>
      <main className="relative isolate flex min-h-[calc(100svh-4rem)] flex-none flex-col overflow-visible bg-[#07111f] text-white md:h-[calc(100svh-5rem)] md:min-h-0 md:overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-48 -top-56 size-[36rem] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute -left-48 top-[28rem] size-[30rem] rounded-full bg-orange-500/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="mx-auto flex h-auto w-[90%] max-w-none flex-col self-center py-4 sm:py-5 md:h-[90%] lg:my-auto">
          <section
            aria-label="Learning dashboard"
            className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:h-[70svh] lg:flex-none lg:min-h-0 lg:grid-cols-6 lg:grid-rows-[repeat(4,minmax(0,1fr))] lg:gap-6"
          >
            <Link
              aria-label="View profile for Alex Morgan"
              className="dashboard-tile dashboard-profile-tile group relative isolate flex min-h-[250px] flex-col justify-center overflow-hidden rounded-2xl border border-sky-300/15 bg-gradient-to-br from-[#12304a] via-[#10283f] to-[#0e1b2b] p-6 sm:col-span-1 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1"
              href="/profile"
            >
              <div
                aria-hidden="true"
                className="dashboard-profile-orbit pointer-events-none absolute -right-14 -top-24 -z-10 size-64 rounded-full border border-sky-300/10"
              />
              <div className="absolute -left-16 -bottom-24 -z-10 size-64 rounded-full bg-sky-400/[0.08] blur-3xl" />
              <div className="relative flex flex-1 flex-col items-center justify-center gap-6 sm:flex-row sm:gap-5">
                <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full border border-sky-200/30 bg-[#0b1b2c] text-sky-100 shadow-[0_0_40px_rgba(56,189,248,0.14)] sm:size-28">
                  <UserRound
                    aria-hidden="true"
                    className="size-11"
                    strokeWidth={1.4}
                  />
                  <span className="absolute bottom-1 right-1 size-3 rounded-full border-2 border-[#10283f] bg-emerald-300" />
                </div>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <h2 className="text-xl font-semibold tracking-wide text-white">
                    Alex Morgan
                  </h2>
                  <p className="mt-1 text-sm text-slate-300">
                    alex.morgan@innodata.com
                  </p>
                  <p className="mt-3 text-xs text-slate-400">
                    Job title not provided
                    <span className="mx-2 text-slate-600">|</span>
                    Job level not provided
                  </p>
                  <div className="mt-4 h-px bg-white/15" />
                </div>
              </div>
              <span className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-sky-200/30 bg-[#07111f]/25 px-4 text-sm font-medium text-sky-100 transition-colors group-hover:bg-sky-300/10">
                View Full Profile
                <ArrowUpRight
                  aria-hidden="true"
                  className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <Link
              aria-label="View learning progress: 45 training hours, 5 courses completed, 100 percent completion rate"
              className="dashboard-tile group flex min-h-[116px] items-center justify-center rounded-2xl border border-white/[0.08] bg-[#101d2e] p-4 sm:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-1"
              href="/my-progress/overview"
            >
              <div className="grid w-full grid-cols-3 divide-x divide-white/10">
                <div className="px-2 text-center sm:px-3">
                  <p className="text-3xl font-semibold tracking-tight text-sky-300">
                    45
                  </p>
                  <p className="mt-1 text-xs leading-4 text-slate-400">
                    Total hrs spent
                    <br />
                    training
                  </p>
                </div>
                <div className="px-2 text-center sm:px-3">
                  <p className="text-3xl font-semibold tracking-tight text-sky-300">
                    5
                  </p>
                  <p className="mt-1 text-xs leading-4 text-slate-400">
                    Courses
                    <br />
                    completed
                  </p>
                </div>
                <div className="px-2 text-center sm:px-3">
                  <p className="text-3xl font-semibold tracking-tight text-sky-300">
                    100%
                  </p>
                  <p className="mt-1 text-xs leading-4 text-slate-400">
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
              className="dashboard-tile group flex min-h-[150px] items-center justify-between gap-5 rounded-2xl border border-white/[0.08] bg-[#101d2e] p-5 sm:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-3"
              href="/catalog"
            >
              <div className="min-w-0">
                <p className="text-xl font-semibold uppercase tracking-wide text-white">
                  Catalog
                </p>
                <p className="mt-2 max-w-[18ch] text-sm leading-5 text-slate-400">
                  Find courses to learn something new.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky-300">
                  Explore
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
              <div className="flex h-24 w-[42%] shrink-0 items-center justify-center rounded-xl border border-sky-300/15 bg-[#0a1728] text-sky-300">
                <BookOpen aria-hidden="true" className="size-10" />
              </div>
            </Link>

            <Link
              aria-label="View certificates: 2 earned"
              className="dashboard-tile group relative flex min-h-[110px] items-center justify-center overflow-visible rounded-2xl border border-orange-300/15 bg-gradient-to-r from-[#342719] to-[#241e1a] p-5 text-center sm:col-span-1 lg:col-span-2 lg:col-start-1 lg:row-start-3"
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
              className="dashboard-tile flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#101d2e] p-3 text-center sm:col-span-1 lg:col-span-1 lg:col-start-3 lg:row-start-2"
            >
              <p className="text-2xl font-semibold text-sky-300">23+</p>
              <p className="mt-1 text-[10px] text-slate-400">badges earned</p>
            </div>

            <Link
              aria-label="Open Quiz Center"
              className="dashboard-tile flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#101d2e] p-3 text-center sm:col-span-1 lg:col-span-1 lg:col-start-4 lg:row-start-2"
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
              className="dashboard-tile group flex min-h-[110px] flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#101d2e] px-6 py-5 sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-4"
              href="/schedule-calendar"
            >
              <div className="flex items-center gap-3">
                <CalendarDays
                  aria-hidden="true"
                  className="size-7 text-sky-300"
                />
                <div>
                  <p className="text-2xl font-semibold tracking-wide text-sky-300">
                    NOV 2, 2026
                  </p>
                  <p className="text-sm text-slate-500">Monday</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Clock3 aria-hidden="true" className="size-4 text-orange-300" />
                Deadline for module 1
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300"
              />
            </Link>

            <Link
              aria-label="View courses. Featured course: Root Cause Analysis, 80 percent complete"
              className="dashboard-tile dashboard-course-tile group relative isolate flex min-h-[460px] flex-col overflow-hidden rounded-2xl border border-sky-300/15 bg-gradient-to-b from-[#102a42] via-[#101d2e] to-[#111a27] p-5 sm:col-span-2 lg:col-span-2 lg:col-start-5 lg:row-span-4 lg:row-start-1 lg:min-h-0"
              href="/my-courses"
            >
              <div className="absolute -right-16 -top-24 -z-10 size-64 rounded-full bg-sky-400/[0.1] blur-3xl" />
              <div className="flex flex-1 flex-col">
                <div className="relative flex min-h-[250px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-orange-300/25 bg-[#0a1728]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <div className="absolute -right-10 top-4 size-40 rounded-full border border-sky-300/10" />
                  <div className="absolute -right-2 top-12 size-28 rounded-full border border-orange-300/10" />
                  <ChevronLeft
                    aria-hidden="true"
                    className="absolute left-5 size-7 text-orange-300 transition-transform group-hover:-translate-x-1"
                  />
                  <div className="relative flex size-20 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/10 text-sky-200 shadow-[0_0_36px_rgba(56,189,248,0.12)] transition-transform duration-300 group-hover:scale-110">
                    <BookOpen aria-hidden="true" className="size-9" />
                  </div>
                  <ChevronRight
                    aria-hidden="true"
                    className="absolute right-5 size-7 text-orange-300 transition-transform group-hover:translate-x-1"
                  />
                  <div className="absolute bottom-4 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-orange-300" />
                    <span className="size-2 rounded-full border border-sky-200/60" />
                    <span className="size-2 rounded-full border border-sky-200/60" />
                  </div>
                </div>

                <div className="pt-4">
                  <div className="h-2 overflow-hidden rounded-full border border-orange-300/50 bg-[#081321]">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-orange-400 to-rose-400" />
                  </div>
                  <p className="mt-1 text-right text-xs font-medium text-orange-200">
                    80% complete
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Root Cause Analysis
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    3h 25m · Process Improvement
                  </p>
                </div>
              </div>

              <span className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl border border-sky-200/25 bg-sky-300/10 px-4 text-sm font-semibold text-sky-100 transition-colors group-hover:bg-sky-300/20">
                View Courses
                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 size-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </section>
        </div>
      </main>
    </AppShell>
  );
}
