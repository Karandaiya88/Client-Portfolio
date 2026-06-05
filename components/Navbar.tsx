"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About","Career","Metrics","Network","Strategy","Awards","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(8,15,30,0.95)" : "rgba(8,15,30,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: scrolled ? "10px 32px" : "14px 32px",
        transition: "all 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

      {/* Logo */}
      <motion.div whileHover={{ scale: 1.02 }} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg,#1a56db,#c9a84c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "#fff", flexShrink: 0 }}>
          SP
        </div>
        <div>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: "14px", lineHeight: 1 }}>Sanjay Panwar</p>
          <p style={{ color: "#c9a84c", fontSize: "11px", marginTop: "2px" }}>Assistant Sales Manager</p>
        </div>
      </motion.div>

      {/* Desktop links */}
      <div className="hidden md:flex" style={{ alignItems: "center", gap: "28px" }}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ fontSize: "12px", fontWeight: 500, color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
            {l}
          </a>
        ))}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          style={{ background: "linear-gradient(135deg,#1a56db,#3b82f6)", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "6px 14px", borderRadius: "20px", cursor: "pointer" }}>
          Open to Opportunities
        </motion.div>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
        <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ height: "2px", background: "#fff", borderRadius: "1px", transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)") : "none",
              opacity: menuOpen && i === 1 ? 0 : 1 }} />
          ))}
        </div>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
            style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(8,15,30,0.98)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 24px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}