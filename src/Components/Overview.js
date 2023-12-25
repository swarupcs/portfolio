import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { technologies, services } from "../Constants";
import { motion } from "framer-motion";
import "./style.css"

function Overview() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Overview"
      >
        <span className={Styles.sectionHeaderText}>Introduction</span>
        <hr className="w-[35%]" />
        <div className={Styles.sectionText}>
      I'm a skilled web developer with experrience in JavaScript and expertise
      in frameworks like React, Node.js I'm a quick learner and collaborate,
      scalable and user-friendly solutions that solve real-world problems. Let's
      work together to bring your ideas to Life!
      </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {
            services.map((service) => (
                <div>
                    <Tilt
                        key={service.icon}
                        className="parallax-effect-glare-scale"
                        perspective={500}
                        glareColor="#fed7aa"
                        glareEnable={true}
                        glareMaxOpacity={0.50}
                        scale={1.02}
                        gyroscope={true}>
                        <div className="p-3 m-3 flex flex-col justify-evenly items-center">
                            <img className="h-[100px] w-[100px]" src={service.icon} alt={service.title} />
                            <div className="m-5 text-violet-500">
                                {service.title}
                            </div>

                        </div>
                    </Tilt>
                </div>
            ))
        }
      </div>

    </div>
  );
}

export default Overview;
