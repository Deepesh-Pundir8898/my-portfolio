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
  chatapp,
  reactEcommerce,
  contactList,
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
    title: " Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Management",
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
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "CodeDril info tech",
    icon: shopify,
    iconBg: "#383E56",
    date: "nov 2022 - dec 2023",
    points: [
      "Developing and maintaining web applications using php and other related technologies.",
      "Developed and maintained scalable web applications using PHP and Laravel, ensuring high performance and security.",
      "Integrated third-party APIs, including payment gateways and social media platforms, to enhance application functionality.",
      "Optimized database queries and implemented caching mechanisms to improve application performance.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Geekster",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present(Training)",
    points: [
      "Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Designed and implemented RESTful APIs to facilitate seamless communication between frontend and backend systems",
      "Implemented secure authentication and authorization systems using JWT and OAuth",
      "Built dynamic and responsive user interfaces using React.js and Redux for state management.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Chat App",
    description:
      "A real-time chat application built using the MERN stack, enabling users to communicate seamlessly with features like instant messaging, user authentication, and group chats. The app provides a smooth and interactive user experience with real-time updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    project_link: "https://mern-chat-app-4xrm.onrender.com/login",
    source_code_link: "https://github.com/Deepesh-Pundir8898/mern-chat-app",
  },
  {
    name: "React E-commerce App",
    description:
      "A fully functional e-commerce platform that allows users to browse products, add them to the cart, and complete purchases online. Built with React and Firebase, the app provides a seamless and responsive shopping experience for customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "blue-text-gradient",
      },
      {
        name: "react-redux",
        color: "purple-text-gradient",
      },
    ],
    image: reactEcommerce,
    project_link: "https://react-ecomm-app-lfas.vercel.app/",
    source_code_link: "https://github.com/Deepesh-Pundir8898/react-ecomm-app",
  },
  {
    name: "Contact List App",
    description:
      "A contact management application that allows users to add, edit, delete, and view contacts. Built with React and Firebase, the app uses Redux for state management and provides a seamless user experience for managing contacts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "react-redux",
        color: "orange-text-gradient",
      },
    ],
    image: contactList,
    project_link: "https://contact-list-app.vercel.app/",
    source_code_link: "https://github.com/yourusername/contact-list-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
