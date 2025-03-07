import React from 'react'
import { motion } from 'framer-motion'
import Icon from 'react-icons-kit'
import { github } from 'react-icons-kit/icomoon/github'
import { instagram } from 'react-icons-kit/fa/instagram'
import { linkedin } from 'react-icons-kit/icomoon/linkedin'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: github,
      url: 'https://github.com/muradbalayev',
      label: 'GitHub'
    },
    {
      icon: instagram,
      url: 'https://www.instagram.com/muraesthetics',
      label: 'Instagram'
    },
    {
      icon: linkedin,
      url: 'https://www.linkedin.com/in/murad-balazade',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className='relative overflow-hidden border-t border-gray-700'>
      {/* Animated background gradient */}


      <div className='max-w-[1440px] mx-auto py-12 px-4'>
        <div className='grid md:grid-cols-3 gap-8 items-center'>
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center md:text-left'
          >
            <h3 className='text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent'>
              Murad.dev
            </h3>
          </motion.div>

          {/* Copyright Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-center text-gray-400'
          >
            <p>© {currentYear} Murad Balazada. All rights reserved.</p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='flex justify-center md:justify-end gap-4'
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className='w-10 h-10 flex items-center justify-center rounded-lg 
                  bg-secondary/50 border border-gray-700 hover:border-primary 
                  transition-colors group cursor-pointer'
                aria-label={social.label}
              >
                <Icon 
                  icon={social.icon} 
                  size={20} 
                  className='text-gray-400 group-hover:text-primary transition-colors'
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
