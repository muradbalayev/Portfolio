import React from 'react'
import { motion } from 'framer-motion'
import profileimage from "../assets/profileImg.jpg"
import {github} from 'react-icons-kit/icomoon/github'
import {instagram} from 'react-icons-kit/fa/instagram'
import Icon from 'react-icons-kit'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
  const [text] = useTypewriter({
    words: ['oper'],
    loop: {},
    typeSpeed: 300,
    deleteSpeed: 200,
    delaySpeed: 4000
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      id="home" 
      className='profile mx-auto w-full flex items-center min-h-screen relative'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]">
        <motion.div 
          className="absolute right-1/2 -translate-y-1/2 rounded-full bg-primary/40 w-[300px] h-[300px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute left-1/2 translate-y-1/2 rounded-full bg-blue-400/30 w-[250px] h-[250px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1
          }}
        />
      </div>

      <div className='w-full max-w-[1200px] mx-auto px-4 min-1200:flex flex-col min-1200:flex-row-reverse justify-center items-center gap-16'>
        {/* Profile Image */}
        <motion.div 
          className='relative group lg:flex-shrink-0'
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className='img-container relative mx-auto flex items-center justify-center min-1200:w-[450px] min-1200:h-[450px] md:w-[420px] md:h-[420px] sm:w-[380px] sm:h-[380px] h-72 w-72 group-hover:shadow-[0_0_30px_rgba(20,87,231,0.3)]'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={profileimage} alt='profileimage' className='relative z-10 w-full h-full mx-auto' />
            {/* Lighting effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
          </motion.div>
          {/* Animated border */}

        </motion.div>

        {/* Text Content */}
        <motion.div 
          className='section-text flex justify-center items-center p-3 min-1200:flex-1'
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          <div className='texts flex flex-col justify-center min-1200:items-start items-center gap-6 w-full'>
            <motion.span 
              variants={itemVariants}
              className='px-4 py-2 bg-blue-500/10 rounded-full text-blue-500 text-sm font-medium inline-block'
            >
              Front-End Developer
            </motion.span>

            <motion.h1 
              variants={itemVariants}
              className='md:text-6xl sm:text-5xl text-3xl font-bold min-1200:text-left text-center whitespace-nowrap'
            >
              React {" "}
              <span className='text-primary inline-flex min-w-[120px]'> Devel{text}</span>
              <Cursor cursorColor='var(--primary)'/>  
              <span className='inline-block'>🖥️</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className='min-1200:text-left text-center text-gray-400 text-lg'
            >
              Hi, I'm Murad Balazada. A passionate Front-end React Developer 
              <br className='hidden md:block' /> based in Baku, Azerbaijan. 📍
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className='flex items-center gap-0'
            >
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                className='text-white bg-primary px-3 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25'
                href='https://github.com/muradbalayev'
                rel="noreferrer"
                target='_blank'
              >
                <Icon icon={github} size={25}/>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                className='text-white bg-primary px-3 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25'
                href='https://www.instagram.com/muraesthetics'
                rel="noreferrer"
                target='_blank'
              >
                <Icon icon={instagram} size={25}/>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
