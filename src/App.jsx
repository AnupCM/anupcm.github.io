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

        <motion.p
          className="tagline"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Backend Engineer @ JP Morgan | Scaling systems handling millions of records ⚡
        </motion.p>

        <div className="buttons">
          <a href="https://github.com/AnupCM" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/anupcm/" target="_blank">LinkedIn</a>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2>About Me</h2>
        <p>
          Software Engineer specializing in scalable backend systems, cloud-native
          architecture, and high-volume data platforms. I design systems that run
          24/7 and process millions of records efficiently.
        </p>
      </section>

      {/* WHAT I DO */}
      <section>
        <h2>What I Do Best</h2>
        <ul className="list">
          <li>Design scalable backend systems</li>
          <li>Build event-driven architectures</li>
          <li>Optimize AWS infrastructure & cost</li>
          <li>Handle high-volume data pipelines</li>
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2>Experience</h2>

        {[
          {
            title: "JP Morgan Chase",
            desc: "Built large-scale issuer data platform processing millions of records daily using AWS & Kafka",
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
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.03 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>Issuer Data Platform</h3>
          <p>
            Designed and built a system processing millions of records daily using
            AWS, Kafka, and event-driven architecture.
          </p>
        </div>

        <div className="card">
          <h3>AWS Cost Optimization</h3>
          <p>
            Reduced cloud costs by 30% by identifying inefficiencies and automating optimization workflows.
          </p>
        </div>

        <div className="card">
          <h3>Event-Driven Monitoring System</h3>
          <p>
            Built real-time alerting system using CloudWatch, SNS, and Lambda improving incident response.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Tech Stack</h2>
        <div className="skills">
          {["Python", "AWS", "Kafka", "Docker", "FastAPI", "Django"].map(
            (skill) => (
              <motion.span whileHover={{ scale: 1.1 }} key={skill}>
                {skill}
              </motion.span>
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