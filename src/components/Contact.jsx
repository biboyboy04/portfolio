import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

const Contact = () => {
  return (
    <div
      id="contact"
      className="page mt-[800px] py-10 text-center font-bold text-white xl:mt-[700px]"
    >
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        className="text-[88px] xl:text-[200px]"
      >
        CONTACT ME!?
      </motion.h1>
      <div className="mt-10 flex w-full flex-col gap-10 xl:mt-[150px] xl:flex-row">
        <motion.div
          variants={fadeIn("down", 0.45)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="flex flex-1 flex-col items-center gap-10 "
        >
          <h1 className="text-[70px] text-white/70 lg:text-[100px]">
            <FaEnvelope />
          </h1>
          <h1 className="text-[20px] font-thin text-white/70 lg:text-[50px]">
            mail.adrianzapata@gmail.com
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.45)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="flex flex-1 flex-col items-center gap-10"
        >
          <h1 className="text-[70px] text-white/70 lg:text-[100px]">
            <FaPhone />
          </h1>
          <h1 className="text-[20px] font-thin text-white/70 lg:text-[50px]">
            {"+(63)9096365092"}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
