import { CalendarDays, Clock3 } from "lucide-react";
import { ProgressPageLayout } from "@/components/progress-page-layout";

export const metadata = { title: "Learning Timeline" };

export default function ProgressTimelinePage() {
  return (
    <ProgressPageLayout activeTab="Timeline">
      <div className="flex h-full flex-col">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-white">Events</h2>
            <p className="mt-1 text-xs text-slate-500">
              Your learning milestones and upcoming sessions.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#0d1a2a] px-3 py-2 text-[10px] text-slate-400">
            <CalendarDays aria-hidden="true" className="size-3.5 text-sky-300" />
            All events
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl border border-sky-300/10 bg-sky-300/[0.06]">
            <Clock3 aria-hidden="true" className="size-6 text-sky-300/80" />
          </span>
          <p className="mt-4 text-sm font-medium text-slate-300">
            No events to display
          </p>
          <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500">
            Your course activity and learning milestones will appear here.
          </p>
        </div>
      </div>
    </ProgressPageLayout>
  );
}
