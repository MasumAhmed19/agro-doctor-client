// import React from 'react';
// import { Radar, RadarChart, PolarGrid, PolarAngleAxis, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer, Legend, PolarRadiusAxis } from 'recharts';
// import { Droplets, ThermometerSun, Sprout } from 'lucide-react';
// import useData from '../../../hooks/useData';

// const SoilManagement = () => {
//   const { data, loading } = useData();

//   // Soil stats using data from useData
//   const soilStats = [
//     { icon: ThermometerSun, label: 'pH Level', value: data?.PH || 'N/A', color: 'text-blue-600' },
//     { icon: Droplets, label: 'Moisture', value: data?.Moisture ? `${data.Moisture}%` : 'N/A', color: 'text-teal-600' },
//     { icon: Sprout, label: 'Quality', value: 'Good', color: 'text-green-600' }, // Quality can be dynamic based on your logic
//   ];

//   // Radar chart data using data from useData
//   const radarData = [
//     { attribute: 'Nitrogen', value: parseFloat(data?.Nitrogen) || 0 },
//     { attribute: 'Phosphorus', value: parseFloat(data?.Phosphorus) || 0 },
//     { attribute: 'Potassium', value: parseFloat(data?.Potassium) || 0 },
//     { attribute: 'pH', value: parseFloat(data?.PH) || 0 },
//     { attribute: 'Moisture', value: parseFloat(data?.Moisture) || 0 }
//   ];

//   // Line chart data
//   const lineData = [
//     { date: '2024-07-01', nitrogen: 12, phosphorus: 15, potassium: 10 },
//     { date: '2024-09-02', nitrogen: 14, phosphorus: 16, potassium: 11 },
//     { date: '2024-10-03', nitrogen: 15, phosphorus: 17, potassium: 11 },
//     { date: '2024-11-04', nitrogen: 16, phosphorus: 17, potassium: 10.5 },
//     { date: '2025-01-05', nitrogen: 17, phosphorus: 18, potassium: 10.8 }
//   ];

//   // Bar chart data (optional, if you want to use it)
//   const barData = [
//     { type: 'Sand', percentage: 40 },
//     { type: 'Silt', percentage: 40 },
//     { type: 'Clay', percentage: 20 }
//   ];

//   if (loading) {
//     return <div>Loading...</div>; // Add a loading state if needed
//   }

//   return (
//     <div className="space-y-6">
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100">
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold text-gray-800">Soil Management</h2>
//           <p className="text-gray-500 mt-1">Real-time soil health monitoring and analysis</p>
//         </div>

//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50 border-t border-gray-100">
//           {soilStats.map((stat, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
//               <div className="flex items-center space-x-3">
//                 <stat.icon className={`w-8 h-8 ${stat.color}`} />
//                 <div>
//                   <p className="text-sm text-gray-500">{stat.label}</p>
//                   <p className="text-xl font-semibold">{stat.value}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Radar Chart */}
//         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//           <h3 className="text-lg font-semibold mb-4">Soil Health Indicators</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <RadarChart data={radarData}>
//               <PolarGrid strokeDasharray="3 3" />
//               <PolarAngleAxis dataKey="attribute" />
//               <PolarRadiusAxis />
//               <Radar
//                 name="Soil Health"
//                 dataKey="value"
//                 stroke="#4F46E5"
//                 fill="#4F46E5"
//                 fillOpacity={0.3}
//               />
//             </RadarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Line Chart (unchanged) */}
//         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//           <div className='flex items-center justify-between'>
//               <h3 className="text-lg font-semibold mb-4">Nutrient Levels Trend</h3>

//               <a  href="https://www.google.com"  target='_blank' className="text-sm/6 font-semibold bg-[#d6fa9c] rounded-xl text-black px-3.5 py-1 cursor-pointer">
//                 View Detail Data
//               </a>

//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={lineData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="nitrogen"
//                 stroke="#4F46E5"
//                 strokeWidth={2}
//                 dot={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="phosphorus"
//                 stroke="#10B981"
//                 strokeWidth={2}
//                 dot={false}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="potassium"
//                 stroke="#F59E0B"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SoilManagement;

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PolarRadiusAxis,
  Legend,
} from "recharts";
import { Droplets, ThermometerSun, Sprout } from "lucide-react";
import useData from "../../../hooks/useData";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";

