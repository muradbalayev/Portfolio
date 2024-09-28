import React from 'react'
import Icon from 'react-icons-kit'
import { github } from 'react-icons-kit/icomoon/github'
import { linkedin } from 'react-icons-kit/icomoon/linkedin'
import { map2 } from 'react-icons-kit/icomoon/map2'
import { ic_email_outline } from 'react-icons-kit/md/ic_email_outline'
// import resume from '../assets/MuradBalazadaCv.pdf'

const Contact = () => {
    return (
        <section id="contact" className='contact-section w-full mx-auto flex flex-col items-center py-36 px-2 my-10'>
            <h1 className='text-3xl text-blue-600 font-bold'>Contact Me</h1>
            {/* <div className='my-6'>
                <a
                    href={resume} 
                    download='MuradBalazadəResume'
                    className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 hover:shadow-xl transition-all duration-300 ease-in-out'
                >
                    Download CV
                </a>
            </div> */}


            <div className='contacts w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 mb-8'>
                <div className='contact flex items-center ps-4 p-2  border rounded-lg gap-5'>
                    <div className='flex items-center max-w-16'>
                        <Icon className='text-blue-600' icon={map2} size={27} />
                    </div>
                    <div className='flex flex-col gap-2 justify-center p-2'>
                        <h3 className='font-bold text-xl'>Location</h3>
                        <p>Baku, Azerbaijan</p>
                    </div>
                </div>
                <div className='contact flex items-center ps-4 p-2 border rounded-lg gap-5'>
                    <div className='flex items-center max-w-16'>
                        <Icon className='text-blue-600' icon={ic_email_outline} size={33} />
                    </div>
                    <div className='flex flex-col gap-2 justify-center p-2'>
                        <h3 className='font-bold text-xl'>Mail</h3>
                        <p>muradbalazade@yahoo.com</p>
                    </div>
                </div>
                <div className='contact flex items-center ps-4 p-2  border rounded-lg gap-5'>
                    <div className='flex items-center max-w-16'>
                        <Icon className='text-blue-600' size={30} icon={github} />
                    </div>
                    <div className='flex flex-col gap-2 justify-center p-2'>
                        <h3 className='font-bold text-xl'>Github</h3>
                        <a className='hover:text-blue-600' target='_blank' rel="noreferrer" href='https://github.com/muradbalayev'>github.com/muradbalayev</a>
                    </div>
                </div>
                <div className='contact flex items-center ps-4 p-2 border rounded-lg gap-5'>
                    <div className='flex items-center max-w-16'>
                        <Icon className='text-blue-600' size={30} icon={linkedin} />
                    </div>
                    <div className='flex flex-col gap-2 justify-center p-2 overflow-hidden'>
                        <h3 className='font-bold text-xl'>Linkedin</h3>
                        <a className='hover:text-blue-600' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/murad-balazade-b07593267/'>https://www.linkedin.com/in/murad-balazade-b07593267/</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
