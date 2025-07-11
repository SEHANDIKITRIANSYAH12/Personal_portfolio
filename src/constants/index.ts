import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  carrent,
  tripguide,
  engima,
  presisipolri,
  kasirkita,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web Development Enthusiast",
    icon: mobile,
  },
  {
    title: "UI/UX Design",
    icon: backend,
  },
  {
    title: "College Student",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Informatics Engineering Student",
    companyName: "Universitas Gunadarma",
    icon: creator,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Currently in the 6th semester of my undergraduate studies.",
      "Learning about web development, data structures, algorithms, and more.",
      "Passionate about creating beautiful and functional web applications.",
      "Looking for opportunities to apply my skills and learn from experienced professionals.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Analisis Bug Presisi Polri App Beta 2023 ",
    description:
      "An analysis of the Presisi Polri website reveals several usability issues, including inaccessible menus and unresponsive buttons. These bugs hinder user interaction and indicate incomplete functionality in certain areas of the platform, highlighting the need for further testing and refinement to ensure a seamless user experience.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "selenium",
        color: "pink-text-gradient",
      },
    ],
    image: presisipolri,
    sourceCodeLink: "https://github.com/SEHANDIKITRIANSYAH12",
  },
  {
    name: "Nontondong",
    description:
      "Nontondong is a modern movie ticket booking app that makes going to the cinema easier and more exciting. Discover the latest films, choose your favorite seats, and book tickets in just a few taps. With a sleek interface and flexible payment options, Nontondong brings the ultimate movie experience right to your fingertips.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: engima,
    sourceCodeLink: "https://github.com/SEHANDIKITRIANSYAH12",
  },
  {
    name: "KasirKita",
    description:
      "KasirKita is a web-based Point of Sale (POS) application designed to help MSMEs and retail businesses manage sales transactions, inventory, financial reports, and customer data efficiently and effortlessly. Supports multiple payment methods and is accessible across devices.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: kasirkita,
    sourceCodeLink: "https://github.com/SEHANDIKITRIANSYAH12",
  },
  {
    name: "E-Callsupply",
    description:
      "E-Callsupply is a comprehensive e-commerce solution built with the MERN stack, offering seamless product browsing, secure shopping cart functionality, user authentication, and a powerful admin panel for efficient product and order management.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/SEHANDIKITRIANSYAH12",
  },
  {
    name: "Weather App",
    description:
      "A simple weather application that fetches and displays current weather data for a given city using a third-party API. Features a clean UI and dynamic weather icons.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/SEHANDIKITRIANSYAH12",
  },
  {
    name: "AI Image Classification",
    description:
      "An advanced image classification system using deep learning with TensorFlow and Keras. The project implements both custom CNN models and fine-tunes pre-trained models like ResNet and VGG16 to classify images across various categories with high accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "keras",
        color: "pink-text-gradient",
      },
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
    ],
    image: web, // Using web.png as a placeholder for now
    sourceCodeLink: "https://github.com/SEHANDIKITRIANSYAH12/ai-image-classification",
  },
];

export { services, technologies, experiences, testimonials, projects };
