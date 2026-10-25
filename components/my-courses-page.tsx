"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Play,
  Search,
  X,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type Course = {
  id: string;
  title: string;
  category: string;
  duration: string;
  progress: number;
  description: string;
  lessons: string;
  instructor: string;
  completed: boolean;
};

const courseData: Course[] = [
  {
    id: "root-cause",
    title: "Root Cause Analysis",
    category: "Process Improvement",
    duration: "3h 25m",
    progress: 80,
    description:
      "Build a practical approach to finding the source of recurring problems, validating contributing factors, and selecting lasting corrective actions.",
    lessons: "8 of 10 lessons complete",
    instructor: "Learning & Development",
    completed: false,
  },
  {
    id: "data-essentials",
    title: "Data Essentials",
    category: "Digital Skills",
    duration: "2h 10m",
    progress: 40,
    description:
      "Learn how to read, organize, and communicate with data through approachable examples and guided exercises.",
    lessons: "4 of 10 lessons complete",
    instructor: "Digital Learning Team",
    completed: false,
  },
  {
    id: "ai-fluency",
    title: "AI Fluency for Everyone",
    category: "Digital Skills",
    duration: "1h 45m",
    progress: 10,
    description:
      "Explore everyday AI concepts, responsible use, and practical ways to work confidently with AI tools.",
    lessons: "1 of 8 lessons complete",
    instructor: "Digital Learning Team",
    completed: false,
  },
  {
    id: "cyber-security",
    title: "Cyber Security Awareness",
    category: "Information Security",
    duration: "1h 20m",
    progress: 100,
    description:
      "Recognize common security risks and practice simple steps that help protect company and personal information.",
    lessons: "6 of 6 lessons complete",
    instructor: "Information Security",
    completed: true,
  },
  {
    id: "communication",
    title: "Effective Communication",
    category: "Professional Skills",
    duration: "2h 10m",
    progress: 100,
    description:
      "Strengthen communication habits for clearer collaboration, active listening, and more productive conversations.",
    lessons: "9 of 9 lessons complete",
    instructor: "Learning & Development",
    completed: true,
  },
  {
    id: "workplace-safety",
    title: "Workplace Safety Fundamentals",
    category: "Health & Safety",
    duration: "1h 05m",
    progress: 100,
    description:
      "Review practical safety principles, hazard awareness, and the steps to take when a concern arises.",
    lessons: "5 of 5 lessons complete",
    instructor: "Operations Team",
    completed: true,
  },
  {
    id: "privacy",
    title: "Data Privacy Essentials",
    category: "Compliance",
    duration: "45m",
    progress: 100,
    description:
      "Understand the essentials of responsible data handling, privacy awareness, and protecting sensitive information.",
    lessons: "4 of 4 lessons complete",
    instructor: "People Operations",
    completed: true,
  },
  {
    id: "teamwork",
    title: "Building Stronger Teams",
    category: "Professional Skills",
    duration: "1h 30m",
    progress: 100,
    description:
      "Discover ways to build trust, share ownership, and make day-to-day teamwork more effective.",
    lessons: "7 of 7 lessons complete",
    instructor: "People Operations",
    completed: true,
  },
  {
    id: "quality",
    title: "Quality at Work",
    category: "Process Improvement",
    duration: "1h 15m",
    progress: 100,
    description:
      "Apply a quality mindset to everyday work by spotting opportunities to improve consistency and outcomes.",
    lessons: "6 of 6 lessons complete",
    instructor: "Learning & Development",
    completed: true,
  },
  {
    id: "excel",
    title: "Excel: Getting Started",
    category: "Digital Skills",
    duration: "2h 40m",
    progress: 100,
    description:
      "Get comfortable with spreadsheets, formulas, and simple data organization for common workplace tasks.",
    lessons: "10 of 10 lessons complete",
    instructor: "Digital Learning Team",
    completed: true,
  },
];

