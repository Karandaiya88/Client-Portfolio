"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const edu = [
  { deg: "M.Com", uni: "JNVU, Jodhpur", year: "2021", icon: "🎓", color: "#1a56db" },
  { deg: "B.Com", uni: "JNVU, Jodhpur", year: "2018", icon: "📚", color: "#047857" },
  { deg: "12th – RBSE", uni: "Secondary Board of Rajasthan, Ajmer", year: "2015", icon: "🏫", color: "#b45309" },
];

export default function EducationSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="education" style={{ padding: "60px 0" }}>
      <div className="section-wrap">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "44px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#c9a84c", marginBottom: "10px" }}>ACADEMICS</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, color: "#fff" }}>Education</h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "14px" }}>
          {edu.map((e, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderTop: `3px solid ${e.color}`, borderRadius: "14px", padding: "24px", textAlign: "center", boxShadow: `0 4px 24px ${e.color}15` }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{e.icon}</div>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#fff" }}>{e.deg}</p>
              <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>{e.uni}</p>
              <span style={{ display: "inline-block", marginTop: "10px", fontSize: "11px", fontWeight: 700, padding: "3px 12px", borderRadius: "20px", background: `${e.color}20`, color: e.color }}>
                {e.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}