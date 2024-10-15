
import Block from "./block";
import Container from "./container";
import roundedData from "../mockData/roundedData";
import Roundedicon from "./roundedIcon";
import productData from "../mockData/productData";
import Container2 from "./container2";
import Card from "./cardSection";
import fashionData from "../mockData/fashion";
import electronicsData from "../mockData/electronicsData";
import brandData from "../mockData/brands";
import favoriteData from "../mockData/favorite";
import scrollData from "../mockData/scrollData";
// import { NavLink } from "react-router-dom"







const HeroSection = () => {
    return (
        <>
            <div className="h-[365vh] w-[100vw] bg-blue-400 ">
                <div className="flex justify-center">
                    <div className="h-[13vh] w-[95vw] bg-blue-200 flex justify-center items-center rounded-sm">
                        <div className="flex gap-[4vw] overflow-hidden cursor-pointer ">


                            {
                                roundedData.map((rounded) => (
                                    <Roundedicon text={rounded.title}><img className="transition-all duration-300 hover:scale-95 w-full h-auto  z-0 overflow-hidden" src={rounded.img} alt={rounded.title} /></Roundedicon>
                                ))
                            }

                        </div>
                    </div>
                </div>


                <div className="flex justify-center pt-[2vh]">
                    <div className="h-[28vh] w-[95vw] bg-blue-200 flex  overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide ">
                        {
                            scrollData.map((scroll) => (
                                <img
                                    className=""
                                    src={scroll.img} alt="" />
                            ))

                        }
                    </div>

                </div>


                <Container text="Best Deals on Smartphone">
                    <div className=" Phone-Sections flex gap-[1vw] justify-evenly  cursor-pointer  ">

                    

                        {productData.map((product) => (
                            // <NavLink to={`/products/${product.id}`} key={product.id}>
                                <Block text={product.title} price={product.price}>
                                    <img
                                        className="transition-all duration-300 hover:scale-95 w-full h-auto z-0 overflow-hidden"
                                        src={product.img}
                                        alt={product.title}
                                    />
                                </Block>
                            // </NavLink>
                        ))}
                    </div>
                </Container>

                <Container2>
                    <div className="flex  h-full w-full bg-cover justify-evenly pt-[0.4vh]">
                        <Card><img src="https://i0.wp.com/udaipurkiran.com/wp-content/uploads/2024/07/Flipkart-announces-Big-Bachat-Days.webp?resize=840%2C473&ssl=1" alt="" /></Card>
                        <Card><img src="https://media.assettype.com/freepressjournal/2024-05/398c53dd-2199-46aa-ae55-0b71ba4e50f9/Untitled_design___2024_05_13T135024_178.jpg?width=1200" alt="" /></Card>
                        <Card><img src="https://images.gizbot.com/img/2022/06/flipkart-big-bachat-dhamaal-sale-discount-offers-on-electronics-and-accessories-1654254261.jpg" alt="" /></Card>
                    </div>
                </Container2>

                <Container text="Bestsellers on Fashion">
                    <div className="flex justify-evenly cursor-pointer">
                        {
                            fashionData.map((fashion) => (
                                // <NavLink to={`/fashion/${fashion.id}`} key={fashion.id}>
                                    <Block text={fashion.text} price={fashion.price}><img className="transition-all duration-300 hover:scale-95 w-full h-auto  z-0 overflow-hidden"
                                        src={fashion.img}
                                        alt={fashion.text} /></Block>

                                // </NavLink>

                            ))
                        }

                    </div>
                </Container>
                <Container2>
                    <div className="flex  h-full w-full bg-cover justify-evenly pt-[0.4vh] ">
                        <Card><img src="https://static.vecteezy.com/system/resources/previews/003/783/115/original/special-offer-sale-banner-promotion-offer-free-vector.jpg" alt="" /></Card>
                        <Card><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3a5b4b130201639.617ac5e8008d9.jpg" alt="" /></Card>
                        <Card><img src="https://img.freepik.com/free-psd/geometric-sales-discount-banner_23-2149929914.jpg" alt="" /></Card>
                    </div>
                </Container2>
                <Container text="Deals Of Electronics">
                    <div className="flex justify-evenly cursor-pointer">
                        {
                            electronicsData.map((electronics) => (
                                // <NavLink to={`/electrnics/${electronics.id}`} key={electronics.id}>
                                    <Block text={electronics.text} price={electronics.price}><img className="transition-all duration-300 hover:scale-95 w-full h-auto  z-0 overflow-hidden"
                                        src={electronics.img}
                                        alt="" /></Block>

                                // </NavLink>
                            ))

                        }
                    </div>
                </Container>
                <Container text="Feathured Brands">
                    <div className="flex justify-evenly cursor-pointer">
                        {
                            brandData.map((brand) => (
                                // <NavLink to={`/brand/${brand.id}`} key={brand.id}>
                                    <Block text={brand.text} price={brand.price}><img className="transition-all duration-300 hover:scale-95 w-full h-auto  z-0 overflow-hidden"
                                        src={brand.img}
                                        alt="" /></Block>

                                // </NavLink>
                            ))
                        }
                    </div>
                </Container>
                <Container2>
                    <div className="flex justify-evenly">
                        <Card><img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/07/flipkart_big_saving_days_premium_phones_deals.png" alt="" /></Card>
                        <Card><img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/image1-2.png" alt="" /></Card>
                        <Card><img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/flipkart-big-billion-days-best-deals-premium-smartphones.png" alt="" /></Card>
                    </div>
                </Container2>
                <Container text="Your Favorite Brands Deals">
                    <div className="flex justify-evenly cursor-pointer ">
                        {
                            favoriteData.map((favorite) => (
                                // <NavLink to={`/favorite/${favorite.id}`} key={favorite.id}>

                                    <Block text={favorite.text} price={favorite.price}><img className="transition-all duration-300 hover:scale-95 w-full h-auto  z-0 overflow-hidden"
                                        src={favorite.img}
                                        alt="" /></Block>
                                // </NavLink>
                              
                            ))

                        }
                    </div>
                </Container>
            </div>

        </>
    )
}

export default HeroSection;