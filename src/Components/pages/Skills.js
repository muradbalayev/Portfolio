import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend",
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Redux",
                "Tailwind CSS",
                "Bootstrap",
                "SASS",
                "React Query",
                "Redux Toolkit Query",
            ]
        },
        {
            category: "Backend",
            skills: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST API",
            ]
        },
        {
            category: "UI Libraries",
            skills: [
                "Material UI",
                "Chakra UI",
                "Framer Motion",
                "GSAP",
                "Shadcn UI",
                "Tailwind CSS",
                "Aceternity UI",
            ]
        },
        {
            category: "Tools & Others",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "Netlify",
                "Vite",
                "Vercel",
                "Figma",
                "v0",
            ]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className='skills-section w-full mx-auto flex flex-col items-center py-20'>
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-center mb-16 text-4xl font-bold'
            >
                Skills & Technologies
            </motion.h1>
            
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 w-4/5 max-w-7xl'
            >
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className='skills-category p-6 rounded-xl bg-secondary border border-gray-700'
                    >
                        <h3 className='text-xl font-bold mb-4 text-blue-500'>
                            {category.category}
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                            {category.skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className='px-3 py-1 text-sm rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300'
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Skills
