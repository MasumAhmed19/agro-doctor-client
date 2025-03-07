import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
    MdDashboard,
    MdCalendarToday,
    MdPeople,
    MdSettings,
    MdNotifications,
    MdSearch,
    MdMenu,
    MdClose,
    MdAnalytics,
    MdMessage
} from 'react-icons/md';
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLandslide } from "react-icons/md";
import { MdOutlineWater } from "react-icons/md";
import { GiField } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiMagnifyingGlass } from "react-icons/gi";
import { GiFertilizerBag } from "react-icons/gi";
import { TbBrandCarbon } from "react-icons/tb";
import { FaShopLock } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import useAuth from '../../hooks/useAuth';

const menuItems = [
    { icon: RxDashboard, label: 'Dashboard', to: '/dashboard/overview' },
    { icon: MdOutlineLandslide, label: 'Soil Management', to: '/dashboard/soil-management' },
    { icon: MdOutlineWater, label: 'Water Management', to: '/dashboard/water-management' },
    { icon: GiField, label: 'Crop Management', to: '/dashboard/crop-management' },
    { icon: TiWeatherPartlySunny, label: 'Weather and Climate', to: '/dashboard/weather-and-climate' },
    { icon: GiMagnifyingGlass, label: 'Disease Identify', to: '/dashboard/disease' },
    { icon: GiFertilizerBag, label: 'Fertilizer Suggestion', to: '/dashboard/fertilizer' },
    { icon: TbBrandCarbon, label: 'Carbon Footprint', to: '/dashboard/carbon-footprint' },
    { icon: FaShopLock, label: 'Market Place', to: '/dashboard/market-price' },
    { icon: FaRegUser, label: 'User Profile', to: '/dashboard/user-profile' },


];

const Dashboard = () => {
    const { user, loading, logOut } = useAuth()
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const navigate = useNavigate()

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const handleLogout = async ()=>{
        try{
            await logOut();
        }catch(err){
            console.log("Error-->", err)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                    onClick={closeSidebar}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 z-50 w-64 h-screen transition-all duration-300 ease-in-out transform
          ${sidebarOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'} 
          lg:translate-x-0 lg:shadow-none bg-[#032c1e]  overflow-y-auto overscroll-contain
        `}
            >
                <div className="h-full px-3 py-4 flex flex-col">
                    {/* Close button in sidebar */}
                    <div className="mb-8 px-2 flex items-center justify-between">
                        <img src="https://i.ibb.co.com/9HNjny8Q/agro-doctor-logo-2.png" className='w-40' alt="" />
                        <button
                            onClick={closeSidebar}
                            className="lg:hidden cursor-pointer p-2 rounded-lg font-bold text-[#BEE38F] "
                        >
                            <MdClose size={22} />
                        </button>
                    </div>

                    <nav className="dash-act flex-1 space-y-2">
                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}
                                onClick={() => setSidebarOpen(false)}
                                className={`
                  flex items-center w-full px-4 py-2 text-sm text-white rounded-lg
                transition-all duration-150 ease-in-out
                `}
                            >
                                <item.icon className="w-4 h-4 mr-3" />
                                <span className="">{item.label}</span>
                            </NavLink>
                        ))}
                        <button
                            onClick={() => handleLogout()}
                            className={`
                  flex items-center w-full px-4 py-2 text-sm text-white rounded-lg cursor-pointer
                `}
                        >
                            <CiLogout  className="w-4 h-4 mr-3" />
                            <span className="">Logout</span>
                        </button>
                    </nav>

                    <div className="mt-auto pt-4 border-t-[1px] border-[#0e412e]">
                        <div className="flex items-center px-4 py-3 space-x-3 rounded-lg transition-colors duration-150">
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                                referrerPolicy='no-referrer'
                            />
                            <div>
                                <p className="text-sm font-medium text-gray-100">{user?.displayName}</p>
                                <p className="text-xs text-gray-400">{user?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:ml-64 min-h-screen flex flex-col">
                {/* Header */}
                <header className="sticky top-0 z-30 bg-white border-b border-gray-300">
                    <div className="px-4 py-3 lg:px-6">
                        <div className="flex items-center justify-between gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-150"
                            >
                                <MdMenu size={24} className="text-gray-600" />
                            </button>

                            <div className={`
                flex-1 max-w-2xl relative
                ${searchFocused ? 'ring-2 ring-[#032C1E] rounded-lg' : ''}
              `}>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdSearch className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-transparent transition-all duration-150"
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                />
                            </div>

                            <div className="flex items-center">
                                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-150 relative">
                                    <MdNotifications className="h-6 w-6 text-gray-600" />
                                    <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-[#98e51e] border-2 border-white transform translate-x-1/2 -translate-y-1/2"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-4 lg:p-6 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;