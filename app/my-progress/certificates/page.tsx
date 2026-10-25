import { Award, Download, Eye, Share2 } from "lucide-react";
import { ProgressPageLayout } from "@/components/progress-page-layout";

export const metadata = { title: "Certificates" };

const certificates = [
  {
    course: "Cyber Security Awareness",
    issued: "May 24, 2024",
    expires: "May 24, 2025",
    id: "CERT-2024-0184",
    status: "Valid",
  },
  {
    course: "Effective Communication",
    issued: "Apr 18, 2024",
    expires: "No expiration",
    id: "CERT-2024-0127",
    status: "Valid",
  },
  {
    course: "Workplace Safety Fundamentals",
    issued: "Feb 02, 2024",
    expires: "Feb 02, 2025",
    id: "CERT-2024-0046",
    status: "Valid",
  },
  {
    course: "Data Privacy Essentials",
    issued: "Jan 10, 2024",
    expires: "Jan 10, 2025",
    id: "CERT-2024-0012",
    status: "Valid",
  },
];

const hoverActions = [
  { label: "Download", icon: Download },
  { label: "Share", icon: Share2 },
  { label: "Preview", icon: Eye },
];

export default function ProgressCertificatesPage() {
  return (
    <ProgressPageLayout activeTab="Certificates">
      <div className="flex h-full flex-col">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-white">Certificates</h2>
            <p className="mt-1 text-xs text-slate-500">
              A record of your course achievements.
            </p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
            Sample records
          </p>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_minmax(72px,0.55fr)] gap-3 border-b border-white/10 px-3 pb-2 text-[9px] uppercase tracking-[0.12em] text-slate-500 sm:grid-cols-[minmax(0,1.4fr)_minmax(100px,0.7fr)_minmax(100px,0.7fr)_80px] sm:px-4">
          <span>Course</span>
          <span>Issued</span>
          <span className="hidden sm:block">Expires</span>
          <span className="text-right">Status</span>
        </div>

        <div className="min-h-0 flex-1 space-y-2 overflow-visible py-2 md:overflow-y-auto">
          {certificates.map((certificate) => (
            <article
              className="group relative rounded-xl border border-white/[0.07] bg-[#0d1a2a]/80 transition duration-200 hover:z-10 hover:border-orange-300/25 hover:bg-[#102036]"
              key={certificate.id}
            >
              <div className="grid min-h-[76px] grid-cols-[minmax(0,1fr)_minmax(72px,0.55fr)] items-center gap-3 px-3 py-3 sm:grid-cols-[minmax(0,1.4fr)_minmax(100px,0.7fr)_minmax(100px,0.7fr)_80px] sm:px-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-orange-300/10 bg-orange-300/[0.07]">
                    <Award
                      aria-hidden="true"
                      className="size-4 text-orange-300"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-medium text-slate-100 sm:text-sm">
                      {certificate.course}
                    </h3>
                    <p className="mt-1 truncate text-[9px] text-slate-500">
                      {certificate.id}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400">
                  {certificate.issued}
                </span>
                <span className="hidden text-[10px] text-slate-400 sm:block">
                  {certificate.expires}
                </span>
                <span className="justify-self-end rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-2 py-1 text-[9px] text-emerald-200">
                  {certificate.status}
                </span>
              </div>

              <div className="grid max-h-20 grid-rows-[1fr] overflow-hidden opacity-100 transition-all duration-300 md:max-h-0 md:grid-rows-[0fr] md:opacity-0 md:group-hover:max-h-20 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-within:max-h-20 md:group-focus-within:grid-rows-[1fr] md:group-focus-within:opacity-100">
                <div className="min-h-0">
                  <div className="mx-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pb-3 pt-2 sm:mx-4">
                    <p className="text-[9px] text-slate-400">
                      Expires {certificate.expires}
                    </p>
                    <div
                      aria-label="Certificate actions preview"
                      className="flex items-center gap-1.5"
                    >
                      {hoverActions.map(({ label, icon: Icon }) => (
                        <span
                          className="flex items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[9px] text-slate-400"
                          key={label}
                          title={`${label} action preview`}
                        >
                          <Icon aria-hidden="true" className="size-3" />
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
          <p className="text-[10px] text-slate-500">
            Showing 1–4 of 23 certificates
          </p>
          <div aria-label="Certificate pages" className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((page) => (
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
          </div>
        </footer>
      </div>
    </ProgressPageLayout>
  );
}
