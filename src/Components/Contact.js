import React from 'react'
import Icon from 'react-icons-kit'
import {github} from 'react-icons-kit/icomoon/github'
import {map2} from 'react-icons-kit/icomoon/map2'
import {ic_email_outline} from 'react-icons-kit/md/ic_email_outline'
const Contact = () => {
    return (
        <section className='contact-section w-full mx-auto flex flex-col items-center py-10 px-2'>
            <h1 className='text-3xl text-blue-600 font-bold'>Contact Me</h1>
<div className='contacts w-full h-full flex lg:flex-row flex-col justify-center items-center gap-4 p-4 my-8'>
<div className='contact flex items-center ps-4 p-2 min-h-20 w-80 border rounded-lg gap-5'>
<div className='flex items-center max-w-16'>
<Icon className='text-blue-600' icon={map2} size={27}/>
</div>
<div className='flex flex-col gap-2 justify-center p-2'>
<h3 className='font-bold text-xl'>Location</h3>
<p>Baku, Azerbaijan</p>
</div>
</div>
<div className='contact flex items-center ps-4 p-2 min-h-20 w-80 border rounded-lg gap-5'>
<div className='flex items-center max-w-16'>
<Icon className='text-blue-600' icon={ic_email_outline} size={33}/>
</div>
<div className='flex flex-col gap-2 justify-center p-2'>
<h3 className='font-bold text-xl'>Mail</h3>
<p>muradbalazade6@gmail.com</p>
</div>
</div>
<div className='contact flex items-center ps-4 p-2 min-h-20 w-80 border rounded-lg gap-5'>
<div className='flex items-center max-w-16'>
    <Icon className='text-blue-600' size={30} icon={github}/>
</div>
<div className='flex flex-col gap-2 justify-center p-2'>
<h3 className='font-bold text-xl'>Github</h3>
<a className='hover:text-blue-600' target='_blank' rel="noreferrer" href='https://github.com/muradbalayev'>github.com/muradbalayev</a>
</div>
</div>
</div>
<p>Copyright © 2023 Murad Balazade. All Rights Reserved.</p>
        </section>
    )
}

export default Contact
