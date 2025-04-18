import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/hospital.avif'
import barlogo from '../assets/svg/bar-logo-blue.svg'

function navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isloggedin, setIsloggedin] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const brandname = "Sarthi";

    return (
        <nav className="inline-flex justify-between w-full px-4 sm:px-24 h-fit bg-sky-100 text-sky-600 sticky top-0">
            {/* Logo Section */}
            <div className="inline-flex w-1/3 p-1 h-20">
                <img src={logo} alt="logo" className="h-14 self-center" />
                <div className="w-fit px-2 content-center">
                    <h2 className=" font-bold">{brandname}</h2>
                    <h3 className="text-gray-700 italic">A Hospital that lives in your pocket</h3>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex content-center w-2/3 p-1">
                <ul className="items-center list-none inline-flex justify-between w-full font-bold">
                    <li>
                        <Link to="/" className="hover:text-green-600">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-green-600">About Us</Link>
                    </li>
                    <li>
                        <Link to="/service" className="hover:text-green-600">Services</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="hover:text-green-600">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/news" className="hover:text-green-600">News</Link>
                    </li>
                    <li>
                        <Link to="/contactus" className="hover:text-green-600">Contact Us</Link> 
                    </li>
                    <li className="w-fit">
                        {isloggedin
                            && <div className="inline-flex gap-2">
                                <Link to="/signup" className="nav-item bg-sky-500 hover:bg-sky-300 px-4 py-1 rounded text-white ">SignUp</Link>
                                <Link to="/login" className="nav-item bg-sky-500 hover:bg-sky-300 px-4 py-1 rounded text-white ">Login</Link>
                              </div>
                        }
                    </li>
                </ul>
            </div>

            <div className="w-fit">
                {/* Mobile Menu Button (Hamburger) */}
                <div className="sm:hidden float-right items-center bg-none">
                    <button onClick={toggleMenu} className="">
                        <img src={barlogo} alt="" className="block h-6 w-6" fill="none" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="sm:hidden w-fit bg-none p-4">
                        <ul className="flex flex-col items-center space-y-4 font-bold w-fit">
                            <li>
                                <Link to="/" className=" hover:text-green-600">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-green-600">About Us</Link>
                            </li>
                            <li>
                                <Link to="/service" className=" hover:text-green-600">Services</Link>
                            </li>
                            <li>
                                <Link to="/gallery" className=" hover:text-green-600">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/news" className=" hover:text-green-600">News</Link>
                            </li>
                            <li>
                                <Link to="/contactus" className=" hover:text-green-600">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default navbar;