"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  Eye,
  EyeOff,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import { startDemoSession } from "@/lib/demo-auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const signIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      startDemoSession(email.trim());
      const requestedPath = new URLSearchParams(window.location.search).get(
        "next",
      );
      const nextPath =
        requestedPath?.startsWith("/") &&
        !requestedPath.startsWith("//") &&
        !requestedPath.includes("\\") &&
        requestedPath !== "/login"
          ? requestedPath
          : "/dashboard";
      router.replace(nextPath);
    } catch {
      setError(
        "We couldn’t start your learning session. Please enable session storage and try again.",
      );
    }
  };

  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 -top-40 size-[34rem] rounded-full bg-sky-500/10 blur-[130px]" />
        <div className="absolute -bottom-52 right-[-5rem] size-[34rem] rounded-full bg-orange-500/[0.08] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12">
        <section className="hidden max-w-xl lg:block">
          <Link
            aria-label="Interactive Learning Experience home"
            className="inline-flex items-center gap-3"
            href="/"
          >
            <span className="flex size-11 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/10 shadow-[0_0_28px_rgba(56,189,248,0.12)]">
              <Image
                alt=""
                className="size-8 object-contain"
                height={202}
                src="/innodata-logomark.png"
                width={202}
              />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-wide">
                Interactive Learning Experience
                <span className="text-sky-300">.</span>
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
                Innodata
              </span>
            </span>
          </Link>

          <div className="mt-16 inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-300/[0.06] px-3.5 py-2 text-[11px] font-medium tracking-wide text-sky-200/90">
            <Sparkles aria-hidden="true" className="size-3.5 text-orange-300" />
            YOUR NEXT CHAPTER STARTS HERE
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white xl:text-6xl">
            Make room for
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-orange-300 bg-clip-text text-transparent">
              what&apos;s next.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
            Pick up where you left off, explore a new skill, and keep your
            learning moving forward.
          </p>

          <div className="mt-12 max-w-md rounded-2xl border border-white/[0.09] bg-[#0b1728]/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl border border-sky-300/15 bg-sky-300/[0.08] text-sky-300">
                <BookOpenCheck aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Your learning, connected
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Courses, progress, and goals in one place
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 flex-1 rounded-full bg-sky-300" />
              <span className="h-1.5 flex-1 rounded-full bg-sky-300/70" />
              <span className="h-1.5 flex-1 rounded-full bg-sky-300/35" />
              <span className="h-1.5 flex-1 rounded-full bg-white/10" />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md">
          <Link
            aria-label="Interactive Learning Experience home"
            className="mb-8 inline-flex items-center gap-3 lg:hidden"
            href="/"
          >
            <span className="flex size-10 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/10">
              <Image
                alt=""
                className="size-7 object-contain"
                height={202}
                src="/innodata-logomark.png"
                width={202}
              />
            </span>
            <span className="text-sm font-semibold tracking-wide">
              Interactive Learning Experience
              <span className="text-sky-300">.</span>
            </span>
          </Link>

          <div className="rounded-[1.75rem] border border-white/[0.1] bg-[#0b1728]/90 p-6 shadow-[0_32px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-9">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Welcome back
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Sign in to continue
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Enter your details to open your learning dashboard.
              </p>
            </div>

            <form className="space-y-5" onSubmit={signIn}>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-200"
                  htmlFor="email"
                >
                  Work email
                </label>
                <input
                  autoComplete="username"
                  className="h-12 w-full rounded-xl border border-white/[0.12] bg-[#07111f]/75 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60 focus:ring-2 focus:ring-sky-300/15"
                  id="email"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                  type="email"
                  value={email}
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-200"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    autoComplete="current-password"
                    className="h-12 w-full rounded-xl border border-white/[0.12] bg-[#07111f]/75 px-4 pr-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60 focus:ring-2 focus:ring-sky-300/15"
                    id="password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                  />
                  <button
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 transition hover:text-white"
                    onClick={() => setShowPassword((visible) => !visible)}
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff aria-hidden="true" className="size-4" />
                    ) : (
                      <Eye aria-hidden="true" className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {error ? (
                <p
                  aria-live="polite"
                  className="rounded-lg border border-rose-300/20 bg-rose-300/[0.07] px-3 py-2 text-sm text-rose-200"
                  role="alert"
                >
                  {error}
                </p>
              ) : null}

              <button
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-300 px-5 text-sm font-semibold text-[#061321] shadow-[0_0_30px_rgba(56,189,248,0.16)] transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1728]"
                type="submit"
              >
                Sign in
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
              <LockKeyhole aria-hidden="true" className="size-3.5" />
              <span>Demo access: any valid email and password will work.</span>
            </div>
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            By continuing, you agree to use this learning experience
            responsibly.
          </p>
        </section>
      </div>
    </main>
  );
}
