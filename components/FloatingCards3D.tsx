"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cards = [
  { label: "ASM", sub: "Saint-Gobain", color: "#1a56db", x: "3%", y: "25%", delay: 0 },
  { label: "112%", sub: "Avg Achievement", color: "#c9a84c", x: "80%", y: "18%", delay: 0.4 },
  { label: "85+", sub: "Dealers Built", color: "#047857", x: "82%", y: "65%", delay: 0.8 },
  { label: "6 Yrs", sub: "Sales Career", color: "#7c3aed", x: "1%", y: "68%", delay: 1.1 },
];

export default function FloatingCards3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <>
      {cards.map((c, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.9, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: c.delay + 1.8, duration: 0.5 },
            scale: { delay: c.delay + 1.8, duration: 0.5 },
            y: { delay: c.delay + 1.8, duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="hidden xl:flex"
          style={{
            position: "fixed", left: c.x, top: c.y,
            flexDirection: "column", alignItems: "center", justifyContent: "center",
            background: "rgba(8,15,30,0.75)",
            border: `1px solid ${c.color}35`,
            backdropFilter: "blur(14px)",
            boxShadow: `0 8px 32px ${c.color}20`,
            borderRadius: "14px",
            padding: "12px 18px",
            textAlign: "center",
            minWidth: "90px",
            zIndex: 5,
            pointerEvents: "none",
          }}>
          <span style={{ fontSize: "17px", fontWeight: 700, color: c.color, lineHeight: 1 }}>{c.label}</span>
          <span style={{ fontSize: "10px", color: "#64748b", marginTop: "3px" }}>{c.sub}</span>
        </motion.div>
      ))}
    </>
  );
}