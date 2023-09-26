import React from 'react';

import Image from '../assets/about.png';

import {FaGithub, FaLinkedin } from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants';

const Banner = () => {
  return (
  <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto mt-10'>
        <div className='flex flex-col gap-y-8 lg:flex-row'>
          {/* Text */}
            <div className='flex-1 text-center font-secondary lg:text-left'> 
             <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              JANIDU <span>LANKAGE</span>
             </h1>
             <div className='mb-6 text-[36px] lg:text-60px font-secondary
              font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Backend Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Software Engineer', 
                  2000,
              ]}
                speed={50}
                className='text-accent'
                repeat={Infinity}
              /> 
            </div>
          </div>
           {/* Image */}
           <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-'>
          <img src={Image} alt=''  />
          </div>
        </div> 
        <p className='mb-8 max-w-lg mx-auto lg:max-0'>
          Hi I'm Janidu Lankage, a final year undergraduate following BSc (Hons) Software Engineering, awarded by Cardiff Metropolitan University, UK. <br></br>
          I enjoy working on a wide range of projects and constantly expanding my skill set.
          </p>
        
        <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:max-0'>
          <button className='btn btn-lg'>Contact Me</button>
          <a href='contact' className='text-gradient btn-link'>
            My portfolio
          </a>
        </div>

        <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 items-center'>
          <a href='https://github.com/janidulnkg1'>
            <FaGithub></FaGithub>
          </a>
          <a href='https://www.linkedin.com/in/janidu-lankage-12336767/'>
            <FaLinkedin></FaLinkedin>
            </a>     
        </div>

      </div>
      
  </section>
  );
};

export default Banner;
