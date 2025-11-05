import {
  contactLinks,
  courseworkGroups,
  experiences,
  heroIntroText,
  skillCardGradients,
  skillGroups,
  whoAmIHighlights,
  whoAmIIntro,
  whoAmITimeline,
} from "@/data/personal";
import { HeroSection } from "@/app/_components/hero-section";
import { ExperienceSection } from "@/app/_components/experience-section";
import { SkillsSection } from "@/app/_components/skills-section";
import { CourseworkSection } from "@/app/_components/coursework-section";
import { WhoAmISection } from "@/app/_components/who-am-i-section";

export default function HomePage() {
  return (
    <main className="relative mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 md:py-24">
      <HeroSection introText={heroIntroText} contactLinks={contactLinks} />
      <ExperienceSection experiences={experiences} />
      <SkillsSection groups={skillGroups} gradients={skillCardGradients} />
      <CourseworkSection
        groups={courseworkGroups}
        gradients={skillCardGradients}
      />
      <WhoAmISection
        intro={whoAmIIntro}
        timeline={whoAmITimeline}
        highlights={whoAmIHighlights}
      />
    </main>
  );
}
