"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { num: 6, suffix: "+", label: "Years in Sales" },
  { num: 112, suffix: "%", label: "Avg Achievement" },
  { num: 85, suffix: "+", label: "Dealers Built" },
  { num: 3, suffix: "", label: "Companies" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const step = target / (2000 / 16);
      const interval = setInterval(() => {
        start += step;
        if (start >= target) { setVal(target); clearInterval(interval); }
        else setVal(Math.floor(start));
      }, 16);
      return () => clearInterval(interval);
    }, 1800);
    return () => clearTimeout(timer);
  }, [target]);
  return <>{val}{suffix}</>;
}

const tags = [
  "Building Materials","Channel Sales","FMCG / Paints",
  "Financial Services","Dealer Network","Team Leadership","M.Com – JNVU"
];

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px", paddingBottom: "60px" }}
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(26,86,219,0.15),transparent 70%)", filter: "blur(60px)", animation: "floatY 8s ease-in-out infinite" }} />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(201,168,76,0.1),transparent 70%)", filter: "blur(60px)", animation: "floatY 11s ease-in-out infinite reverse" }} />

      {/* Rotating rings */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{ transform: "translate(-50%,-50%)", width: "700px", height: "700px", borderRadius: "50%", border: "1px dashed rgba(201,168,76,0.15)", animation: "rotateSlow 25s linear infinite" }} />
      <div className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{ transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", border: "1px dashed rgba(26,86,219,0.15)", animation: "rotateSlow 18s linear infinite reverse" }} />

      <div className="section-wrap relative z-10 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
            className="relative mb-7 float-anim"
            style={{ width: "140px", height: "140px" }}
          >
            {/* Pulse rings */}
            {[1, 2].map(i => (
              <div key={i} className="absolute rounded-full" style={{
                inset: `-${i * 10}px`, border: "1px solid rgba(26,86,219,0.25)",
                borderRadius: "50%", animation: `pulse-ring ${1.8 * i}s ease-out ${i * 0.5}s infinite`
              }} />
            ))}

            {/* Photo container */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden z-10"
              style={{
                border: "3px solid rgba(201,168,76,0.5)",
                boxShadow: "0 0 40px rgba(26,86,219,0.4), 0 0 80px rgba(201,168,76,0.15)"
              }}
            >
              {!imgError ? (
                <Image
                  src="/sanjay.jpg"
                  alt="Sanjay Panwar"
                  fill
                  sizes="140px"
                  priority
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Fallback avatar if image fails */
                <div
                  className="w-full h-full flex items-center justify-center text-3xl font-bold"
                  style={{ background: "linear-gradient(135deg,#0d1932 0%,#1a56db 50%,#c9a84c 100%)", color: "#fff" }}
                >
                  SP
                </div>
              )}
            </div>

            {/* Online dot */}
            <div
              className="absolute z-20 w-5 h-5 bg-green-400 rounded-full"
              style={{ bottom: "6px", right: "6px", border: "3px solid #080f1e", boxShadow: "0 0 10px rgba(34,197,94,0.6)" }}
            >
              <div className="w-full h-full rounded-full bg-green-400"
                style={{ animation: "pulse-ring 2s ease-out infinite" }} />
            </div>
          </motion.div>

          {/* Promo badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.35)", color: "#f0c96b", padding: "6px 16px" }}
          >
            <span>🚀</span> Promoted to ASM · Saint-Gobain · May 2024
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "12px" }}
          >
            <span className="text-white">Sanjay </span>
            <span className="gold-text">Panwar</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ fontSize: "16px", color: "#94a3b8", marginBottom: "24px", fontWeight: 300 }}
          >
            Assistant Sales Manager &nbsp;·&nbsp; Saint-Gobain &nbsp;·&nbsp; Western Rajasthan &nbsp;·&nbsp; 6+ Years in Sales
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.85 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "36px" }}
          >
            {tags.map((t) => (
              <motion.span key={t} whileHover={{ scale: 1.07, y: -2 }}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#cbd5e1", fontSize: "12px", padding: "5px 14px", borderRadius: "20px", fontWeight: 500 }}>
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", width: "100%", maxWidth: "600px", marginBottom: "32px" }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} whileHover={{ scale: 1.06, y: -4 }}
                className="glass rounded-2xl text-center"
                style={{ padding: "16px 8px" }}>
                <p className="gold-text" style={{ fontSize: "28px", fontWeight: 700, lineHeight: 1 }}>
                  <CountUp target={s.num} suffix={s.suffix} />
                </p>
                <p style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
          >
            <motion.a href="#career" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              style={{ background: "linear-gradient(135deg,#1a56db,#3b82f6)", color: "#fff", padding: "12px 28px", borderRadius: "50px", fontWeight: 600, fontSize: "14px", textDecoration: "none", boxShadow: "0 0 30px rgba(26,86,219,0.4)", display: "inline-block" }}>
              View Career Journey →
            </motion.a>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.4)", color: "#f0c96b", padding: "12px 28px", borderRadius: "50px", fontWeight: 600, fontSize: "14px", textDecoration: "none", display: "inline-block" }}>
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
            style={{ marginTop: "48px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
          >
            <p style={{ fontSize: "11px", color: "#475569" }}>Scroll to explore</p>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: "20px", height: "32px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "6px" }}>
              <div style={{ width: "4px", height: "8px", borderRadius: "2px", background: "#3b82f6" }} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}