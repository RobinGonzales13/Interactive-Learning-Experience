"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  FileBadge,
  LifeBuoy,
  Search,
  UserRound,
} from "lucide-react";

const topics = [
  "All topics",
  "Courses",
  "Account",
  "Progress & certificates",
  "Schedule",
] as const;

type Topic = (typeof topics)[number];

const questions: {
  question: string;
  answer: string;
  topic: Exclude<Topic, "All topics">;
}[] = [
  {
    question: "Where can I find my assigned courses?",
    answer:
      "Open My Courses from the Learning Path menu to see your active learning, course progress, and available course actions. You can also browse Catalog to discover additional learning.",
    topic: "Courses",
  },
  {
    question: "How do I continue a course?",
    answer:
      "Choose My Courses, then open the course you want to continue. Your dashboard also highlights a featured course and links directly to your course list.",
    topic: "Courses",
  },
  {
    question: "How can I update my profile information?",
    answer:
      "Open My Profile from the Performance section of the sidebar. Account fields that are managed by your organization may need to be changed by your learning administrator.",
    topic: "Account",
  },
  {
    question: "Where can I see my learning progress?",
    answer:
      "Open My Progress in the sidebar to review your overview, courses, timeline, and certificates. Your dashboard also summarizes your training hours and course completion.",
    topic: "Progress & certificates",
  },
  {
    question: "Where are my certificates?",
    answer:
      "Open My Progress and choose Certificates. Completed learning appears there when a certificate is available for that course.",
    topic: "Progress & certificates",
  },
  {
    question: "Where can I find course deadlines and live sessions?",
    answer:
      "Open Schedule & Calendar from the Resources section. Select a date to view scheduled deadlines, learning sessions, and webinars.",
    topic: "Schedule",
  },
  {
    question: "What if a course or profile detail looks incorrect?",
    answer:
      "Some learning assignments and profile details are managed by your organization. Contact your learning administrator or training coordinator with the course name and a description of what needs attention.",
    topic: "Account",
  },
];

const shortcuts = [
  {
    title: "My courses",
    description: "Continue your assigned learning.",
    href: "/my-courses",
    icon: BookOpen,
    accent: "text-sky-200 bg-sky-300/10 border-sky-300/15",
  },
  {
    title: "My profile",
    description: "Review your account details.",
    href: "/profile",
    icon: UserRound,
    accent: "text-violet-200 bg-violet-300/10 border-violet-300/15",
  },
  {
    title: "Certificates",
    description: "Find your earned certificates.",
    href: "/my-progress/certificates",
    icon: FileBadge,
    accent: "text-orange-200 bg-orange-300/10 border-orange-300/15",
  },
  {
    title: "Schedule",
    description: "Check deadlines and sessions.",
    href: "/schedule-calendar",
    icon: CalendarDays,
    accent: "text-emerald-200 bg-emerald-300/10 border-emerald-300/15",
  },
];

