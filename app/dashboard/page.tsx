import { AppShell } from "@/components/app-shell";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard">
        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                Dashboard
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Placeholder dashboard
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Courses</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">0</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Progress</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">0%</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Certificates</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">0</p>
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
            Dashboard content will be added here.
          </div>
        </div>
    </AppShell>
  );
}
