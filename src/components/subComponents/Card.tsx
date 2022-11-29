import React from "react";

type Props = {
    children: JSX.Element 
    className?: string
}

const Card = ({children, className} : Props) => {
    return (
        <div className={`${className} bg-slate-100 h-full rounded-sm p-2`}>
            {children}
        </div>
    )
}

export default Card;