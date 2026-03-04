import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const experienceData = [
  {
    role: "Software Engineer",
    company: "Eclectus Technologies Inc.",
    period: "July 2024 - Present",
    location: "Cavite, Philippines",
    highlights: [
      "Built and maintained production web and mobile features using Angular and Ionic from Figma designs.",
      "Implemented a web-based face recognition timekeeping flow for attendance workflows.",
      "Resolved native mobile issues across camera, offline behavior, deep links, dependencies, and platform builds.",
      "Automated Android APK build/release pipelines using Azure DevOps, Docker, and YAML.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full pt-[150px] pb-[150px]">
      <div className="section-shell mx-auto w-full max-w-6xl px-6 xl:px-12">
        <motion.div
          variants={fadeIn("down", 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="mb-5"
        >
          <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
          <p className="section-subtitle">
            Software Engineer focused on frontend engineering, native mobile debugging, and CI/CD automation.
          </p>
        </motion.div>

        <div className="timeline-wrap">
          {experienceData.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.3 + index * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
              className="timeline-item aug-panel"
            >
              <header className="timeline-header">
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-meta">
                  {item.period} | {item.location}
                </p>
              </header>

              <ul className="timeline-list">
                {item.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
