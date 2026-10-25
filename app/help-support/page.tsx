import { AppShell } from "@/components/app-shell";
import { HelpSupportContent } from "@/components/help-support-content";

export const metadata = { title: "Help & Support" };

export default function HelpSupportPage() {
  return (
    <AppShell title="Help & Support" dark>
      <HelpSupportContent />
    </AppShell>
  );
}
