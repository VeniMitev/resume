import React, { RefObject } from "react";
import { FaUser, FaBriefcase, FaRegAddressCard, FaCameraRetro, FaCode, FaBookReader, FaGlobeAfrica } from "react-icons/fa";

type Props = {
    profileRef: RefObject<HTMLDivElement>  
    aboutRef: RefObject<HTMLDivElement>
    workRef: RefObject<HTMLDivElement>
    educationRef: RefObject<HTMLDivElement>
    skillsRef: RefObject<HTMLDivElement>
    hobbiesRef: RefObject<HTMLDivElement>
    volunteerRef: RefObject<HTMLDivElement>
}

const Icons = ({
    profileRef,
    aboutRef,
    workRef,
    educationRef,
    skillsRef,
    hobbiesRef,
    volunteerRef
} : Props) => {

    const handleClick = (e: string) => {        
        switch (e) {
            case 'profile':
                profileRef.current?.scrollIntoView({behavior: 'smooth'})
                break;
            case 'about':
                aboutRef.current?.scrollIntoView({behavior: 'smooth'})
                break;
            case 'work':
                workRef.current?.scrollIntoView({behavior: 'smooth'})
                break;
            case 'education':
                educationRef.current?.scrollIntoView({behavior: 'smooth'})
                break;
            case 'skills':
                skillsRef.current?.scrollIntoView({behavior: 'smooth'})
                break;
            case 'hobbies':
                hobbiesRef.current?.scrollIntoView({behavior: 'smooth'})
                break;
            case 'volunteer':
                volunteerRef.current?.scrollIntoView({behavior: 'smooth'})
                break;                    
            default:
                console.log('huh?')
                break;
        }
    }

    return (
        <div className='h-screen absolute z-10 md:invisible'>
            <div className='fixed left-0 bottom-20 opacity-20 hover:cursor-pointer'> 
                <FaUser 
                    onClick={() => handleClick('profile')} 
                    className='h-8 w-8 mx-5 my-10'
                />
                <FaRegAddressCard 
                    onClick={() => handleClick('about')} 
                    className='h-8 w-8 mx-5 my-10'
                />
                <FaCode 
                    onClick={() => handleClick('skills')} 
                    className='h-8 w-8 mx-5 my-10'
                />
                <FaBriefcase 
                    onClick={() => handleClick('work')} 
                    className='h-8 w-8 mx-5 my-10'
                />
                <FaBookReader 
                    onClick={() => handleClick('education')} 
                    className='h-8 w-8 mx-5 my-10'
                />
                <FaCameraRetro 
                    onClick={() => handleClick('hobbies')} 
                    className='h-8 w-8 mx-5 my-10'
                />
                <FaGlobeAfrica 
                    onClick={() => handleClick('volunteer')} 
                    className='h-8 w-8 mx-5 my-10'
                />    
            </div>
        </div>
    )
}

export default Icons;
