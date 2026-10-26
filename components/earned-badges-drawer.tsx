"use client";

import type { ReactNode } from "react";
import {
  Award,
  BookOpenCheck,
  Check,
  Flame,
  Sparkles,
} from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const earnedBadges = [
  {
    title: "Learning Explorer",
    description: "For making learning part of your routine.",
    icon: Sparkles,
    color: "text-sky-200",
  },
  {
    title: "Course Finisher",
    description: "For completing learning paths from start to finish.",
    icon: BookOpenCheck,
    color: "text-emerald-200",
  },
  {
    title: "Learning Streak",
    description: "For keeping up your learning momentum.",
    icon: Flame,
    color: "text-orange-200",
  },
  {
    title: "Knowledge Builder",
    description: "For growing your skills one lesson at a time.",
    icon: Check,
    color: "text-violet-200",
  },
];

export function EarnedBadgesDrawer({
  ariaLabel,
  className,
  children,
}: {
  ariaLabel: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <Drawer>
      <DrawerTrigger
        aria-label={ariaLabel}
        className={className}
        type="button"
      >
        {children}
      </DrawerTrigger>
      <DrawerContent className="max-h-[85dvh] border-t border-orange-300/20 bg-[#091422] text-slate-100 shadow-[0_-24px_80px_rgba(0,0,0,0.4)]">
        <DrawerHeader className="mx-auto w-full max-w-3xl px-5 pb-5 pt-7 text-left">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DrawerTitle className="text-xl font-semibold text-white">
                Your badges
              </DrawerTitle>
              <DrawerDescription className="mt-2 text-sm leading-6 text-slate-400">
                A collection of milestones celebrating your learning progress.
              </DrawerDescription>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-xl border border-orange-300/20 bg-orange-300/[0.07] px-3 py-2">
              <Award
                aria-hidden="true"
                className="size-5 text-orange-200"
              />
              <span className="text-lg font-semibold text-white">23+</span>
            </div>
          </div>
        </DrawerHeader>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-6">
          <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2">
            {earnedBadges.map(
              ({ title, description, icon: BadgeIcon, color }) => (
                <article
                  className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#101d2e] p-4"
                  key={title}
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                    <BadgeIcon
                      aria-hidden="true"
                      className={`size-6 ${color}`}
                    />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
        <div className="border-t border-white/[0.08] px-5 py-4">
          <div className="mx-auto flex w-full max-w-3xl justify-end">
            <DrawerClose className="inline-flex min-h-10 items-center justify-center rounded-lg border border-white/10 px-4 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
              Close
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
