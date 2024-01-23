import ParticlesContainer from "./components/ParticlesContainer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import AnimatedCursor from "react-animated-cursor";
import Transition from "./components/Transition";
import { SiGithub } from "react-icons/si";

export default function App() {
  return (
    <div className="w-[100vw] overflow-y-auto  overflow-x-hidden pb-[100px] lg:pb-0">
      <Transition />
      <AnimatedCursor
        color="white"
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
      <Logo />
      <Nav />
      <Home />
      <About />
      <Works />

      <Contact />
      <footer className="flex items-center justify-center gap-2 text-[20px] font-thin text-white">
        <a
          href="https://github.com/biboyboy04"
          target="_blank"
          rel="noreferrer"
          className="text-[25px]"
        >
          <SiGithub />
        </a>
        Adrian Zapata 2024. All Rights Reserved.
      </footer>
    </div>
  );
}
