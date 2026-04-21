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
  SiGithub, 
  SiCplusplus,
  SiArduino,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  // SiCss3Alt,
  SiHtml5,
  SiC
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoHardwareChip } from "react-icons/io5";
import { RiRemoteControlLine } from "react-icons/ri";
import { GiRobotGolem } from "react-icons/gi";
import { RiRobot3Fill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

import DjangoRestIcon from "./DjangoRestIcon"

// Skills
export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: SiReact },
      { name: "JavaScript", logo: SiJavascript },
      { name: "TypeScript", logo: SiTypescript },
      { name: "Tailwind CSS", logo: SiTailwindcss },
      { name: "HTML5", logo: SiHtml5 },
      { name: "CSS", logo: DiCss3 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", logo: SiDjango },
      { name: "DRF", logo: DjangoRestIcon},
      { name: "Python", logo: SiPython },
      { name: "SQL", logo: FaDatabase },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: SiGit },
      { name: "GitHub", logo: SiGithub },
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
      { name: "ESP8266", logo: IoHardwareChip },
      { name: "IoT", logo: RiRemoteControlLine },
      { name: "Robotics", logo: RiRobot3Fill },
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
    title: "E-commerce Store",
    techStacks: ["React", "Django", "MySQL"],
    github: "...",
    live: "",
    description: "Online store with cart and payment integration",

    media: [
      {
        type: "video",
        src: "/videos/dmo-for-testing.mp4",
        thumbnail: "/img/dmo-for-testing-thumb.jpg",
      },
      { type: "image", src: "/img/logo_light.png" },
      { type: "image", src: "/img/logo_dark1.png" },
      { type: "image", src: "/img/logo_dark2.png" },
    ],
  },
  {
    title: "Portfolio Website",
    techStacks: ["React", "Tailwind", "Vite"],
    github: "",
    live: "",
    description: "Modern portfolio with animations",

    media: [
      {
        type: "video",
        src: "/videos/dmo-for-testing.mp4",
        thumbnail: "/img/video-thumb.jpg",
      },
      { type: "image", src: "/img/logo_light.png" },
      { type: "image", src: "/img/logo_dark1.png" },
      { type: "image", src: "/img/logo_dark2.png" },
    ],
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