import React from "react";
import {
  Thermometer,
  Droplets,
  Wind,
  MapPin,
  Leaf,
  BarChart3,
  Flame,
  AlertTriangle,
  Gauge,
} from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import useData from "../../../hooks/useData";
import DashboardOverviewSkeleton from "../../../components/skeleton/DashboardOverviewSkeleton";

const DashboardOverview = () => {
  const farmDetails = {
    name: "Mahin's Farms & Plantation",
    id: "F2025147",
    location: "Rajshahi,1200",
    area: "4.5 acres",
    crops: 3,
    yield: "26 tonnes",
  };

  const sensorData = {
    airQuality: "97.00",
    moisture: "164.00",
    nitrogen: "50.00",
    phosphorus: "120.00",
    potassium: "113.00",
    humidity: "69.20",
    temperature: "24.30",
    waterTemp: "22.56",
    waterTDS: "622",
    waterPH: "6.60",
  };

  const { user } = useAuth();
  const { data, loading } = useData();

  const waterQuality = {
    tds: "622 ppm",
    temperature: "22.56 °C",
    ph: "6.60",
  };

  if(loading){
    return <DashboardOverviewSkeleton />
  }else{

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard Overview
              </h1>
              <p className="text-gray-500 mt-1">
                Real-time monitoring and analytics
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="text-sm/6 font-semibold bg-[#d6fa9c] rounded-xl text-black px-3.5 py-1 cursor-pointer">
                Export Data
              </button>
            </div>
          </div>
  
          {/* Farm Details Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 object-contain rounded-xl" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 capitalize">
                    {user.displayName}
                  </h2>
                  <p className="text-gray-500">ID: {farmDetails.id}</p>
                </div>
              </div>
              <div className="bg-green-50 px-3 py-1 rounded-full">
                <span className="text-green-700 text-sm">Active</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{data?.Location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Total Area</p>
                  <p className="font-medium">{farmDetails.area}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Leaf className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Previous Yield</p>
                  <p className="font-medium">{farmDetails.yield}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Leaf className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Number of Crops</p>
                  <p className="font-medium">{farmDetails.crops}</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Sensor Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Environmental Metrics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Environmental Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Wind className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">Air Quality</span>
                  </div>
                  <span className="font-semibold">{data?.AirQuality}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Thermometer className="w-5 h-5 text-red-500" />
                    <span className="text-gray-600">Temperature</span>
                  </div>
                  <span className="font-semibold">{data?.temperature}°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">Humidity</span>
                  </div>
                  <span className="font-semibold">{data?.humidity}%</span>
                </div>
              </div>
            </div>
  
            {/* Soil Nutrients */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Soil Nutrients
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Nitrogen</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500"
                        style={{ width: `${data?.Nitrogen}` }}
                      ></div>
                    </div>
                    <span className="ml-3 font-semibold">{data?.Nitrogen}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Phosphorus</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${data?.Phosphorus / 2}` }}
                      ></div>
                    </div>
                    <span className="ml-3 font-semibold">{data?.Phosphorus}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Potassium</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500"
                        style={{ width: `${data?.Potassium / 2}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 font-semibold">{data?.Potassium}</span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Water Quality */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Water Quality
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Gauge className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">TDS</span>
                  </div>
                  <span className="font-semibold">{data?.["water-TDS"]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Thermometer className="w-5 h-5 text-red-500" />
                    <span className="text-gray-600">Temperature</span>
                  </div>
                  <span className="font-semibold">{data?.["water-Temp"]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Droplets className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">pH Level</span>
                  </div>
                  <span className="font-semibold">{data?.["water-pH"]}</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Alert Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                System Alerts
              </h3>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                All Systems Normal
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="font-medium">Moisture Level Alert</p>
                  <p className="text-sm text-gray-500">
                    Current level: {data?.Moisture}% (Normal Range)
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Flame className="w-5 h-5 text-red-500" />
                <div>
                  <p className="font-medium">Fire Detection System</p>
                  <p className="text-sm text-gray-500">
                    Status: No Fire Detected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default DashboardOverview;
