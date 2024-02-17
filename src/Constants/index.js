import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";
import web from "../assets/web.png";
import typescript from "../assets/typescript.png";
import ux from "../assets/ux.png"
import reacr from "../assets/reacr.png";
import git from "../assets/git.png";
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"
// import android from "../assets/android.png"

 
 const services = [
   {
     title: "Web Developer",
     icon: web,
   },
   {
     title: "React Developer",
     icon: reacr,
   },
  //  {
  //    title: "UI/UX Designer",
  //     icon: ux,
  //  },
  
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
     name: "Tailwind",
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
     name: "git",
     icon: git,
   },

   
 ];
 

 
 const projects = [
   {
     name: "Quiz App",
     description:
       "The quiz app made using HTML,CSS,JavaScript and React",
     tags: [
       {
         name: "Typescript",
         color: "blue-text-gradient",
       },
       {
         name: "Angular",
         color: "green-text-gradient",
       },
       {
         name: "Bootstrap",
         color: "pink-text-gradient",
       },
     ],
      image: pro1,
     source_code_link: "https://github.com/swarupcs/quiz-app",
     source_deploy_link: "https://quiz-win.netlify.app/",
   },
   {
     name: "ToDo App",
     description:
       "Web application that enables users to manage their daily task and to manage the time efficiently ",
     tags: [
       {
         name: "react",
         color: "blue-text-gradient",
       },
       {
         name: "Tailwind",
         color: "green-text-gradient",
       },
       {
         name: "css",
         color: "pink-text-gradient",
       },
     ],
     image: pro2,
     source_code_link: "https://github.com/swarupcs/taskmate",
     source_deploy_link: "https://taskmatetodo.netlify.app/",

   },
   {
     name: "Text Analyzer ",
     description:
     "OxiBook is online book buying and selling website with and user freindly UI. It is a MERN stack web application, ",
     tags: [
       {
         name: "React js",
         color: "blue-text-gradient",
       },
       {
         name: "Nodejs",
         color: "green-text-gradient",
       },
       {
         name: "Tailwind Css",
         color: "pink-text-gradient",
       },
     ],
     image: pro3,
     source_code_link: "https://github.com/swarupcs/Text-Analyzer",
     source_deploy_link: "https://text-weaver.netlify.app/",

   },
 ];
 export { services, technologies,  projects };