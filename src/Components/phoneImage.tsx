

 export interface PhoneImageProps {

    img: string | undefined;
    
}


const PhoneImage = ({ img }: PhoneImageProps) => {

   


    return (
        <>
            <div id="image" className="image h-full w-full bg-cover">
                <img src={img} alt="" />



            </div>
        </>
    )
}

export default PhoneImage;