        import React from 'react'
import aboutimg from "../assets/about.jpeg"
import circletext from "../assets/text2.svg"
import workingemoji from "../assets/working-emoji.png"
const About = () => {
  return (
 
        <section id="about" className={`about mt-6 w-full mx-auto flex-col items-center justify-center `}>
          <h1 className={`text-center m-3 mb-8 text-4xl font-bold `}>About Me</h1>
          <div className='w-full mx-auto lg:flex flex-col lg:flex-row justify-center items-center gap-20'>
            <div className={`section-about-img m-2 flex justify-center items-center `}>
              <div className='about-img md:max-w-md max-w-80  relative'>
                <img className='aboutimg' src={aboutimg} alt='img' />
                <img className='absolute bottom-0 right-0 z-10' width={65} src={workingemoji} alt='text' />
                <div className='circle absolute -right-10 -bottom-10 max-w-36'>
                  <img src={circletext} alt='text' />
                </div>
              </div>
            </div>
            <div className={`section-text flex flex-col justify-center lg:items-start items-center p-3 mt-5`}>
              <div className='texts p-2 flex flex-col justify-center items-start gap-5 max-w-96'>
                <h1 className='text-2xl text-center relative font-bold  '>
                  Front-end Developer
                  based in Baku, Azerbaijan 📍
                </h1>
                <p className='section-text-p1 font-medium lg:text-start text-center'>Hey, my name is Murad, and I'm a Frontend Developer. My passion is to create and develop a clean Web Site for my users. 📍</p>
                <p className='section-text-p1 font-medium lg:text-start text-center'>My main stack currently is React.js in combination with Tailwind CSS and TypeScript.</p>
              </div>
              <div className='w-full flex flex-col justify-center p-2'>
                <p className='font-medium lg:text-left text-center'><b>Name</b>: Murad Balazada</p>
                <p className='font-medium lg:text-left text-center'><b>Education</b>: Process Automation Engineer</p>
                <p className='font-medium lg:text-left text-center'><b>University</b>: ASOIU</p>
                <p className='font-medium lg:text-left text-center'><b>Email</b>: muradbalazade6@gmail.com</p>
              </div>
              <div className=' mt-6 rounded-xl border-2 border-gray-400 flex flex-col text-left justify-center p-3 '>
                <p className='text-black font-medium text-center'>Experience: Front-end Development</p>
                <p className='text-black font-base text-left'>Front-end Developer - EvoCoding</p>
                <p className='text-black font-base text-left'>Front-end Developer - Algorithmics</p>
                <p className='text-black font-base'>Front-end Developer - Caspian Innovation Center</p>


              </div>
            </div>
          </div>
        </section>
  )
}

export default About

