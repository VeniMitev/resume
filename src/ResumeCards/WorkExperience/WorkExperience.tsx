import React from "react";
import Card from '../../components/Card';
import Title from '../../components/Title';

const WorkExperience = () => {
    return (
        <Card className='h-screen'>
            <>
                <Title text='Work Experience' />
                <div className="flex justify-center flex-col md:flex-row content-center ">
                    <div className="grow items-center py-10 md:py-3 xl:py-10 px-12">
                        <h3 className='font-semibold text-center'>Test</h3>
                    </div>
                    <div className="grow items-center py-10 md:py-3 xl:py-10 px-12">
                        <h3 className='font-semibold text-center'>Test</h3>
                    </div>
                    <div className="grow items-center py-10 md:py-3 xl:py-10 px-12">
                        <h3 className='font-semibold text-center'>Test</h3>
                    </div>
                </div>
            </>            
        </Card>
    )
}

export default WorkExperience;