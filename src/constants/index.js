import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining cross-platform applications using React native.",
      "Profiency in debugging and testing Native applications to ensure they are stable and free of debugs.",
      "Knowledge of creating and integrating native modules for platforms-specific functionalities.",
      "Strong problem-solving abilities to tackle challenges unique to mobile app development.",
    ],
  },
  {
    title: "Web Developer",
    icon: meta,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js using dependencies like framer motion, tailwind e.t.c.",
      "Basic probject management skill to meet deadlines and manage tasks effectively.",
      "Ability to work collaboratively witg designers, ther developers and stakeholders.",
      "Being meticulous to ensure code quality and error-free websites.",
    ],
  },
  {
    title: "Graphic Designer",
    icon: starbucks,
    iconBg: "#E6DEDD",
    points: [
      "Profiency in selecting and using fonts to enhance readability and convey the right tone and message.",
      "Skill in arranging visual element, text and images within a composition to create a hermonious balanced.",
      "Expertise in design software such as Adobe Creative Suite (e.g.,Photoshop, illustratore), Sketch or Figma",
      "Proficiency in photo editing and manipulating to enhance or retouch images.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A very outstanding young Man with great potentials I never tought he could reach this great legnth.",
    name: "Bitrus Yaka",
    designation: "CEO",
    company: "JUV HOT",
  },
  {
    testimonial:
      "I have encountered with different developers but non are compered to this young man.",
    name: "Amos Sakaba",
    designation: "Manager",
    company: "GIG",
  },
  {
    testimonial:
      "A Brilliant young man with great potentials, he has accomplished thins that are beyond imagening." ,
    name: "Danjuma Yaka",
    designation: "Ass Director",
    company: "NNPC",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "Web-based application that allows you to search for product e.g groceries, jeweries, cars, e.t.c and order them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Juventus Hotel",
    description:
      "Website to a fancy Hotel that gives good relactions, comfort and great spars.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "XEX TECH",
    description:
      "A Web application for a company that invests in other businesses and also allows other business invests in the and they promote businesses",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
