        import React from 'react'
import aboutimg from "./assets/about.jpeg"
import circletext from "./assets/text2.svg"
import workingemoji from "./assets/working-emoji.png"
import TrackVisibility from 'react-on-screen'
const About = () => {
  return (
    <TrackVisibility>
      {({ isVisible }) =>
        <section id='about' className={`about mt-6 w-full mx-auto flex-col items-center justify-center `}>
          <h1 className={`text-center m-3 mb-8 text-4xl font-bold ${isVisible ? 'animate__animated animate__fadeInUp' : ' '}`}>About Me</h1>
          <div className='w-full mx-auto lg:flex flex-col lg:flex-row justify-center items-center gap-20'>
            <div className={`section-about-img m-2 flex justify-center items-center ${isVisible ? 'animate__animated animate__fadeInLeft' : ' '}`}>
              <div className='about-img md:max-w-md max-w-80  relative'>
                <img className='aboutimg' src={aboutimg} alt='img' />
                <img className='absolute bottom-0 right-0 z-10' width={65} src={workingemoji} alt='text' />
                <div className='circle absolute -right-10 -bottom-10 max-w-36'>
                  <img src={circletext} alt='text' />
                </div>
              </div>
            </div>
            <div className={`section-text flex flex-col justify-center lg:items-start items-center p-3 mt-5 ${isVisible ? 'animate__animated animate__fadeInRight' : ' '}`}>
              <div className='texts p-2 flex flex-col justify-center items-start gap-5 max-w-96'>
                <h1 className='text-2xl lg:text-left text-center relative font-bold  '>
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
              <div className='w-80 mt-6 rounded-xl border-2 border-gray-400 flex flex-col items-center justify-center p-3 '>
                <p className='text-black font-medium'>Experience: 1+ years</p>
                <p className='text-black font-medium'>Front-end Development</p>

              </div>
            </div>
          </div>
        </section>}
    </TrackVisibility>
  )
}

export default About

