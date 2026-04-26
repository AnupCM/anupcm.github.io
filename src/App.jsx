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
          I build scalable systems that process millions of records ⚡
        </motion.p>

        <div className="buttons">
          <a href="https://github.com/AnupCM" target="_blank">
			GitHub
			</a>
          <a href="https://www.linkedin.com/in/anupcm/" target="_blank">
			LinkedIn
			</a>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2>About Me</h2>
        <p>
          Software Engineer at JP Morgan building cloud-native data platforms
          using AWS, Kafka, and distributed systems.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2>Experience</h2>

        {[
          {
            title: "JP Morgan Chase",
            desc: "Processing millions of records daily using AWS & Kafka",
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

      {/* FUN */}
      <section>
        <h2>Fun Side</h2>
        <p>
          I design systems that run 24/7 so I can sleep peacefully 😄
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Anup C M</p>
      </footer>

    </div>
  );
}