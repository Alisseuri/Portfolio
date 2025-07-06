const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Learning" },
  { value: 15, suffix: "+", label: "Finished Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem-Solving",
    desc: "Ability to analyze complex problems, break them down into manageable parts, and devise effective solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Collaboration & Communication",
    desc: "Working effectively in teams, often in agile environments.",
  },
  {
    imgPath: "/images/time.png",
    title: "Continuous Learning",
    desc: "Being open to learning new languages, frameworks, and tools to keep up with the rapid evolving of tech field.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "HTML, Vanilla CSS, JS to build a traveling website for Human Computer Interaction project while also understanding the fundamentals of interface design.",
    imgPath: "/images/lestour-logo.png",
    logoPath: "/images/lestourlogo.png",
    title: "Frontend Developer",
    date: "February 2023 - June 2023",
    responsibilities: [
      "Gathering user needs systematically through brainstorming inside a group to understand the expectations and requirements of users related to traveling system across East Java.",
      "Creating user requirement documentation as a development guide, ensuring clear and consistent understanding throughout the LesTour Website development process.",
      "Employing pure HTML, CSS, JavaScript for the programming.",
    ],
  },
  {
    review: "Laravel based application for managing a boarding house business with Laravel.",
    imgPath: "/images/danaras-logo.png",
    logoPath: "/images/danaras-white.png",
    title: "Frontend Developer",
    date: "February 2024 - June 2024",
    responsibilities: [
      "Gathering user and admin needs systematically through a questionnaire from necessary users.",
      "Creating user requirement documentation as a development guide.",
      "Employing Laravel 10 as the backend framework while using HTML, CSS, Javascript and PHP for the programming process.",
    ],
  },
  {
    review: "Android application for managing students' health and nutrition with a user-friendly breakfast reminder, tracker, planner, catering",
    imgPath: "/images/brekkie-logo.png",
    logoPath: "/images/brekkie-logo.png",
    title: "Frontend Developer",
    date: "September 2024 - December 2024",
    responsibilities: [
      "Designing the user interface for Brekkie to create an attractive and intuitive interface, easy for the user to navigate.",
      "Developing Brekkie using Kotlin in Android Studio while using Waterfall Methodology from SDLC for managing the project lifecycle process.",
      "Complete the interface features in Brekkie application, such as user authentication, menu configuration, notification configuration, user profile personalization, payment system.",
    ],
  },
  {
    review: "Laravel based application for managing medical health checkup datas and data visualization through graphics, user-friendly interactive dashboard.",
    imgPath: "/images/occuhelp-logo.png",
    logoPath: "/images/occu-logo.png",
    title: "Frontend Developer",
    date: "February 2025 - June 2025",
    responsibilities: [
      "Gathering user and admin needs systematically through interviews from necessary users.",
      "Creating user requirement documentation as a development guide.",
      "Employing Laravel 12 as the backend framework while using Vue as JavaScript framework for the interface process.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/aliyark.z/"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link:""
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link:""
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/aliya-rizki-fatiha-315157283/"
  },
];

const techLogos = [
  {
    name: "HTML 5",
    icon: "/images/logos/html.png",
  },
  {
    name: "CSS 3",
    icon: "/images/logos/css.webp",
  },
  {
    name: "JavaScript",
    icon: "/images/logos/javascript.png",
  },
  {
    name: "Vue",
    icon: "/images/logos/vue.png",
  },
  {
    name: "React JS",
    icon: "/images/logos/react.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/logos/tailwind.png",
  },
  {
    name: "Aseprite",
    icon: "/images/logos/aseprite.png",
  },
  {
    name: "git",
    icon: "/images/logos/github.svg",
  },
  {
    name: "figma",
    icon: "/images/logos/figma.svg",
  },
  {
    name: "laravel",
    icon: "/images/logos/laravel.png",
  },
  {
    name: "bootstrap",
    icon: "/images/logos/bootstrap.png",
  },
  {
    name: "kotlin",
    icon: "/images/logos/kotlin.png",
  },
  {
    name: "php",
    icon: "/images/logos/php.png",
  },
  {
    name: "java",
    icon: "/images/logos/java.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  techLogos
};