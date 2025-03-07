import React from 'react';
import { Sun, Cloud, CloudRain, CloudLightning, Wind, Droplets, Thermometer, Compass } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WeatherAndClimate = () => {
  // Static weather data for Bangladesh regions
  const regions = [
    {
      name: 'Dhaka',
      temperature: 32,
      humidity: 75,
      rainfall: 12,
      windSpeed: 8,
      condition: 'Partly Cloudy',
      icon: Cloud
    },
    {
      name: 'Chittagong',
      temperature: 30,
      humidity: 82,
      rainfall: 15,
      windSpeed: 12,
      condition: 'Light Rain',
      icon: CloudRain
    },
    {
      name: 'Sylhet',
      temperature: 29,
      humidity: 85,
      rainfall: 18,
      windSpeed: 6,
      condition: 'Heavy Rain',
      icon: CloudLightning
    },
    {
      name: 'Rajshahi',
      temperature: 34,
      humidity: 65,
      rainfall: 5,
      windSpeed: 10,
      condition: 'Sunny',
      icon: Sun
    }
  ];

  // Monthly temperature data
  const monthlyData = [
    { month: 'Jan', temp: 18, rainfall: 7.5 },
    { month: 'Feb', temp: 22, rainfall: 29 },
    { month: 'Mar', temp: 27, rainfall: 65 },
    { month: 'Apr', temp: 29, rainfall: 156 },
    { month: 'May', temp: 30, rainfall: 339 },
    { month: 'Jun', temp: 29, rainfall: 589 },
    { month: 'Jul', temp: 28, rainfall: 373 },
    { month: 'Aug', temp: 29, rainfall: 316 },
    { month: 'Sep', temp: 28, rainfall: 252 },
    { month: 'Oct', temp: 27, rainfall: 170 },
    { month: 'Nov', temp: 24, rainfall: 34 },
    { month: 'Dec', temp: 20, rainfall: 12.5 }
  ];



  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-100';
      case 'moderate':
        return 'bg-yellow-50 text-yellow-700 border-yellow-100';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Seasonal Calendar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Climate & Weather</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">Pre-Monsoon (March-May)</h4>
            <p className="text-sm text-green-600">Hot and humid with occasional thunderstorms</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Monsoon (June-September)</h4>
            <p className="text-sm text-blue-600">Heavy rainfall and high humidity</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-700 mb-2">Post-Monsoon (October-November)</h4>
            <p className="text-sm text-orange-600">Gradually decreasing rainfall and temperature</p>
          </div>
        </div>
      </div>

      {/* Current Weather Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {regions.map((region) => (
          <div key={region.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{region.name}</h3>
              <region.icon className="w-8 h-8 text-blue-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Thermometer className="w-5 h-5 text-red-500" />
                  <span className="text-gray-600">Temperature</span>
                </div>
                <span className="font-semibold">{region.temperature}°C</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">Humidity</span>
                </div>
                <span className="font-semibold">{region.humidity}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CloudRain className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">Rainfall</span>
                </div>
                <span className="font-semibold">{region.rainfall} mm</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Wind className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Wind Speed</span>
                </div>
                <span className="font-semibold">{region.windSpeed} km/h</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Climate Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Temperature Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="temp"
                name="Temperature (°C)"
                stroke="#ef4444"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Rainfall Pattern</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rainfall"
                name="Rainfall (mm)"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>



      
    </div>
  );
};

export default WeatherAndClimate;