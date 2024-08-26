

 export interface PhoneBlocksProps {


    img: string | undefined;
}


const PhoneBlocks = ({ img}: PhoneBlocksProps) => {
    return (
        <>
            <div className="h-auto w-[7vw]  border-gray-400"></div>
            <img src={img} alt="" />

        </>
    )
}

export default PhoneBlocks;