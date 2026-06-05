"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamStats = [
  { num: "8+", label: "Team Members Led", icon: "👥" },
  { num: "92%", label: "Team Target Achievement", icon: "🎯" },
  { num: "Low", label: "Attrition Rate", icon: "💼" },
  { num: "4.6/5", label: "Manager Rating", icon: "⭐" },
];

export default function LeadershipSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="leadership" style={{ padding: "80px 0" }}>
      <div className="section-wrap">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#c9a84c", marginBottom: "10px" }}>MANAGEMENT</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff" }}>
            Team Leadership & <span className="gold-text">Capability Building</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "12px", marginBottom: "20px" }}>
          {teamStats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.04 }}
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{s.icon}</div>
              <p className="gold-text" style={{ fontSize: "24px", fontWeight: 700 }}>{s.num}</p>
              <p style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: "3px solid #1a56db", borderRadius: "16px", padding: "24px", fontSize: "13px", color: "#94a3b8", lineHeight: 1.85 }}>
          As <strong style={{ color: "#fff" }}>Assistant Sales Manager</strong>, leads a team of TSIs & Sales Executives covering Jodhpur and adjoining districts.
          Conducts weekly performance reviews, joint market visits, and individual coaching sessions to upskill underperforming reps.
          Implemented incentive-linked beat plan compliance that reduced missed outlet visits by{" "}
          <span style={{ color: "#22c55e", fontWeight: 600 }}>45%</span>{" "}
          and significantly improved overall territory coverage consistency.
          Maintains low team attrition through a culture of recognition, mentorship and transparent goal-setting.
        </motion.div>
      </div>
    </section>
  );
}