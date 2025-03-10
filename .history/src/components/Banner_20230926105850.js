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
              <div>
                <span>I am </span>
                <TypeAnimation sequence={[
                   'a Software Engineer', 
                   2000,
                   'a Full Stack Developer',
                   2000,
                   'an Online Tutor',
                   2000,
                ]}
                  speed={50}
                  className='text-accent'
                  repeat={in}
                />
              </div>

            </div>
            <img src={Image} alt='' />
        </div>
      </div>
  </section>
  );
};

export default Banner;
