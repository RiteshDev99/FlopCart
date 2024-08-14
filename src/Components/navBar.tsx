


const NavBar = () => {
    return (
        <div className="h-[13vh] w-[100vw] bg-blue-400 flex justify-center items-center  ">
            <div className="h-[9vh] w-[95vw] fixed bg-white rounded-3xl flex justify-between overflow-hidden items-center px-[2vw]">
                <div className="flex w-[60vw] justify-between ">
                    <h1 className="text-4xl font-bold text-blue-500 cursor-pointer">FlopCart</h1>


                    <input className=" w-[40vw] h-[4.2vh] rounded-xl cursor-pointer p-2 bg-blue-100 " type="search" >
                    </input>
                </div>

                <ul className="flex gap-[1.4vw] text-ls tracking-[0.1vw] cursor-pointer">
                    <li className="hover:text-blue-700 hover:underline">Account</li>
                    <li className="hover:text-blue-700 hover:underline">Cart</li>
                    <li className="hover:text-blue-700 hover:underline">About</li>
                    <li className="hover:text-blue-700 hover:underline">Became a Seller</li>
                </ul>

            </div>

        </div>
    )
}

export default NavBar;