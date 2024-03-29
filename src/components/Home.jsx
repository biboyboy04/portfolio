import MyImage from "/images/ian.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
const Home = () => {
  return (
    <div
      id="home"
      className="page -mt-10 flex items-center justify-center md:mt-0"
    >
      <div className="flex items-center justify-center">
        {/* text container */}
        <div className=" text-center text-[80px] font-semibold  text-white xl:text-[100px]">
          <motion.h1
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="md:mr-[400px] lg:mr-[600px]"
          >
            ADRIAN
          </motion.h1>
          <motion.h1
            variants={fadeIn("left", 1.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="md:ml-[400px] lg:ml-[600px]"
          >
            ZAPATA
          </motion.h1>
        </div>

        {/* img container */}
        <div className="absolute ">
          <div className="bg-[url('/images/ian-small.png')] bg-cover bg-center mix-blend-color-dodge">
            <motion.img
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
              }}
              transition={{ ease: "easeIn", duration: 1.5, delay: 0.4 }}
              exit={{ opacity: 0 }}
              src={MyImage}
              loading="lazy"
              alt="Profile Picture"
              className="interactivity-none object-cover object-center"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(200, 200, 200), rgba(255, 102, 0, 0))", // Adjust colors and opacity as needed
              }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 1.4 }}
            className="-mt-9 text-center text-[20px] font-thin text-white/70"
            exit={{ opacity: 0 }}
          >
            FULL-STACK DEVELOPER
          </motion.p>
        </div>
      </div>
    </div>
  );
};
export default Home;
