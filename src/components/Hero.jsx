import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';



const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className="relative group ">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-[60px] blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative bg-transparent leading-none flex text-center">
            <span>
              
              <p className={`${styles.heroHeadText} text-[#D3D3D3] bg-transparent `}>
                Hi, I'm <span className='text-[#FFFFCC]'>Laxman</span>
              </p>
              <p className={`${styles.sectionHeadText} text-[#D3D3D3] m-2`}>
                I am a <span className='text-[#FFFFCC]'>Software Engineer</span> </p>
              <p className={`${styles.heroSubText} text-[#E6E6FA] m-10 italic hover:not-italic`}>
              Welcome to my digital domain, exploring intersection between code and creativity.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;