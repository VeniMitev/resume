import React from "react";
import Card from '../../components/Card';
import Title from '../../components/Title';

const About = () => {
    return (
        <Card className='snap-center h-[50vh]'>
            <>
                <Title text='About Me' />
                <div className='flex flex-col items-center py-10 md:py-3 xl:py-10 px-12'>
                    <p className='md:text-center text-md text-slate-800'>
                        Enthusiastic, self-motivated photographer, web designer and leader. Looking to apply my years of experience in creative fields and leadership at your company. I am a team player with excellent communication skills and a passion for all things creative.
                    </p>
                </div>
            </>            
        </Card>
    )
}

export default About;