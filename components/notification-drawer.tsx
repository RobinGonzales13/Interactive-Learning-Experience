"use client";

import { useState } from "react";
import { Bell, CheckCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
};

const initialGroups: { label: string; notifications: Notification[] }[] = [
  {
    label: "Today",
    notifications: [
      {
        id: "course-reminder",
        title: "Course reminder",
        message: "Continue Root Cause Analysis where you left off.",
        time: "10:24 AM",
        read: false,
      },
      {
        id: "new-course",
        title: "New course available",
        message: "Data Essentials has been added to your learning path.",
        time: "9:10 AM",
        read: false,
      },
    ],
  },
  {
    label: "Yesterday",
    notifications: [
      {
        id: "weekly-summary",
        title: "Your learning week",
        message: "You made progress on 2 courses this week.",
        time: "4:45 PM",
        read: true,
      },
    ],
  },
  {
    label: "December 02, 2025",
    notifications: [
      {
        id: "security-course",
        title: "Course completed",
        message: "Cyber Security Awareness is now complete.",
        time: "2:30 PM",
        read: true,
      },
      {
        id: "certificate",
        title: "Certificate earned",
        message: "Your course certificate is ready to view.",
        time: "2:31 PM",
        read: true,
      },
      {
        id: "learning-plan",
        title: "Learning plan updated",
        message: "Your recommended learning plan has been refreshed.",
        time: "11:02 AM",
        read: true,
      },
      {
        id: "quiz-result",
        title: "Quiz result",
        message: "Your latest knowledge check results are available.",
        time: "9:18 AM",
        read: true,
      },
    ],
  },
];

export function NotificationDrawer() {
  const [groups, setGroups] = useState(initialGroups);
  const unreadCount = groups.reduce(
    (total, group) =>
      total + group.notifications.filter((notification) => !notification.read).length,
    0,
  );

  function markAllAsRead() {
    setGroups((currentGroups) =>
      currentGroups.map((group) => ({
        ...group,
        notifications: group.notifications.map((notification) => ({
          ...notification,
          read: true,
        })),
      })),
    );
  }

  function markAsRead(notificationId: string) {
    setGroups((currentGroups) =>
      currentGroups.map((group) => ({
        ...group,
        notifications: group.notifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, read: true }
            : notification,
        ),
      })),
    );
  }

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={
          <Button
            aria-label={`Notifications, ${unreadCount} unread`}
            className="relative size-10 rounded-xl border border-white/10 bg-[#0b1728]/80 text-slate-300 hover:border-sky-300/25 hover:bg-sky-300/10 hover:text-white"
            size="icon"
            variant="outline"
          />
        }
      >
        <Bell aria-hidden="true" className="size-[18px]" />
        {unreadCount > 0 && (
          <span
            aria-hidden="true"
            className="absolute -right-1 -top-1 flex size-[18px] items-center justify-center rounded-full border-2 border-[#07111f] bg-orange-400 text-[9px] font-bold text-[#20140c]"
          >
            {unreadCount}
          </span>
        )}
      </DrawerTrigger>
      <DrawerContent className="data-[swipe-axis=x]:w-[min(88vw,24rem)] border-l border-emerald-400/25 bg-[#091422] text-slate-100 shadow-[-24px_0_80px_rgba(0,0,0,0.35)]">
        <DrawerHeader className="flex shrink-0 flex-row items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-5">
          <div>
            <DrawerTitle className="text-base font-semibold text-white">
              Notifications
            </DrawerTitle>
            <DrawerDescription className="mt-1 text-[10px] text-slate-500">
              Updates from your learning space
            </DrawerDescription>
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <>
                <span
                  aria-label={`${unreadCount} unread notifications`}
                  className="flex size-8 items-center justify-center rounded-lg border border-rose-300/30 bg-rose-400/15 text-xs font-semibold text-rose-200"
                >
                  {unreadCount}
                </span>
                <Button
                  aria-label="Mark all notifications as read"
                  className="size-8 border-white/10 text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  onClick={markAllAsRead}
                  size="icon"
                  title="Mark all as read"
                  variant="outline"
                >
                  <CheckCheck aria-hidden="true" className="size-4" />
                </Button>
              </>
            )}
            <DrawerClose
              aria-label="Close notifications"
              className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
            >
              <X aria-hidden="true" className="size-4" />
            </DrawerClose>
          </div>
        </DrawerHeader>

        <div
          aria-label="Notification list"
          className="min-h-0 flex-1 space-y-6 overflow-y-auto px-4 py-5"
        >
          {groups.map((group) => (
            <section aria-label={group.label} key={group.label}>
              <h2 className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                {group.label}
              </h2>
              <ul className="space-y-2">
                {group.notifications.map((notification) => (
                  <li key={notification.id}>
                    <button
                      aria-label={`${notification.read ? "Read" : "Unread"} notification: ${notification.title}`}
                      className={`w-full rounded-xl border px-3.5 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60 ${
                        notification.read
                          ? "border-white/[0.12] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                          : "border-emerald-400/35 bg-emerald-400/[0.035] hover:border-emerald-300/55 hover:bg-emerald-300/[0.07]"
                      }`}
                      onClick={() => markAsRead(notification.id)}
                      type="button"
                    >
                      <span className="flex items-start justify-between gap-3">
                        <span className="min-w-0">
                          <span className="flex items-center gap-2 text-xs font-medium text-slate-100">
                            {!notification.read && (
                              <span
                                aria-hidden="true"
                                className="size-1.5 shrink-0 rounded-full bg-emerald-300"
                              />
                            )}
                            {notification.title}
                          </span>
                          <span className="mt-1.5 block text-[10px] leading-4 text-slate-400">
                            {notification.message}
                          </span>
                        </span>
                        <span className="shrink-0 pt-0.5 text-[9px] text-slate-500">
                          {notification.time}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="shrink-0 border-t border-white/[0.08] px-5 py-3 text-center text-[9px] text-slate-600">
          Notification examples
        </p>
      </DrawerContent>
    </Drawer>
  );
}
