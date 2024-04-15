import React from 'react'
import iticket from './assets/iticket.png'
import gymsite from "./assets/gymsite.png"
import weatherapp from "./assets/weatherapp.png"
import proteinshop from "./assets/proteinshop.png"
import restaurant from "./assets/restaurant.png"
import azerqaz from './assets/azerqaz.png'
import { useTypewriter } from 'react-simple-typewriter'

const cardData = [
    {
      title: 'iTicket.AZ Clone w/React + Vite + Tailwind',
      image: iticket,
      demoLink: 'https://iticketclonebymourad.vercel.app',
      githubLink: 'https://github.com/muradbalayev/iticketclone'
    },
    {
      title: 'This React website incorporates login authentication, a dashboard featuring CRUD operations for managing users, posts, products, and more. Additionally, it includes a To-Do App integrated with an API. Username: kminchelle, Password:0lelplR',
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
    {
      title: 'A Real-Time Responsive Weather Forecast Site',
      image: weatherapp,
      demoLink: 'https://havaproqnozuapi.netlify.app/',
      githubLink: 'https://github.com/muradbalayev/WeatherApp-Vite-Tailwind'
    },
    {
      title: 'A Responsive Protein Shop Site',
      image: proteinshop,
      demoLink: 'https://anabolicshop.netlify.app',
      githubLink: 'https://github.com/muradbalayev/AnabolicShop'
    },
    {
      title: 'Responsive Restaurant Website with HTML, CSS, and JS',
      image: restaurant,
      demoLink: 'https://simplerestaurantwebsite.netlify.app',
      githubLink: 'https://github.com/muradbalayev/Restaurant'
    }
  ];


const Projects = () => {
    const [text] = useTypewriter({
        words: ['...'],
        loop: {},
        typeSpeed: 300,
        deleteSpeed: 200,
        delaySpeed: 2000
    });

    return (
        <section id="projects" className='projects-section w-full mx-auto flex flex-col items-center py-10 '>
            <h1 className={`text-center m-3 mb-3 text-4xl font-bold `}>Projects</h1>
            <div className='projects p-4 mt-10 mx-auto flex flex-col flex-wrap justify-center items-center gap-4'>
                <div className='cards p-2 w-full flex lg:flex-row flex-col justify-center flex-wrap gap-6'>
                {cardData.map((card, index) => (
                    <div className='card rounded-xl border border-slate-300 max-w-md p-4 flex flex-col justify-between items-center'>
                        <div className='flex flex-col'>
                        <div className='card-img rounded-xl max-w-92 h-56 border shadow-md'>
                            <img src={card.image} alt='site' />
                        </div>
                            <p className='card-title font-medium text-center mt-5'>{card.title}</p>
                            </div>
                        <div className='card-text mt-2 w-full p-3 flex flex-col justify-between items-center gap-3'>
                            <div className='buttons flex gap-3'>
                                    <a target='_blank' rel="noreferrer" href={card.demoLink}>
                                <button className='py-2 px-5 border hover:text-white hover:scale-110 hover:bg-black rounded-lg transition-all duration-300 ease-linear bg-white font-semibold'>
                                        Demo
                                </button>
                                        </a>
                                    <a target='_blank' rel="noreferrer" href={card.githubLink}>
                                <button className='py-2 px-5 group border hover:text-white hover:scale-110 hover:bg-black rounded-lg transition-all duration-300 ease-linear bg-white font-semibold'>
                                        Github
                                </button>
                                        </a>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <h1 className='text-2xl text-center font-bold mt-6'>New projects coming soon{text} </h1>
            </div>
        </section>
    )
}

export default Projects