export function HelpSupportContent() {
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState<Topic>("All topics");
  const [openQuestion, setOpenQuestion] = useState<string | null>(questions[0].question);
  const normalizedSearch = search.trim().toLowerCase();
  const filteredQuestions = useMemo(
    () =>
      questions.filter((item) => {
        const matchesTopic =
          activeTopic === "All topics" || item.topic === activeTopic;
        const matchesSearch =
          !normalizedSearch ||
          `${item.question} ${item.answer} ${item.topic}`
            .toLowerCase()
            .includes(normalizedSearch);
        return matchesTopic && matchesSearch;
      }),
    [activeTopic, normalizedSearch],
  );

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

      <div className="mx-auto w-[92%] max-w-[1400px] py-7 sm:py-9">
        <header className="relative mb-8 overflow-hidden rounded-3xl border border-sky-300/15 bg-gradient-to-br from-[#102a42] via-[#0d1c2d] to-[#111a27] p-6 sm:p-9">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-28 size-72 rounded-full border border-sky-300/[0.08]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-16 size-52 rounded-full border border-orange-300/[0.08]"
          />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200">
              <LifeBuoy aria-hidden="true" className="size-3.5" />
              Learning support
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How can we help?
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Find quick answers about courses, your account, certificates, and
              your learning schedule.
            </p>
            <label className="mt-6 flex min-h-12 max-w-xl items-center gap-3 rounded-xl border border-white/10 bg-[#07111f]/65 px-4 transition focus-within:border-sky-300/40 focus-within:ring-2 focus-within:ring-sky-300/10">
              <Search
                aria-hidden="true"
                className="size-4 shrink-0 text-slate-400"
              />
              <input
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search help articles..."
                type="search"
                value={search}
              />
              <span className="hidden rounded-md border border-white/10 px-2 py-1 text-[10px] text-slate-500 sm:inline">
                FAQ
              </span>
            </label>
          </div>
          <div className="absolute bottom-7 right-[12%] hidden size-16 items-center justify-center rounded-2xl border border-sky-300/15 bg-[#07111f]/50 text-sky-200 shadow-[0_0_40px_rgba(56,189,248,0.08)] sm:flex">
            <CircleHelp aria-hidden="true" className="size-8" strokeWidth={1.4} />
          </div>
        </header>

        <section aria-label="Help topics" className="mb-8">
          <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-xl font-semibold text-white">Quick links</h2>
              <p className="mt-1 text-xs text-slate-500">
                Jump straight to the page you need.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {shortcuts.map(({ title, description, href, icon: Icon, accent }) => (
              <Link
                className="group flex min-h-24 items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#101d2e]/85 p-4 transition duration-200 hover:-translate-y-1 hover:border-sky-300/20 hover:bg-[#132239] hover:shadow-[0_16px_34px_rgba(0,0,0,0.2)]"
                href={href}
                key={title}
              >
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${accent}`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-white">
                    {title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-400">
                    {description}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-sky-200"
                />
              </Link>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="faq-heading"
          className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.7fr)]"
        >
          <div className="rounded-2xl border border-white/10 bg-[#0a1422]/85 p-5 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                  Help center
                </p>
                <h2
                  className="mt-2 text-2xl font-semibold text-white"
                  id="faq-heading"
                >
                  Frequently asked questions
                </h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400">
                {filteredQuestions.length}{" "}
                {filteredQuestions.length === 1 ? "answer" : "answers"}
              </span>
            </div>

            <div
              aria-label="Filter help by topic"
              className="mt-5 flex gap-2 overflow-x-auto pb-2"
              role="group"
            >
              {topics.map((topic) => (
                <button
                  aria-pressed={activeTopic === topic}
                  className={`min-h-9 shrink-0 rounded-full border px-3 text-xs font-medium transition ${
                    activeTopic === topic
                      ? "border-sky-300/30 bg-sky-300/10 text-sky-100"
                      : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                  key={topic}
                  onClick={() => {
                    setActiveTopic(topic);
                    setOpenQuestion(null);
                  }}
                  type="button"
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="mt-3 divide-y divide-white/[0.08]">
              {filteredQuestions.length ? (
                filteredQuestions.map(({ question, answer, topic }, index) => {
                  const isOpen = openQuestion === question;
                  const panelId = `help-answer-${index}`;
                  return (
                    <article className="py-1" key={question}>
                      <h3>
                        <button
                          aria-controls={panelId}
                          aria-expanded={isOpen}
                          className="flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left text-sm font-medium text-slate-100 transition hover:text-sky-200"
                          onClick={() =>
                            setOpenQuestion(isOpen ? null : question)
                          }
                          type="button"
                        >
                          <span>{question}</span>
                          <ChevronDown
                            aria-hidden="true"
                            className={`size-4 shrink-0 text-slate-500 transition-transform ${
                              isOpen ? "rotate-180 text-sky-300" : ""
                            }`}
                          />
                        </button>
                      </h3>
                      {isOpen && (
                        <div
                          className="pb-4 pr-8 text-sm leading-6 text-slate-400"
                          id={panelId}
                        >
                          <p>{answer}</p>
                          <span className="mt-3 inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] text-slate-500">
                            {topic}
                          </span>
                        </div>
                      )}
                    </article>
                  );
                })
              ) : (
                <div className="py-12 text-center">
                  <Search
                    aria-hidden="true"
                    className="mx-auto size-7 text-slate-500"
                  />
                  <p className="mt-3 text-sm font-medium text-slate-300">
                    No matching answers
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Try another search or choose a different topic.
                  </p>
                  <button
                    className="mt-4 text-xs font-semibold text-sky-300 hover:text-sky-200"
                    onClick={() => {
                      setSearch("");
                      setActiveTopic("All topics");
                    }}
                    type="button"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            <section className="rounded-2xl border border-orange-300/15 bg-gradient-to-br from-[#30271d] to-[#171c25] p-5 sm:p-6">
              <span className="flex size-10 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-300/10 text-orange-200">
                <LifeBuoy aria-hidden="true" className="size-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-white">
                Still need a hand?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                For account-specific questions, course assignments, or details
                that need updating, contact your learning administrator or
                training coordinator.
              </p>
              <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">
                Include the course name and a short description of what you need
                help with so they can assist you faster.
              </p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#0a1422]/85 p-5 sm:p-6">
              <h2 className="text-sm font-semibold text-white">
                Learning resources
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Explore more places in your learning portal.
              </p>
              <Link
                className="mt-4 flex min-h-10 items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 text-xs font-medium text-slate-300 transition hover:border-sky-300/20 hover:bg-sky-300/[0.06] hover:text-white"
                href="/catalog"
              >
                Browse the course catalog
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </Link>
              <Link
                className="mt-2 flex min-h-10 items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 text-xs font-medium text-slate-300 transition hover:border-sky-300/20 hover:bg-sky-300/[0.06] hover:text-white"
                href="/my-progress/overview"
              >
                View learning progress
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </Link>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
