"use client";

import type { ReactNode } from "react";

import { useAppearance } from "@/components/appearance-provider";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function AppShell({
  title,
  dark = false,
  children,
}: {
  title: string;
  dark?: boolean;
  children: ReactNode;
}) {
  const { appearance } = useAppearance();
  const isDark = appearance === "dark";

  return (
    <SidebarProvider
      className={
        dark
          ? `${isDark ? "dark " : ""}learning-shell ${isDark ? "bg-[#091422]" : ""}`
          : undefined
      }
      data-appearance={dark ? appearance : undefined}
    >
      <AppSidebar />
      <SidebarInset
        className={
          dark
            ? isDark
              ? "m-0 min-h-svh rounded-none bg-[#07111f] text-white shadow-none md:m-2 md:rounded-2xl"
              : "m-0 min-h-svh rounded-none bg-slate-50 text-slate-900 shadow-none md:m-2 md:rounded-2xl"
            : undefined
        }
      >
        <header
          className={`flex h-16 shrink-0 items-center gap-2 border-b backdrop-blur-sm ${
            dark
              ? isDark
                ? "border-white/[0.08] bg-[#0b1728]/85 text-slate-300"
                : "border-slate-200 bg-white/85 text-slate-600"
              : "border-slate-200 bg-white/80"
          }`}
        >
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger
              className={`-ml-1 ${
                dark && isDark
                  ? "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  : ""
              }`}
            />
            <Separator
              orientation="vertical"
              className={`mr-2 data-vertical:h-4 data-vertical:self-auto ${
                dark && isDark ? "bg-white/10" : ""
              }`}
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink
                    className={
                      dark && isDark
                        ? "text-slate-400 hover:text-white"
                        : ""
                    }
                    href="/dashboard"
                  >
                    Innodata
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className={dark && isDark ? "text-slate-200" : ""}>
                    {title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
