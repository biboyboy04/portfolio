import EmoChan from "/images/emoChan.gif";
import ToO from "/images/too.gif";
import Serb from "/images/serb.gif";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
import Tilt from "react-parallax-tilt";

import {
  FaReact,
  FaPhp,
  FaDatabase,
  FaPython,
  FaCss3Alt,
  FaUnity,
  FaJs,
  FaHtml5,
  FaArrowCircleRight,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

import { SiGithub, SiTensorflow, SiTailwindcss } from "react-icons/si";
const Works = () => {
  return (
    <div id="works" className="min-h-screen w-full pt-[120px] xl:pt-[130px]">
      <div className="opacity-59 -ml-1 w-[103vw] rotate-[5deg]  bg-black/90 text-[60px] text-white/60 xl:text-[80px]">
        <Marquee autoFill={true} speed={100}>
          <h1 className="pl-5 ">WORKS </h1>
          <h1 className="pl-5 font-bold">WORKS </h1>
          <h1 className="pl-5 font-thin">WORKS </h1>
        </Marquee>
      </div>

      <div className="-ml-5 w-[110vw] -rotate-[9deg] bg-black/90 py-3.5 text-[60px] text-white/60 xl:text-[80px]">
        <Marquee
          autoFill={true}
          direction="right"
          speed={100}
          // bg-white/80 text-[60px] text-black/80
          className=""
        >
          {" "}
          <FaReact />
          <FaPhp />
          <FaDatabase />
          <FaPython />
          <FaCss3Alt />
          <FaUnity />
          <FaJs />
          <FaHtml5 />
          <TbBrandCSharp />
          <SiGithub />
          <SiTensorflow />
          <SiTailwindcss />
          {/* <FaUnity />
              <FaReact color="#00d8ff" />
              <FaPhp color="#787cb5" />
              <FaDatabase color="#00758F" />
              <TbBrandCSharp color="#68217a" />
              <FaPython color="#306998" />
              <SiTailwindcss color="#06b6d4" />
              <SiGithub color="#211F1F" />
              <SiTensorflow color="#ff6f61" />
              <FaUnity color="#000000" />
              <FaJs color="#f7df1e" />
              <FaCss3Alt color="#1572b6" />
              <FaHtml5 color="#e34c26" /> */}
        </Marquee>
      </div>

      <div className="flex flex-col gap-[480px] leading-[5rem] md:leading-[9rem] lg:gap-[400px] xl:gap-[50px] xl:pt-[80px] xl:leading-[12rem]">
        {/* Project 1 */}
        <div
          id="project"
          className="relative mt-[110px] w-full px-6 text-white/90 xl:mt-[200px] xl:px-24"
        >
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className=" w-[60px]  "
          >
            <h1 className="text-[100px] font-bold md:text-[135px] xl:text-[250px]">
              EMO-
              <br />
              CHAN{" "}
            </h1>
          </motion.div>

          <Tilt className="absolute left-[10%] top-[150px] ml-auto  max-w-sm  md:left-[40%] xl:left-[750px] ">
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
              className="flex w-full flex-col gap-4 rounded-lg border border-gray-200 bg-black/90 px-4 py-8 shadow  "
            >
              <div className="flex w-full justify-center text-[50px]">
                <FaReact />
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaPython />
                <SiTensorflow />
              </div>
              <div>
                <img
                  className="rounded-xl"
                  src={EmoChan}
                  loading="lazy"
                  alt=""
                />
              </div>
              <p className="px-2 font-thin uppercase leading-normal">
                Experience an AI-powered e-book reader web app that analyzes the
                text in the current chapter to identify the dominant emotion.
                The application then recommends a emotionally appropriate
                playlist using the Spotify API based on the detected emotion.
              </p>
              <a
                href="https://biboyboy04.github.io/Emo-chan"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <FaArrowCircleRight className=" ml-auto mr-3 text-[40px] " />
              </a>
            </motion.div>
          </Tilt>
        </div>
        {/* Project 2 */}
        <div
          id="project"
          className="relative ml-auto mt-[110px] w-full px-6 text-right text-white/90  xl:mt-[330px] xl:px-24"
        >
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className="w-[60px]leading-[7rem] xl:leading-[12rem]"
          >
            <h1 className="text-[100px] font-bold md:text-[200px] xl:text-[250px]">
              TOWE
              <br />
              ROFO
              <br />
              UROB
              <br />
              OROS{" "}
            </h1>
          </motion.div>
          <Tilt className="absolute right-[10%] top-[300px] ml-auto flex max-w-sm flex-col gap-4 md:right-[35%]   md:top-[200px]">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
              className="flex flex-col gap-4  rounded-lg border border-gray-200 bg-black/90  px-4 py-8 shadow "
            >
              <div className="flex w-full justify-center text-[50px]">
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaUnity />
                <TbBrandCSharp />
              </div>
              <a href="#">
                <img className="rounded-xl" src={ToO} loading="lazy" alt="" />
              </a>
              <p className="px-2 text-left   font-thin uppercase leading-normal">
                Explore a captivating 2D platformer mobile game featuring
                dynamic combat, numerous challenging levels, and epic boss
                encounters. Developed in Unity, the game is now available for
                download on the landing page.
              </p>
              <a
                href="https://biboyboy04.github.io/Tower-of-Ouroboros-Landing-Page/"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <FaArrowCircleRight className=" ml-auto mr-3 text-[40px] " />
              </a>
            </motion.div>
          </Tilt>
        </div>
        {/* Project 3 */}
        <div
          id="project"
          className="relative mt-[100px] w-full px-6 text-white/90 md:-mt-[150px] lg:-mt-[150px] lg:px-[120px]  xl:mt-[120px]"
        >
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            className=" w-[60px]  "
          >
            <h1 className="text-[100px] font-bold md:text-[135px] xl:text-[250px]">
              SERB
            </h1>
          </motion.div>
          <Tilt className="absolute left-[10%] top-[70px] ml-auto  max-w-sm  md:left-[40%]  xl:left-[30%] xl:top-[120px] ">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
              className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-black/90 px-4 py-8 shadow "
            >
              <div className="flex w-full justify-center text-[50px]">
                <FaHtml5 />
                <FaCss3Alt />
                <SiTailwindcss />
                <FaJs />
                <FaPhp />
                <FaDatabase />
              </div>
              <a href="#">
                <img className="rounded-xl" src={Serb} loading="lazy" alt="" />
              </a>
              <p className="px-2   font-thin uppercase leading-normal">
                A web app featuring user and admin login functionalities. Users
                can book services and manage their bookings, while admins have
                control over users, services, and requests. The application is
                connected to a MySQL database, enabling dynamic data on the
                website. It is implemented using PHP and styled with Tailwind
                CSS.
              </p>
              <a href="#" className="">
                <FaArrowCircleRight className=" ml-auto mr-3 text-[40px] " />
              </a>
            </motion.div>
          </Tilt>
        </div>
      </div>

      {/* <div className="align-center mt-[200px] flex justify-center gap-24">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="#">
            <img className="rounded-t-lg" src="/images/ian.png" alt="" />
          </a>
        </div>
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="#">
            <img className="rounded-t-lg" src="/images/ian.png" alt="" />
          </a>
        </div>
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="#">
            <img className="rounded-t-lg" src="/images/ian.png" alt="" />
          </a>
        </div>
      </div> */}
    </div>
  );
};
export default Works;
