// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";


// Education Section Logo's
import Ancollege from './assets/education_logo/Ancollege.png';
import Smhs from './assets/education_logo/Smhs.jpg';
import CvRamanGlobalUniversity from './assets/education_logo/CvRamanGlobalUniversity.png'

// Project Section Logo's
import project1 from "./assets/work_logo/projext1.png"


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];


export const education = [
  {
    id: 0,
    img:CvRamanGlobalUniversity,
    school: "C V Raman Global University,Bhubaneswar",
    date: "oct 2022 - July 2026",
    grade: "8.01 cgpa",
    desc: "I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from CV Raman Global University. During my academic journey, I developed strong knowledge in Data Structures and Algorithms, Database Management Systems, and Full Stack Web Development. Along with learning technical concepts, I built several projects that helped me strengthen my practical development skills and problem-solving abilities. I am passionate about creating modern, scalable, and user-friendly web applications while continuously improving my skills in software development",
    degree: "Bachlor of Technology (Btech)",
  },
  {
    id: 2,
    img:Ancollege,
    school: "Anugrah Narayan College ,Patna",
    date: "April 2019 - April 2021",
    grade: "76%",
    desc: "I completed My XII Standard from Anugrah Narayan College , Patna Under BSEB Board with PCM(phyhics , Chemistry, Math)",
    degree: "BSEB(XII) - PCM",
  },
  {
    id: 3,
    img:Smhs,
    school: "Sinha Model High School , patna",
    date: "April 2018 - April 2019",
    grade: "79%",
    desc: "I completed My XII Standard from Anugrah Narayan College , Patna Under CBSE Board ",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Full-stack_Ecommerce",
    description:
      "A full-stack e-commerce platform that enables users to explore products, search items, manage carts, place orders, and handle account activities, while providing admins with complete control over products, categories, and order management",
    image: project1,
    tags: ["HTML", "CSS", "JavaScript", "React JS","Express.js","Node.js","MongoDb", "API"],
    github:
      "https://github.com/Aman-kumar123456/E-commerce-Full_stack",
    LiveDemo: "https://e-commerce-full-stack-fzgf.vercel.app",
  },
];
