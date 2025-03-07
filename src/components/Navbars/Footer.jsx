import React from 'react';

const Footer = () => {
    return (
        <div className='w-full'>
            <footer className="relative overflow-hidden bg-[#032C1E]">


                <div className="relative z-10">
                    <div className="w-full max-w-7xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
                        <div className="inline-flex items-center">

                            <img className='w-30' src="https://i.ibb.co.com/9HNjny8Q/agro-doctor-logo-2.png" alt="" />


                            <div className="border-s border-neutral-700 ps-5 ms-5">
                                <p className="text-sm text-neutral-200">
                                    © 2024 Agro Doctor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Footer;


