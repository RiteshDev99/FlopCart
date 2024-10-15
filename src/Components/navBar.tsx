import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import { app } from "../firebase";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [auth]);

    const SignupWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log("User signed in:", result.user);
            })
            .catch((error) => {
                console.error("Error during sign-in:", error);
            });
    };

    const Logout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                console.log("User signed out");
            })
            .catch((error) => {
                console.error("Error during sign-out:", error);
            });
    };

    return (
        <div className="h-[13vh] w-[100vw] bg-blue-400 flex justify-center items-center">
            <div className="h-[9vh] w-[95vw] fixed bg-white rounded-3xl flex justify-between overflow-hidden items-center px-[2vw]">
                <div className="flex w-[60vw] justify-between">
                    <h1 className="text-4xl font-bold text-blue-500 cursor-pointer">FlopCart</h1>
                    <div className="h-[4.2vh] w-[45vw] bg-blue-100 flex items-center justify-center p-3 rounded-xl">
                        <CiSearch className="text-2xl text-gray-400" />
                        <input
                            className="w-[45vw] h-[4.2vh] rounded-xl cursor-pointer p-2 bg-blue-100 outline-none"
                            placeholder="Search for Products, Brand and More"
                        />
                    </div>
                </div>

                <ul className="flex gap-[1.4vw] text-ls tracking-[0.1vw] cursor-pointer">
                    {/* Login/Logout logic */}
                    {!user ? (
                        <li className="hover:text-blue-700 hover:underline">
                            <h1 onClick={SignupWithGoogle}>Login</h1>
                        </li>
                    ) : (
                        <li className="hover:text-blue-700 hover:underline">
                            <h1 onClick={Logout}>Logout</h1>
                        </li>
                    )}

                    {/* Account */}
                    <li className="hover:text-blue-700 hover:underline">
                        <NavLink to="/Account">Account</NavLink>
                    </li>

                    {/* Cart */}
                    <li className="hover:text-blue-700 hover:underline">
                        <NavLink className="flex items-center gap-2" to="/Cart">
                            <AiOutlineShoppingCart className="text-xl" /> Cart
                        </NavLink>
                    </li>

                    {/* Profile - Show profile image if user is logged in */}
                    <li className="hover:text-blue-700 hover:underline flex items-center">
                        <NavLink to="/About">
                            {user?.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="User Profile"
                                    className="rounded-full w-[2rem] h-[2rem]"
                                />
                            ) : (
                                <CgProfile className="text-xl" />
                            )}
                        </NavLink>
                    </li>

                    {/* Become a Seller */}
                    <li className="hover:text-blue-700 hover:underline">
                        <NavLink to="/BecomeASeller">Become a Seller</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
