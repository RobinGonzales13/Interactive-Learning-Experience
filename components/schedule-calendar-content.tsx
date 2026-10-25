"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Video,
} from "lucide-react";
import Link from "next/link";

type CalendarEvent = {
  date: string;
  title: string;
  detail: string;
  time: string;
  type: "deadline" | "session" | "webinar";
};

const events: CalendarEvent[] = [
  {
    date: "2026-11-02",
    title: "Module 1 deadline",
    detail: "Root Cause Analysis",
    time: "Due today",
    type: "deadline",
  },
  {
    date: "2026-11-05",
    title: "Process Mapping workshop",
    detail: "Live learning session",
    time: "2:00 PM",
    type: "session",
  },
  {
    date: "2026-11-11",
    title: "AI Fluency checkpoint",
    detail: "AI Fluency for Everyone",
    time: "30 min",
    type: "session",
  },
  {
    date: "2026-11-18",
    title: "Learning spotlight",
    detail: "Building better work habits",
    time: "11:00 AM",
    type: "webinar",
  },
  {
    date: "2026-11-24",
    title: "Data Essentials deadline",
    detail: "Complete your final knowledge check",
    time: "Due in 2 days",
    type: "deadline",
  },
];

const eventStyles: Record<CalendarEvent["type"], string> = {
  deadline: "border-orange-300/20 bg-orange-300/10 text-orange-200",
  session: "border-sky-300/20 bg-sky-300/10 text-sky-200",
  webinar: "border-violet-300/20 bg-violet-300/10 text-violet-200",
};

const eventDots: Record<CalendarEvent["type"], string> = {
  deadline: "bg-orange-300",
  session: "bg-sky-300",
  webinar: "bg-violet-300",
};

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getMonthDays(year: number, month: number) {
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const previousMonthDays = new Date(year, month, 0).getDate();
  const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  return Array.from({ length: totalCells }, (_, index) => {
    const day = index - firstWeekday + 1;
    if (day < 1) {
      return {
        date: new Date(year, month - 1, previousMonthDays + day),
        inMonth: false,
      };
    }
    if (day > daysInMonth) {
      return {
        date: new Date(year, month + 1, day - daysInMonth),
        inMonth: false,
      };
    }
    return { date: new Date(year, month, day), inMonth: true };
  });
}

