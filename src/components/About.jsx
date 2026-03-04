import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import { fadeIn } from "../../variants.js";
const Home = () => {
  const aboutText = [
    "PRODUCT ENGINEERING",
    "WEB + MOBILE DEVELOPMENT",
    "FRONTEND + BACKEND IMPLEMENTATION",
    "RELIABILITY AND PERFORMANCE",
    "MOBILE DEBUGGING AND ISSUE RESOLUTION",
    "CI/CD AND RELEASE AUTOMATION",
    "ITERATIVE DELIVERY AND MAINTENANCE",
  ];
  return (
    <div id="about" className="page flex flex-col gap-9 mt-10">
      <Marquee
        autoFill={true}
        speed={100}
        className="section-marquee w-[100vw] text-[60px] text-white/60 xl:text-[80px]"
      >
        <h1 className="pl-5 ">ABOUT ME </h1>
        <h1 className="pl-5 font-bold">ABOUT ME </h1>
        <h1 className="pl-5 font-thin">ABOUT ME </h1>
      </Marquee>
      <div className="flex flex-col gap-11 pl-5 text-[35px] font-bold text-white md:text-[50px] xl:pl-20 xl:text-[70px]">
        {aboutText.map((text, idx) => {
          return (
            <motion.h1
              key={idx}
              variants={fadeIn("right", 0.12 + idx * 0.08, 0.2, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="about-line"
            >
              {text}
            </motion.h1>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
