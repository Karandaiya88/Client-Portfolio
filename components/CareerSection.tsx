"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const career = [
  {
    company: "Saint-Gobain", role: "Assistant Sales Manager",
    period: "May 2024 – Present", type: "Current · Promoted",
    color: "#1a56db", bg: "rgba(26,86,219,0.07)", border: "rgba(26,86,219,0.3)", badge: "🏅 Promoted Role",
    desc: "Elevated to ASM within just 2 years — recognising consistent top-tier performance. Oversees complete territory sales strategy, manages a team of TSIs & Sales Executives, drives secondary sales targets, and builds long-term stakeholder relationships with architects, builders & contractors.",
    kpis: [{ n: "120%", l: "Target Post-Promo" }, { n: "8+", l: "Team Members" }, { n: "Multi", l: "Districts" }, { n: "Top", l: "Region Rank" }],
  },
  {
    company: "Saint-Gobain", role: "Territory Sales In-Charge",
    period: "Jun 2022 – Apr 2024", type: "Building Materials",
    color: "#3b82f6", bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.25)", badge: null,
    desc: "Managed dealer appointment & full market coverage across Western Rajasthan. Led channel expansion, demand generation & project sales. Consistently ranked among top TSIs — directly leading to fast-track promotion within 2 years.",
    kpis: [{ n: "112%", l: "Avg Achievement" }, { n: "85+", l: "Dealers Added" }, { n: "38%", l: "Revenue Growth" }, { n: "18", l: "Project Wins" }],
  },
  {
    company: "Asian Paints Limited", role: "DSR – Distributor & Retail Channel",
    period: "Nov 2020 – May 2022", type: "FMCG / Paints",
    color: "#047857", bg: "rgba(4,120,87,0.07)", border: "rgba(4,120,87,0.3)", badge: null,
    desc: "Managed distributor & retail channel across Jodhpur territory. Conducted shop meets & contractor engagement sessions, ran field brand-awareness surveys & promotional campaigns. Achieved first 100%+ target milestone in FY22.",
    kpis: [{ n: "104%", l: "Target FY22" }, { n: "15%", l: "Network Growth" }, { n: "40+", l: "Shop Meets" }, { n: "2", l: "Channels" }],
  },
  {
    company: "Anand Rathi Share & Stock Broker", role: "Sales Officer",
    period: "May 2019 – Oct 2020", type: "Financial Services · First Role",
    color: "#b45309", bg: "rgba(180,83,9,0.07)", border: "rgba(180,83,9,0.3)", badge: null,
    desc: "Launched sales career in financial services. Responsible for B2C client acquisition through demat & trading account openings. Built core foundations in lead generation, cold calling, pipeline management & relationship building.",
    kpis: [{ n: "B2C", l: "Client Acquisition" }, { n: "Fin.", l: "Sector" }, { n: "Core", l: "Foundation" }],
  },
];

function Card({ item, index }: { item: typeof career[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      style={{
        background: item.bg,
        border: `1px solid ${item.border}`,
        borderLeft: `4px solid ${item.color}`,
        borderRadius: "16px",
        padding: "24px",
        boxShadow: `0 4px 30px ${item.color}15`,
        width: "100%",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 12px", borderRadius: "20px", background: `${item.color}20`, color: item.color }}>
              ● {item.type}
            </span>
            {item.badge && (
              <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 12px", borderRadius: "20px", background: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)" }}>
                {item.badge}
              </span>
            )}
          </div>
          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{item.role}</h3>
          <p style={{ fontSize: "13px", color: "#94a3b8" }}>{item.company}</p>
        </div>
        <span style={{ fontSize: "11px", color: "#64748b", background: "rgba(255,255,255,0.05)", padding: "4px 12px", borderRadius: "10px", whiteSpace: "nowrap", flexShrink: 0 }}>
          {item.period}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.75, marginBottom: "18px" }}>{item.desc}</p>

      {/* KPIs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {item.kpis.map(k => (
          <motion.div key={k.l} whileHover={{ scale: 1.05 }}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "10px 16px", textAlign: "center", minWidth: "70px" }}>
            <p style={{ fontSize: "19px", fontWeight: 700, color: item.color, lineHeight: 1 }}>{k.n}</p>
            <p style={{ fontSize: "10px", color: "#64748b", marginTop: "3px" }}>{k.l}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function CareerSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="career" style={{ padding: "80px 0" }}>
      <div className="section-wrap">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#c9a84c", marginBottom: "10px" }}>WORK HISTORY</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff" }}>
            Complete Career <span className="gold-text">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line — desktop only */}
          <div className="hidden md:block" style={{ position: "absolute", left: "16px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #1a56db 0%, #3b82f6 35%, #047857 65%, #b45309 100%)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {career.map((item, i) => (
              <div key={i} style={{ position: "relative" }} className="md:pl-12">
                {/* Timeline dot */}
                <div className="hidden md:flex" style={{ position: "absolute", left: 0, top: "24px", width: "32px", height: "32px", borderRadius: "50%", background: item.color, color: "#fff", fontSize: "12px", fontWeight: 700, alignItems: "center", justifyContent: "center", border: "3px solid #080f1e", boxShadow: `0 0 16px ${item.color}60`, zIndex: 1 }}>
                  {i + 1}
                </div>
                <Card item={item} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}