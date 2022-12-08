import { FaMapMarkerAlt } from 'react-icons/fa';
import Card from '../../components/Card';
import GetInTouch from './GetInTouch';
import WorkSkills from './WorkSkills';

const Profile = () => {
    return (
        <Card className='snap-center h-min py-3'>
            <>
                <h1 className='flex flex-col items-center pt-8 md:pt-10 xl:pt-16 text-4xl text-slate-800 font-semibold'>
                    Venelin Mitev
                </h1>
                <h2 className='flex flex-col items-center pt-4 md:pt-7 text-lg text-slate-800'>
                    Full-Stack Developer
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
            </>            
        </Card>
    )
}

export default Profile;