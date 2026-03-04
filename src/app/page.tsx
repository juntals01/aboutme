import {
  HeroSection,
  MVPSpeedSection,
  ProductsSection,
  AIWorkflowSection,
  HIPAASection,
  CoreStackSection,
  ExperienceSection,
  FinalCTASection,
} from '@/components/sections';
import { SectionReveal } from '@/components/sections/SectionReveal';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionReveal>
        <MVPSpeedSection />
      </SectionReveal>
      <SectionReveal>
        <ProductsSection />
      </SectionReveal>
      <SectionReveal>
        <AIWorkflowSection />
      </SectionReveal>
      <SectionReveal>
        <HIPAASection />
      </SectionReveal>
      <SectionReveal>
        <CoreStackSection />
      </SectionReveal>
      <SectionReveal>
        <ExperienceSection />
      </SectionReveal>
      <SectionReveal>
        <FinalCTASection />
      </SectionReveal>
    </>
  );
}
