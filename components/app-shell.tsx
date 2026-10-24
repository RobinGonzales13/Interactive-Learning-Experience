import type { ReactNode } from "react";

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
  return (
    <SidebarProvider
      className={dark ? "dark learning-shell bg-[#091422]" : undefined}
    >
      <AppSidebar />
      <SidebarInset
        className={
          dark
            ? "m-0 min-h-svh rounded-none bg-[#07111f] text-white shadow-none md:m-2 md:rounded-2xl"
            : undefined
        }
      >
        <header
          className={`flex h-16 shrink-0 items-center gap-2 border-b backdrop-blur-sm ${
            dark
              ? "border-white/[0.08] bg-[#0b1728]/85 text-slate-300"
              : "border-slate-200 bg-white/80"
          }`}
        >
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger
              className={`-ml-1 ${
                dark
                  ? "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  : ""
              }`}
            />
            <Separator
              orientation="vertical"
              className={`mr-2 data-vertical:h-4 data-vertical:self-auto ${
                dark ? "bg-white/10" : ""
              }`}
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink
                    className={dark ? "text-slate-400 hover:text-white" : ""}
                    href="/dashboard"
                  >
                    Innodata
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage
                    className={dark ? "text-slate-200" : ""}
                  >
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
