import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import { fadeIn } from "../../variants.js";
const Home = () => {
  const aboutText = [
    "PASSIONATE",
    "HARDWORKING",
    "ADAPTABLE",
    "GROWTH ORIENTED",
    "ADOPTING LATEST TECHNOLOGIES",
    "ENSURING FUNCTIONALITY",
    "RESPONSIVE DESIGN",
  ];
  return (
    <div id="about" className="page flex flex-col gap-9">
      <Marquee
        autoFill={true}
        speed={100}
        className=" w-[100vw] bg-black/90 text-[60px] text-white/60 xl:text-[80px]"
      >
        <h1 className="pl-5 ">ABOUT ME </h1>
        <h1 className="pl-5 font-bold">ABOUT ME </h1>
        <h1 className="pl-5 font-thin">ABOUT ME </h1>
      </Marquee>
      <div className="flex flex-col gap-11 pl-5 text-[35px] font-bold text-white md:text-[50px] xl:pl-20 xl:text-[80px]">
        {aboutText.map((text, idx) => {
          return (
            <motion.h1
              key={idx}
              variants={fadeIn("right", 0.3, 2, 2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className=""
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
