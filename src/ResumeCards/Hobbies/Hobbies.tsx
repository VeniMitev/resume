import React from "react";
import { FaCamera, FaGlobeEurope, FaKiwiBird, FaVideo } from 'react-icons/fa';
import Card from '../../components/Card';
import Title from '../../components/Title';

const Hobbies = () => {
    return (
        <Card className='h-min py-3 xl:px-16 '>
            <>
                <Title text='Hobbies' />
                <div className='flex flex-row md:justify-center'>                
                    <ul className='list-inside px-16 md:px-6'>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaCamera className='xl:w-10 xl:h-10' /> Photography
                        </li>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaVideo className='xl:w-10 xl:h-10' /> Videography        
                        </li>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaKiwiBird className='xl:w-10 xl:h-10' /> Volunteering Abroad
                        </li>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaGlobeEurope className='xl:w-10 xl:h-10' /> Traveling
                        </li>
                    </ul>
                </div>
            </>            
        </Card>
    )
}

export default Hobbies;