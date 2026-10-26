"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  getDemoSessionStatus,
  getServerDemoSessionStatus,
  subscribeToDemoSession,
} from "@/lib/demo-auth";

export function SessionGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isPublicRoute = pathname === "/" || pathname === "/login";
  const sessionStatus = useSyncExternalStore(
    subscribeToDemoSession,
    getDemoSessionStatus,
    getServerDemoSessionStatus,
  );

  useEffect(() => {
    if (!isPublicRoute && sessionStatus === "unauthenticated") {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [isPublicRoute, pathname, router, sessionStatus]);

  if (isPublicRoute) {
    return children;
  }

  if (sessionStatus === "error") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-6 text-center text-white">
        <p role="alert" className="max-w-md text-sm leading-6 text-slate-300">
          We couldn&apos;t verify your learning session. Enable session storage
          in your browser and reload this page.
        </p>
      </main>
    );
  }

  if (sessionStatus !== "authenticated") {
    return (
      <main
        aria-label="Checking sign-in"
        className="flex min-h-screen items-center justify-center bg-[#07111f]"
      >
        <span className="size-8 animate-spin rounded-full border-2 border-sky-300/25 border-t-sky-300" />
      </main>
    );
  }

  return children;
}
