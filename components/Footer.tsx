"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      style={{ background: "rgba(5,10,20,0.9)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 32px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg,#1a56db,#c9a84c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "#fff" }}>
            SP
          </div>
          <div>
            <p style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>Sanjay Panwar</p>
            <p style={{ fontSize: "11px", color: "#475569" }}>Asst. Sales Manager · Saint-Gobain · Western Rajasthan</p>
          </div>
        </div>
        <p style={{ fontSize: "11px", color: "#334155", textAlign: "center" }}>
          © 2025 Sanjay Panwar · Sales Professional Portfolio · Jodhpur, Rajasthan
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="tel:+917791871221" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>
            📞 Call
          </a>
          <a href="mailto:sanjaypanwar0911@gmail.com" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>
            ✉️ Email
          </a>
        </div>
      </div>
    </motion.footer>
  );
}