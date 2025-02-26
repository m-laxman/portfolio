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
    ericsson,
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
    pot,
    reviewme,
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "5G Software Developer",
      icon: mobile,
    },
    {
      title: "Mobile App developer",
      icon: creator,
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
      title: "Software Developer",
      company_name: "Ericsson | Full time",
      icon: ericsson,
      iconBg: "#FFFFFF",
      date: "July 2021 - July 2023",
      points: [
        "Collaborated with the team for efficient and time bound software development in the simulation of 5G protocol stack of Layer 2(Radio Link Control & Medium Access Control) for Ericsson Research & Development.",
        "Reduced the latency between Layer 2(Radio Link Control & Medium Access Control) and Layer 3(Radio resource control), resulting in a 19% improvement in product performance.",
        "Designed, developed and tested user equipment for 5G/New-Radio networks. Investigated and resolved issues such as handover failures and throughput issues. Performed end-to-end testing to ensure overall quality of the product. Improved product quality by 15%. Also reviewed code, curated documentation and implemented load/stress testing and unit/integration/end-to-end testing.",
        "Awarded ‘A’ band for excellence in performance in TCS for the period 2022-23. Received star of the month award in TCS in the month of December in 2022.",
        "Skills: Data Plane Development Kit (DPDK) · C++ · Jenkins · Git · Gerrit · Docker · Google Test",
      ],
    },
    {
      title: "Software Engineer | Intern",
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
      name: "ReviewMe",
      description:
        "Developed a web application for connecting students with various people with similar interests using tags for peer reviewing of resumes, research documents, journals in the form of file uploads. Supports posts, comments, upvote and downvote along with search and notification functionalities using MVC design patterns.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "MVC",
          color: "pink-text-gradient",
        },
      ],
      image: reviewme,
      source_code_link: "https://github.com/shekharmnnit/Runtime_Terror",
    },
    {
      name: "Prediction of term deposit",
      description:
        "Developed a web application that contains dashboard for visualising and analysing the bank marketing data and also carried out preprocessing, oversampling, feature engineering and regression analysis of the data. Dashboard is deployed on Google cloud platform. Applied various supervised, unsupervised, ensemble learning methodologies and performed association analysis.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Dash",
          color: "green-text-gradient",
        },
        {
          name: "Google Cloud Platform",
          color: "pink-text-gradient",
        },
      ],
      image: pot,
      source_code_link: "https://github.com/m-laxman/prediction-of-term-deposit",
    },
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