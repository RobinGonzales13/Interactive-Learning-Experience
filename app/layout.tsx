import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppearanceProvider } from "@/components/appearance-provider";
import { SessionGate } from "@/components/session-gate";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interactive Learning Experience",
  description: "Modern learning platform for teams and growing organizations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inter.className} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <AppearanceProvider>
          <TooltipProvider>
            <SessionGate>{children}</SessionGate>
          </TooltipProvider>
        </AppearanceProvider>
      </body>
    </html>
  );
}
