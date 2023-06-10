import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TbTruckLoading } from 'react-icons/tb';
import logo from '../ImageLanding/Logo.png';

function Navbar() {
    const navLinks = [
        { name: 'Home', link: '#Home' },
        { name: 'Product', link: '#Product' },
        { name: 'About', link: '#About' },
        { name: 'Subscribe', link: '#Subscribe' },
        { name: 'Login', link: '#Login' },
        { name: 'SignUp', link: '#SignUp' },
    ];

    const getLinksNav = navLinks.map((link) => {
        return (
            <div
                key={link.name}
                className="block px-3 py-2 text-base font-medium sm:w-full sm:inline-block m-2 p-2 hover:bg-gray-500 hover:p-2 rounded-md hover:cursor-pointer"
            >
                <a href={link.link}> {link.name}</a>
            </div>
        );
    });

    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMobileOpen = () => {
        setMobileOpen(!mobileOpen);
    };

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 ">
                <div className="navbar flex items-center justify-between h-16">
                    
                        <div className="LogoIcon w-32 my-2 mx-4 max-sm:mx-0 max-sm:w-16">
                            <a href="#logo">{<img src={logo} alt="Logo" />}</a>
                        </div>
                        {isDesktop ? (
                            <div className="hidden sm:block">
                                <div className="navLinks text-white flex justify-around md:w-32 max-sm:hidden ">
                                    {getLinksNav}
                                </div>
                            </div>
                        ) : (
                            <div className="sm:hidden">
                                <button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-white hover:bg-gray-700 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded={mobileOpen}
                                    onClick={toggleMobileOpen}
                                >
                                    <span className="sr-only">Open Menu</span>
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    <svg
                                        className={`hidden h-6 w-6 ${mobileOpen ? 'block' : 'hidden'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    
                    {isDesktop ? (
                        <div className="flex justify-center items-center max-sm:hidden">
                            <button className="buyNow text-black font-bold flex justify-between items-center bg-white p-2 pl-5  rounded-s-3xl mx-5 hover:bg-green-400 hover:text-white">
                                <span className="text-xl mr-2">
                                    <TbTruckLoading />
                                </span>
                                <label className="cursor-pointer">Shop Now</label>
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>

            {isDesktop ? null : (
                <div
                    className={`sm:hidden ${mobileOpen ? 'block' : 'hidden'}`}
                    id="mobile-menu"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        {getLinksNav}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;