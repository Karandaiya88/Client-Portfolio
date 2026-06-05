"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const awards = [
  { icon: "🏆", title: "Best TSI Award – Q4 FY2024", sub: "Saint-Gobain · Rajasthan Region · Highest performer in zone", color: "#c9a84c", glow: "rgba(201,168,76,0.2)" },
  { icon: "🚀", title: "Promoted to ASM – May 2024", sub: "Fast-tracked to Assistant Sales Manager within just 2 years of joining Saint-Gobain", color: "#1a56db", glow: "rgba(26,86,219,0.2)" },
  { icon: "⭐", title: "120% Achievement – FY25", sub: "Post-promotion highest quarterly achievement in the Rajasthan region", color: "#22c55e", glow: "rgba(34,197,94,0.15)" },
  { icon: "🎯", title: "104% Achievement – Asian Paints FY22", sub: "First 100%+ milestone in career — outperformed territory target for the first time", color: "#047857", glow: "rgba(4,120,87,0.15)" },
  { icon: "📜", title: "DRA Diploma – RSLDC", sub: "Rajasthan Skill & Livelihoods Development Corporation — certified professional", color: "#7c3aed", glow: "rgba(124,58,237,0.15)" },
  { icon: "📈", title: "4 Consecutive Years 100%+", sub: "Consistent above-target performance from FY22 through FY25 across two companies", color: "#0369a1", glow: "rgba(3,105,161,0.15)" },
];

export default function AwardsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="awards" style={{ padding: "80px 0" }}>
      <div className="section-wrap">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#c9a84c", marginBottom: "10px" }}>RECOGNITION</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff" }}>
            Awards & <span className="gold-text">Achievements</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "14px" }}>
          {awards.map((a, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: `0 16px 40px ${a.glow}` }}
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${a.color}25`, borderRadius: "14px", padding: "20px", display: "flex", gap: "14px", alignItems: "flex-start", cursor: "default", transition: "all 0.3s", boxShadow: `0 4px 20px ${a.glow}` }}>
              <div style={{ fontSize: "28px", width: "48px", height: "48px", background: `${a.color}15`, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {a.icon}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "#fff", fontSize: "13px" }}>{a.title}</p>
                <p style={{ fontSize: "11px", color: "#64748b", marginTop: "4px", lineHeight: 1.6 }}>{a.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}