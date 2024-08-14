import React, { ButtonHTMLAttributes } from "react";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface RoundediconPrps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    text: string;

}


const Roundedicon = ({ children, className,text }: RoundediconPrps) => {
    return (
        <>

            <div className={twMerge("h-[10vh] pt-[2vh", className)}>
                <div className="h-[3.8vw] w-[3.8vw] bg-white rounded-full overflow-hidden">
                    <p>{children}</p>

                </div>
                <p className="flex justify-center font-normal pt-[0.3vh]">{text}</p>


            </div>



        </>



    )
}

export default Roundedicon;