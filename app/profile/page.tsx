import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  Fingerprint,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";

const companyInfo = [
  { label: "Delivery unit", value: "Not provided", icon: BriefcaseBusiness },
  { label: "Job title", value: "Not provided", icon: UserRound },
  { label: "Project name", value: "Not provided", icon: Fingerprint },
  { label: "Immediate supervisor", value: "Not provided", icon: UserRound },
  { label: "Job level", value: "Not provided", icon: Award },
  { label: "Hire date", value: "Not provided", icon: CalendarDays },
];

const milestones = [
  {
    label: "Certificates",
    value: "2",
    icon: BadgeCheck,
    color: "text-orange-200",
    border: "border-orange-300/15",
  },
  {
    label: "Completed courses",
    value: "5",
    icon: BookOpenCheck,
    color: "text-sky-200",
    border: "border-sky-300/15",
  },
  {
    label: "Skills",
    value: "—",
    icon: BriefcaseBusiness,
    color: "text-sky-200",
    border: "border-sky-300/15",
  },
  {
    label: "Badges",
    value: "23+",
    icon: Award,
    color: "text-orange-200",
    border: "border-orange-300/15",
  },
];

export const metadata = {
  title: "My Profile",
};

export default function ProfilePage() {
  return (
    <AppShell title="My Profile" dark>
      <main className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-visible bg-[#07111f] text-white md:h-[calc(100svh-5rem)] md:min-h-0 md:overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-48 -top-56 size-[36rem] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute -left-48 top-[28rem] size-[30rem] rounded-full bg-orange-500/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="mx-auto my-auto flex h-auto w-[90%] flex-col py-5 md:h-[90%]">
          <section
            aria-label="My profile"
            className="grid flex-1 gap-6 rounded-2xl border border-white/10 bg-[#0a1422]/75 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-9 lg:p-9"
          >
            <div className="flex min-w-0 flex-col">
              <header className="flex flex-col items-center border-b border-white/15 pb-6 text-center">
                <div className="relative flex size-24 items-center justify-center rounded-full border border-sky-200/40 bg-[#0b1b2c] text-sky-200 shadow-[0_0_42px_rgba(56,189,248,0.13)] sm:size-28">
                  <UserRound
                    aria-hidden="true"
                    className="size-11 sm:size-12"
                    strokeWidth={1.4}
                  />
                  <span className="absolute bottom-2 right-2 size-3 rounded-full border-2 border-[#0b1b2c] bg-emerald-300" />
                </div>
                <h1 className="mt-4 text-xl font-semibold uppercase tracking-[0.08em] text-white">
                  Alex Morgan
                </h1>
                <p className="mt-1 text-xs text-slate-400">
                  alex.morgan@innodata.com
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] text-slate-500">
                  <Fingerprint aria-hidden="true" className="size-3" />
                  Employee code: Not provided
                </p>
              </header>

              <div className="flex flex-1 flex-col justify-center pt-5">
                <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Milestones
                </p>
                <div className="grid flex-1 grid-cols-2 gap-3 sm:gap-4">
                  {milestones.map(({ label, value, icon: Icon, color, border }) => (
                    <article
                      className={`flex min-h-28 flex-col items-center justify-center rounded-xl border ${border} bg-[#101d2e]/80 p-4 text-center transition hover:bg-[#14243a]`}
                      key={label}
                    >
                      <Icon
                        aria-hidden="true"
                        className={`mb-2 size-4 ${color}`}
                        strokeWidth={1.7}
                      />
                      <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {value}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">{label}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-5 lg:gap-6">
              <section aria-labelledby="my-info-heading">
                <div className="mb-2 flex items-center justify-between px-1">
                  <h2
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300"
                    id="my-info-heading"
                  >
                    My info
                  </h2>
                  <span className="inline-flex items-center gap-1.5 text-[9px] text-slate-500">
                    <ShieldCheck aria-hidden="true" className="size-3" />
                    Account details
                  </span>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0b1728]/75 p-4 sm:p-5">
                  <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-[10px] text-slate-500">First name</dt>
                      <dd className="mt-1 text-xs font-medium text-slate-200">
                        Alex
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] text-slate-500">Last name</dt>
                      <dd className="mt-1 text-xs font-medium text-slate-200">
                        Morgan
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] text-slate-500">Username</dt>
                      <dd className="mt-1 text-xs font-medium text-slate-200">
                        Not provided
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] text-slate-500">Email</dt>
                      <dd className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-200">
                        <Mail
                          aria-hidden="true"
                          className="size-3 text-slate-500"
                        />
                        alex.morgan@innodata.com
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.07] pt-4">
                    <Button
                      className="h-8 border-white/10 bg-white/[0.04] px-3 text-[10px] text-slate-300 hover:border-sky-300/25 hover:bg-sky-300/10 hover:text-white"
                      disabled
                      title="Email updates are not available in this profile yet"
                      variant="outline"
                    >
                      Change email
                    </Button>
                    <Button
                      className="h-8 border-white/10 bg-white/[0.04] px-3 text-[10px] text-slate-300 hover:border-sky-300/25 hover:bg-sky-300/10 hover:text-white"
                      disabled
                      title="Password updates are not available in this profile yet"
                      variant="outline"
                    >
                      Change password
                    </Button>
                    <span className="self-center text-[9px] text-slate-600">
                      Contact your administrator to update credentials.
                    </span>
                  </div>
                </div>
              </section>

              <section
                aria-labelledby="company-info-heading"
                className="flex flex-1 flex-col"
              >
                <div className="mb-2 flex items-center justify-between px-1">
                  <h2
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300"
                    id="company-info-heading"
                  >
                    Company info
                  </h2>
                  <Button
                    className="h-7 border-white/10 bg-white/[0.04] px-3 text-[10px] text-slate-400"
                    disabled
                    title="Profile editing is not available yet"
                    variant="outline"
                  >
                    Edit
                  </Button>
                </div>
                <div className="flex flex-1 flex-col justify-between rounded-xl border border-white/10 bg-[#0b1728]/50 p-4 sm:p-5">
                  <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {companyInfo.map(({ label, value, icon: Icon }) => (
                      <div
                        className="flex min-w-0 items-start gap-2.5 border-b border-white/[0.05] pb-2.5 last:border-0 sm:last:border-b"
                        key={label}
                      >
                        <Icon
                          aria-hidden="true"
                          className="mt-0.5 size-3 shrink-0 text-sky-300/70"
                          strokeWidth={1.7}
                        />
                        <div className="min-w-0 flex-1">
                          <dt className="text-[10px] text-slate-500">
                            {label}
                          </dt>
                          <dd className="mt-0.5 truncate text-[11px] font-medium text-slate-300">
                            {value}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>

                  <label className="mt-4 flex cursor-pointer items-start gap-2.5 rounded-lg border border-white/[0.07] bg-white/[0.02] p-3 transition hover:border-orange-200/15">
                    <input
                      className="mt-0.5 size-3.5 shrink-0 cursor-pointer accent-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                      type="checkbox"
                    />
                    <span className="text-[10px] leading-4 text-slate-300">
                      Exclude me from all non-essential emails and
                      notifications
                      <span className="mt-0.5 block text-[9px] text-slate-600">
                        Preference changes are not saved yet.
                      </span>
                    </span>
                  </label>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}
