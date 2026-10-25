import Link from "next/link";
import {
  Activity,
  Award,
  BadgeCheck,
  BookOpenCheck,
  Clock3,
  Target,
} from "lucide-react";
import { ProgressPageLayout } from "@/components/progress-page-layout";

export const metadata = { title: "Progress Overview" };

const achievements = [
  { label: "Certificates", value: "23", icon: BadgeCheck, color: "text-sky-300" },
  { label: "Catalog applied courses", value: "2", icon: BookOpenCheck, color: "text-orange-300" },
  { label: "Skills", value: "5", icon: Target, color: "text-sky-300" },
  { label: "Badges", value: "24", icon: Award, color: "text-orange-300" },
];

export default function ProgressOverviewPage() {
  return (
    <ProgressPageLayout activeTab="Overview">
      <div className="grid h-full gap-5 lg:grid-cols-2 lg:grid-rows-[1fr_0.9fr]">
        <div className="grid min-h-[300px] grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr]">
          <article className="flex min-h-[250px] items-center justify-center rounded-xl border border-white/[0.07] bg-[#0b1728]/55 p-4">
            <div className="relative aspect-square w-full max-w-[250px]">
              <svg
                aria-label="Course status breakdown: 40 percent completed, 30 percent failed, and 30 percent in progress"
                className="size-full -rotate-90"
                role="img"
                viewBox="0 0 220 220"
              >
                <circle
                  cx="110"
                  cy="110"
                  r="84"
                  fill="none"
                  stroke="#38bdf8"
                  strokeDasharray="211 528"
                  strokeWidth="2"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="84"
                  fill="none"
                  stroke="#fb923c"
                  strokeDasharray="158 528"
                  strokeDashoffset="-211"
                  strokeWidth="2"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="84"
                  fill="none"
                  stroke="#818cf8"
                  strokeDasharray="158 528"
                  strokeDashoffset="-369"
                  strokeWidth="2"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="2"
                  fill="#e2e8f0"
                  transform="rotate(0 110 110) translate(0 -84)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-semibold tracking-tight text-white">
                  40%
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  courses completed
                </span>
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-center rounded-xl border border-white/[0.07] bg-[#0b1728]/55 p-4">
            <h2 className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Achievements
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {achievements.map(({ label, value, icon: Icon, color }) => (
                <div
                  className="flex min-h-[92px] flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-[#101d2e] p-3 text-center"
                  key={label}
                >
                  <Icon aria-hidden="true" className={`size-4 ${color}`} />
                  <p className="mt-1.5 text-xl font-semibold text-white">
                    {value}
                  </p>
                  <p className="mt-0.5 text-[9px] leading-3 text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="flex min-h-[260px] flex-col justify-center rounded-xl border border-white/[0.07] bg-[#0b1728]/55 p-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
            Course status
          </h2>
          <div className="mt-5 space-y-4">
            {[
              { label: "Courses completed", value: "40%", color: "bg-sky-300" },
              { label: "Courses failed", value: "30%", color: "bg-orange-300" },
              { label: "Courses in progress", value: "30%", color: "bg-indigo-300" },
            ].map((status) => (
              <div className="flex items-center gap-3" key={status.label}>
                <span className={`size-2 rounded-full ${status.color}`} />
                <span className="flex-1 text-xs text-slate-400">
                  {status.label}
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  {status.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-white/[0.07] pt-4">
            <div className="grid grid-cols-4 divide-x divide-white/10 text-center">
              {[
                { value: "0", label: "Completed assignments" },
                { value: "4h 58m", label: "Training time taken" },
                { value: "7", label: "Passed tests" },
                { value: "100%", label: "Completion rate" },
              ].map((metric) => (
                <div className="px-1.5" key={metric.label}>
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <Link
          className="group flex min-h-[260px] flex-col rounded-xl border border-white/[0.07] bg-[#0b1728]/55 p-5 transition hover:border-sky-300/20 lg:col-span-2"
          href="/my-progress/timeline"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                Activity
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Learning activity over time
              </p>
            </div>
            <Activity
              aria-hidden="true"
              className="size-4 text-sky-300 transition-transform group-hover:translate-x-0.5"
            />
          </div>
          <div className="relative mt-4 flex-1">
            <svg
              aria-label="Recent learning activity trend"
              className="size-full min-h-[145px]"
              role="img"
              viewBox="0 0 520 190"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="activity-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#38bdf8" stopOpacity=".2" />
                  <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M12 152C48 152 52 119 91 119S141 111 174 128s54 15 91 12 59-25 91-54 50-48 78-50 43 29 74 20v122H12V152Z"
                fill="url(#activity-fill)"
              />
              <path
                d="M12 152C48 152 52 119 91 119S141 111 174 128s54 15 91 12 59-25 91-54 50-48 78-50 43 29 74 20"
                fill="none"
                stroke="#7dd3fc"
                strokeLinecap="round"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M12 170H508"
                stroke="rgba(148,163,184,.2)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] text-slate-500">
            <Clock3 aria-hidden="true" className="size-3" />
            View learning timeline
          </span>
        </Link>
      </div>
    </ProgressPageLayout>
  );
}
