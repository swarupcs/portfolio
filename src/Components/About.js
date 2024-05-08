import React from "react";
import Profile from "../assets/profileSwarup.jpg";
import { Styles } from "../utils/Style";
import Resume from "../assets/Swarup's Resume.pdf";
import { TiArrowDownOutline } from "react-icons/ti";

import "../App.css";

function About() {
  return (
    <div
      className="flex flex-wrap justify-center items-center mt-10 p-10 "
      id="Home"
    >
      <div className="flex-1 py-4">
        <span className={Styles.heroHeadText}>
          Hi, I'm <span className="text-green-600"> Swarup Das</span>
          <br />
          <span className={Styles.heroSubText}>
            I am a MERN Stack Developer
            <br />
          </span>
        </span>

        <br />
        <div className="w-[14rem]">
          <a href={Resume} download="Resume" target="blank" rel="noreferrer">
            <div className="p-4 mt-2 w-[13rem] rounded-xl text-green-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500 ">
              <TiArrowDownOutline className="text-lg mr-3 mt-1 text-green-500">
                {" "}
              </TiArrowDownOutline>{" "}
              Resume
            </div>
          </a>
        </div>
      </div>

      <div  className='flex flex-wrap' >
            {/* <img src={Profile} alt='profile' className='element object-contain p-4'/> */}

        </div>
    </div>
  );
}

export default About;
