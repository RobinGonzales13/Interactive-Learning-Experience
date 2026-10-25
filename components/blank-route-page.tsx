import { AppShell } from "@/components/app-shell";

export function BlankRoutePage({ title }: { title: string }) {
  return (
    <AppShell title={title} dark>
      <main
        aria-label={`${title} page`}
        className="flex-1 bg-[#07111f]"
      />
    </AppShell>
  );
}
