import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { fadeIn } from "../../variants";

const painPoints = [
  "Usually novels/web novels have no built in visualization, so I had to manually look up what characters/scene looked like just to remember and visualize them.",
  "Manual lookup is tedious and can easily lead to spoilers.",
  "Some EPUB apps stop text-to-speech on lockscreen or sleep mode.",
  "Some EPUB apps require paid versions for TTS or include ads in the reading experience.",
];

const journeyMilestones = [
  {
    title: "Broadened debugging perspective",
    detail:
      "This project broadened my debugging perspective: sometimes the library/package itself is the problem, not your code.",
  },
  {
    title: "First open-source contribution",
    detail:
      "While debugging, I found an issue in the library I was using and created my first open-source PR.",
  },
  {
    title: "Explored React Native",
    detail:
      "I used this project to explore React Native further and connect web + mobile implementation decisions.",
  },
  {
    title: "Deep dive into native modules",
    detail:
      "During development, I deep-dived into native modules for notifications, text-to-speech, and background behavior.",
  },
  {
    title: "First full Play Store release cycle",
    detail:
      "I published the app to Google Play from the ground up, including understanding review requirements and the full release process.",
  },
  {
    title: "Closed testing execution",
    detail:
      "I handled the 14-day closed testing phase, including finding and coordinating 12+ testers.",
  },
  {
    title: "Feedback-driven iteration",
    detail: "I iterated based on tester feedback, fixed issues, and refined the experience before release.",
  },
  {
    title: "Production release",
    detail:
      "After passing review, I shipped the production release.",
  },
];

const AnnotaxCaseStudy = () => {
  return (
    <section id="annotax-case" className="page w-full pt-[80px]">
      <div className="section-shell mx-auto w-full max-w-6xl px-6 xl:px-12">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="mb-8"
        >
          <h2 className="section-title">CASE STUDY: ANNOTAX</h2>
          <p className="section-subtitle">
            Background, technical learnings, and release journey from pain point to production deployment.
          </p>
        </motion.div>

        <div className="case-grid">
          <motion.article
            variants={fadeIn("right", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="aug-panel case-card case-card-pain"
          >
            <h3 className="case-title">Background + Motivation</h3>
            <ul className="case-pain-list">
              {painPoints.map((item) => (
                <li key={item} className="case-pain-item">
                  <span className="case-pain-dot" aria-hidden="true"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="case-copy">I built AnnotaX to improve the reading experience for me and for other readers.</p>

            <div className="case-links">
              <a href="https://github.com/biboyboy04/annotax-web" target="_blank" rel="noreferrer" className="aug-chip custom-link">
                <SiGithub /> Repo
              </a>
              <a href="https://annotax.site/" target="_blank" rel="noreferrer" className="aug-chip custom-link">
                <FaArrowCircleRight /> Landing Page
              </a>
            </div>
          </motion.article>

          <motion.article
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="aug-panel case-card case-card-journey"
          >
            <h3 className="case-title">Learnings + Release Journey</h3>

            <ol className="journey-list">
              {journeyMilestones.map((item) => (
                <li key={item.title} className="journey-item">
                  <p className="journey-title">{item.title}</p>
                  <p className="journey-copy">{item.detail}</p>
                </li>
              ))}
            </ol>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default AnnotaxCaseStudy;
