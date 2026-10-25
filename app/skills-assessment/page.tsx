import { Brain } from "lucide-react";
import { DevelopmentPage } from "@/components/development-page";

export const metadata = { title: "Skills Assessment" };

export default function SkillsAssessmentPage() {
  return (
    <DevelopmentPage
      title="Skills Assessment"
      description="We’re building tools to help you understand your strengths and plan what to learn next."
      icon={Brain}
    />
  );
}
