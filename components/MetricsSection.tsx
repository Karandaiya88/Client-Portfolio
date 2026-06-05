"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const revenueData = [
  { year: "FY20", val: 18, max: 110, co: "AR", color: "#b45309", label: "₹18L" },
  { year: "FY21", val: 28, max: 110, co: "AP", color: "#047857", label: "₹28L" },
  { year: "FY22", val: 36, max: 110, co: "AP", color: "#047857", label: "₹36L" },
  { year: "FY23", val: 65, max: 110, co: "SG", color: "#1a56db", label: "₹65L" },
  { year: "FY24", val: 89, max: 110, co: "SG", color: "#1a56db", label: "₹89L" },
  { year: "FY25", val: 110, max: 110, co: "SG", color: "#0369a1", label: "₹1.1Cr" },
];
const achieveData = [
  { year: "FY20", val: 77, co: "AR", color: "#b45309", label: "92%" },
  { year: "FY21", val: 80, co: "AP", color: "#047857", label: "96%" },
  { year: "FY22", val: 87, co: "AP", color: "#047857", label: "104%" },
  { year: "FY23", val: 90, co: "SG", color: "#1a56db", label: "108%" },
  { year: "FY24", val: 96, co: "SG", color: "#1a56db", label: "115%" },
  { year: "FY25", val: 100, co: "SG", color: "#0369a1", label: "120%" },
];
const coBadge: Record<string, { bg: string; color: string; name: string }> = {
  AR: { bg: "rgba(180,83,9,0.2)", color: "#b45309", name: "Anand Rathi" },
  AP: { bg: "rgba(4,120,87,0.2)", color: "#047857", name: "Asian Paints" },
  SG: { bg: "rgba(26,86,219,0.2)", color: "#3b82f6", name: "Saint-Gobain" },
};

function ChartCard({ title, data, note, delay }: { title: string; data: typeof revenueData; note?: string; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "24px" }}>
      <p style={{ fontWeight: 600, color: "#fff", marginBottom: "20px", fontSize: "14px" }}>{title}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
        {data.map((d, i) => {
          const pct = (d.val / (d.max || 100)) * 100;
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "11px", color: "#64748b", width: "32px", textAlign: "right", flexShrink: 0 }}>{d.year}</span>
              <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: "6px", height: "22px", overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${pct}%` } : { width: 0 }}
                  transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  style={{ height: "100%", background: `linear-gradient(90deg,${d.color},${d.color}bb)`, borderRadius: "6px", display: "flex", alignItems: "center", paddingLeft: "10px", minWidth: "50px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>{d.label}</span>
                </motion.div>
              </div>
              <span style={{ fontSize: "10px", fontWeight: 700, padding: "2px 7px", borderRadius: "6px", background: coBadge[d.co].bg, color: coBadge[d.co].color, flexShrink: 0, width: "28px", textAlign: "center" }}>
                {d.co}
              </span>
            </div>
          );
        })}
      </div>
      {note && <p style={{ fontSize: "11px", color: "#22c55e", marginTop: "12px", fontWeight: 500 }}>{note}</p>}
      <div style={{ display: "flex", gap: "14px", marginTop: "14px", flexWrap: "wrap" }}>
        {Object.entries(coBadge).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: v.color }} />
            <span style={{ fontSize: "10px", color: "#64748b" }}>{v.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function MetricsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="metrics" style={{ padding: "80px 0" }}>
      <div className="section-wrap">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#c9a84c", marginBottom: "10px" }}>DATA & NUMBERS</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff" }}>
            Key Performance <span className="gold-text">Metrics</span>
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          <ChartCard title="Revenue Growth (₹ Lakh) — Company Tagged" data={revenueData} delay={0} />
          <ChartCard title="Target Achievement (%) — By Year" data={achieveData} note="✓ 100%+ for 4 consecutive years since FY22" delay={0.15} />
        </div>
      </div>
    </section>
  );
}