"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const zones = [
  { zone: "Jodhpur City Core", dealers: 32, active: "94%", status: "Excellent", color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
  { zone: "Jodhpur Periphery", dealers: 21, active: "86%", status: "Strong", color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
  { zone: "Barmer Belt", dealers: 18, active: "78%", status: "Growing", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  { zone: "Jaisalmer / Rural", dealers: 14, active: "72%", status: "Expanding", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
];

const networkStats = [
  { num: "85+", label: "Total Dealers", sub: "Active Network" },
  { num: "120+", label: "New Outlets", sub: "Since Jun 2022" },
  { num: "6 Days", label: "Beat Plan/Week", sub: "PJP Optimized" },
  { num: "22%+", label: "Distributor ROI", sub: "Avg Improvement" },
];

export default function NetworkSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="network" style={{ padding: "80px 0" }}>
      <div className="section-wrap">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#c9a84c", marginBottom: "10px" }}>DISTRIBUTION</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff" }}>
            Dealer & Distribution <span className="gold-text">Network</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "12px", marginBottom: "24px" }}>
          {networkStats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.04 }}
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "20px 16px", textAlign: "center" }}>
              <p className="gold-text" style={{ fontSize: "24px", fontWeight: 700 }}>{s.num}</p>
              <p style={{ fontSize: "13px", color: "#fff", fontWeight: 500, marginTop: "4px" }}>{s.label}</p>
              <p style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Table */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "12px 20px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {["Zone / Area", "Dealers", "Active %", "Status"].map(h => (
              <span key={h} style={{ fontSize: "10px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", textAlign: h !== "Zone / Area" ? "center" : "left" }}>{h}</span>
            ))}
          </div>
          {zones.map((z, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.04)", alignItems: "center", transition: "background 0.2s", cursor: "default" }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" } as any}>
              <span style={{ fontWeight: 600, color: "#fff", fontSize: "13px" }}>{z.zone}</span>
              <span style={{ textAlign: "center", fontWeight: 700, color: "#1a56db", fontSize: "14px" }}>{z.dealers}</span>
              <span style={{ textAlign: "center", fontWeight: 600, color: "#22c55e", fontSize: "13px" }}>{z.active}</span>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 12px", borderRadius: "20px", background: z.bg, color: z.color }}>{z.status}</span>
              </div>
            </motion.div>
          ))}
          {/* Total */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "14px 20px", background: "rgba(26,86,219,0.08)", borderTop: "1px solid rgba(26,86,219,0.2)", alignItems: "center" }}>
            <span style={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>Total Network</span>
            <span style={{ textAlign: "center", fontWeight: 800, color: "#1a56db", fontSize: "18px" }}>85+</span>
            <span style={{ textAlign: "center", fontWeight: 700, color: "#22c55e", fontSize: "14px" }}>85%</span>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 12px", borderRadius: "20px", background: "rgba(26,86,219,0.2)", color: "#3b82f6" }}>On Track</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}