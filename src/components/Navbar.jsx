import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
                <p>Sign up and get 20% off your first order. <a href="#" className="underline font-medium">Sign Up Now</a></p>
                <button className="absolute right-4 top-2 text-white">×</button>
            </div>

            <header className="border-b border-gray-200 py-4 px-4 md:px-8">
                <div className="container mx-auto flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold">LWS.SHOP</a>

                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-gray-500 transition-colors">Shop</a>
                        <a href="#" className="hover:text-gray-500 transition-colors">On Sale</a>
                        <a href="#" className="hover:text-gray-500 transition-colors">New Arrivals</a>
                        <a href="#" className="hover:text-gray-500 transition-colors">Brands</a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <div className="relative hidden md:block w-64">
                            <input type="text" placeholder="Search for products..."
                                className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm" />
                            <span className="absolute right-3 top-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>

                        <a href="#" className="hover:text-gray-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </a>

                        <a href="#" className="hover:text-gray-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
