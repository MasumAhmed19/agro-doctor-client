import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Error from '../pages/ErrorPage/Error';
import Home from '../pages/Home/Home';
import Login from '../pages/Auth/Login';
import SignUP from '../pages/Auth/SignUP';
import About from '../pages/About/About';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../pages/Dashboard/Dashboard';
import Contact from '../pages/Contact/Contact';
import Service from '../pages/Service/Service';
import DashboardOverview from '../pages/Dashboard/Dash-Pages/DashboardOverview';
import SoilManagement from '../pages/Dashboard/Dash-Pages/SoilManagement';
import WaterResourceManagement from '../pages/Dashboard/Dash-Pages/WaterResourceManagement';
import CropManagement from '../pages/Dashboard/Dash-Pages/CropManagement';
import WeatherAndClimate from '../pages/Dashboard/Dash-Pages/WeatherAndClimate';
import DiseaseIdentify from '../pages/Dashboard/Dash-Pages/DiseaseIdentify';
import Fertilizer from '../pages/Dashboard/Dash-Pages/Fertilizer';
import Carbon from '../pages/Dashboard/Dash-Pages/Carbon';
import MarketPrice from '../pages/Dashboard/Dash-Pages/MarketPrice';
import UserProfile from '../pages/Dashboard/Dash-Pages/UserProfile';
import LabourHire from '../pages/Dashboard/Dash-Pages/LabourHire';
import ChatBot from '../pages/Dashboard/Dash-Pages/ChatBot';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <Error />,
        children: [
            {   index:true,
                element: <Home />,
            }, {
                path: '/about',
                element: <About />
            }, {
                path: '/contact',
                element: <Contact />
            }, {
                path: '/services',
                element: <Service />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [ 
            {   path:'/dashboard/overview',
                element: <DashboardOverview />,
            },{
                path: '/dashboard/soil-management',
                element: <SoilManagement />,
            },{
                path: '/dashboard/water-management',
                element: <WaterResourceManagement />,
            }
            ,{
                path: '/dashboard/crop-management',
                element:<CropManagement />,
            }
            ,{
                path: '/dashboard/weather-and-climate',
                element:<WeatherAndClimate />,
            }
            ,{
                path: '/dashboard/disease',
                element: <DiseaseIdentify />,
            }
            ,{
                path: '/dashboard/fertilizer',
                element: <Fertilizer />,
            }
            ,{
                path: '/dashboard/carbon-footprint',
                element: <Carbon />,
            }
            ,{
                path: '/dashboard/market-price',
                element: <MarketPrice />,
            }
            ,{
                path: '/dashboard/user-profile',
                element: <UserProfile />,
            },{
                path: '/dashboard/labour',
                element: <LabourHire />,
            },{
                path: '/dashboard/chatbot',
                element: <ChatBot />,
            }
        ]
    },{
        path:'/login',
        element:<Login />
    }

])

