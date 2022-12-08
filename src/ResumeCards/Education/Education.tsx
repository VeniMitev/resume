import React from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../../components/Card';
import Title from '../../components/Title';

const Education = () => {
    return (
        <Card className='h-min py-3'>
            <>
                <Title text='Education' />
                <div className='px-10 md:px-5 py-2 md:py-2 xl:py-4 text-center'>
                    <h3 className='font-semibold text-slate-800 underline'>
                        Massachusetts Institute of Technology
                    </h3>
                    <p className='text-slate-700'>
                        Professional Certificate in Coding: Full Stack Development with MERN
                    </p>
                    <a href="https://certificates.emeritus.org/55c468cc-387a-4de5-bdfa-3d53d32a0144#gs.k3p4tp" target="_blank" rel="noreferrer" className='underline hover:cursor-pointer gap-2 inline-flex items-center text-sm text-center text-slate-400'>
                        View Certificate <FaExternalLinkAlt />
                    </a>     
                </div>
                <div className='px-10 md:px-4 py-3 md:py-2 xl:py-4 text-center'>
                    <h3 className='font-semibold text-slate-800 underline'>
                        College of Southern Nevada
                    </h3>
                    <p className='text-slate-700'>
                        Associate Degree in General Education
                    </p>    
                </div>
            </>            
        </Card>
    )
}

export default Education;