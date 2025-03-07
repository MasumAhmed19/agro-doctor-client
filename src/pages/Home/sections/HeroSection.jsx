import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-[#032c1e] min-h-[80vh]">

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-5 md:-top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#e4ffba] to-[#d6fa9c] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] "
                    />
                </div>
                {/* main content */}
                <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-56 lg:-mt-32">

                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-[#e4ffba]">
                            Unlock the Future of Farming with Smart Agro-Monitor
                        </div>
                    </div>

                    <div className="text-center">

                        <div>
                            <div>
                                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-[5.9vw]">
                                    Welcome to the Modern
                                </h1>
                            </div>
                            <div className='flex flex-col md:flex-row items-center justify-center md:gap-2'>
                                <h1 className="text-4xl font-semibold tracking-tight text-[#d6fa9c] sm:text-5xl md:text-[5.9vw]">
                                    Farming Era
                                </h1>
                                <div className='hidden lg:flex items-center gap-4 md:gap-10 mt-4 md:mt-7 md:ml-10'>
                                    <img src="https://i.ibb.co.com/gZsTgb3B/modern-farming-technology.jpg" className='w-[120px] md:w-[150px] h-[64px] md:h-[80px] object-cover rounded-3xl border-3 border-[#e4ffba]' alt="" />
                                    <img className='w-[120px] md:w-[150px] h-[64px] md:h-[80px] object-cover rounded-3xl border-3 border-[#e4ffba]' src="https://i.ibb.co.com/pBFV2HC3/tractor-agricultural-machine-cultivating-field-342744-896.jpg" alt="" />
                                    <img className='w-[120px] md:w-[150px] h-[64px] md:h-[80px] object-cover rounded-3xl border-3 border-[#e4ffba]' src="https://i.ibb.co.com/1GfJWSfV/1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <p className="mt-10 text-md md:w-3/4 mx-auto px-4 md:px-0 text-pretty text-white">
                            Smart Agro-Monitor is an IoT-based precision farming system that helps farmers optimize water usage, improve soil quality, and manage crop health efficiently
                        </p>
                        <div className="mt-8 md:mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to='/dashboard'
                                className="rounded-md bg-[#d6fa9c] px-4 py-2.5 text-sm font-semibold text-black shadow-xs"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>

                </div>

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="animate-pulse relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#d6fa9c76] to-[#e5ffba4b] opacity-5 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] "
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection