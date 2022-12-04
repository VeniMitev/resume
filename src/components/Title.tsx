import React from "react";

type Props = {
    text: string 
    className?: string
}

const Title = ({text, className} : Props) => {
    return (
        <div className='text-center font-semibold'>
            <h2 className='font-sans'>
                {text}
            </h2>
        </div>
    )
}

export default Title;