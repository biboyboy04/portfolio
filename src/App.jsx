import { useEffect, useState } from "react";
import ParticlesContainer from "./components/ParticlesContainer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Works from "./components/Works";
import AnnotaxCaseStudy from "./components/AnnotaxCaseStudy";
import Contact from "./components/Contact";
import AnimatedCursor from "react-animated-cursor";
import Transition from "./components/Transition";
import { SiGithub } from "react-icons/si";
import { useIsMobile } from "./hooks/useIsMobile";

export default function App() {
  const isMobile = useIsMobile();
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setShowEffects(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShowEffects(true);
    }, 220);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isMobile]);

  return (
    <div className="annotax-surface w-[100vw] overflow-x-hidden overflow-y-auto pb-[100px] lg:pb-0">
      <Transition reducedMotion={isMobile} />
      {showEffects ? (
        <>
          <AnimatedCursor
            color="255, 255, 255"
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={10}
            trailingSpeed={3}
            clickables={[
              ".custom-link",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              "h1",
              "#project",
              {
                target: "h1",
                options: {
                  innerSize: 12,
                  outerSize: 12,
                  color: "255, 255, 255",
                  outerAlpha: 0.3,
                  innerScale: 1.7,
                  outerScale: 4,
                },
              },
            ]}
            outerStyle={{
              background: "white",
              mixBlendMode: "exclusion",
            }}
            innerStyle={{
              background: "white",
              mixBlendMode: "exclusion",
            }}
          ></AnimatedCursor>
          <ParticlesContainer />
        </>
      ) : null}
      <Nav />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Works />
      <AnnotaxCaseStudy />
      <Contact />
      <footer className="footer-shell mt-2 flex items-center justify-center gap-2 pb-2 text-[20px] font-thin">
        <a
          href="https://github.com/biboyboy04"
          target="_blank"
          rel="noreferrer"
          className="text-[25px]"
        >
          <SiGithub />
        </a>
        Adrian Zapata 2026. All Rights Reserved.
      </footer>
    </div>
  );
}
