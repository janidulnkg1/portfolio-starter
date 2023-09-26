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

        <p className='mb-8 max-w-lg mx-auto lg:max-0'>
          Hi I'm Janidu Lankage, a final year undergraduate following BSc (Hons) Software Engineering, awarded by Cardiff Metropolitan University, UK. <br></br>
          I enjoy working on a wide range of projects and constantly expanding my skill set.
          </p>
        
        <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:max-0'>
          <button className='btn btn-lg'>Contact Me</button>
          <a href='#' className='text-gradient'>

          </a>
        </div>
      </div>
  </section>
  );
};

export default Banner;