function CourseCard({
  course,
  onSelect,
}: {
  course: Course;
  onSelect: (course: Course) => void;
}) {
  return (
    <button
      className="group flex min-h-[224px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1728]/80 text-left transition hover:-translate-y-0.5 hover:border-sky-300/30 hover:bg-[#102036] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60"
      onClick={() => onSelect(course)}
      type="button"
    >
      <span className="relative flex h-28 w-full items-center justify-center overflow-hidden border-b border-white/[0.07] bg-gradient-to-br from-[#12324b] via-[#11233a] to-[#192037]">
        <span
          aria-hidden="true"
          className="absolute -right-8 -top-12 size-40 rounded-full border border-sky-200/10"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-16 -left-10 size-40 rounded-full border border-orange-200/10"
        />
        <span className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0b1728]/70 to-transparent" />
        <span className="relative flex size-11 items-center justify-center rounded-xl border border-sky-200/20 bg-[#07111f]/60 text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.12)] transition group-hover:scale-105">
          {course.completed ? (
            <Check aria-hidden="true" className="size-5 text-emerald-300" />
          ) : (
            <BookOpen aria-hidden="true" className="size-5" />
          )}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-[#07111f]/70 px-2 py-1 text-[9px] text-slate-300">
          {course.category}
        </span>
      </span>

      <span className="flex flex-1 flex-col px-4 pb-3 pt-3">
        <span className="line-clamp-1 text-sm font-semibold text-slate-100">
          {course.title}
        </span>
        <span className="mt-1 flex items-center gap-1 text-[10px] text-slate-500">
          <Clock3 aria-hidden="true" className="size-3" />
          {course.duration}
        </span>
        <span className="mt-auto pt-4">
          <span
            aria-label={`${course.progress}% complete`}
            className="relative block h-2 overflow-hidden rounded-full border border-white/20 bg-[#07111f]"
          >
            <span
              className={`absolute inset-y-0 left-0 rounded-full ${
                course.completed
                  ? "bg-gradient-to-r from-emerald-400 to-sky-400"
                  : "bg-gradient-to-r from-sky-400 to-blue-500"
              }`}
              style={{ width: `${course.progress}%` }}
            />
          </span>
          <span className="mt-1 block text-center text-[9px] font-medium text-slate-400">
            {course.progress}%
          </span>
        </span>
      </span>
    </button>
  );
}

