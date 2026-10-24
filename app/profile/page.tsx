import { AppShell } from "@/components/app-shell";

export const metadata = {
  title: "My Profile",
};

export default function ProfilePage() {
  return (
    <AppShell title="My Profile">
      <main className="flex flex-1 flex-col gap-6 bg-slate-50 p-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            My Profile
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Your profile information will appear here.
          </p>
        </div>
      </main>
    </AppShell>
  );
}
