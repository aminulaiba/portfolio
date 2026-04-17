import {
  SiDjango,
  // SiDjangorestframework,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiCloudinary,
  SiPython,
  SiGit,
  SiCplusplus,
  SiArduino,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  // SiCss3Alt,
  SiHtml5,
  SiC
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";
import { MdDevices } from "react-icons/md";


// Skills
export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: SiReact },
      { name: "JavaScript", logo: SiJavascript },
      { name: "TypeScript", logo: SiTypescript },
      { name: "Tailwind CSS", logo: SiTailwindcss },
      { name: "HTML", logo: SiHtml5 },
      // { name: "CSS", logo: SiCss3 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", logo: SiDjango },
      // { name: "Django REST", logo: SiDjangorestframework },
      { name: "Python", logo: SiPython },
      { name: "SQL", logo: FaDatabase },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: SiGit },
      { name: "Docker", logo: SiDocker },
      { name: "Cloudinary", logo: SiCloudinary },
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", logo: SiScikitlearn },
      { name: "Pandas", logo: SiPandas },
      { name: "NumPy", logo: SiNumpy },
    ]
  },
  {
    title: "IoT / Hardware",
    skills: [
      { name: "Arduino", logo: SiArduino },
      { name: "ESP8266", logo: MdDevices },
      { name: "IoT", logo: MdDevices },
      { name: "Robotics", logo: MdDevices },
    ]
  }
];












// Summary statistics
export const stats = [
  { label: "Projects Completed", value: 5 },
  { label: "Technologies Learned", value: 20 },
  { label: "Months of Experience", value: 13 },
  { label: "Certificates", value: 11 },
  { label: "Code Commits", value: 99 },
];

// Projects
export const projects = [
  {
    title: "Portfolio Website",
    tech: ["React", "Tailwind", "Vite"],
    github: "",
    live: "",
    description: "Modern portfolio with animations",
  },
  {
    title: "E-commerce Store",
    tech: ["React", "Node.js", "MongoDB"],
    github: "...",
    live: "...",
    description: "Online store with cart and payment integration",
  },
];

// Experience
export const experience = [
  {
    company: "Company A",
    role: "Frontend Developer",
    period: "2022 - Present",
    description: "Worked on web apps using React and Tailwind CSS",
  },
  {
    company: "Company B",
    role: "Intern",
    period: "2021 - 2022",
    description: "Assisted with web development and UI design",
  },
];