export function MyCoursesPage() {
  const [activeTab, setActiveTab] = useState<"available" | "completed">(
    "available",
  );
  const [query, setQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return courseData.filter((course) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${course.title} ${course.category}`.toLocaleLowerCase().includes(normalizedQuery);
      return matchesQuery;
    });
  }, [query]);

  const availableCourses = filtered.filter((course) => !course.completed);
  const completedCourses = filtered.filter((course) => course.completed);

  return (
    <AppShell title="My courses" dark>
      <main className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-visible bg-[#07111f] text-white md:h-[calc(100svh-5rem)] md:min-h-0 md:overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-48 -top-56 size-[36rem] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute -left-48 top-[28rem] size-[30rem] rounded-full bg-orange-500/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="mx-auto my-auto flex h-auto w-[90%] flex-col gap-5 py-5 md:h-[90%] md:min-h-0">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              My Courses
            </h1>
            <label className="relative flex w-full min-w-0 items-center sm:w-auto sm:flex-1 sm:justify-end">
              <span className="sr-only">Search my courses</span>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500 sm:left-auto sm:right-[3.25rem]"
              />
              <Input
                className="h-10 w-full rounded-xl border-white/10 bg-[#0b1728]/80 pl-9 text-xs text-slate-200 placeholder:text-slate-500 focus-visible:border-sky-300/40 focus-visible:ring-sky-300/20 sm:max-w-[360px] sm:pl-3 sm:pr-10"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search courses..."
                type="search"
                value={query}
              />
            </label>
          </header>

          <nav
            aria-label="Course status"
            className="grid grid-cols-2 rounded-xl border border-white/10 bg-[#0b1728]/80 p-1"
          >
            {[
              { key: "available", label: "Available courses" },
              { key: "completed", label: "Completed courses" },
            ].map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  aria-selected={active}
                  className={`relative flex min-h-10 items-center justify-center rounded-lg px-2 text-xs font-medium transition ${
                    active
                      ? "border border-sky-300/35 bg-sky-300/[0.08] text-sky-100"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                  key={tab.key}
                  onClick={() =>
                    setActiveTab(tab.key as "available" | "completed")
                  }
                  role="tab"
                  type="button"
                >
                  {tab.label}
                  <span className="ml-2 rounded-full bg-white/[0.07] px-1.5 py-0.5 text-[9px] text-slate-400">
                    {tab.key === "available" ? 3 : 7}
                  </span>
                </button>
              );
            })}
          </nav>

          <section
            aria-label={
              activeTab === "available" ? "Available courses" : "Completed courses"
            }
            className="min-h-0 flex-1 overflow-visible md:overflow-y-auto md:pr-1"
            role="tabpanel"
          >
            {activeTab === "available" ? (
              <div className="space-y-7">
                <CourseSection
                  courses={availableCourses}
                  onSelect={setSelectedCourse}
                  title="Available courses"
                  emptyMessage="No available courses match your search."
                />
                
              </div>
            ) : (
              <CourseSection
                courses={completedCourses}
                onSelect={setSelectedCourse}
                title="Completed courses"
                emptyMessage="No completed courses match your search."
              />
            )}
          </section>
        </div>

        <Dialog
          onOpenChange={(open) => {
            if (!open) setSelectedCourse(null);
          }}
          open={selectedCourse !== null}
        >
          <DialogContent
            aria-describedby="course-modal-description"
            className="max-h-[92svh] w-[min(92vw,860px)] max-w-none overflow-y-auto rounded-2xl border border-sky-300/30 bg-[#091422] p-0 text-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:max-w-none"
            showCloseButton={false}
          >
            {selectedCourse && (
              <>
                <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                    Course details
                  </span>
                  <DialogClose
                    aria-label="Close course details"
                    className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    <X aria-hidden="true" className="size-4" />
                  </DialogClose>
                </div>

                <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="relative flex aspect-[4/3] min-h-[190px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#12324b] via-[#101f34] to-[#1c2035]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:30px_30px]" />
                    <div className="absolute -right-10 -top-16 size-56 rounded-full border border-sky-200/10" />
                    <div className="absolute -bottom-24 -left-10 size-56 rounded-full border border-orange-200/10" />
                    <span className="relative flex size-16 items-center justify-center rounded-2xl border border-sky-200/20 bg-[#07111f]/60 text-sky-200 shadow-[0_0_40px_rgba(56,189,248,0.13)]">
                      <Play aria-hidden="true" className="ml-1 size-7" />
                    </span>
                    <span className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-[#07111f]/75 px-2 py-1 text-[9px] text-slate-300">
                      Course preview
                    </span>
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="rounded-full border border-sky-300/15 bg-sky-300/[0.06] px-2.5 py-1 text-[9px] text-sky-200">
                      {selectedCourse.category}
                    </span>
                    <DialogTitle className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                      {selectedCourse.title}
                    </DialogTitle>
                    <DialogDescription
                      className="mt-3 text-xs leading-5 text-slate-400"
                      id="course-modal-description"
                    >
                      {selectedCourse.description}
                    </DialogDescription>
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 aria-hidden="true" className="size-3.5" />
                        {selectedCourse.duration}
                      </span>
                      <span>{selectedCourse.instructor}</span>
                    </div>
                    <Button
                      className="mt-5 h-10 rounded-lg bg-sky-300 px-5 text-xs font-semibold text-[#07111f] hover:bg-sky-200"
                      onClick={() => setSelectedCourse(null)}
                      type="button"
                    >
                      {selectedCourse.completed ? "Review course" : "Continue"}
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Button>
                  </div>

                  <div className="space-y-3 text-[11px] leading-5 text-slate-400 lg:col-span-2">
                    <p>
                      Explore the course at your own pace with short lessons and
                      practical activities designed to help you apply what you
                      learn.
                    </p>
                    <p>
                      Select Continue to return to your course list. Course
                      playback will be connected when learning content is
                      available.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.08] px-5 py-4 sm:px-7">
                  <div className="mb-2 flex items-center justify-between gap-3 text-[10px]">
                    <span className="text-slate-400">
                      {selectedCourse.lessons}
                    </span>
                    <span className="font-semibold text-sky-100">
                      {selectedCourse.progress}%
                    </span>
                  </div>
                  <div
                    aria-label={`Course ${selectedCourse.progress}% complete`}
                    className="h-2 overflow-hidden rounded-full border border-white/15 bg-[#07111f]"
                    role="img"
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
                      style={{ width: `${selectedCourse.progress}%` }}
                    />
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </AppShell>
  );
}

function CourseSection({
  title,
  courses,
  onSelect,
  emptyMessage,
}: {
  title: string;
  courses: Course[];
  onSelect: (course: Course) => void;
  emptyMessage: string;
}) {
  return (
    <section aria-label={title}>
      <h2 className="mb-3 text-sm font-medium text-slate-300">{title}</h2>
      {courses.length === 0 ? (
        <p className="rounded-xl border border-dashed border-white/10 px-4 py-8 text-center text-xs text-slate-500">
          {emptyMessage}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard course={course} key={course.id} onSelect={onSelect} />
          ))}
        </div>
      )}
    </section>
  );
}
