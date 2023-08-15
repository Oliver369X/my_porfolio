import {
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
  threejs,
  Python,
  Tensorflow,
  django,
  Postgresql,
  Keras,
  Scikit_learn,
  aws,
  Apache_Spark,
  LangChain,
  Pytorch,
  TTS_audiobook,
  Ruta_deep_learning,
  portfolio,
  Data_Science,
  ML,
  DL,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Tech",
    title: "Tech",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Data Science",
    icon: Data_Science,
  },
  {
    title: "Machine learning",
    icon: ML,
  },
  {
    title: "Deep Learning",
    icon: DL,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "Posgre SQL",
    icon: Postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "LangChain",
    icon: LangChain,
  },
  {
    name: "Tensorflow",
    icon: Tensorflow,
  },
  {
    name: "Pytorch",
    icon: Pytorch,
  },
  {
    name: "Scikit Learn",
    icon: Scikit_learn,
  },
  {
    name: "Keras",
    icon: Keras,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TTS_Audiobook_Maker",
    description:
    "Audiobook Generator with TTS is a powerful and user-friendly platform that converts written content into engaging audiobooks using advanced Text-to-Speech (TTS) technology.",
    tags: [
      {
        name: "TTS",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: TTS_audiobook,
    source_code_link: "https://github.com/Oliver369X/TTS_Audiobook_Maker",
  },
  {
    name: "Ruta Deep Learning",
    description:
    "Deep Learning Journey: A Compilation of Course Notes for documenting my learning experience. These notes will serve as a valuable resource for future teaching on artificial intelligence, providing insight into the field.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
      {
        name: "CNN & LLM",
        color: "orange-text-gradient",
      },
    ],
    image: Ruta_deep_learning,
    source_code_link: "https://github.com/Oliver369X/Ruta_deep_learning_platzi",
  },
  {
    name: "Portfolio",
    description:
    "Personal Portfolio: Showcasing my journey, skills, and projects in the world of technology and creativity. Explore my work and accomplishments as I continue to learn, innovate, and contribute to the digital landscape.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "Three js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Oliver369X/my_porfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
