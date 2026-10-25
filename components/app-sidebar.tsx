"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Brain,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  CircleHelp,
  ClipboardCheck,
  FolderOpen,
  LayoutDashboard,
  UserRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type NavigationGroups = Parameters<typeof NavMain>[0]["groups"];

const user = {
  name: "Alex Morgan",
  email: "Learning profile",
  avatar: "",
};

const navigationGroups: NavigationGroups = [
  {
    title: "Learning Path",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "My courses",
        url: "/my-courses",
        icon: <BookOpen />,
      },
      {
        title: "Catalog",
        url: "/catalog",
        icon: <FolderOpen />,
      },
      {
        title: "Quiz Center",
        url: "/quiz-center",
        icon: <ClipboardCheck />,
      },
    ],
  },
  {
    title: "Performance",
    items: [
      {
        title: "My Profile",
        url: "/profile",
        icon: <UserRound />,
      },
      {
        title: "My Progress",
        icon: <ChartNoAxesColumnIncreasing />,
        items: [
          { title: "Overview", url: "/my-progress/overview" },
          { title: "Courses", url: "/my-progress/courses" },
          { title: "Certificates", url: "/my-progress/certificates" },
          { title: "Timeline", url: "/my-progress/timeline" },
        ],
      },
      {
        title: "Skills Assessment",
        url: "/skills-assessment",
        icon: <Brain />,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Schedule & Calendar",
        url: "/schedule-calendar",
        icon: <CalendarDays />,
      },
      {
        title: "Help & Support",
        url: "/help-support",
        icon: <CircleHelp />,
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const groups = navigationGroups.map((group) => ({
    ...group,
    items: group.items.map((item) => ({
      ...item,
      isActive: item.url === pathname,
      items: item.items?.map((subItem) => ({
        ...subItem,
        isActive: subItem.url === pathname,
      })),
    })),
  }));

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/dashboard" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-400/10 text-sky-300">
                <Image
                  alt=""
                  className="size-6 object-contain"
                  height={202}
                  src="/innodata-logomark.png"
                  width={202}
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Innodata</span>
                <span className="truncate text-xs text-sidebar-foreground/60">
                  ILE
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-0 overflow-y-auto">
        <NavMain groups={groups} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
