import React from 'react'
import Profile from '../assests/profile.png';
import { Styles } from "../utils/Style";
import Resume from "../assests/resume.pdf";

function About() {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10 ' id="Home">

        <div className='flex-1 py-4'>
            <span className={Styles.heroHeadText}>
                Hi, I'm <span className='text-orange-600'> Swarup Das

                </span>
                <br />
                <span className={Styles.heroSubText}>
                    I am a MERN Stack Developer & 
                    <br />
                    Web Designer
                </span>
            </span>
        </div>
      
    </div>
  )
}

export default About
