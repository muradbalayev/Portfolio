import React from 'react'
import iticket from '../assets/iticket.png'
import gymsite from "../assets/gymsite.png"
import azerqaz from '../assets/azerqaz.png'
import threads from '../assets/threads.png'
import coffeeme from '../assets/coffeeme.png'
import evo from '../assets/evoAcademy.png'
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const cardData = [
  {
    title: "Discover the SEO-friendly EvoAcademy website built with React, Tailwind CSS, and Framer Motion. This dynamic, interactive platform features a visually captivating front-end and a comprehensive admin panel, empowering efficient management and delivering a seamless user experience.",
    image: evo,
    demoLink: 'https://www.evoacademy.az/',
  },
  {
    title: 'Developing and maintaining the landing page, admin panel and partner application for CoffeeMe using React, Redux Toolkit and Redux Toolkit Query.',
    image: coffeeme,
    demoLink: 'https://coffeeme.app',
    githubLink: 'https://github.com/muradbalayev/CoffeeMe---LandPage'
  },
  {
    title: 'FullStack ThreadsClone w/React + Vite + ChakraUI + MongoDB + Socket.io',
    image: threads,
    demoLink: 'https://threadscloneproduction.onrender.com',
    githubLink: 'https://github.com/muradbalayev/ThreadsClone'
  },
  {
    title: 'iTicket.AZ w/React + Vite + Tailwind',
    image: iticket,
    demoLink: 'https://iticketclonebymourad.vercel.app',
    githubLink: 'https://github.com/muradbalayev/iticketclone'
  },
  {
    title: 'This React website incorporates login authentication, a dashboard featuring CRUD operations for managing users, posts, products, and more. Additionally, it includes a To-Do App integrated with an API. Username: emilys, Password:emilyspass',
    image: azerqaz,
    demoLink: 'https://azerqaz.netlify.app',
    githubLink: 'https://github.com/muradbalayev/Azerqaz'
  },
  {
    title: 'Responsive Multi-Page Gym Website with HTML, CSS, and JS',
    image: gymsite,
    demoLink: 'https://muradsgymsite.netlify.app',
    githubLink: 'https://github.com/muradbalayev/GymSite'
  },
];


const Projects = () => {

  const [text] = useTypewriter({
    words: ['...'],
    loop: {},
    typeSpeed: 300,
    deleteSpeed: 200,
    delaySpeed: 2000
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
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className='projects-section w-full mx-auto min-1200:py-20 py-6 px-4'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className='max-w-7xl mx-auto'
      >
        <motion.h1
          variants={itemVariants}
          className='text-center mb-16 text-4xl font-bold'
        >
          Featured Projects
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className='grid lg:grid-cols-2 gap-8'
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className='group relative bg-secondary/50 rounded-xl overflow-hidden border border-gray-700'
            >
              <div className='relative aspect-video overflow-hidden'>
                <img
                  src={card.image}
                  alt='project preview'
                  className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:filter-none filter brightness-75'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent' />
              </div>

              <div className='p-6 space-y-4'>
                <h3 className='md:text-lg font-semibold text-gray-300'>
                  {card.title.split(' w/')[0]}
                </h3>

                <p className='text-gray-400 text-sm'>
                  {card.title.includes('w/') ? `Tech Stack: ${card.title.split('w/')[1]}` : ''}
                </p>

                <div className='flex gap-4'>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={card.demoLink}
                    target='_blank'
                    rel="noreferrer"
                    className='px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors'
                  >
                    Live
                  </motion.a>
                  {card.githubLink &&
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={card.githubLink}
                      target='_blank'
                      rel="noreferrer"
                      className='px-6 py-2 rounded-lg border border-gray-700 hover:border-blue-500 hover:text-blue-500 transition-colors'
                    >
                      Source Code
                    </motion.a>
                  }

                </div>
              </div>

              <div className='absolute inset-0 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500 -z-10' />
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className='text-2xl text-center font-bold mt-16 text-gray-400'
        >
          New projects coming soon{text}
        </motion.h2>
      </motion.div>
    </section>
  )
}

export default Projects
