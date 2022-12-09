import { FaMapMarkerAlt } from 'react-icons/fa';
import Card from '../../components/Card';
import GetInTouch from './GetInTouch';
import WorkSkills from './WorkSkills';

const Profile = () => {
    return (
        <Card className='h-min py-3 overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent'>
            <>
                <h1 className='flex flex-col items-center pt-8 md:pt-10 xl:pt-16 text-4xl text-slate-800 font-semibold'>
                    Venelin Mitev
                </h1>
                <h2 className='flex flex-col items-center pt-4 md:pt-7 text-lg text-slate-800'>
                    Full-Stack Developer with MERN Stack
                </h2>
                <p className='flex flex-col items-center pb-3 md:pb-7 text-md text-slate-600'>
                    <span className='inline-flex gap-2 items-center'>
                        <FaMapMarkerAlt /> Las Vegas, NV
                    </span>
                </p>
                <div className="relative flex pb-2 md:pb-4 items-center">
                    <div className="flex-grow border-t-2 bg-slate-600"></div>
                    <span className="flex-shrink mx-4 text-slate-400">
                        Get in touch
                    </span>
                    <div className="flex-grow border-t-2 bg-slate-600"></div>
                </div>
                <GetInTouch />
                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t-2 bg-slate-600"></div>
                    <span className="flex-shrink mx-4 text-slate-500">
                        Skills
                    </span>
                    <div className="flex-grow border-t-2 bg-slate-600"></div>
                </div>
                <WorkSkills />
                <div className='flex flex-col items-center pb-3 md:pb-10 xl:pb-16'>
                    <a href='https://docs.google.com/document/d/1uueF8to3aBck6GIaahdJVIoL01GRXUQlosKNldgcqrk/edit?usp=sharing' target='_blank' rel="noreferrer" className='flex flex-row items-center gap-4 pt-4 md:pt-7 text-md text-slate-600 hover:text-slate-800'>
                        <span className='hover:underline hover:cursor-pointer'>
                            Download Resume in PDF
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </>            
        </Card>
    )
}

export default Profile;