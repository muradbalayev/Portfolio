import React from 'react'
import { motion } from 'framer-motion'
import aboutimg from "../assets/about.jpeg"
import workingemoji from "../assets/working-emoji.png"
import circletext from "../assets/text2.svg"
const About = () => {
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
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className='about w-full mx-auto min-1200:py-20 py-6 px-4'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className='max-w-[1440px] mx-auto'
      >
        <motion.h1 
          variants={itemVariants}
          className='text-center mb-16 text-4xl font-bold'
        >
          About Me
        </motion.h1>

        <div className='grid min-1200:grid-cols-2 gap-16 items-center'>
          <motion.div 
            variants={itemVariants}
            className='relative group'
          >
            <div className='relative z-10 min-1200:h-[600px]  md:max-h-[500px]  sm:max-h-[380px] h-72'>
              <img 
                className='rounded-2xl h-full w-full object-cover  shadow-xl'
                src={aboutimg} 
                alt='Profile' 
              />
              <div className='circle absolute min-1200:-right-8 -right-2 -bottom-10 min-1200:max-w-36 max-w-24'>
                  <img src={circletext} alt='text' />
                </div>
              <img 
                className='absolute min-1200:bottom-0 min-1200:right-[2px] -bottom-3 right-[14px] z-20 min-1200:w-[76px] w-[52px]'
                src={workingemoji} 
                alt='emoji'
              />
            </div>
            <div className='absolute inset-0 bg-blue-500/10 rounded-2xl blur-3xl group-hover:bg-blue-500/20 transition-all duration-500' />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className='space-y-6'
          >
            <div className='space-y-4'>
              <h2 className='text-2xl font-bold text-blue-500'>
                Front-end Developer
                <span className='text-gray-400 ml-2'>based in Baku, Azerbaijan 📍</span>
              </h2>
              <p className='text-gray-400 leading-relaxed'>
                Hey, my name is Murad, I'm 21, and I'm a Frontend Developer. 
                My passion is to create and develop clean, user-friendly websites that provide 
                exceptional user experiences.
              </p>
              <p className='text-gray-400 leading-relaxed'>
                My core stack is React.js and Redux, enhanced with Tailwind CSS for styling. 
                I'm constantly learning and adapting to new technologies to stay at the forefront 
                of web development.
              </p>
            </div>

            <div className='space-y-3 bg-secondary/50 p-6 rounded-xl border border-gray-700'>
              <h3 className='text-xl font-semibold mb-4'>Personal Information</h3>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <p className='text-gray-400'><span className='text-blue-500 font-medium'>Name:</span> Murad Balazada</p>
                  <p className='text-gray-400'><span className='text-blue-500 font-medium'>Education:</span> Process Automation Engineer</p>
                </div>
                <div className='space-y-2'>
                  <p className='text-gray-400'><span className='text-blue-500 font-medium'>University:</span> ASOIU, ATU</p>
                  <p className='text-gray-400'><span className='text-blue-500 font-medium'>Email:</span> muradbalazade@yahoo.com</p>
                </div>
              </div>
            </div>

            <div className='space-y-3 bg-secondary/50 p-6 rounded-xl border border-gray-700'>
              <h3 className='text-xl font-semibold mb-4'>Experience</h3>
              <div className='space-y-2'>
                <p className='text-gray-400'><span className='text-blue-500 font-medium'>Front-end Dev Intern</span> - Caspian Innovation Center | 02.2024 - 06.2024</p>
                <p className='text-gray-400'><span className='text-blue-500 font-medium'>Front-end Dev Mentor</span> - EvoAcademy | 07.2024 - 10.2024</p>
                <p className='text-gray-400'><span className='text-blue-500 font-medium'>React Developer</span> - CoffeeMe | 08.2024 - Present</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