const SoilManagement = () => {
  const { data, loading } = useData();

  // Soil stats using data from useData
  const soilStats = [
    {
      icon: ThermometerSun,
      label: "pH Level",
      value: data?.PH || "N/A",
      color: "text-blue-600",
    },
    {
      icon: Droplets,
      label: "Moisture",
      value: data?.Moisture ? `${data.Moisture}%` : "N/A",
      color: "text-teal-600",
    },
    { icon: Sprout, label: "Quality", value: "Good", color: "text-green-600" }, // Quality can be dynamic based on your logic
  ];

  // Radar chart data using data from useData
  const radarData = [
    { attribute: "Nitrogen", value: parseFloat(data?.Nitrogen) || 0 },
    { attribute: "Phosphorus", value: parseFloat(data?.Phosphorus) || 0 },
    { attribute: "Potassium", value: parseFloat(data?.Potassium) || 0 },
    { attribute: "pH", value: parseFloat(data?.PH) || 0 },
    { attribute: "Moisture", value: parseFloat(data?.Moisture) || 0 },
  ];

  // Line chart data
  const lineData = [
    { date: "2024-07-01", nitrogen: 12, phosphorus: 15, potassium: 10 },
    { date: "2024-09-02", nitrogen: 14, phosphorus: 16, potassium: 11 },
    { date: "2024-10-03", nitrogen: 15, phosphorus: 17, potassium: 11 },
    { date: "2024-11-04", nitrogen: 16, phosphorus: 17, potassium: 10.5 },
    { date: "2025-01-05", nitrogen: 17, phosphorus: 18, potassium: 10.8 },
  ];

  // Soil condition, suggested crops, and health tips
  const soilCondition = {
    condition: "Moderate",
    description:
      "Your soil has a balanced nutrient profile but could benefit from organic matter to improve moisture retention.",
    suggestedCrops: [
      {
        name: "Rice",
        reason: "Thrives in moist soil with moderate pH levels.",
      },
      {
        name: "Wheat",
        reason: "Suitable for well-drained soil with balanced nutrients.",
      },
      {
        name: "Potatoes",
        reason: "Requires loose, well-aerated soil with moderate moisture.",
      },
    ],
    healthTips: [
      "Add compost or organic matter to improve soil structure.",
      "Rotate crops to prevent nutrient depletion.",
      "Use cover crops to reduce soil erosion and improve fertility.",
    ],
  };

  if (loading) {
    return <LoadingSpinner />; // Add a loading state if needed
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Soil Management
          </h2>
          <p className="text-gray-500 mt-1">
            Real-time soil health monitoring and analysis
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50 border-t border-gray-100">
          {soilStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Soil Health Indicators</h3>
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <RadarChart data={radarData}>
              <PolarGrid strokeDasharray="3 3" />
              <PolarAngleAxis dataKey="attribute" />
              <PolarRadiusAxis />
              <Radar
                name="Soil Health"
                dataKey="value"
                stroke="#4F46E5"
                fill="#4F46E5"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold mb-4">
              Nutrient Levels Trend
            </h3>
            <a
              href="https://www.google.com"
              target="_blank"
              className="text-sm/6 font-semibold bg-[#d6fa9c] rounded-xl text-black px-3.5 py-1 cursor-pointer"
            >
              View Detail Data
            </a>
          </div>
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={lineData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
              />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="nitrogen"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="phosphorus"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="potassium"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Soil Condition, Suggested Crops, and Health Tips Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Soil Insights & Recommendations
        </h3>

        {/* Soil Condition */}
        <div className="mb-8 bg-blue-50 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Soil Condition
          </h4>
          <p className="text-gray-600">
            <span className="font-semibold">{soilCondition.condition}:</span>{" "}
            {soilCondition.description}
          </p>
        </div>

        {/* Suggested Crops */}
        <div className="mb-8 bg-green-50 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Suggested Crops
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {soilCondition.suggestedCrops.map((crop, index) => (
              <div
                key={index}
                className=" p-2 rounded-lg"
              >
                <p className="text-lg font-semibold text-gray-800">
                  {crop.name}
                </p>
                <p className="text-sm text-gray-600">{crop.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soil Health Tips */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Soil Health Tips
          </h4>
          <div className="ml-3">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {soilCondition.healthTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilManagement;
