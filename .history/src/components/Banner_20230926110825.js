import React from 'react';

import Image from '../assets/about.png';

import {FaGithub, FaYoutube, FaDribble } from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants';

const Banner = () => {
  return (
  <section id='home' className='section'>
    <div className='container mx-auto'>
        <div>
            <div>
              <h1>
                JANIDU <span>LANKAGE</span>
              </h1>
              <div className='mb-6 text-[36px] lg:text-60px font-secondary
                font-semibold uppercase leading-[1]'>
                <span className='text-white mr-4'>I am</span>
                <TypeAnimation 
                  sequence={[
                   'a Software Engineer', 
                   2000,
                   'a Full Stack Developer',
                   2000,
                   'an Online Tutor',
                   2000,
                ]}
                  speed={50}
                  className='text-accent'
                  repeat={Infinity}
                />
                <p>I'm a final year undergraduate following BSc (Hons) Software Engineering. 
                  I'm a passionate software engineer with expertise in 
                  backend (C#: .Net Core, ASP.Net Core; Java : Springboot / Hibernate etc.) and 
                  frontend technologies (HTML5, CSS3, JavaScript: JQuery/ AJAX, php, React.js/Typescript etc.) 
                  as well as Machine learning and Artificial intelligence. I enjoy working on a wide range of projects and constantly expanding my skill set.</p>
              </div>

            </div>
            <img src={Image} alt='' />
        </div>
      </div>
  </section>
  );
};

export default Banner;
