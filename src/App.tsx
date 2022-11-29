import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './components/Profile'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import VolunteerExperience from './components/VolunteerExperience'
import Skills from './components/Skills'
import About from './components/About'
import Hobbies from './components/Hobbies'

function App() {
    return (
        <div className='scroll smooth snap-y snap-mandatory h-auto md:h-screen bg-slate-200 flex flex-col flex-wrap md:grid grid-rows-7 grid-cols-12 gap-3 p-3'>
            <div className='row-span-7 col-span-3 drop-shadow-lg order-1 md:order-1'>
                <Profile />
            </div>
            <div className='row-span-2 col-span-6 drop-shadow-lg order-2 md:order-2'>
                <About />
            </div>
            <div className='row-span-2 col-span-3 drop-shadow-md order-7 md:order-2'>
                <Hobbies />
            </div> 
            <div className='row-span-3 col-span-5 drop-shadow-md order-4 md:order-3'>
                <WorkExperience />
            </div>
            <div className='row-span-2 col-span-4 drop-shadow-md order-6 md:order-4'>
                <VolunteerExperience />
            </div>
            <div className='row-span-3 col-span-4 drop-shadow-md order-3 md:order-5'>
                <Skills />
            </div>
            <div className='row-span-2 col-span-5 drop-shadow-md order-5 md:order-6'>
                <Education />                
            </div>     
        </div>
    )
}

export default App;