import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Statistics from "@/components/home/Statistics";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <FAQ />
      <CTA />
      {/* <Container>
        <div className="py-24">
          <SectionTitle
            title="SkillBridge AI"
            subtitle="Hire Smarter. Grow Faster."
          />

          <div className="flex justify-center">
            <Button>
              Explore Developers
            </Button>
          </div>
        </div>
      </Container> */}
    </main>
  );
}