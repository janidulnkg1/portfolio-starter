import React from 'react';

import Image from '../assets/about.png';

import {FaGithub, FaYoutube, FaDribble } from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants';

const Banner = () => {
  return (
  <section id='home' className='section'>
    <div className='container mx-auto mt-10'>
        <div>
            <div > <br></br><br></br><br></br>
              <h1>
                JANIDU <span>LANKAGE</span>
              </h1>
              <div className='mb-6 text-[36px] lg:text-60px font-secondary
                font-semibold uppercase leading-[1]'>
                <span className='text-white mr-4'>I am</span>
                <TypeAnimation 
                  sequence={[
                    'a Frontend Developer',
                   2000,
                   'a Backend Developer',
                   2000,
                    'a Full Stack Developer',
                   2000,
                   'a Software Engineer', 
                   2000,
                ]}
                  speed={50}
                  className='text-accent'
                  repeat={Infinity}
                /> 
              </div>
            </div>
            <img src={Image} alt='' />
        </div> <br></br>

        <p>I'm a final year undergraduate following BSc (Hons) Software Engineering. <br></br>
                  I'm a passionate software engineer with expertise in: <br></br>
                  BACKEND (C#: .Net Core, ASP.Net Core; Java : Springboot / Hibernate) <br></br>
                  FRONTEND (HTML5, CSS3, JavaScript: JQuery/ AJAX, React.js, Typescript, TailwindCSS, Bootstrap) <br></br>
                  Machine learning, Artificial intelligence, Analytics: TensorFlow, PyTorch, Yolo V8. <br></br>
                  I enjoy working on a wide range of projects and constantly expanding my skill set.</p>

      </div>
  </section>
  );
};

export default Banner;
