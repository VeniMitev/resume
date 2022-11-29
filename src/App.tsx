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
        <div className='h-screen bg-slate-200 flex flex-col flex-wrap md:grid grid-rows-7 grid-cols-12 gap-3 p-3 2xl:p-4 2xl:gap-4'>
            <div className='row-span-7 col-span-3 drop-shadow-lg'>
                <Profile />
            </div>
            <div className='row-span-2 col-span-7 drop-shadow-lg'>
                <About />
            </div>
            <div className='row-span-2 col-span-2 drop-shadow-md'>
                <Hobbies />
            </div> 
            <div className='row-span-3 col-span-5 drop-shadow-md'>
                <WorkExperience />
            </div>
            <div className='row-span-2 col-span-4 drop-shadow-md'>
                <VolunteerExperience />
            </div>
            <div className='row-span-3 col-span-4 drop-shadow-md'>
                <Skills />
            </div>
            <div className='row-span-2 col-span-5 drop-shadow-md'>
                <Education />                
            </div>     
            {/* <div className='row-span-1 col-span-4 drop-shadow-md'>
                <Hobbies />
            </div>          */}
        </div>
    )
}

export default App;