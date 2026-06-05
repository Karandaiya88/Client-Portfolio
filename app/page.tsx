"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CareerSection from "@/components/CareerSection";
import MetricsSection from "@/components/MetricsSection";
import NetworkSection from "@/components/NetworkSection";
import StrategySection from "@/components/StrategySection";
import LeadershipSection from "@/components/LeadershipSection";
import AwardsSection from "@/components/AwardsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCards3D from "@/components/FloatingCards3D";

const ParticlesBg = dynamic(() => import("@/components/ParticlesBg"), { ssr: false });

const Divider = () => (
  <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
    <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(26,86,219,0.25), rgba(201,168,76,0.2), transparent)" }} />
  </div>
);

export default function Home() {
  return (
    <main style={{ background: "#080f1e", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      <ParticlesBg />
      <FloatingCards3D />
      <Navbar />

      {/* Subtle bg gradient */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, background: "radial-gradient(ellipse at 20% 50%,rgba(26,86,219,0.04) 0%,transparent 60%),radial-gradient(ellipse at 80% 20%,rgba(201,168,76,0.03) 0%,transparent 50%)" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <Divider />
        <CareerSection />
        <Divider />
        <MetricsSection />
        <Divider />
        <NetworkSection />
        <Divider />
        <StrategySection />
        <Divider />
        <LeadershipSection />
        <Divider />
        <AwardsSection />
        <Divider />
        <EducationSection />
        <Divider />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}