import React from "react";

type Props = {
    children: JSX.Element 
    className?: string
}

const Card = ({children, className} : Props) => {
    return (
        <div className={`${className} bg-slate-100 h-full p-2 xl:rounded-sm 2xl:rounded-md`}>
            {children}
        </div>
    )
}

export default Card;