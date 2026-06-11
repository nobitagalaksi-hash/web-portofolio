import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { ContactSection } from "../components/ContactSection";
import { CosmicBackground } from "../components/CosmicBackground";
import { Toaster } from "../components/ui/sonner";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      <CosmicBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 bg-card/30 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2026 ARYA PUTRA RAHMAN DHIKA. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
