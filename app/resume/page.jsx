"use client";

// Components
import ExperienceTab from "./components/ExperienceTab";
import EducationTab from "./components/EducationTab";
import SkillsTab from "./components/SkillsTab";
import AboutTab from "./components/AboutTab";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiNodedotjs } from "react-icons/si";

// About data
const about = {
  title: "About me",
  description:
    "Final year Software Engineering student at RMIT with experience in mobile and frontend development. Passionate about building intuitive user interfaces and collaborating on web projects. Currently seeking a Frontend Web Developer Intern position to grow my skills in modern frontend technologies.",
  info: [
    // Name
    {
      fieldName: "Name",
      fieldValue: "Nguyen Hong Anh",
    },
    // Phone
    {
      fieldName: "Phone",
      fieldValue: "(+84) 866551801",
    },
    // Experience
    {
      fieldName: "Experience",
      fieldValue: "0 Year",
    },
    // Nationality
    {
      fieldName: "Nationality",
      fieldValue: "Vietnam",
    },
    // Language
    {
      fieldName: "Language",
      fieldValue: "English, Vietnamese",
    },
    // Email
    {
      fieldName: "Email",
      fieldValue: "nguyenhonganh19052003@gmail.com",
    },
  ],
};

// Experience data
const experience = {
  icon: "",
  title: "My experience",
  description:
    "A detailed look at my work history and the impact I've made in each position.",
  items: [
    // Experience 1
    {
      company: "Ahamove",
      position: "Frontend Developer",
      duration: "2025-2025",
    },
    // Experience 2
    {
      company: "Sample 2",
      position: "FullStack Developer",
      duration: "2026-2026",
    },
  ],
};

// Education data
const education = {
  icon: "",
  title: "My education",
  description:
    "Currently pursuing my Bachelor's degree in Software Engineering at RMIT University",
  items: [
    {
      // Education at RMIT
      institution: "RMIT University",
      position: "Software Engineering",
      duration: "2021 - Current",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description:
    "Technologies and frameworks I'm proficient in, from front-end to back-end development",
  skillList: [
    // HTML5
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    // CSS3
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    // JS
    {
      icon: <FaJs />,
      name: "javascript",
    },
    // Next.js
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    // TalwindCSS
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    // Node.js
    {
      icon: <SiNodedotjs />,
      name: "node.js",
    },
    // Figma
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <ExperienceTab data={experience} />

            {/* Education */}
            <EducationTab data={education} />

            {/* Skills */}
            <SkillsTab data={skills} />

            {/* About me */}
            <AboutTab data={about} />
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
