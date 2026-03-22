import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const experienceData = [
  {
    role: "Software Engineer",
    company: "Eclectus Technologies Inc.",
    period: "July 2024 - Present",
    location: "Cavite, Philippines",
    highlights: [
      "Built and maintained production features for Angular + Ionic applications, translating Figma designs into responsive, pixel accurate interfaces for web and Mobile users.",
      "Delivered a web based face recognition timekeeping module that replaced manual attendance steps with faster digital verification workflows and expanded access to users without Android phones, including iOS users who could now use the application on the web.",
      "Resolved mobile project hard to identify issues which caused by third party libraries and applying a library level fix/patch, leveraging the same deep debugging approach/experience while building my personal project AnnotaX.",
      "Made the automated Android APK build and release flows work with Azure DevOps and Docker pipelines, reducing a time intensive manual process to standardized CI/CD jobs and ensuring business continuity by removing dependency on a single person to generate production APKs.",
      "Collaborated with design, QA, and product teams in Agile sprints to address defects, ship enhancements, and improve production reliability.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full pb-[78px] pt-[150px] md:pb-[150px]">
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
                  <span className="block md:inline">{item.period}</span>
                  <span className="hidden md:inline"> | </span>
                  <span className="block md:inline">{item.location}</span>
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
