import Card from '../../components/Card';
import GetInTouch from './GetInTouch';
import WorkSkills from './WorkSkills';

const Profile = () => {
    return (
        <Card className='snap-center h-screen '>
            <>
                <h1 className='flex flex-col items-center pt-14 md:pt-10 xl:pt-16 text-4xl text-slate-800 font-semibold'>
                    Venelin Mitev
                </h1>
                <h2 className='flex flex-col items-center py-7 text-lg text-slate-800'>
                    Full-Stack Developer
                </h2>
                <div className="relative flex pb-4 items-center">
                    <div className="flex-grow border-t-2 bg-slate-600"></div>
                    <span className="flex-shrink mx-4 text-slate-400">
                        Get in touch
                    </span>
                    <div className="flex-grow border-t-2 bg-slate-600"></div>
                </div>
                <GetInTouch />
                <div className="relative flex py-4 items-center">
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