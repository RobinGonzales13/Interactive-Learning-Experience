"use client";

import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";

type NavigationLink = {
  title: string;
  url: string;
  isActive?: boolean;
};

type NavigationItem = {
  title: string;
  url?: string;
  icon: React.ReactNode;
  items?: NavigationLink[];
  isActive?: boolean;
};

type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

export function NavMain({ groups }: { groups: NavigationGroup[] }) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((group) => (
        <SidebarGroup className="py-0" key={group.title}>
          <SidebarGroupLabel className="h-7 px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-300">
            {group.title}
          </SidebarGroupLabel>
          <SidebarMenu className="gap-0.5">
            {group.items.map((item) => {
              const hasActiveChild = item.items?.some(
                (subItem) => subItem.isActive,
              );

              if (item.items?.length) {
                return (
                  <Collapsible
                    defaultOpen={hasActiveChild}
                    key={item.title}
                    render={
                      <SidebarMenuItem className="group/collapsible" />
                    }
                  >
                    <CollapsibleTrigger
                      render={
                        <SidebarMenuButton
                          className="h-9 text-[13px] font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white data-popup-open:bg-white/[0.06] data-popup-open:text-white"
                          tooltip={item.title}
                        />
                      }
                    >
                      {item.icon}
                      <span>{item.title}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className="ml-auto size-3.5 transition-transform group-data-[open]/collapsible:rotate-180"
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="ml-4 mt-0.5 gap-0.5 border-sidebar-border/70">
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              className="h-8 text-xs text-slate-400 hover:bg-white/[0.05] hover:text-white"
                              isActive={subItem.isActive}
                              render={<Link href={subItem.url} />}
                            >
                              <span>{subItem.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                );
              }

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="h-9 text-[13px] font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    isActive={item.isActive}
                    render={<Link href={item.url ?? "#"} />}
                    tooltip={item.title}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </div>
  );
}
