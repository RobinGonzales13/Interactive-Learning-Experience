import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Clock3,
  Flame,
  Target,
  UserRound,
} from "lucide-react";

const activity = [
  { day: "M", height: "38%" },
  { day: "T", height: "66%" },
  { day: "W", height: "48%" },
  { day: "T", height: "84%" },
  { day: "F", height: "56%" },
  { day: "S", height: "30%" },
  { day: "S", height: "20%" },
];

const pendingCourses = [
  { title: "AI fluency for everyone", tag: "MODULE 3", progress: 68 },
  { title: "Data essentials", tag: "NEW PATH", progress: 0 },
];

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard" dark>
      <main className="relative isolate flex-1 overflow-hidden bg-[#07111f] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-48 -top-56 size-[36rem] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute -left-48 top-[28rem] size-[30rem] rounded-full bg-orange-500/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-6 px-5 py-7 sm:px-7 lg:px-9 lg:py-8">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">
                <span className="size-1.5 rounded-full bg-orange-400" />
                Your learning space
              </p>
              <h1 className="mt-2.5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Welcome back, Alex<span className="text-orange-300">.</span>
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
                A little progress today goes a long way.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3.5 py-2 text-xs font-medium text-emerald-200">
              <span className="size-1.5 rounded-full bg-emerald-300" />
              You&apos;re on track this week
            </div>
          </header>

          <section
            aria-label="Learning dashboard"
            className="grid auto-rows-[minmax(136px,auto)] grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-12"
          >
            <article className="relative isolate flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-sky-300/15 bg-gradient-to-br from-[#12304a] via-[#10283f] to-[#0e1b2b] p-6 text-center sm:col-span-1 lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-24 -z-10 size-64 rounded-full border border-sky-300/10"
              />
              <div className="absolute -left-16 -bottom-24 -z-10 size-64 rounded-full bg-sky-400/[0.08] blur-3xl" />
              <div className="relative flex size-[88px] items-center justify-center rounded-full border border-sky-200/30 bg-[#0b1b2c] text-sky-100 shadow-[0_0_40px_rgba(56,189,248,0.14)]">
                <UserRound aria-hidden="true" className="size-10" strokeWidth={1.4} />
                <span className="absolute bottom-1 right-1 size-3 rounded-full border-2 border-[#10283f] bg-emerald-300" />
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-wide text-white">
                Alex Morgan
              </h2>
              <p className="mt-1 text-xs text-slate-300">alex.morgan@innodata.com</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-medium text-sky-200/70">
                <BriefcaseBusiness aria-hidden="true" className="size-3" />
                Learning profile
              </p>
              <Link
                className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold text-slate-200 transition hover:border-sky-300/30 hover:text-white"
                href="/profile"
              >
                View profile
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </Link>
            </article>

            <article className="relative flex min-h-[136px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101d2e] p-5 sm:col-span-1 lg:col-span-4 lg:col-start-5 lg:row-start-1">
              <div className="absolute -right-8 -top-12 size-40 rounded-full bg-orange-400/[0.08] blur-3xl" />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Learning streak
                  </p>
                  <p className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">
                    04
                    <span className="ml-2 text-sm font-medium tracking-normal text-slate-400">
                      days
                    </span>
                  </p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-xl border border-orange-300/15 bg-orange-300/10 text-orange-300">
                  <Flame aria-hidden="true" className="size-5" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <span
                    className={`flex size-6 items-center justify-center rounded-md text-[9px] font-semibold ${
                      index < 4
                        ? "bg-orange-300 text-[#20140c]"
                        : "border border-white/[0.08] bg-white/[0.03] text-slate-500"
                    }`}
                    key={`${day}-${index}`}
                  >
                    {index < 4 ? (
                      <Check aria-label={`${day} completed`} className="size-3" />
                    ) : (
                      day
                    )}
                  </span>
                ))}
                <span className="ml-1 text-[10px] text-slate-500">this week</span>
              </div>
            </article>

            <article className="flex min-h-[136px] flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#101d2e] p-5 sm:col-span-1 lg:col-span-4 lg:col-start-5 lg:row-start-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">
                  Learning progress
                </p>
                <Target aria-hidden="true" className="size-4 text-sky-300" />
              </div>
              <div className="flex items-center gap-4">
                <div className="relative flex size-[66px] shrink-0 items-center justify-center">
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 size-full -rotate-90"
                    viewBox="0 0 76 76"
                  >
                    <circle
                      cx="38"
                      cy="38"
                      r="32"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="6"
                    />
                    <circle
                      cx="38"
                      cy="38"
                      r="32"
                      fill="none"
                      stroke="#7dd3fc"
                      strokeDasharray="201"
                      strokeDashoffset="64"
                      strokeLinecap="round"
                      strokeWidth="6"
                    />
                  </svg>
                  <span className="text-base font-semibold text-white">68%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Great pace</p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                    of your monthly goal
                  </p>
                </div>
              </div>
            </article>

            <Link
              aria-label="View certificates: 2 earned"
              className="group relative flex min-h-[136px] items-center justify-between overflow-hidden rounded-2xl border border-orange-300/15 bg-gradient-to-r from-[#342719] to-[#241e1a] p-5 transition hover:border-orange-200/30 sm:col-span-1 lg:col-span-4 lg:col-start-1 lg:row-start-3"
              href="/profile"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-200/75">
                  Milestones
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white">
                  Certificates
                </h2>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Keep building your collection
                </p>
              </div>
              <span className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-lg border border-orange-300/25 bg-[#5b2a25] text-sm font-semibold text-orange-200 shadow-lg">
                2
              </span>
              <BadgeCheck
                aria-hidden="true"
                className="mr-2 size-9 text-orange-200/80 transition-transform group-hover:scale-110"
                strokeWidth={1.4}
              />
            </Link>

            <article className="flex min-h-[136px] flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#101d2e] p-4 sm:col-span-1 lg:col-span-2 lg:col-start-5 lg:row-start-3">
              <div className="flex size-8 items-center justify-center rounded-lg border border-sky-300/15 bg-sky-300/10 text-sky-300">
                <BookOpenCheck aria-hidden="true" className="size-4" />
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-white">
                  06
                </p>
                <p className="text-[10px] text-slate-500">courses completed</p>
              </div>
            </article>

            <article className="flex min-h-[136px] flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#101d2e] p-4 sm:col-span-1 lg:col-span-2 lg:col-start-7 lg:row-start-3">
              <div className="flex size-8 items-center justify-center rounded-lg border border-orange-300/15 bg-orange-300/10 text-orange-300">
                <AudioLines aria-hidden="true" className="size-4" />
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-white">
                  5.4<span className="ml-1 text-xs font-medium text-slate-400">h</span>
                </p>
                <p className="text-[10px] text-slate-500">learning this week</p>
              </div>
            </article>

            <article className="flex min-h-[136px] flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#101d2e] p-5 sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Learning activity
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    A week of steady progress
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/10 bg-sky-300/[0.05] px-2.5 py-1 text-[10px] text-sky-200">
                  <Clock3 aria-hidden="true" className="size-3" />
                  5.4 hours
                </span>
              </div>
              <div
                aria-label="Learning activity during the week"
                className="mt-3 flex h-12 items-end justify-between gap-2"
              >
                {activity.map((item, index) => (
                  <div
                    className="flex h-full flex-1 flex-col items-center justify-end gap-1"
                    key={`${item.day}-${index}`}
                  >
                    <div
                      className={`w-full max-w-10 rounded-t-md ${
                        index === 3
                          ? "bg-gradient-to-t from-sky-500 to-sky-300"
                          : "bg-sky-300/20"
                      }`}
                      style={{ height: item.height }}
                    />
                    <span className="text-[8px] text-slate-600">{item.day}</span>
                  </div>
                ))}
              </div>
            </article>

            <article
              className="relative isolate flex min-h-[500px] flex-col overflow-hidden rounded-2xl border border-sky-300/15 bg-gradient-to-b from-[#102a42] via-[#101d2e] to-[#111a27] p-5 sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-span-4 lg:row-start-1"
              id="courses-pending"
            >
              <div className="absolute -right-16 -top-24 -z-10 size-64 rounded-full bg-sky-400/[0.1] blur-3xl" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200/75">
                    Your learning queue
                  </p>
                  <h2 className="mt-1.5 text-lg font-semibold text-white">
                    Courses pending
                  </h2>
                </div>
                <span className="flex size-8 items-center justify-center rounded-lg border border-orange-300/20 bg-orange-300/10 text-sm font-semibold text-orange-200">
                  2
                </span>
              </div>

              <div className="relative mt-4 flex min-h-[210px] flex-1 flex-col justify-between overflow-hidden rounded-xl border border-sky-200/10 bg-[#0a1728] p-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <div className="absolute -right-10 top-4 size-40 rounded-full border border-sky-300/10" />
                <div className="absolute -right-2 top-12 size-28 rounded-full border border-orange-300/10" />
                <div className="relative flex size-11 items-center justify-center rounded-xl border border-sky-300/15 bg-sky-300/10 text-sky-200">
                  <BrainCircuit aria-hidden="true" className="size-5" />
                </div>
                <div className="relative">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-sky-200/70">
                    Continue your path
                  </p>
                  <h3 className="mt-2 max-w-[15ch] text-xl font-semibold leading-snug text-white">
                    AI fluency for everyone
                  </h3>
                  <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Course progress</span>
                    <span className="font-semibold text-sky-200">68%</span>
                  </div>
                  <div
                    aria-label="AI fluency course progress: 68%"
                    className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10"
                    role="progressbar"
                    aria-valuenow={68}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-full w-[68%] rounded-full bg-sky-300" />
                  </div>
                </div>
              </div>

              <ul className="mt-3 divide-y divide-white/[0.07]">
                {pendingCourses.map((course, index) => (
                  <li className="py-3 first:pt-2 last:pb-1" key={course.title}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="min-w-0 truncate text-xs font-medium text-slate-200">
                        {course.title}
                      </span>
                      <span className="shrink-0 text-[9px] font-semibold tracking-wide text-slate-500">
                        {course.tag}
                      </span>
                    </div>
                    {index === 0 ? (
                      <p className="mt-1 text-[10px] text-slate-500">
                        Module 3 of 8 · 18 min remaining
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>

              <Link
                className="mt-2 inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-sky-300/25 hover:text-white"
                href="#courses-pending"
              >
                Browse courses
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </Link>
            </article>
          </section>

          <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4 text-[10px] text-slate-600">
            <span>Innodata learning experience</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-sky-400" />
              Every step builds momentum
            </span>
          </footer>
        </div>
      </main>
    </AppShell>
  );
}
