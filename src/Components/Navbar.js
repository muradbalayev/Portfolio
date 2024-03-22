import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { alignRight } from 'react-icons-kit/feather/alignRight'
import { close } from 'react-icons-kit/ionicons/close'
const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full mx-auto '>
      <nav className='flex justify-between items-center'>
        <div className='nav-left'>
          <h3 className='font-bold cursor-pointer relative'>Murad.dev</h3>
        </div>
        <div className='nav-right md:block hidden'>
          <ul className='flex list-none gap-3'>
            <li className='font-bold cursor-pointer hover:text-white hover:bg-slate-900'>Contact</li>
            <li className='font-bold cursor-pointer hover:text-white hover:bg-slate-900'> Home</li>
            <li className='font-bold cursor-pointer hover:text-white hover:bg-slate-900'>About</li>
            <li className='font-bold cursor-pointer hover:text-white hover:bg-slate-900'>Projects</li>
          </ul>
        </div>
        <button onClick={() => { setOpen(true) }}
          className='md:hidden block transition-colors rounded-lg p-2 hover:text-white hover:bg-slate-800 cursor-pointer'>
          <Icon icon={alignRight} size={25} />
        </button>
      </nav>

      <div className={`navbar absolute top-0 right-0 flex justify-center items-center h-screen transition-all duration-700 z-50 ${open ? 'w-full flex-grow' : '  w-0'}`}>
        <button onClick={() => { setOpen(false) }}
          className={`p-1 transition-colors absolute hover:text-red-500 top-5 right-5 z-50 ${open ? 'block' : 'hidden'}`}>
          <Icon icon={close} size={30} />
        </button>
<div className={`w-full relative ${open ? 'block' : 'hidden'}`}>
        <ul className='list-none w-full'>
          <li className='font-bold text-center text-2xl cursor-pointer text-white hover:bg-slate-900'>Contact</li>
          <li className='font-bold text-center text-2xl cursor-pointer text-white hover:bg-slate-900'> Home</li>
          <li className='font-bold text-center text-2xl cursor-pointer text-white hover:bg-slate-900'>About</li>
          <li className='font-bold text-center text-2xl cursor-pointer text-white hover:bg-slate-900'>Projects</li>
        </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar
