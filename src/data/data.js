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

// Projects
export const projects = [
  {
    title: "E-commerce Store",
    techStacks: ["HTML", "CSS", "JS", "Django", "MySQL"],
    github: "https://github.com/aminulaiba/e-commerce",
    live: "",
    description: "A full-featured e-commerce web application built with Django and Django REST Framework, featuring product browsing, shopping cart management, order processing. The backend uses PostgreSQL for data persistence and Cloudinary for media/image storage, with Gunicorn and WhiteNoise handling production deployment. The frontend combines HTML, CSS, and JavaScript.",

    media: [
      {
        type: "video",
        src: "/projects/e-commerce/videos/ecomm.mp4",
        thumbnail: "/projects/e-commerce/img/thumb.png",
      },
      { type: "image", src: "/projects/e-commerce/img/ecomm1.png" },
      { type: "image", src: "/projects/e-commerce/img/ecomm2.png" },
      { type: "image", src: "/projects/e-commerce/img/ecomm3.png" },
      { type: "image", src: "/projects/e-commerce/img/ecomm4.png" },
    ],
  },
  // {
  //   title: "E-commerce tesssttt Store",
  //   techStacks: ["React", "Django", "MySQL"],
  //   github: "...",
  //   live: "",
  //   description: "Online store with cart and payment integration andmalokjk ajdk ahd a dka f ",

  //   media: [
  //     {
  //       type: "video",
  //       src: "/videos/dmo-for-testing.mp4",
  //       thumbnail: "/img/dmo-for-testing-thumb.jpg",
  //     },
  //     { type: "image", src: "/img/logo_light.png" },
  //     { type: "image", src: "/img/logo_dark1.png" },
  //     { type: "image", src: "/img/logo_dark2.png" },
  //   ],
  // },
  // {
  //   title: "Portfolio Website",
  //   techStacks: ["React", "Tailwind", "Vite"],
  //   github: "",
  //   live: "",
  //   description: "Modern portfolio with animations",

  //   media: [
  //     {
  //       type: "video",
  //       src: "/videos/dmo-for-testing.mp4",
  //       thumbnail: "/img/video-thumb.jpg",
  //     },
  //     { type: "image", src: "/img/logo_light.png" },
  //     { type: "image", src: "/img/logo_dark1.png" },
  //     { type: "image", src: "/img/logo_dark2.png" },
  //   ],
  // },

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
//Certificates
export const certificates =[
  {
    date: "August - 2026",
    courseTitle: "Calculus for Machine Learning and Data Science",
    issuedBy: "DeepLearning.AI - Coursera",
    // certificateURL: "https://coursera.org/share/2ff8141d3a2f7a2a6b4703056d9045f3",
    certificateURL: "https://coursera.org/share/5467903bb7990a551e454b072914c745",
  },

  {
    date: "May - 2026",
    courseTitle: "Linear Algebra for Machine Learning and Data Science",
    issuedBy: "DeepLearning.AI - Coursera",
    certificateURL: "https://coursera.org/share/c09e3ec8e911b9e712272c9663a03433",
  },

  {
    date: "October - 2020",
    courseTitle: "Programming for Everybody (Getting Started with Python)",
    issuedBy: "University of Michigan - Coursera",
    certificateURL: "https://www.coursera.org/account/accomplishments/verify/VVHPWRV9VXJL",
  },
]


// Summary statistics
export const stats = [
  { label: "Projects Completed", value: projects.length },
  { label: "Technologies Learned", value: skillGroups.reduce(
    (total, s)=> total+s.skills.length, 0
  )},
  { label: "Months of Experience", value: 21 },
  { label: "Certificates", value: 5 },
  { label: "Code Commits", value: 99 },
];