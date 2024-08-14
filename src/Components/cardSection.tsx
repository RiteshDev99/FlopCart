import { ButtonHTMLAttributes, ReactNode } from "react";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}



const Card = ({ children }: CardProps) => {
    return (
        <div className="h-[28.4vh] w-[31vw] flex justify-center   ">

            <p>{ children}</p>
        </div>
    )
}

export default Card;
