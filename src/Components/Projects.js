import React from 'react'
import gymsite from "./assets/gymsite.png"
import weatherapp from "./assets/weatherapp.png"
import proteinshop from "./assets/proteinshop.png"
import restaurant from "./assets/restaurant.png"
import { useTypewriter } from 'react-simple-typewriter'


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
           <div className='card rounded-3xl border border-slate-300 max-w-md px-3 py-5 flex flex-col justify-betwenn items-center'>
            <div className='card-img rounded-2xl max-w-92 h-56 border border-slate-900'>
            <img src={gymsite} alt='site'/>
            </div>
            <div className='card-text mt-2 w-full p-3 flex flex-col justify-between items-center gap-3'>
                <p className='font-medium text-center'>Responsive Multi-Page Gym Website with HTML, CSS, and JS.</p>
                <div className='buttons flex gap-3'>
            <button className='py-2 px-5 border group hover:scale-110 hover:bg-black rounded-xl transition-all duration-300 ease-linear bg-white font-semibold'>
            <a className=' group-hover:text-white' target='_blank' rel="noreferrer" href='https://muradsgymsite.netlify.app'>Demo</a>
            </button>
            <button className='py-2 px-5 group border hover:scale-110 hover:bg-black hover:text-gray-100 rounded-xl transition-all duration-300 ease-linear bg-white font-semibold'>
            <a className='group-hover:text-white' target='_blank' rel="noreferrer" href='https://github.com/muradbalayev/GymSite'>Github</a>
            </button>
                </div>
            </div>
           </div>
           <div className='card rounded-3xl border border-slate-300 max-w-md p-4 flex flex-col justify-betwenn items-center'>
            <div className='card-img rounded-2xl max-w-92 h-56 border border-slate-900'>
            <img src={weatherapp} alt='site'/>
            </div>
            <div className='card-text mt-2 w-full p-3 flex flex-col justify-between items-center gap-3'>
                <p className='font-medium text-center'>A Real-Time Responsive Weather Forecast Site was created using the Tailwind and Vite APIs.</p>
                <div className='buttons flex gap-3'>
            <button className='py-2 px-5 group border hover:scale-110 hover:bg-black hover:text-gray-100 rounded-xl transition-all duration-300 ease-linear bg-white font-semibold'>
            <a className='group-hover:text-white' target='_blank' rel="noreferrer" href='https://havaproqnozuapi.netlify.app/'>Demo</a>

            </button>
            <button className='py-2 px-5 group border hover:scale-110 hover:bg-black rounded-xl transition-all duration-300 ease-linear bg-white font-semibold'>
            <a className='group-hover:text-white' target='_blank' rel="noreferrer" href='https://github.com/muradbalayev/WeatherApp-Vite-Tailwind'>Github</a>

            </button>
                </div>
            </div>
           </div>
           <div className='card rounded-3xl border border-slate-300 max-w-md p-4 flex flex-col justify-betwenn items-center'>
            <div className='card-img rounded-2xl max-w-92 h-56 border border-slate-900'>
            <img src={proteinshop} alt='site'/>
            </div>
            <div className='card-text mt-2 w-full p-3 flex flex-col justify-between items-center gap-3'>
                <p className='font-medium text-center'>A Responsive Protein Shop Site was created using the Html, Css and JS.</p>
                <div className='buttons flex gap-3'>
            <button className='py-2 px-5 group border hover:scale-110 hover:bg-black  rounded-xl transition-all duration-300 ease-linear bg-white font-semibold'>
                <a className='group-hover:text-white' target='_blank' rel="noreferrer" href='https://anabolicshop.netlify.app'>Demo</a>
                </button>
            <button className='py-2 px-5 group border hover:scale-110 hover:bg-black rounded-xl transition-all duration-300 ease-linear bg-white font-semibold'>
            <a className='group-hover:text-white' target='_blank' rel="noreferrer" href='https://github.com/muradbalayev/AnabolicShop'>Github</a>

            </button>
                </div>
            </div>
           </div>
           <div className='card rounded-3xl border border-slate-300 max-w-md p-4 flex flex-col justify-betwenn items-center'>
            <div className='card-img rounded-2xl max-w-92 h-56 border border-slate-900'>
            <img src={restaurant} alt='site'/>
            </div>
            <div className='card-text mt-2 w-full p-3 flex flex-col justify-between items-center gap-3'>
                <p className='font-medium text-center'>Responsive Restaurant Website with HTML, CSS, and JS.</p>
                <div className='buttons flex gap-3'>
            <button className='py-2 px-5 group border hover:scale-110 hover:bg-black hover:text-gray-100 rounded-xl transition-all duration-300 ease-linear bg-white font-semibold'>
            <a className='group-hover:text-white' target='_blank' rel="noreferrer" href='https://simplerestaurantwebsite.netlify.app'>Demo</a>
            </button>
            <button className='py-2 px-5 group border hover:scale-110 hover:bg-black hover:text-gray-100 rounded-xl transition-all duration-300 ease-linear bg-white font-semibold'>
            <a className='group-hover:text-white' target='_blank' rel="noreferrer" href='https://github.com/muradbalayev/Restaurant'>Github</a>
            </button>
                </div>
            </div>
           </div>
          </div>
           <h1 className='text-2xl text-center font-bold mt-6'>New projects coming soon{text} </h1>
            </div>
        </section>
    )
}

export default Projects
