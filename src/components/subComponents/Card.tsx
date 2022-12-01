import React from "react";

type Props = {
    children: JSX.Element 
    className?: string
}

const Card = ({children, className} : Props) => {
    return (
        <div className={`${className} snap-start rounded-md bg-slate-100 md:h-full md:p-2 xl:rounded-sm 2xl:rounded-md`}>
            {children}
        </div>
    )
}

export default Card;