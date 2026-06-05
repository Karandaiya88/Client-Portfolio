"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "tsparticles-engine";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, value_area: 900 } },
          color: { value: ["#1a56db", "#c9a84c", "#3b82f6"] },
          shape: { type: "circle" },
          opacity: { value: 0.25, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.05 } },
          size: { value: 2.5, random: true },
          links: {
            enable: true,
            distance: 140,
            color: "#1a56db",
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.35 } },
            push: { quantity: 3 },
          },
        },
        detectRetina: true,
        background: { color: "transparent" },
      }}
    />
  );
}
