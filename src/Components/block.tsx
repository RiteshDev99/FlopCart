

import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface BlockProps extends ButtonHTMLAttributes <HTMLButtonElement> {
    children: ReactNode
    text: string;
    price: string;

}



const Block = ({ children, text,price, className }: BlockProps) => {
    return (
        <>
            <div className={twMerge("h-[30vh] w-[14vw] flex justify-center pt-[1vh] border-2 border-gray-400 rounded-xl",className)}>
                <div className="h-[24vh] w-[12vw] ">
                    <p>{children}</p>
                    <p className="flex justify-center font-normal">{text}</p>
                    <p className="flex justify-center font-semibold">{ price}</p>
                </div>

            </div>
         

        </>
    )
}

export default Block;