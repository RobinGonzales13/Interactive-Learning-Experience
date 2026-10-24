const stats = [
  { value: "12k+", label: "active learners" },
  { value: "120", label: "expert-led courses" },
  { value: "96%", label: "course completion" },
];

const courses = [
  {
    title: "Leadership Essentials",
    tag: "Management",
    time: "4 weeks",
    description: "Turn new managers into confident team leaders with practical coaching frameworks.",
  },
  {
    title: "Productivity Systems",
    tag: "Operations",
    time: "3 weeks",
    description: "Help teams prioritize, automate, and deliver more with less friction.",
  },
  {
    title: "AI for Work",
    tag: "Technology",
    time: "2 weeks",
    description: "Build practical AI fluency so employees can work faster and smarter every day.",
  },
];

const features = [
  "Personalized learning paths",
  "Live coaching and feedback",
  "Analytics for managers",
  "Mobile-first experience",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5f3ff,_#f8fafc_40%,_#eef2ff_100%)] text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-lg font-bold text-white shadow-lg shadow-violet-200">
              T
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Talent LMS</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">
              Features
            </a>
            <a href="#courses" className="transition hover:text-slate-900">
              Courses
            </a>
            <a href="#results" className="transition hover:text-slate-900">
              Results
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
          >
            Book a demo
          </a>
        </header>

        <section className="grid items-center gap-10 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
              Learning that scales
            </span>
            <h1 className="mt-6 max-w-xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Build a high-performing team.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
              Help your people learn faster, lead better, and deliver measurable growth with a modern learning platform built for teams.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#courses"
                className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Explore courses
              </a>
              <a
                href="#features"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                View features
              </a>
            </div>

            <div id="results" className="mt-10 grid gap-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                  <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-violet-100 bg-white p-6 shadow-[0_30px_80px_-20px_rgba(109,40,217,0.25)]">
            <div className="rounded-[1.5rem] bg-slate-900 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Team progress</p>
                  <p className="mt-1 text-3xl font-bold">87%</p>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-300">
                  +18% this quarter
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>Leadership track</span>
                    <span>92%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-700">
                    <div className="h-2.5 w-[92%] rounded-full bg-violet-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>Productivity systems</span>
                    <span>81%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-700">
                    <div className="h-2.5 w-[81%] rounded-full bg-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>AI for work</span>
                    <span>76%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-700">
                    <div className="h-2.5 w-[76%] rounded-full bg-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="py-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">Popular programs</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Learning tracks your team will love.</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <article key={course.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
                  {course.tag}
                </div>
                <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
                  <span>{course.time}</span>
                  <span>⭐ 4.9</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>
                <a href="#contact" className="mt-6 inline-flex items-center text-sm font-semibold text-violet-700 hover:text-violet-800">
                  View curriculum →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="py-14">
          <div className="rounded-[2rem] bg-slate-900 px-6 py-10 text-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.75)] sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Why teams choose Talent LMS</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">A clear path from learning to real business impact.</h2>
              </div>
              <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-800 p-4">
                  <div className="mb-2 text-2xl text-violet-300">01</div>
                  <strong className="block text-white">Skill-based learning</strong>
                  Align training with role requirements and workforce goals.
                </div>
                <div className="rounded-2xl bg-slate-800 p-4">
                  <div className="mb-2 text-2xl text-violet-300">02</div>
                  <strong className="block text-white">Actionable insights</strong>
                  Track engagement, progress, and team momentum in one place.
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="flex flex-col items-start justify-between gap-4 border-t border-slate-200 py-8 text-sm text-slate-600 sm:flex-row sm:items-center">
          <p>© 2026 Talent LMS</p>
          <a href="mailto:hello@talentlms.example" className="font-medium text-slate-900 hover:text-violet-700">
            hello@talentlms.example
          </a>
        </footer>
      </div>
    </main>
  );
}
