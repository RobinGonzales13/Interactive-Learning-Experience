import { FolderOpen } from "lucide-react";
import { DevelopmentPage } from "@/components/development-page";

export const metadata = { title: "Catalog" };

export const instant = false;

export default function CatalogPage() {
  return (
    <DevelopmentPage
      title="Catalog"
      description="We’re curating a learning library to help you discover your next course and build new skills."
      icon={FolderOpen}
    />
  );
}
