import './App.css'
import Profile             from './ResumeCards/Profile/Profile'
import WorkExperience      from './ResumeCards/WorkExperience/WorkExperience'
import Education           from './ResumeCards/Education/Education'
import VolunteerExperience from './ResumeCards/VolunteerExperience'
import Skills              from './ResumeCards/Skills'
import About               from './ResumeCards/About/About'
import Hobbies             from './ResumeCards/Hobbies'
import Icons from './components/Icons'
import { useRef } from 'react'

function App() {
    const profileRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const workRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const volunteerRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const hobbiesRef = useRef<HTMLDivElement>(null);

    return (
        <div className='scroll-smooth'>
            <Icons               
                profileRef={profileRef}  
                aboutRef={aboutRef}
                workRef={workRef}
                educationRef={educationRef}
                skillsRef={skillsRef}
                hobbiesRef={hobbiesRef}
                volunteerRef={volunteerRef}
            />
            <div className='scroll-smooth md:h-screen bg-slate-200 flex flex-col flex-wrap gap-3 p-4 md:grid grid-rows-7 grid-cols-12 md:p-3'>
                <div ref={profileRef} className='row-span-7 col-span-3 drop-shadow-md transition ease-in-out hover:drop-shadow-lg duration-300 order-1 md:order-1'>
                    <Profile />
                </div>
                <div ref={aboutRef} className='row-span-2 col-span-6 drop-shadow-md transition ease-in-out hover:drop-shadow-lg duration-300 order-2 md:order-2'>
                    <About />
                </div>
                <div ref={hobbiesRef} className='row-span-2 col-span-3 drop-shadow-md transition ease-in-out hover:drop-shadow-lg duration-300 order-7 md:order-2'>
                    <Hobbies />
                </div> 
                <div ref={workRef} className='row-span-3 col-span-5 drop-shadow-md transition ease-in-out hover:drop-shadow-lg duration-300 order-4 md:order-3'>
                    <WorkExperience />
                </div>
                <div ref={volunteerRef} className='row-span-2 col-span-4 drop-shadow-md transition ease-in-out hover:drop-shadow-lg duration-300 order-6 md:order-4'>
                    <VolunteerExperience />
                </div>
                <div ref={skillsRef}  className='row-span-3 col-span-4 drop-shadow-md transition ease-in-out hover:drop-shadow-lg duration-300 order-3 md:order-5'>
                    <Skills />
                </div>
                <div ref={educationRef} className='row-span-2 col-span-5 drop-shadow-md transition ease-in-out hover:drop-shadow-lg duration-300 order-5 md:order-6'>
                    <Education />                
                </div>     
            </div>
        </div>
    )
}

export default App;