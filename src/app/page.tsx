import NavBar from "@/app/components/NavBar";
import HeroSection from "@/app/sections/HeroSection";
import AboutSection from "@/app/sections/AboutSection";
import ProfileSection from "@/app/sections/ProfileSection";
import TechStacksSection from "@/app/sections/TechStacksSection";
import WorkSection from "@/app/sections/WorkSection";
import ContactSection from "@/app/sections/ContactSection";
import JourneySection from "@/app/sections/JourneySection";
import NowSection from "@/app/sections/NowSection";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="h-[100dvh] overflow-y-scroll overscroll-contain snap-y snap-mandatory scroll-smooth bg-[#070908] text-white">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(163,230,53,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.08),transparent_25%),linear-gradient(180deg,#0a0d0b_0%,#070908_45%,#020302_100%)]" />

        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProfileSection />
          <TechStacksSection />
          <WorkSection />
          <JourneySection />
          <NowSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}