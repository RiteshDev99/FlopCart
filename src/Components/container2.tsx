import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";


interface Container2Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}


const Container2 = ({children,className}:Container2Props) => {
    return (
        <div className={twMerge("flex justify-center pt-[2vh] ", className)}>

            <div className="h-[31.3vh] w-[95vw] bg-blue-200 ">
                <p>{children}</p>
            </div>
        </div>
    )
}

export default Container2;