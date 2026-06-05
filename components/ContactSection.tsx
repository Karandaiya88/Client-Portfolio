"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contacts = [
  { icon: "📞", label: "Phone", value: "+91-7791871221", href: "tel:+917791871221" },
  { icon: "✉️", label: "Email", value: "sanjaypanwar0911@gmail.com", href: "mailto:sanjaypanwar0911@gmail.com" },
  { icon: "📍", label: "Location", value: "Masuriya, Jodhpur, Rajasthan", href: "#" },
  { icon: "🎓", label: "Education", value: "M.Com – JNVU 2021", href: "#" },
];

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="contact" style={{ padding: "80px 0" }}>
      <div className="section-wrap">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#c9a84c", marginBottom: "10px" }}>GET IN TOUCH</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff" }}>
            Contact <span className="gold-text">Sanjay</span>
          </h2>
          <p style={{ marginTop: "12px", fontSize: "13px", color: "#64748b" }}>
            Open to new opportunities across Sales & Channel Management
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "14px", marginBottom: "36px" }}>
          {contacts.map((c, i) => (
            <motion.a key={i} href={c.href}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "20px", display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", transition: "all 0.3s" }}>
              <div style={{ width: "48px", height: "48px", background: "rgba(26,86,219,0.12)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>
                {c.icon}
              </div>
              <div>
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#64748b", marginBottom: "3px" }}>{c.label}</p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <motion.a href="mailto:sanjaypanwar0911@gmail.com"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "50px", fontWeight: 600, color: "#fff", background: "linear-gradient(135deg,#1a56db,#3b82f6)", boxShadow: "0 0 40px rgba(26,86,219,0.4)", textDecoration: "none", fontSize: "14px" }}>
            Send a Message →
          </motion.a>
        </div>
      </div>
    </section>
  );
}