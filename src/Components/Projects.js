import React from "react";
import { Styles } from "../utils/Style";
import { projects } from "../Constants";
import Tilt from "react-parallax-tilt";
import {SiNetlify, SiGithub} from "react-icons/si" 


function Projects() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Overview"
      >
        <span className={Styles.sectionHeaderText}>Projects</span>
        <hr className="w-[35%]" />
        <div className={Styles.sectionText}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </div>
      </div>

      <div className="flex flex-wrap p-8 justify-evenly items-center">
        {projects.map((project) => (
          <Tilt
            key={project.name}
            className="w-[300px] h-[500px] flex-col flex  justify-evenly shadow-2xl m-10 items-center hover:shadow=2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900"
          >
            <div className="flex justify-center items-center mb-3">

              <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
              <a href={project.source_deploy_link} target="blank">
                <SiNetlify className="text-3xl font-bold text-violet-600"></SiNetlify>
              </a>
              </div>
              <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
              <a href={project.source_code_link} target="blank">
                <SiGithub className="text-3xl font-bold text-violet-600"></SiGithub>
              </a>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
