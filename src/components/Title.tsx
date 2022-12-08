import React from "react";

type Props = {
    text: string 
    className?: string
}

const Title = ({text, className} : Props) => {
    return (
        <div className='text-center font-semibold py-3 md:py-1 xl:py-7 text-slate-600'>
            <h2 className='font-sans'>
                {text}
            </h2>
        </div>
    )
}

export default Title;