import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  SiAngular,
  SiAzuredevops,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiGithub,
  SiGo,
  SiIonic,
  SiJavascript,
  SiJest,
  SiKeras,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPlaywright,
  SiPostman,
  SiPython,
  SiReact,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiYaml,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const skillGroups = [
  {
    title: "Languages",
    items: [
      { label: "TypeScript", icon: SiTypescript },
      { label: "JavaScript", icon: SiJavascript },
      { label: "PHP", icon: SiPhp },
      { label: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frameworks + Libraries",
    items: [
      { label: "React", icon: SiReact },
      { label: "React Native (Expo)", icon: SiExpo },
      { label: "Angular", icon: SiAngular },
      { label: "Ionic", icon: SiIonic },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express.js", icon: SiExpress },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "SCSS", icon: SiSass },
    ],
  },
  {
    title: "Data + Storage",
    items: [
      { label: "MySQL", icon: SiMysql },
      { label: "Supabase", icon: SiSupabase },
      { label: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "DevOps + Tools",
    items: [
      { label: "Azure DevOps Pipelines", icon: SiAzuredevops },
      { label: "Docker", icon: SiDocker },
      { label: "YAML", icon: SiYaml },
      { label: "GitHub", icon: SiGithub },
      { label: "Postman", icon: SiPostman },
      { label: "Playwright", icon: SiPlaywright },
      { label: "Jest", icon: SiJest },
    ],
  },
  {
    title: "ML",
    items: [
      { label: "TensorFlow", icon: SiTensorflow },
      { label: "Keras", icon: SiKeras },
    ],
  },
  {
    title: "Backend + Platform",
    items: [
      { label: "Go", icon: SiGo },
      { label: "Java", icon: FaJava },
      { label: "C#", icon: TbBrandCSharp },
      { label: ".NET", icon: SiDotnet },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full pb-[52px] pt-[30px] md:pb-[90px]">
      <div className="section-shell mx-auto w-full max-w-6xl px-6 xl:px-12">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="mb-5"
        >
          <h2 className="section-title">SKILLS</h2>
          <p className="section-subtitle">
            Core stack used in production projects across web, mobile, backend workflows, and release pipelines.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.24 + index * 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
              className="aug-panel skills-card"
            >
              <h3 className="skills-card-title">{group.title}</h3>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item.label} className="skills-item">
                    <span className="skills-item-icon" aria-hidden="true">
                      <item.icon />
                    </span>
                    <span className="skills-item-label">{item.label}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
