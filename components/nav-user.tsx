"use client"

import { useRouter } from "next/navigation";
import { useAppearance } from "@/components/appearance-provider";
import { endDemoSession } from "@/lib/demo-auth";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const router = useRouter();
  const { isMobile } = useSidebar();
  const { appearance, toggleAppearance } = useAppearance();
  const isDark = appearance === "dark";
  const signOut = () => {
    try {
      endDemoSession();
      router.replace("/login");
    } catch {
      window.alert("Unable to sign out. Please close this tab and try again.");
    }
  };
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="lg" className="aria-expanded:bg-muted" />
            }
          >
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <ChevronsUpDownIcon className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                <BadgeCheckIcon />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <div className="flex items-center justify-between gap-3 px-2 py-2">
              <span className="flex items-center gap-2 text-sm font-medium">
                {isDark ? (
                  <MoonIcon className="size-4" />
                ) : (
                  <SunIcon className="size-4" />
                )}
                {isDark ? "Dark Mode" : "Light Mode"}
              </span>
              <button
                type="button"
                role="switch"
                aria-label="Appearance"
                aria-checked={isDark}
                onClick={toggleAppearance}
                className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span
                  className={`size-4 rounded-full bg-foreground shadow-sm transition-transform ${
                    isDark ? "translate-x-[22px]" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOut}>
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
