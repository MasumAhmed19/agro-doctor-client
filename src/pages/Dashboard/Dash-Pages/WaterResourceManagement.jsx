import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, ResponsiveContainer, Legend } from 'recharts';
import { Droplets, Gauge, CloudRain, Sprout } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import useData from '../../../hooks/useData';

const WaterResourceManagement = () => {
  const { data, loading } = useData();

  // Water statistics data using data from useData
  const waterStats = [
    { icon: Droplets, label: 'Water Temperature', value: data?.['water-Temp'] ? `${data['water-Temp']} °C` : 'N/A', color: 'text-blue-600' },
    { icon: Gauge, label: 'Water TDS', value: data?.['water-TDS'] ? `${data['water-TDS']} ppm` : 'N/A', color: 'text-green-600' },
    { icon: CloudRain, label: 'Water pH', value: data?.['water-pH'] || 'N/A', color: 'text-purple-600' },
    { icon: Sprout, label: 'Ambient Temp', value: data?.temperature ? `${data.temperature} °C` : 'N/A', color: 'text-teal-600' }
  ];

  // Data for water usage over time
  const usageData = [
    { date: '2024-03-01', usage: 4800, rainfall: 20, irrigation: 3000 },
    { date: '2024-03-02', usage: 5200, rainfall: 0, irrigation: 3500 },
    { date: '2024-03-03', usage: 4900, rainfall: 15, irrigation: 3200 },
    { date: '2024-03-04', usage: 5100, rainfall: 25, irrigation: 2800 },
    { date: '2024-03-05', usage: 4700, rainfall: 30, irrigation: 2500 }
  ];

  // Data for hourly water consumption
  const hourlyData = [
    { time: '00:00', consumption: 150 },
    { time: '04:00', consumption: 100 },
    { time: '08:00', consumption: 300 },
    { time: '12:00', consumption: 450 },
    { time: '16:00', consumption: 380 },
    { time: '20:00', consumption: 200 }
  ];

  // Coordinates for Bangladesh
  const bangladeshCoordinates = [23.6850, 90.3563]; // Latitude and Longitude for Bangladesh

  if (loading) {
    return <div>Loading...</div>; // Add a loading state if needed
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Water Resource Management</h2>
          <p className="text-gray-500 mt-1">Real-time water usage monitoring and analytics</p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-50 border-t border-gray-100">
          {waterStats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
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

       {/* Map Section */}
       <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Location Overview</h3>
        <div className="h-96 rounded-lg overflow-hidden">
          <MapContainer center={bangladeshCoordinates} zoom={7} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={bangladeshCoordinates}>
              <Popup>
                Bangladesh <br /> Water Resource Monitoring
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Water Usage Trend */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Water Usage Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={usageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="usage"
                name="Total Usage"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="irrigation"
                name="Irrigation"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Hourly Consumption */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Hourly Water Consumption</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="consumption"
                name="Consumption (L)"
                stroke="#4F46E5"
                fill="#4F46E5"
                fillOpacity={0.1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

     
    </div>
  );
};

export default WaterResourceManagement;