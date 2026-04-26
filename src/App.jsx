import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Hi, I'm Anup 👋
        </motion.h1>

        <p className="subtitle">
          Backend Engineer @ JP Morgan
        </p>

        <p className="tagline">
          Scaling systems handling millions of records ⚡
        </p>

        <div className="buttons">
          <a href="https://github.com/AnupCM" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/anupcm/" target="_blank">LinkedIn</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section center">
        <h2>About Me</h2>
        <p>
          Software Engineer specializing in scalable backend systems, cloud-native
          architecture, and high-volume data platforms.
        </p>
      </section>

      {/* WHAT I DO */}
      <section className="section">
        <h2>What I Do Best</h2>

        <div className="grid">
          {[
            "Scalable Backend Systems",
            "Event-Driven Architecture",
            "AWS Optimization",
            "High-volume Data Pipelines"
          ].map((item, i) => (
            <div key={i} className="card small">{item}</div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <h2>Experience</h2>

        <div className="grid">
          {[
            {
              title: "JP Morgan Chase",
              desc: "Built large-scale platform processing millions of records daily",
            },
            {
              title: "Deloitte",
              desc: "Reduced AWS costs by 30% and improved system reliability",
            },
            {
              title: "Happiest Minds",
              desc: "Built backend services using Django and AWS",
            },
          ].map((item, i) => (
            <div key={i} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>

        <div className="grid">
          {[
            {
              title: "Issuer Data Platform",
              desc: "Processes millions of records using AWS & Kafka",
            },
            {
              title: "Cost Optimization",
              desc: "Reduced AWS cost by 30% via automation",
            },
            {
              title: "Monitoring System",
              desc: "Real-time alerting with Lambda & SNS",
            },
          ].map((p, i) => (
            <div key={i} className="card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section center">
        <h2>Tech Stack</h2>

        <div className="skills">
          {["Python", "AWS", "Kafka", "Docker", "FastAPI", "Django"].map(
            (skill) => (
              <span key={skill}>{skill}</span>
            )
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Anup C M</p>
      </footer>
    </div>
  );
}