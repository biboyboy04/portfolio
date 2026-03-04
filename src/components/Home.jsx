import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

const alignmentStack = [
  "React",
  "React Native",
  "Angular",
  "Ionic",
  "Node.js",
  "Supabase",
  "Azure DevOps",
  "Docker",
];

const Home = () => {
  return (
    <div id="home" className="page relative -mt-10 flex items-center justify-center md:mt-0">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="hero-title text-[80px] font-semibold xl:text-[100px]">
          <motion.h1
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className=""
          >
            ADRIAN
          </motion.h1>
          <motion.h1
            variants={fadeIn("left", 1.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className=""
          >
            ZAPATA
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 1.4 }}
          className="hero-role text-center text-[20px] font-thin"
          exit={{ opacity: 0 }}
        >
          SOFTWARE ENGINEER | FRONTEND + BACKEND | WEB + MOBILE
        </motion.p>

        <motion.p
          variants={fadeIn("up", 1.45)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="summary-copy max-w-3xl"
        >
          Software Engineer with hands on experience building and maintaining web and mobile products, shipping
          apps, building backend workflows, and improving release workflows with pipelines.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 1.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="skill-cloud mt-2"
        >
          {alignmentStack.map((item) => (
            <span key={item} className="skill-pill">
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 1.55)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="mt-2 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#works" className="aug-chip custom-link">
            View Works
          </a>
          <a href="#annotax-case" className="aug-chip custom-link">
            AnnotaX Case Study
          </a>
          <a href="#contact" className="aug-chip custom-link">
            Contact
          </a>
        </motion.div>
      </div>

      <div className="scroll-cue-wrap">
        <motion.a
          href="#about"
          className="scroll-cue custom-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.7, 1, 0.7], y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          }}
        >
          <span className="scroll-cue-label">Scroll Down</span>
          <span className="scroll-cue-mouse" aria-hidden="true">
            <span className="scroll-cue-dot"></span>
          </span>
        </motion.a>
      </div>
    </div>
  );
};
export default Home;
