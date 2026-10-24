import {
  ArrowUpRight,
  BellRing,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ContactRound,
  Fingerprint,
  KeyRound,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";

const basicInfo = [
  { label: "First name", icon: UserRound },
  { label: "Last name", icon: UserRound },
  { label: "Email", icon: Mail },
  { label: "Job title", icon: BriefcaseBusiness },
  { label: "Delivery unit", icon: Building2 },
  { label: "Project name", icon: ContactRound },
  { label: "Name of immediate supervisor", icon: UserRound },
  { label: "Job level", icon: ArrowUpRight },
  { label: "Employee code", icon: Fingerprint },
  { label: "Hire date", icon: CalendarDays },
];

export const metadata = {
  title: "My Profile",
};

export default function ProfilePage() {
  return (
    <AppShell title="My Profile" dark>
      <main className="relative isolate flex-1 overflow-hidden bg-[#07111f] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-48 -top-56 size-[36rem] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute -left-48 top-[30rem] size-[30rem] rounded-full bg-orange-500/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-7 px-5 py-7 sm:px-7 lg:px-9 lg:py-9">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">
                <span className="size-1.5 rounded-full bg-orange-400" />
                Your account
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                My profile<span className="text-orange-300">.</span>
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Your work details, sign-in credentials, and communication
                preferences.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-300/[0.06] px-3.5 py-2 text-xs font-medium text-sky-100">
              <ShieldCheck aria-hidden="true" className="size-3.5 text-sky-300" />
              Company profile
            </div>
          </header>

          <section
            aria-label="Profile settings"
            className="grid auto-rows-[minmax(150px,auto)] grid-cols-1 gap-4 lg:grid-cols-12"
          >
            <article className="relative isolate flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-sky-300/15 bg-gradient-to-br from-[#12304a] via-[#10283f] to-[#0e1b2b] p-6 sm:p-7 lg:col-span-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-24 -z-10 size-64 rounded-full border border-sky-300/10"
              />
              <div className="absolute -right-4 -top-12 size-48 rounded-full border border-sky-300/[0.07]" />
              <div className="flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-sky-200/20 bg-sky-300/10 text-sky-100">
                  <UserRound aria-hidden="true" className="size-7" />
                </div>
                <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-200">
                  Profile
                </span>
              </div>
              <div className="mt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-200/70">
                  Innodata team member
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  Your work profile
                </h2>
                <p className="mt-1.5 max-w-sm text-xs leading-5 text-slate-300/75">
                  Your company details help personalize your learning
                  experience.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-white/[0.08] bg-[#101d2e] p-5 sm:p-6 lg:col-span-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                    Personal workspace
                  </p>
                  <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-white">
                    Basic info
                  </h2>
                </div>
                <span className="text-[10px] text-slate-500">
                  Managed by your organization
                </span>
              </div>

              <dl className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {basicInfo.map(({ label, icon: Icon }) => (
                  <div
                    className="min-w-0 rounded-xl border border-white/[0.06] bg-[#0b1728]/70 px-3.5 py-3"
                    key={label}
                  >
                    <dt className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
                      <Icon
                        aria-hidden="true"
                        className="size-3 text-slate-500"
                        strokeWidth={1.8}
                      />
                      {label}
                    </dt>
                    <dd className="mt-2 truncate text-xs font-medium text-slate-300">
                      Not provided
                    </dd>
                  </div>
                ))}
              </dl>
            </article>

            <article className="rounded-2xl border border-white/[0.08] bg-[#101d2e] p-6 sm:p-7 lg:col-span-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
                    Account access
                  </p>
                  <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-white">
                    Sign-in credentials
                  </h2>
                </div>
                <div className="flex size-10 items-center justify-center rounded-xl border border-orange-300/15 bg-orange-300/10 text-orange-200">
                  <KeyRound aria-hidden="true" className="size-[18px]" />
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/[0.06] bg-[#0b1728]/70 px-4 py-3.5">
                <p className="text-[10px] font-medium text-slate-500">
                  Username
                </p>
                <p className="mt-1.5 text-sm font-medium text-slate-300">
                  Not provided
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck
                    aria-hidden="true"
                    className="size-3.5 text-slate-500"
                  />
                  Password managed by your organization
                </div>
                <Button
                  className="h-9 border border-white/10 bg-white/[0.04] px-3 text-xs text-slate-400"
                  disabled
                  title="Password updates are not available in this profile yet"
                  variant="outline"
                >
                  Change password
                </Button>
              </div>
              <p className="mt-2 text-[10px] leading-4 text-slate-600">
                Contact your administrator to update your password.
              </p>
            </article>

            <article className="relative isolate overflow-hidden rounded-2xl border border-orange-300/15 bg-gradient-to-br from-[#342719] via-[#241e1a] to-[#151c28] p-6 sm:p-7 lg:col-span-7">
              <div className="absolute -right-16 -top-24 -z-10 size-64 rounded-full border border-orange-200/[0.08]" />
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-orange-300/15 bg-orange-300/10 text-orange-200">
                  <BellRing aria-hidden="true" className="size-[18px]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
                    Stay in control
                  </p>
                  <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-white">
                    Email &amp; notification settings
                  </h2>
                  <p className="mt-1.5 max-w-lg text-xs leading-5 text-slate-400">
                    Choose whether you receive non-essential updates about your
                    learning experience.
                  </p>
                </div>
              </div>

              <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-white/[0.08] bg-[#0b1728]/55 p-4 transition hover:border-orange-200/20 hover:bg-[#0b1728]/75">
                <input
                  className="mt-0.5 size-4 shrink-0 cursor-pointer accent-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                  type="checkbox"
                />
                <span>
                  <span className="block text-xs font-semibold leading-5 text-slate-200">
                    Exclude me from all non-essential emails and notifications
                  </span>
                  <span className="mt-1 block text-[10px] leading-4 text-slate-500">
                    Essential account and security messages may still be sent.
                  </span>
                </span>
              </label>
              <p className="mt-3 pl-1 text-[10px] text-slate-600">
                Preference changes are not saved yet.
              </p>
            </article>
          </section>

          <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-5 text-[10px] text-slate-600">
            <span>Innodata learning experience</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-sky-400" />
              Your details, your learning journey
            </span>
          </footer>
        </div>
      </main>
    </AppShell>
  );
}
