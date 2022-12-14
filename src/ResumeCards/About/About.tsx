import React from "react";
import Card from '../../components/Card';
import Title from '../../components/Title';

const About = () => {
    return (
        <Card className='h-min py-3 overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent'>
            <>
                <Title text='About Me' />
                <div className='flex flex-col items-center py-5 md:py-3 xl:py-10 px-12'>
                    <p className='md:text-center text-md text-slate-800 max-w-prose'>
                        Enthusiastic, self-motivated photographer, web designer and leader. Looking to apply my years of experience in creative fields and leadership at your company. I am a team player with excellent communication skills and a passion for all things creative.
                    </p>
                </div>
            </>            
        </Card>
    )
}

export default About;