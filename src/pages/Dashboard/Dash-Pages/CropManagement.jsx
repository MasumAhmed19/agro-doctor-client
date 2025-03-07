import React, { useState } from 'react';
import { Calendar, MapPin, Sprout, Cloud, Thermometer, Droplets } from 'lucide-react';

const CropManagement = () => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Static location data for Bangladesh
  const locations = [
    'Dhaka',
    'Chittagong',
    'Rajshahi',
    'Khulna',
    'Sylhet',
    'Barisal',
    'Rangpur'
  ];

  // Updated crop database for Bangladesh
  const cropDatabase = {
    'Summer': [
      {
        name: 'Rice (Aus)',
        season: 'Summer',
        waterRequirement: 'High',
        temperature: '25-35°C',
        growthPeriod: '90-120 days',
        description: 'Short-duration rice variety suitable for summer cultivation.',
        imageUrl: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Jute',
        season: 'Summer',
        waterRequirement: 'Moderate',
        temperature: '20-40°C',
        growthPeriod: '120-150 days',
        description: 'Major cash crop suitable for warm and humid climate.',
        imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Maize',
        season: 'Summer',
        waterRequirement: 'Moderate',
        temperature: '20-30°C',
        growthPeriod: '90-110 days',
        description: 'Versatile crop used for food, feed, and industrial purposes.',
        imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=400'
      }
    ],
    'Monsoon': [
      {
        name: 'Rice (Aman)',
        season: 'Monsoon',
        waterRequirement: 'High',
        temperature: '25-35°C',
        growthPeriod: '150-180 days',
        description: 'Long-duration rice variety cultivated during the monsoon season.',
        imageUrl: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Sugarcane',
        season: 'Monsoon',
        waterRequirement: 'High',
        temperature: '20-30°C',
        growthPeriod: '10-12 months',
        description: 'Major cash crop used for sugar production.',
        imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400'
      }
    ],
    'Winter': [
      {
        name: 'Potato',
        season: 'Winter',
        waterRequirement: 'Moderate',
        temperature: '15-20°C',
        growthPeriod: '90-120 days',
        description: 'Cool-season crop with high yield potential.',
        imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Wheat',
        season: 'Winter',
        waterRequirement: 'Low to Moderate',
        temperature: '15-25°C',
        growthPeriod: '120-150 days',
        description: 'Major cereal crop suitable for winter season.',
        imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Mustard',
        season: 'Winter',
        waterRequirement: 'Low',
        temperature: '15-25°C',
        growthPeriod: '90-120 days',
        description: 'Oilseed crop cultivated for its seeds and oil.',
        imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=400'
      }
    ]
  };

  // Function to determine the season based on the start date
  const getSeason = (date) => {
    const month = new Date(date).getMonth() + 1; // Months are 0-indexed in JavaScript
    if (month >= 3 && month <= 5) return 'Summer';
    if (month >= 6 && month <= 9) return 'Monsoon';
    return 'Winter';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const season = getSeason(startDate);
    setSuggestions(cropDatabase[season] || []);
    setShowSuggestions(true);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200"
          alt="Farming Background"
          className="w-full h-[300px] object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Crop Suggestion</h1>
          <p className="text-lg max-w-2xl">
            Get personalized crop suggestions based on your selected location and planting schedule
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline-block mr-2" />
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              >
                <option value="">Select Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline-block mr-2" />
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline-block mr-2" />
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-sm/6 flex items-center justify-center gap-2 font-semibold bg-[#d6fa9c] rounded-md text-black px-3.5 py-1 cursor-pointer"
            >
              <Sprout className="w-5 h-5" />
              <span>Get Crop Suggestions</span>
            </button>
          </div>
        </form>
      </div>

      {/* Suggestions Section */}
      {showSuggestions && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Recommended Crops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.map((crop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src={crop.imageUrl}
                      alt={crop.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{crop.name}</h3>
                    <p className="text-gray-600 mb-4">{crop.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Cloud className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-600">{crop.season}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Thermometer className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-600">{crop.temperature}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-600">{crop.waterRequirement}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{crop.growthPeriod}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CropManagement;