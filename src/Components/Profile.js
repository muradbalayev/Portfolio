import React from 'react'
import profileimage from "./assets/profile.jpeg"
import githubimg from "./assets/github.png"
import linkedinimg from "./assets/linkedin.png"
import waveemoji from "./assets/waving.png"
import TrackVisibility from 'react-on-screen';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Profile = () => {
  const [text] = useTypewriter({
    words: ['oper'],
    loop: {},
    typeSpeed: 300,
    deleteSpeed: 200,
    delaySpeed: 4000
  });

  return (
    <TrackVisibility
      once>
      {({ isVisible }) =>
        <section className='profile mx-auto pb-6 w-full flex items-center'>
          <div className=' lg:w-5/6 w-full mx-auto lg:flex flex-col lg:flex-row-reverse justify-center items-center gap-10'>
            <div className={`section-profile-img  flex justify-center items-center p-3 ${ isVisible ? "animate__animated animate__fadeInRight" : " "}`}>
              <div className='img-container flex items-center w-80 h-80'>
                <img src={profileimage} alt='profileimage' />
              </div>
            </div>
            <div className='section-text flex justify-center items-center p-3'>
              <div className='texts flex flex-col justify-center items-start gap-5 max-w-96'>
                <h1 className={`text-4xl relative font-bold whitespace-nowrap  ${ isVisible ? "animate__animated animate__fadeInUp" : " "}`}>
                  Front-End React<br />Devel{text} <Cursor cursorColor='red'/>
                 <img className='absolute top-8 right-8' width={50} src={waveemoji} alt='wave' /></h1>
                <p className={`section-text-p1 font-medium ${ isVisible ? "animate__animated animate__fadeInDown" : " "}`}>Hi, I'm Murad Balazada. A passionate Front-end React Developer based in Baku, Azerbaijan. 📍</p>
                <div className={`socials flex gap-3 ${ isVisible ? "animate__animated animate__fadeInDown" : " "}`}>
                  <img className='cursor-pointer icon' src={githubimg} alt='github' />
                  <img className='cursor-pointer icon' src={linkedinimg} alt='linkedin' />
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </TrackVisibility>
  )
}

export default Profile
