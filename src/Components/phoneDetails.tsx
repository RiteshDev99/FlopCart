import { FaShoppingCart, FaBolt } from "react-icons/fa";
import PhoneImage, { } from "./phoneImage";
import { useParams } from "react-router-dom";
import productData, { product } from "../mockData/productData";
import { useEffect, useState } from "react";
import PhoneBlocks from "./phoneBlocks";
import { NavLink } from "react-router-dom";





const PhoneDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState<product>();
    const [currentImage, setCurrentImage] = useState<string | undefined>();

    useEffect(() => {
        const product = productData.find((item) => item.id === id);
        if (product) {
            setData(product);
            setCurrentImage(product.img);
        }
    }, [id]);

    const handleMouseEnter = (image: string | undefined) => {
        setCurrentImage(image);
    };



    return (
        <>
            <div className="container h-[100%] w-[100%] p-3 flex gap-1">
                <div className="phone-Images h-full w-[35vw]">
                    <div className=" h-[38vh] w-[25vw] border border-gray-400 rounded-lg flex overflow-hidden">
                        <div className="image-Blocks h-[100%] w-[7vw] border-r border-gray-400 overflow-hidden ">
                            <div
                                className="border-b border-gray-400 hover:border-2 hover:border-blue-700 transition-all duration-200 hover:scale-95 w-full h-auto z-0 overflow-hidden"
                                onMouseEnter={() => handleMouseEnter(data?.img)}
                            >
                                <PhoneBlocks img={data?.img} />
                            </div>
                            <div
                                className="border-b border-gray-400 hover:border-2 hover:border-blue-700 transition-all duration-200 hover:scale-95 w-full h-auto z-0 overflow-hidden"
                                onMouseEnter={() => handleMouseEnter(data?.img1)}
                            >
                                <PhoneBlocks img={data?.img1} />
                            </div>
                            <div
                                className="border-b border-gray-400 hover:border-2 hover:border-blue-700 transition-all duration-300 hover:scale-95 w-full h-auto z-0 overflow-hidden"
                                onMouseEnter={() => handleMouseEnter(data?.img2)}
                            >
                                <PhoneBlocks img={data?.img2} />
                            </div>
                            <div
                                className="hover:border-2 hover:border-blue-700 transition-all duration-300 hover:scale-95 w-full h-auto z-0 overflow-hidden"
                                onMouseEnter={() => handleMouseEnter(data?.img3)}
                            >
                                <PhoneBlocks img={data?.img3} />
                            </div>
                        </div>
                        <PhoneImage img={currentImage} />
                    </div>
                    <div className="Button flex gap-2 mt-3 ml-9">
                        <NavLink to={`/add-to-cart/${data?.id}`} key={data?.id} className="bg-[#fbbf24] h-[6vh] w-[10vw] rounded-sm flex items-center justify-center gap-2 text-white font-bold"

                        >

                            <FaShoppingCart />
                            ADD TO CART

                        </NavLink>


                        <button className="bg-[#fb641b] h-[6vh] w-[10vw] rounded-sm text-white font-bold flex items-center justify-center gap-2 "> <FaBolt />BUY NOW</button>
                    </div>
                </div>
                <div className="Details h-full w-full py-[5vh] text-xl leading-10 px-[5vw] ">
                    {data?.name && <p>{data.name}</p>}
                    {data?.ratings && <p className="text-sm text-gray-500 leading-4">{data.ratings}</p>}
                    {data?.offer && <p className="text-green-600 text-lg leading-10">{data.offer}</p>}
                    <div className="flex gap-3">
                        {data?.fiexdPrice && <p className="text-3xl">{data.fiexdPrice}</p>}
                        {data?.discount && <p className="line-through text-gray-600">{data.discount}</p>}
                        {data?.discountOffer && <p className="text-green-700">{data.discountOffer}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PhoneDetails;
