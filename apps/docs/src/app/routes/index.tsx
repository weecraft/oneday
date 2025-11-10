import { HeroSection } from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Oneday - Beautifully crafted ui blocks for building websites",
      description:
        "A beautiful and serious making ui component & blocks for startups and enterprises to building scalable websites",
    }),
  }),
  component: Page,
});

function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}