export function ScheduleCalendarContent() {
  const [visibleMonth, setVisibleMonth] = useState(new Date(2026, 10, 1));
  const [selectedDate, setSelectedDate] = useState("2026-11-02");
  const month = visibleMonth.getMonth();
  const year = visibleMonth.getFullYear();
  const days = useMemo(() => getMonthDays(year, month), [month, year]);
  const selectedEvents = events.filter((event) => event.date === selectedDate);
  const monthEvents = events.filter((event) =>
    event.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`),
  );
  const selectedLabel = new Date(`${selectedDate}T12:00:00`).toLocaleDateString(
    "en-US",
    { weekday: "long", month: "long", day: "numeric" },
  );

  function shiftMonth(offset: number) {
    const nextMonth = new Date(year, month + offset, 1);
    setVisibleMonth(nextMonth);
    setSelectedDate(toDateKey(nextMonth));
  }

  return (
    <main className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[#07111f] text-white md:min-h-[calc(100svh-5rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-48 -top-48 size-[34rem] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute -bottom-48 -left-32 size-[30rem] rounded-full bg-orange-500/[0.07] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="mx-auto w-[92%] max-w-[1500px] py-7 sm:py-9">
        <header className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Stay on track
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Schedule &amp; Calendar
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Keep your learning sessions, course deadlines, and upcoming events
              in one place.
            </p>
          </div>
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-sky-300/20 bg-sky-300/10 px-4 text-sm font-semibold text-sky-100 transition hover:border-sky-200/40 hover:bg-sky-300/15 sm:self-auto"
            href="/my-courses"
          >
            <CalendarDays aria-hidden="true" className="size-4" />
            My courses
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </header>

        <section
          aria-label="Schedule overview"
          className="mb-6 grid gap-3 sm:grid-cols-3"
        >
          <article className="rounded-2xl border border-white/[0.08] bg-[#101d2e]/90 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Events this month</p>
              <span className="flex size-9 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200">
                <CalendarDays aria-hidden="true" className="size-4" />
              </span>
            </div>
            <p className="mt-3 text-3xl font-semibold text-white">{monthEvents.length}</p>
            <p className="mt-1 text-xs text-slate-500">Across your learning plan</p>
          </article>
          <article className="rounded-2xl border border-orange-300/15 bg-[#101d2e]/90 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Upcoming deadlines</p>
              <span className="flex size-9 items-center justify-center rounded-xl bg-orange-300/10 text-orange-200">
                <Clock3 aria-hidden="true" className="size-4" />
              </span>
            </div>
            <p className="mt-3 text-3xl font-semibold text-white">
              {monthEvents.filter((event) => event.type === "deadline").length}
            </p>
            <p className="mt-1 text-xs text-slate-500">Keep your courses moving</p>
          </article>
          <article className="rounded-2xl border border-white/[0.08] bg-[#101d2e]/90 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Learning sessions</p>
              <span className="flex size-9 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200">
                <Video aria-hidden="true" className="size-4" />
              </span>
            </div>
            <p className="mt-3 text-3xl font-semibold text-white">
              {monthEvents.filter((event) => event.type !== "deadline").length}
            </p>
            <p className="mt-1 text-xs text-slate-500">Live and self-paced events</p>
          </article>
        </section>

        <section
          aria-label="Calendar and selected day"
          className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.8fr)]"
        >
          <div className="rounded-2xl border border-white/10 bg-[#0a1422]/85 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  {monthNames[month]} {year}
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Select a date to see what is scheduled.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous month"
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-sky-300/30 hover:bg-sky-300/10 hover:text-white"
                  onClick={() => shiftMonth(-1)}
                  type="button"
                >
                  <ChevronLeft aria-hidden="true" className="size-4" />
                </button>
                <button
                  aria-label="Next month"
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-sky-300/30 hover:bg-sky-300/10 hover:text-white"
                  onClick={() => shiftMonth(1)}
                  type="button"
                >
                  <ChevronRight aria-hidden="true" className="size-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 border-b border-white/[0.08] pb-2">
              {weekdays.map((weekday) => (
                <div
                  className="py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-xs"
                  key={weekday}
                >
                  {weekday}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {days.map(({ date, inMonth }) => {
                const key = toDateKey(date);
                const dayEvents = events.filter((event) => event.date === key);
                const isSelected = key === selectedDate;
                return (
                  <button
                    aria-label={`${date.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}${dayEvents.length ? `, ${dayEvents.length} scheduled event${dayEvents.length === 1 ? "" : "s"}` : ""}`}
                    aria-pressed={isSelected}
                    className={`relative flex min-h-[60px] flex-col items-center gap-1 border-b border-white/[0.05] py-2 transition sm:min-h-[86px] sm:py-3 ${
                      isSelected
                        ? "bg-sky-300/[0.09] text-white"
                        : "text-slate-300 hover:bg-white/[0.04]"
                    } ${inMonth ? "" : "text-slate-600"}`}
                    key={key}
                    onClick={() => setSelectedDate(key)}
                    type="button"
                  >
                    <span
                      className={`flex size-8 items-center justify-center rounded-full text-xs font-medium sm:size-9 sm:text-sm ${
                        isSelected
                          ? "bg-sky-300 font-bold text-[#07111f]"
                          : ""
                      }`}
                    >
                      {date.getDate()}
                    </span>
                    <span className="flex min-h-1.5 items-center gap-1">
                      {dayEvents.slice(0, 3).map((event) => (
                        <span
                          aria-hidden="true"
                          className={`size-1.5 rounded-full ${eventDots[event.type]}`}
                          key={event.title}
                        />
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {[
                ["deadline", "Deadline"],
                ["session", "Learning session"],
                ["webinar", "Webinar"],
              ].map(([type, label]) => (
                <span
                  className="inline-flex items-center gap-2 text-xs text-slate-400"
                  key={type}
                >
                  <span
                    aria-hidden="true"
                    className={`size-2 rounded-full ${eventDots[type as CalendarEvent["type"]]}`}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-[#0a1422]/85 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                  Selected day
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {selectedLabel}
                </h2>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-sky-300/15 bg-sky-300/10 text-sky-200">
                <CalendarDays aria-hidden="true" className="size-5" />
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {selectedEvents.length ? (
                selectedEvents.map((event) => (
                  <article
                    className={`rounded-xl border p-4 ${eventStyles[event.type]}`}
                    key={event.title}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
                        {event.type === "deadline"
                          ? "Course deadline"
                          : event.type === "webinar"
                            ? "Webinar"
                            : "Learning session"}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px]">
                        <Clock3 aria-hidden="true" className="size-3" />
                        {event.time}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-white">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300">{event.detail}</p>
                    {event.type === "deadline" && (
                      <Link
                        className="mt-4 inline-flex min-h-9 items-center gap-2 rounded-lg border border-orange-200/20 bg-orange-200/10 px-3 text-xs font-semibold text-orange-100 transition hover:bg-orange-200/15"
                        href="/my-courses"
                      >
                        Go to my courses
                        <ArrowRight aria-hidden="true" className="size-3.5" />
                      </Link>
                    )}
                  </article>
                ))
              ) : (
                <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-8 text-center">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mx-auto size-7 text-slate-500"
                  />
                  <p className="mt-3 text-sm font-medium text-slate-300">
                    Nothing scheduled
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Your calendar is clear for this day. Enjoy the extra space
                    for learning.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 border-t border-white/[0.08] pt-5">
              <h3 className="text-sm font-semibold text-white">
                {monthEvents.length ? "This month" : "No events this month"}
              </h3>
              <div className="mt-3 space-y-3">
                {monthEvents.length ? (
                  monthEvents.slice(0, 4).map((event) => (
                    <button
                      className="flex w-full items-start gap-3 rounded-lg p-2 text-left transition hover:bg-white/[0.04]"
                      key={event.title}
                      onClick={() => setSelectedDate(event.date)}
                      type="button"
                    >
                      <span className="min-w-10 pt-0.5 text-xs font-semibold text-slate-400">
                        {new Date(`${event.date}T12:00:00`).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric" },
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-xs font-medium text-slate-200">
                          {event.title}
                        </span>
                        <span className="mt-1 block truncate text-[10px] text-slate-500">
                          {event.detail}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 size-2 shrink-0 rounded-full ${eventDots[event.type]}`}
                      />
                    </button>
                  ))
                ) : (
                  <p className="text-xs leading-5 text-slate-500">
                    Your calendar has no events for this month yet.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
