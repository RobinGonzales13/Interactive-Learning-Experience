import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-100 px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Home
      </h1>

      <Button size="lg" render={<Link href="/dashboard" />}>
        Login
      </Button>
    </main>
  );
}
