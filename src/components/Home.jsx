import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
import { useIsMobile } from "../hooks/useIsMobile";

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
  const isMobile = useIsMobile();

  return (
    <div id="home" className="page home-safe-top relative flex flex-col items-center justify-center md:mt-0 md:flex-row">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="hero-title text-[80px] font-semibold xl:text-[100px]">
          <motion.h1
            variants={isMobile ? undefined : fadeIn("right", 1)}
            initial={isMobile ? false : "hidden"}
            whileInView={isMobile ? undefined : "show"}
            animate={isMobile ? { opacity: 1, x: 0 } : undefined}
            viewport={isMobile ? undefined : { once: true }}
            exit={isMobile ? undefined : "hidden"}
            className=""
          >
            ADRIAN
          </motion.h1>
          <motion.h1
            variants={isMobile ? undefined : fadeIn("left", 1.4)}
            initial={isMobile ? false : "hidden"}
            whileInView={isMobile ? undefined : "show"}
            animate={isMobile ? { opacity: 1, x: 0 } : undefined}
            viewport={isMobile ? undefined : { once: true }}
            exit={isMobile ? undefined : "hidden"}
            className=""
          >
            ZAPATA
          </motion.h1>
        </div>

        <motion.p
          initial={isMobile ? false : { opacity: 0 }}
          viewport={isMobile ? undefined : { once: true }}
          whileInView={isMobile ? undefined : { opacity: 1 }}
          animate={isMobile ? { opacity: 1 } : undefined}
          transition={
            isMobile
              ? undefined
              : { ease: "easeIn", duration: 0.5, delay: 1.4 }
          }
          className="hero-role text-center text-[20px] font-thin"
          exit={isMobile ? undefined : { opacity: 0 }}
        >
          <span className="block md:inline">SOFTWARE ENGINEER</span>
          <span className="hidden md:inline"> | </span>
          <span className="block md:inline">FRONTEND + BACKEND</span>
          <span className="hidden md:inline"> | </span>
          <span className="block md:inline">WEB + MOBILE</span>
        </motion.p>

        <motion.p
          variants={isMobile ? undefined : fadeIn("up", 1.45)}
          initial={isMobile ? false : "hidden"}
          whileInView={isMobile ? undefined : "show"}
          animate={isMobile ? { opacity: 1, y: 0 } : undefined}
          viewport={isMobile ? undefined : { once: true }}
          exit={isMobile ? undefined : "hidden"}
          className="summary-copy max-w-3xl"
        >
          Software Engineer with hands on experience building and maintaining web and mobile products, shipping
          apps, building backend workflows, and improving release workflows with pipelines.
        </motion.p>

        <motion.div
          variants={isMobile ? undefined : fadeIn("up", 1.5)}
          initial={isMobile ? false : "hidden"}
          whileInView={isMobile ? undefined : "show"}
          animate={isMobile ? { opacity: 1, y: 0 } : undefined}
          viewport={isMobile ? undefined : { once: true }}
          exit={isMobile ? undefined : "hidden"}
          className="skill-cloud mt-2"
        >
          {alignmentStack.map((item) => (
            <span key={item} className="skill-pill">
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={isMobile ? undefined : fadeIn("up", 1.55)}
          initial={isMobile ? false : "hidden"}
          whileInView={isMobile ? undefined : "show"}
          animate={isMobile ? { opacity: 1, y: 0 } : undefined}
          viewport={isMobile ? undefined : { once: true }}
          exit={isMobile ? undefined : "hidden"}
          className="mt-2 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a href="#works" className="aug-chip custom-link w-full justify-center sm:w-auto">
            View Works
          </a>
          <a href="#annotax-case" className="aug-chip custom-link w-full justify-center sm:w-auto">
            AnnotaX Case Study
          </a>
          <a href="#contact" className="aug-chip custom-link w-full justify-center sm:w-auto">
            Contact
          </a>
        </motion.div>
      </div>

      <div className="scroll-cue-wrap">
        <motion.a
          href="#about"
          className="scroll-cue custom-link"
          initial={isMobile ? false : { opacity: 0 }}
          animate={
            isMobile
              ? { opacity: 0.88, y: 0 }
              : { opacity: [0.7, 1, 0.7], y: [0, 8, 0] }
          }
          transition={
            isMobile
              ? undefined
              : {
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  },
                  y: {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  },
                }
          }
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
