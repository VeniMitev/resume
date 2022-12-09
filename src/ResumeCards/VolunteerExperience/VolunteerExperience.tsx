import React from "react";
import Card from '../../components/Card';
import Title from '../../components/Title';

const VolunteerExperience = () => {
    return (
        <Card className='h-min py-3 overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent'>
            <>
                <Title text='Volunteer Experience' />
                <div className='flex flex-col items-center py-5 md:py-3 xl:py-2 px-12 md:px-6'>
                    <p className='undeline text-slate-800'>
                        Most Recent: August 2022 - South Africa 
                        <br />
                        Wildlife Rehabilitation Volunteer
                    </p>
                    <p className='md:text-center text-md text-slate-800 pt-3 max-w-prose '>
                        Volunteering and nature conservation has always been a passion of mine. I have volunteered in a variety of different countries and have gained a lot of experience in the field. 
                        <br/>
                        I have volunteered in Bulgaria, Romania, South Africa, and the USA. I have worked in a variety of different roles including: conservation, wildlife rehabilitation, animal care, animal welfare, wildlife photography, wildlife education, wildlife research, wildlife tourism, and wildlife management.
                    </p>                    
                </div>
            </>            
        </Card>
    )
}

export default VolunteerExperience;