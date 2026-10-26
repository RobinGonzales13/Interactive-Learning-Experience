import { ClipboardCheck } from "lucide-react";
import { DevelopmentPage } from "@/components/development-page";

export const metadata = { title: "Quiz Center" };

export const instant = false;

export default function QuizCenterPage() {
  return (
    <DevelopmentPage
      title="Quiz Center"
      description="A dedicated space for knowledge checks and interactive quizzes is on the way."
      icon={ClipboardCheck}
    />
  );
}
