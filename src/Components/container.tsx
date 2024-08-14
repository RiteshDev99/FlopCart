import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface ContainerProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    text: string;

 }



const Container = ({children,className,text}:ContainerProps) => {
    return (
        <>
            <div className={twMerge("flex justify-center pt-[2vh]",className)}>
                <div className="h-[40vh] w-[95vw] bg-blue-200 ">
                    <p className="text-2xl p-[2.3vh]  font-semibold">{text}</p>
                    <p>{children}</p>
                </div>
            </div>

        </>
       

    )
}

export default Container;