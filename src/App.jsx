import ParticlesContainer from "./components/ParticlesContainer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import About from "./components/About";
import Works from "./components/Works";
import AnimatedCursor from "react-animated-cursor";
import { useState } from "react";
export default function App() {
  return (
    <div className="w-[100vw] overflow-y-auto overflow-x-hidden">
      <AnimatedCursor
        color="white"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={10}
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
          "#project",
          {
            target: "#project",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 1.7,
              outerScale: 30,
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
      <div className="page"></div>
    </div>
  );
}
