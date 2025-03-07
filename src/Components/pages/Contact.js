import React from 'react'
import { motion } from 'framer-motion'
import Icon from 'react-icons-kit'
import { github } from 'react-icons-kit/icomoon/github'
import { linkedin } from 'react-icons-kit/icomoon/linkedin'
import { map2 } from 'react-icons-kit/icomoon/map2'
import { ic_email_outline } from 'react-icons-kit/md/ic_email_outline'
import resume from '../assets/cv/MuradBalazadaCv.pdf'
import { download } from 'react-icons-kit/feather/download'

const Contact = () => {
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

    const contactInfo = [
        {
            icon: map2,
            title: "Location",
            content: "Baku, Azerbaijan",
            link: null
        },
        {
            icon: ic_email_outline,
            title: "Mail",
            content: "muradbalazade@yahoo.com",
            link: "mailto:muradbalazade@yahoo.com"
        },
        {
            icon: github,
            title: "Github",
            content: "github.com/muradbalayev",
            link: "https://github.com/muradbalayev"
        },
        {
            icon: linkedin,
            title: "LinkedIn",
            content: "Murad Balazada",
            link: "https://www.linkedin.com/in/murad-balazade"
        }
    ];

    return (
        <section id="contact" className='contact-section w-full mx-auto py-6 px-4 md:py-20'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className='max-w-[1440px] mx-auto'
            >
                <motion.div variants={itemVariants} className='text-center space-y-4 mb-16'>
                    <h1 className='text-4xl font-bold'>Get In Touch</h1>
                    <p className='text-gray-400 max-w-2xl mx-auto'>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                        I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className='grid lg:grid-cols-2 gap-8 mb-12'>
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            onClick={() => info.link && window.open(info.link, '_blank')}
                            className={`group relative bg-secondary/50 rounded-xl overflow-hidden border border-gray-700 p-6 
                                ${info.link ? 'cursor-pointer' : ''}`}
                        >
                            <div className='flex items-center gap-6'>
                                <div className='flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors'>
                                    <Icon className='text-primary' icon={info.icon} size={24} />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='font-bold text-xl'>{info.title}</h3>
                                    <p className={`text-gray-400 ${info.link ? 'group-hover:text-primary' : ''} transition-colors`}>
                                        {info.content}
                                    </p>
                                </div>
                            </div>
                            {/* Gradient effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    variants={itemVariants}
                    className='flex justify-center'
                >
                    <motion.a
                        href={resume}
                        download='MuradBalazadaResume'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='relative inline-flex items-center justify-center group'
                    >
                        <span className='relative px-8 py-4 bg-secondary text-white font-semibold rounded-lg 
                            transition-all duration-300 ease-in-out border border-gray-700 
                            hover:border-primary hover:shadow-lg hover:shadow-primary/25
                            flex items-center gap-3'
                        >
                            <Icon icon={download} size={20} className='text-primary' />
                            Download CV
                            <span className='absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 
                                opacity-0 group-hover:opacity-100 group-hover:animate-shimmer'
                            />
                        </span>
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact
