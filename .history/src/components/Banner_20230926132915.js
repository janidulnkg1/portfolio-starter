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
           <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt=''  />
          </div>
        </div> 
        

      </div>
      
  </section>
  );
};

export default Banner;
