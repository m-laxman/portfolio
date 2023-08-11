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
    alumni,
    ciguide,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tcs,
    cognizant,
    meta,
    starbucks,
    tesla,
    shopify,
    frbas,
    jobit,
    tripguide,
    threejs,
    cpp,
    java,
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
      title: "Hire | Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End Developer",
      icon: web,
    },
    {
      title: "Mobile App developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "5G Software Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
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
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Tata Consultancy Services | Full time",
      icon: tcs,
      iconBg: "#FFFFFF",
      date: "July 2021 - July 2023",
      points: [
        "Collaborated with the team for efficient and time bound software development in the 5G protocol stack of Layer 2(RLC & MAC).",
        "Designed, developed and tested NR user equipment and performed root cause analysis to resolve issues such as handover failures and throughput issues to improve overall product quality by 15%.",
        "Reduced the latency between L2(RLC & MAC) and L3(RRC), resulting in a 19% improvement in product performance.",
        "Skills: Data Plane Development Kit (DPDK) · C++ · Jenkins · Git · Gerrit",
      ],
    },
    {
      title: "Software Development Engineer in Test | Intern",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#FFFFFF",
      date: "March 2021 - May 2021",
      points: [
        "Involved in the development and testing of a healthcare project for peak performance.",
        "Explored on building web 2.0 applications.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Skills: Java · Spring Boot · Spring MVC · Java Database Connectivity (JDBC)",
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
      name: "Face Recognition based Attendance System",
      description:
        "Implemented a system to record attendance of students by face recognition using dlib toolkit. Developed an executable file using python and connected to Google Firebase for cloud.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "dlib",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: frbas,
      source_code_link: "https://github.com/m-laxman",
    },
    {
      name: "Alumni Portal",
      description:
       "A web app to connect students with Alumni that supports text messaging, job postings etc.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "rest-api",
          color: "pink-text-gradient",
        },
      ],
      image: alumni,
      source_code_link: "https://github.com/m-laxman/alumni-portal",
    },
    {
      name: "coding interview guide",
      description:
        "A web app that consists of a simple UI, to view a curated list of sources of Data Structures and Algorithms and it is deployed on Heroku Cloud.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "Heroku",
          color: "pink-text-gradient",
        },
      ],
      image: ciguide,
      source_code_link: "https://github.com/m-laxman/coding-interview-guide-website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };