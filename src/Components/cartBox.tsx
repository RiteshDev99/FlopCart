import { ButtonHTMLAttributes } from "react";


interface CartBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    
}

const CartBox = ({ children }: CartBoxProps) => {
    
    return (
        <>

                <div className="h-[25vh] w-[80vw] bg-blue-200 rounded-sm">
                    <p>{children}</p>
                    <img src="" alt="Product Image" />
                </div>
        
            
            
        </>
    )
}
export default CartBox;