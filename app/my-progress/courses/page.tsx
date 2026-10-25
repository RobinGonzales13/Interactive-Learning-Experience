import { ArrowUpRight, BookOpen, CheckCircle2, CircleDashed } from "lucide-react";
import { ProgressPageLayout } from "@/components/progress-page-layout";

export const metadata = { title: "Course Progress" };

const courses = [
  {
    title: "Cyber Security Awareness",
    category: "Information Security",
    status: "Completed",
    statusColor: "text-emerald-300",
    statusIcon: CheckCircle2,
    progress: 100,
    completed: "May 24, 2024",
    instructor: "Learning & Development",
    duration: "1h 20m",
    score: "95",
    mandatory: true,
  },
  {
    title: "Data Privacy Essentials",
    category: "Compliance",
    status: "In progress",
    statusColor: "text-sky-300",
    statusIcon: CircleDashed,
    progress: 68,
    completed: "In progress",
    instructor: "People Operations",
    duration: "45m",
    score: "—",
    mandatory: true,
  },
  {
    title: "Effective Communication",
    category: "Professional Skills",
    status: "Completed",
    statusColor: "text-emerald-300",
    statusIcon: CheckCircle2,
    progress: 100,
    completed: "Apr 18, 2024",
    instructor: "Learning & Development",
    duration: "2h 10m",
    score: "88",
    mandatory: false,
  },
  {
    title: "Workplace Safety Fundamentals",
    category: "Health & Safety",
    status: "In progress",
    statusColor: "text-sky-300",
    statusIcon: CircleDashed,
    progress: 32,
    completed: "In progress",
    instructor: "Operations Team",
    duration: "1h 05m",
    score: "—",
    mandatory: true,
  },
];

export default function ProgressCoursesPage() {
  return (
    <ProgressPageLayout activeTab="Courses">
      <div className="flex h-full flex-col">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-white">Courses</h2>
            <p className="mt-1 text-xs text-slate-500">
              Your learning activity and course completion.
            </p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
            Sample progress
          </p>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-white/10 px-3 pb-2 text-[9px] uppercase tracking-[0.12em] text-slate-500 sm:grid-cols-[minmax(0,1.5fr)_minmax(100px,0.8fr)_minmax(85px,0.65fr)_64px] sm:px-4">
          <span>Course</span>
          <span className="hidden sm:block">Status</span>
          <span className="hidden sm:block">Completion</span>
          <span className="text-right">Score</span>
        </div>

        <div className="min-h-0 flex-1 space-y-2 overflow-visible py-2 md:overflow-y-auto">
          {courses.map((course) => {
            const StatusIcon = course.statusIcon;

            return (
              <article
                className="group relative rounded-xl border border-white/[0.07] bg-[#0d1a2a]/80 transition duration-200 hover:z-10 hover:border-sky-300/30 hover:bg-[#102036]"
                key={course.title}
              >
                <div className="grid min-h-[74px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-3 sm:grid-cols-[minmax(0,1.5fr)_minmax(100px,0.8fr)_minmax(85px,0.65fr)_64px] sm:px-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-sky-300/10 bg-sky-300/[0.07]">
                      <BookOpen
                        aria-hidden="true"
                        className="size-4 text-sky-300"
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-xs font-medium text-slate-100 sm:text-sm">
                        {course.title}
                      </h3>
                      <p className="mt-1 truncate text-[10px] text-slate-500">
                        {course.category}
                      </p>
                    </div>
                  </div>
                  <span className={`hidden items-center gap-1.5 text-[10px] sm:flex ${course.statusColor}`}>
                    <StatusIcon aria-hidden="true" className="size-3.5" />
                    {course.status}
                  </span>
                  <span className="hidden text-[10px] text-slate-400 sm:block">
                    {course.completed}
                  </span>
                  <span className="justify-self-end rounded-md border border-sky-300/15 bg-sky-300/[0.06] px-2 py-1 text-[10px] font-semibold text-sky-100">
                    {course.score}
                  </span>
                </div>

                <div className="grid max-h-28 grid-rows-[1fr] overflow-hidden opacity-100 transition-all duration-300 md:max-h-0 md:grid-rows-[0fr] md:opacity-0 md:group-hover:max-h-28 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-within:max-h-28 md:group-focus-within:grid-rows-[1fr] md:group-focus-within:opacity-100">
                  <div className="min-h-0">
                    <div className="mx-3 border-t border-white/[0.07] pb-3 pt-2 sm:mx-4">
                      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[9px] text-slate-400">
                        <span>{course.instructor}</span>
                        <span>{course.duration} learning time</span>
                        <span>{course.mandatory ? "Mandatory" : "Optional"}</span>
                        <span className={`sm:hidden ${course.statusColor}`}>
                          {course.status === "In progress"
                            ? `${course.status} · ${course.progress}%`
                            : `${course.status} · ${course.completed}`}
                        </span>
                      </div>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
          <p className="text-[10px] text-slate-500">Showing 1–4 of 12 courses</p>
          <div aria-label="Course pages" className="flex items-center gap-1">
            {[1, 2, 3, 4].map((page) => (
              <span
                aria-current={page === 1 ? "page" : undefined}
                className={`flex size-7 items-center justify-center rounded-lg text-[10px] ${
                  page === 1
                    ? "border border-sky-300/30 bg-sky-300/10 text-sky-100"
                    : "text-slate-500"
                }`}
                key={page}
              >
                {page}
              </span>
            ))}
            <span className="ml-1 flex size-7 items-center justify-center rounded-lg border border-white/10 text-slate-400">
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </span>
          </div>
        </footer>
      </div>
    </ProgressPageLayout>
  );
}
