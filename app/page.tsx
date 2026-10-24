import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BookOpenCheck,
  BrainCircuit,
  Check,
  CirclePlay,
  Orbit,
  Sparkles,
} from "lucide-react";

const learningSignals = [
  { label: "Product design", width: "84%", color: "bg-orange-400" },
  { label: "Data fluency", width: "68%", color: "bg-sky-400" },
  { label: "Leadership", width: "52%", color: "bg-indigo-400" },
];

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#07111f] font-[family-name:var(--font-geist-sans)] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-24 h-[34rem] w-[34rem] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute -right-40 top-24 h-[30rem] w-[30rem] rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <svg
          className="data-wave motion-safe:animate-pulse motion-reduce:animate-none absolute inset-x-0 top-0 h-[750px] w-full opacity-80"
          viewBox="0 0 1440 750"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            className="data-wave__line"
            d="M-80 402C104 402 122 332 260 332s147 116 293 116 176-188 329-188 167 139 305 139S1359 314 1520 314"
            stroke="url(#wave-blue)"
            strokeWidth="1.5"
          />
          <path
            className="data-wave__line"
            d="M-80 443C83 443 150 377 285 377s156 119 295 119 168-150 310-150 169 106 300 106 193-50 330-50"
            stroke="url(#wave-orange)"
            strokeWidth="1.2"
          />
          <path
            className="data-wave__line"
            d="M-80 481C86 481 167 416 306 416s157 103 290 103 174-116 308-116 170 79 298 79 191-36 318-36"
            stroke="url(#wave-blue)"
            strokeWidth="1"
          />
          <path
            className="data-wave__line"
            d="M-80 521C94 521 180 462 321 462s151 90 285 90 178-82 310-82 169 54 294 54 197-24 310-24"
            stroke="url(#wave-orange)"
            strokeWidth="1"
          />
          <path
            className="data-wave__line"
            d="M-80 561C104 561 195 510 337 510s146 76 279 76 182-54 312-54 168 29 289 29 201-12 303-12"
            stroke="url(#wave-blue)"
            strokeWidth="1"
          />
          <circle className="data-wave__particle" cx="1000" cy="260" r="3" />
          <circle className="data-wave__particle data-wave__particle--delay" cx="1258" cy="371" r="2.5" />
          <defs>
            <linearGradient
              id="wave-blue"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#38bdf8" stopOpacity="0" />
              <stop offset=".38" stopColor="#38bdf8" stopOpacity=".48" />
              <stop offset=".72" stopColor="#60a5fa" stopOpacity=".8" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="wave-orange"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fb923c" stopOpacity="0" />
              <stop offset=".42" stopColor="#fb923c" stopOpacity=".3" />
              <stop offset=".76" stopColor="#fdba74" stopOpacity=".72" />
              <stop offset="1" stopColor="#fb923c" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#07111f] to-transparent" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        <Link
          aria-label="Talent home"
          className="group inline-flex items-center gap-3"
          href="/"
        >
          <span className="relative flex size-10 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/10 text-sky-300 shadow-[0_0_28px_rgba(56,189,248,0.12)]">
            <Orbit aria-hidden="true" className="size-5" strokeWidth={1.8} />
            <span className="absolute -right-1 -top-1 size-2.5 rounded-full border-2 border-[#07111f] bg-orange-400" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-[0.04em] text-white">
              Interactive Learning Experience<span className="text-sky-300">.</span>
            </span>
            <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Innodata
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 text-[13px] text-slate-400 md:flex"
        >
          <a className="transition hover:text-white" href="#platform">
            Platform
          </a>
          <a className="transition hover:text-white" href="#learning-paths">
            Learning paths
          </a>
          <a className="transition hover:text-white" href="#outcomes">
            Outcomes
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden rounded-lg px-4 py-2.5 text-[13px] font-medium text-slate-300 transition hover:text-white sm:inline-flex"
            href="/dashboard"
          >
            Log in
          </Link>
          <Link
            className="group inline-flex items-center gap-2 rounded-lg border border-sky-300/20 bg-sky-400/10 px-4 py-2.5 text-[13px] font-semibold text-sky-100 transition hover:border-sky-300/40 hover:bg-sky-400/15"
            href="/"
          >
            Get started
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pb-24 pt-14 sm:px-10 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-300/[0.06] px-3.5 py-2 text-[11px] font-medium tracking-wide text-sky-200/90">
            <Sparkles aria-hidden="true" className="size-3.5 text-orange-300" />
            THE NEXT GENERATION OF LEARNING
            <span className="ml-1 size-1 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]" />
          </div>

          <h1 className="max-w-[12ch] text-[clamp(3.25rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-white">
            Make Learning
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-orange-300 bg-clip-text text-transparent">
              Interactive
            </span>
            <br />
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Build the skills that move you forward. One connected learning
            experience, designed around where you want to go.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              className="group inline-flex items-center gap-3 rounded-xl bg-sky-300 px-5 py-3.5 text-sm font-semibold text-[#061321] shadow-[0_0_30px_rgba(56,189,248,0.2)] transition hover:bg-sky-200"
              href="/"
            >
              Explore the platform
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              className="group inline-flex items-center gap-2.5 px-2 py-3 text-sm font-medium text-slate-300 transition hover:text-white"
              href="/"
            >
              <CirclePlay
                aria-hidden="true"
                className="size-5 text-orange-300 transition group-hover:scale-110"
                strokeWidth={1.6}
              />
              See how it works
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.08] pt-6 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Check aria-hidden="true" className="size-3.5 text-sky-300" />
              Learn at your own pace
            </span>
            <span className="inline-flex items-center gap-2">
              <Check aria-hidden="true" className="size-3.5 text-sky-300" />
              Skills that make an impact
            </span>
          </div>
        </div>

        <div
          aria-label="A preview of your learning intelligence dashboard"
          className="relative mx-auto w-full max-w-[530px]"
          id="platform"
        >
          <div className="absolute -inset-8 -z-10 rounded-[40%] bg-blue-500/10 blur-[70px]" />
          <div className="absolute -right-4 top-12 size-24 rounded-full bg-orange-400/10 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-white/[0.11] bg-[#0b1728]/90 shadow-[0_32px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg border border-orange-300/15 bg-orange-300/10 text-orange-300">
                  <BrainCircuit
                    aria-hidden="true"
                    className="size-[18px]"
                    strokeWidth={1.7}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Learning Progress
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    Career Growth
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1 text-[10px] font-medium text-emerald-200">
                <span className="size-1.5 rounded-full bg-emerald-300" />
                LIVE
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] text-slate-400">
                    Your learning momentum
                  </p>
                  <p className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold tracking-[-0.06em] text-white">
                      78
                    </span>
                    <span className="text-sm text-slate-500">/ 100</span>
                  </p>
                </div>
                <span className="mb-1 inline-flex items-center gap-1 rounded-md bg-orange-300/10 px-2 py-1 text-[10px] font-semibold text-orange-200">
                  <ArrowUpRight aria-hidden="true" className="size-3" />
                  12% this month
                </span>
              </div>

              <div className="relative mt-5 h-[154px] overflow-hidden rounded-xl border border-sky-300/[0.08] bg-[#0a1626]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:42px_38px]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-500/10 to-transparent" />
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 size-full"
                  viewBox="0 0 460 154"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chart-area"
                      x1="230"
                      y1="22"
                      x2="230"
                      y2="154"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#38bdf8" stopOpacity=".23" />
                      <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 119C30 119 35 101 66 101s39 12 67 5 38-48 71-48 42 38 70 28 36-43 67-43 42 28 67 19 34-36 52-36v128H0V119Z"
                    fill="url(#chart-area)"
                  />
                  <path
                    d="M0 119C30 119 35 101 66 101s39 12 67 5 38-48 71-48 42 38 70 28 36-43 67-43 42 28 67 19 34-36 52-36"
                    stroke="#7dd3fc"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle
                    cx="346"
                    cy="43"
                    r="4"
                    fill="#fdba74"
                    stroke="#0a1626"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <span className="absolute bottom-2.5 left-3 text-[9px] text-slate-600">
                  LAST 30 DAYS
                </span>
                <span className="absolute right-3 top-3 rounded-md border border-white/10 bg-[#101f31]/90 px-2 py-1 text-[9px] font-medium text-sky-200">
                  +24% growth
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                  <BookOpenCheck
                    aria-hidden="true"
                    className="size-4 text-sky-300"
                    strokeWidth={1.7}
                  />
                  <p className="mt-3 text-lg font-semibold tracking-tight text-white">
                    12
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-500">
                    paths explored
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                  <AudioLines
                    aria-hidden="true"
                    className="size-4 text-orange-300"
                    strokeWidth={1.7}
                  />
                  <p className="mt-3 text-lg font-semibold tracking-tight text-white">
                    08<span className="ml-1 text-xs font-normal text-slate-500">h</span>
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-500">
                    focused learning
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                  <Sparkles
                    aria-hidden="true"
                    className="size-4 text-violet-300"
                    strokeWidth={1.7}
                  />
                  <p className="mt-3 text-lg font-semibold tracking-tight text-white">
                    04
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-500">
                    new strengths
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-9 -left-5 hidden w-[248px] rounded-xl border border-white/10 bg-[#0c192a]/95 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-16">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium text-slate-300">
                  Skills taking shape
                </p>
                <p className="mt-1 text-[9px] text-slate-500">
                  Your learning pathways
                </p>
              </div>
              <ArrowDownRight
                aria-hidden="true"
                className="size-4 text-orange-300"
              />
            </div>
            <div className="mt-3.5 space-y-2.5">
              {learningSignals.map((signal) => (
                <div key={signal.label}>
                  <div className="mb-1 flex justify-between text-[9px] text-slate-400">
                    <span>{signal.label}</span>
                    <span>{signal.width.replace("%", "")}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                    <div
                      className={`h-full rounded-full ${signal.color}`}
                      style={{ width: signal.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative border-t border-white/[0.07] bg-[#091422]/80"
        id="learning-paths"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-10 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:px-12">
          <div id="outcomes">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-300">
              A clearer way forward
            </p>
            <h2 className="mt-3 max-w-sm text-2xl font-medium leading-snug tracking-tight text-white">
              Turn curiosity into capability.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: BrainCircuit,
                title: "Know your edge",
                text: "See the skills you have and the ones you can build next.",
                color: "text-sky-300",
              },
              {
                icon: BookOpenCheck,
                title: "Learn with purpose",
                text: "Follow a path built around your goals and your pace.",
                color: "text-orange-300",
              },
              {
                icon: ArrowUpRight,
                title: "Make it count",
                text: "Turn steady progress into meaningful momentum.",
                color: "text-violet-300",
              },
            ].map(({ icon: Icon, title, text, color }) => (
              <div
                className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                key={title}
              >
                <Icon
                  aria-hidden="true"
                  className={`size-[18px] ${color}`}
                  strokeWidth={1.7}
                />
                <h3 className="mt-3 text-xs font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-[10px] text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <p>© 2026 Talent Learning Systems</p>
        <p className="inline-flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-sky-400" />
          A smarter signal for what comes next
        </p>
      </footer>
    </main>
  );
}
