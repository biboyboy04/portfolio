import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
import { useIsMobile } from "../hooks/useIsMobile";

const Contact = () => {
  const isMobile = useIsMobile();
  const viewportConfig = { once: true, amount: 0.3 };

  return (
    <div
      id="contact"
      className="w-full mt-[190px] py-10 text-center font-bold text-white xl:mt-[170px]"
    >
      <motion.h1
        variants={isMobile ? undefined : fadeIn("down", 0.4)}
        initial={isMobile ? false : "hidden"}
        whileInView={isMobile ? undefined : "show"}
        animate={isMobile ? { opacity: 1, y: 0 } : undefined}
        viewport={isMobile ? undefined : viewportConfig}
        className="contact-title text-[74px] xl:text-[150px]"
      >
        CONTACT ME?
      </motion.h1>
      <div className="mt-8 flex w-full flex-col gap-8 px-4 md:px-8 xl:mt-[70px] xl:flex-row xl:px-12">
        <motion.div
          variants={isMobile ? undefined : fadeIn("down", 0.45)}
          initial={isMobile ? false : "hidden"}
          whileInView={isMobile ? undefined : "show"}
          animate={isMobile ? { opacity: 1, y: 0 } : undefined}
          viewport={isMobile ? undefined : viewportConfig}
          className="aug-panel contact-card flex flex-1 flex-col items-center gap-6"
        >
          <h1 className="contact-card-icon text-[56px] lg:text-[78px]">
            <FaEnvelope />
          </h1>
          <h1 className="contact-card-text break-all text-[16px] font-thin sm:text-[20px] lg:text-[34px]">
            adrianzapata.dev@gmail.com
          </h1>
        </motion.div>
        <motion.div
          variants={isMobile ? undefined : fadeIn("down", 0.45)}
          initial={isMobile ? false : "hidden"}
          whileInView={isMobile ? undefined : "show"}
          animate={isMobile ? { opacity: 1, y: 0 } : undefined}
          viewport={isMobile ? undefined : viewportConfig}
          className="aug-panel contact-card flex flex-1 flex-col items-center gap-6"
        >
          <h1 className="contact-card-icon text-[56px] lg:text-[78px]">
            <FaPhone />
          </h1>
          <h1 className="contact-card-text text-[18px] font-thin sm:text-[22px] lg:text-[42px]">
            {"+(63)9096365092"}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
