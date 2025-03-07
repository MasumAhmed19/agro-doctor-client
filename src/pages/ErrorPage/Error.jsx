import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg-[#032c1e] text-white'>
            <div className="max-w-7xl flex flex-col mx-auto min-h-screen">

                <header className="mb-auto flex justify-center z-50 w-full py-4">
                    <nav className="px-4 sm:px-6 lg:px-8">
                    <Link to='/' className="-m-1.5 p-1.5">
                <span className="sr-only">Agro Doctor</span>
                <img
                alt=""
                src="https://i.ibb.co.com/9HNjny8Q/agro-doctor-logo-2.png"
                className="h-8 w-auto"
                />
            </Link>
                    </nav>
                </header>

                <main id="content">
                    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                        <h1 className="block text-7xl font-bold text-[#D6FA9C] sm:text-9xl">404</h1>
                        <p className="mt-3 text-white">Oops, something went wrong.</p>
                        <p className="text-gray-200">Sorry, we couldn't find your page.</p>
                        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                            <Link to='/' className="rounded-md bg-[#d6fa9c] px-4 py-2.5 text-sm font-semibold text-black shadow-xs flex items-center" href="../examples.html">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </main>

                <footer className="mt-auto text-center py-5">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-sm text-gray-500">© All Rights Reserved @AgroDoctor</p>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Error;


