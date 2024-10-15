// import CartBox from "./CartBox";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import productData, { product } from "../mockData/productData";

// const Cart = () => {
//     const [cartList, setCartList] = useState<Array<product>>([]);
//     const { id } = useParams();
//     const [data, setData] = useState<product | undefined>(undefined);

//     useEffect(() => {
//         if (id) {
//             const product = productData.find((item) => item.id === id);
//             if (product) {
//                 setData(product);
//                 setCartList((prevCartList) => {
//                     // Prevent adding the same item multiple times to the cart
//                     if (!prevCartList.some((item) => item.id === product.id)) {
//                         return [...prevCartList, product];
//                     }
//                     return prevCartList;
//                 });
//             }
//         }
//     }, [id]);

//     console.log(cartList);

//     return (
//         <>
//             <div className="h-[100vh] w-[100%] bg-blue-400 flex justify-center items-center">
//                 {
//                     cartList.length > 0 ? (
//                         <div className="w-full flex flex-wrap justify-center gap-4">
//                             {cartList.map((product) => (
//                                 <CartBox key={product.id} product={product} /> {/* Passing product as props */ }
//                             ))}
//                         </div>
//                     ) : (
//                         <p className="text-white text-xl">Your cart is empty</p>  {/* Display message when cart is empty */}
//                 )
//                 }
//             </div>
//         </>
//     );
// };

// export default Cart;
