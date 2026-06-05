"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const strategies = [
  { icon: "🎯", title: "Trade Schemes & Incentives", desc: "Festival-linked discount slabs & volume-based cashback programs. Increased average order sizes by 28% during peak seasons.", pill: "↑ 28% Order Size", pillBg: "rgba(26,86,219,0.15)", pillColor: "#3b82f6", glow: "rgba(26,86,219,0.15)" },
  { icon: "👁️", title: "Merchandising & POSM", desc: "Strategic in-store branding & POSM placement at dealer counters across territory. Increased brand recall by 40%.", pill: "↑ 40% Brand Recall", pillBg: "rgba(4,120,87,0.15)", pillColor: "#22c55e", glow: "rgba(4,120,87,0.15)" },
  { icon: "🏗️", title: "Project & Influencer Sales", desc: "Mapped 50+ architects, builders & contractors. Converted 18 large construction projects to company specifications in FY2024.", pill: "18 Project Wins", pillBg: "rgba(124,58,237,0.15)", pillColor: "#a78bfa", glow: "rgba(124,58,237,0.15)" },
  { icon: "📦", title: "Stock & Supply Chain", desc: "Managed distributor inventory rotation cycles. Reduced dead stock by 35% through data-driven ordering pattern management.", pill: "↓ 35% Dead Stock", pillBg: "rgba(220,38,38,0.12)", pillColor: "#f87171", glow: "rgba(220,38,38,0.1)" },
  { icon: "📣", title: "Local Market Campaigns", desc: "Contractor meets, site visits & festival-season sales drives. 3–4 BTL activations per quarter generating 15–20% additional revenue.", pill: "+15–20% Revenue", pillBg: "rgba(245,158,11,0.15)", pillColor: "#fbbf24", glow: "rgba(245,158,11,0.1)" },
  { icon: "📈", title: "Market Share Expansion", desc: "Identified competitor service gaps, repositioned on delivery speed & credit terms — gaining 12% additional market share.", pill: "+12% Market Share", pillBg: "rgba(26,86,219,0.15)", pillColor: "#3b82f6", glow: "rgba(26,86,219,0.15)" },
];

const skills = [
  { label: "Channel & Dealer Sales", pct: 92, color: "#1a56db" },
  { label: "Distributor Management", pct: 88, color: "#047857" },
  { label: "Team Leadership (ASM)", pct: 85, color: "#7c3aed" },
  { label: "Territory Management", pct: 90, color: "#0369a1" },
  { label: "B2C Client Acquisition", pct: 82, color: "#b45309" },
  { label: "BTL Activation & Campaigns", pct: 86, color: "#dc2626" },
];

export default function StrategySection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="strategy" style={{ padding: "80px 0" }}>
      <div className="section-wrap">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#c9a84c", marginBottom: "10px" }}>APPROACH</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff" }}>
            Sales Strategy & <span className="gold-text">BTL Activation</span>
          </h2>
        </motion.div>

        {/* Strategy Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "16px", marginBottom: "48px" }}>
          {strategies.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: `0 20px 50px ${s.glow}` }}
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "22px", cursor: "default", transition: "all 0.3s" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "14px" }}>{s.desc}</p>
              <span style={{ fontSize: "11px", fontWeight: 600, padding: "4px 12px", borderRadius: "6px", background: s.pillBg, color: s.pillColor }}>{s.pill}</span>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "32px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "#c9a84c", marginBottom: "24px" }}>
            CORE COMPETENCIES — BUILT ACROSS ALL ROLES
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px" }}>
            {skills.map((s, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>{s.label}</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: s.color }}>{s.pct}%</span>
                </div>
                <div style={{ height: "6px", borderRadius: "6px", background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: i * 0.1, ease: "easeOut" }}
                    style={{ height: "100%", borderRadius: "6px", background: `linear-gradient(90deg,${s.color},${s.color}70)` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}