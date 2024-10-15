import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fashionData, { fashion } from "../mockData/fashion";
import PhoneImage from "./phoneImage";
import PhoneBlocks from "./phoneBlocks";



const FashionDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState<fashion>();
    const [currentImage, setCurrentImage] = useState<string | undefined>();
    useEffect(() => {
        const fashion = fashionData.find((item) => item.id === id);
        if (fashion) {
            setData(fashion);
            setCurrentImage(fashion.img);
            console.log(fashion);
            
        }
    }, [id]);

    console.log(currentImage);
    
    const handleMouseEnter = (image: string | undefined) => {
        setCurrentImage(image);
    };
    return (
        <>
            <div className="container h-[100%] w-full">
                <div className="phone-Images h-full w-[35vw]">
                    <div className=" h-[38vh] w-[25vw] border border-gray-400 rounded-lg flex overflow-hidden">
                        <div className="image-Blocks h-[100%] w-[7vw] border-r border-gray-400 overflow-hidden ">
                            <div className="border-b border-gray-400 hover:border-2 hover:border-blue-700 transition-all duration-200 hover:scale-95 w-full h-auto z-0 overflow-hidden" 
                                onMouseEnter={() => handleMouseEnter(data?.img)}>
                                <PhoneBlocks img={data?.img} />

                                
                            </div>
                        </div>
                        <PhoneImage img={currentImage} />
                    </div>
                </div>

            </div>

        </>
    )
}

export default FashionDetails;