import React from 'react'
import htmlpng from "../assets/html.png"
import csspng from "../assets/css.png"
import jspng from "../assets/js.png"
import reactpng from "../assets/react.svg"
import bootstrappng from "../assets/bootstrap.png"
import gitpng from "../assets/git.png"
import githubpng from "../assets/github.png"
import netlifypng from "../assets/netlify.png"
import postmanpng from "../assets/postman.png"
import reduxpng from "../assets/redux.svg"
import vite from "../assets/vite.png"
import tailwindpng from "../assets/tailwind.png"
import typescriptpng from "../assets/typescript.svg"
import next from "../assets/next.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import express from "../assets/express.png"
import chakra from "../assets/chakra.jpg"

// import TrackVisibility from 'react-on-screen'

const Skills = () => {
    return (
        <section id="skills" className='skills-section w-full mx-auto flex flex-col items-center py-10'>
            <h1 className={`text-center m-3 mb-10 text-4xl font-bold `}>Skills</h1>
            <p className='p-2 text-center'>Here are some of my skills on which I have been working on for the past 1 years.</p>
            <div className='skills w-4/5 p-4 mt-10 mx-auto flex flex-wrap justify-center items-center border rounded-3xl border-slate-400 gap-4 shadow-md'>
                <div className='skills-container py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={htmlpng} alt='skill' width={25} />
                    <p className='font-semibold'>HTML</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={csspng} alt='skill' width={25} />
                    <p className=' font-semibold'>CSS</p>
                </div>
                <div className='skills-container py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={jspng} alt='skill' width={25} />
                    <p className=' font-semibold'>JS</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={typescriptpng} alt='skill' width={25} />
                    <p className=' font-semibold'>TypeScript</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={tailwindpng} alt='skill' width={25} />
                    <p className=' font-semibold'>Tailwind</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-1'>
                    <img src={bootstrappng} alt='skill' width={35} />
                    <p className=' font-semibold'>Bootstrap</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={reactpng} alt='skill' width={35} />
                    <p className=' font-semibold'>React</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={next} alt='skill' width={35} />
                    <p className=' font-semibold'>Next.js</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={vite} alt='skill' width={35} />
                    <p className=' font-semibold'>Vite</p>
                </div>
                <div className='skills-container py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={githubpng} alt='skill' width={35} />
                    <p className=' font-semibold'>GitHub</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={gitpng} alt='skill' width={35} />
                    <p className=' font-semibold'>Git</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={reduxpng} alt='skill' width={35} />
                    <p className=' font-semibold'>Redux</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={postmanpng} alt='skill' width={35} />
                    <p className=' font-semibold'>Postman</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={netlifypng} alt='skill' width={35} />
                    <p className=' font-semibold'>Netlify</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={mongo} alt='skill' width={35} />
                    <p className=' font-semibold'>MongoDB</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={node} alt='skill' width={35} />
                    <p className=' font-semibold'>Node.js</p>
                </div>
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={express} alt='skill' width={35} />
                    <p className=' font-semibold'>Express.js</p>
                </div> 
                <div className='skills-container  py-2 px-4 border border-slate-400 rounded-2xl w-32 h-16 flex justify-center items-center gap-2'>
                    <img src={chakra} alt='skill' width={35} />
                    <p className=' font-semibold'>ChakraUI</p>
                </div>
            </div>

        </section>
    )
}

export default Skills
