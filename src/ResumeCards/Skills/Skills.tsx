import React from "react";
import { FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaMagento, FaMicrosoft, FaNode, FaPhotoVideo, FaReact, FaServer } from 'react-icons/fa';
import Card from '../../components/Card';
import Title from '../../components/Title';

const Skills = () => {
    return (
        <Card className='h-min py-3 overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent'>
            <>
                <Title text='Technical Skills' />
                <div className='flex flex-col xl:flex-row xl:gap-5 xl:justify-center xl:pt-10'>                
                    <ul className='list-inside px-16 md:px-6 content-center'>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaHtml5 className='w-6 h-6 xl:w-10 xl:h-10' /> HTML <FaCss3Alt className='w-6 h-6 xl:w-10 xl:h-10' /> CSS
                        </li>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaJs className='w-6 h-6 xl:w-10 xl:h-10' />JavaScript & TypeScript       
                        </li>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaReact className='w-6 h-6 xl:w-10 xl:h-10' />ReactJS & NextJS
                        </li>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaNode className='w-6 h-6 xl:w-10 xl:h-10' /> NodeJS <FaServer className='w-6 h-6 xl:w-10 xl:h-10' /> ExpressJS
                        </li>
                    </ul>
                    <ul className='list-inside px-16 md:px-6 content-center'>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaDatabase className='w-6 h-6 xl:w-10 xl:h-10' />MongoDB & Firebase
                        </li>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaMagento className='w-6 h-6 xl:w-10 xl:h-10' />Magento E-Commerce CMS v2
                        </li>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaPhotoVideo className='w-6 h-6 xl:w-10 xl:h-10' />Adobe Creative Cloud Products
                        </li>
                        <li className='flex items-center gap-4 py-2 md:py-1 xl:py-3 text-md text-slate-700'>
                            <FaMicrosoft className='w-6 h-6 xl:w-10 xl:h-10' />Microsoft Office Products
                        </li>
                    </ul>
                </div>
            </>
        </Card>
    )
}

export default Skills;