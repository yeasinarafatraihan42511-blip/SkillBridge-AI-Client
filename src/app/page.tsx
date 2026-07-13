import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <main>
      <Container>
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
      </Container>
    </main>
  );
}