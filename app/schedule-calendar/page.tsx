import { AppShell } from "@/components/app-shell";
import { ScheduleCalendarContent } from "@/components/schedule-calendar-content";

export const metadata = { title: "Schedule & Calendar" };

export const instant = false;

export default function ScheduleCalendarPage() {
  return (
    <AppShell title="Schedule & Calendar" dark>
      <ScheduleCalendarContent />
    </AppShell>
  );
}
