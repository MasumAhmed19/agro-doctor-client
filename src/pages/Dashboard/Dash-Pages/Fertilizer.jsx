import React, { useState } from 'react';
import { Search, Leaf, ArrowRight } from 'lucide-react';

const fertilizers = [
  {
    id: "urea",
    name: "ইউরিয়া (Urea)",
    description: "High-nitrogen fertilizer essential for leaf growth and overall plant development",
    benefits: [
      "High nitrogen content (46%)",
      "Promotes rapid leaf growth",
      "Improves yield quality",
      "Cost-effective nitrogen source"
    ],
    applicationRate: "180-240 kg/hectare",
    suitableCrops: ["ধান (Rice)", "পাট (Jute)", "আখ (Sugarcane)", "ভুট্টা (Corn)", "আলু (Potato)"],
    icon: "https://i.ibb.co.com/MkWdVDtF/image.jpg"
  },
  {
    id: "tsp",
    name: "টিএসপি (TSP)",
    description: "Triple Super Phosphate - Essential for root development and flowering",
    benefits: [
      "High phosphorus content",
      "Improves root growth",
      "Enhances flowering and fruiting",
      "Increases crop resistance"
    ],
    applicationRate: "100-150 kg/hectare",
    suitableCrops: ["ধান (Rice)", "গম (Wheat)", "ভুট্টা (Corn)", "সরিষা (Mustard)", "মসুর (Lentil)"],
    icon: "https://i.ibb.co.com/gLqYSFX7/Tsp-Fertilizer-Triple-Super-Phosphate-46-Granular.jpg"
  },
  {
    id: "mop",
    name: "এমওপি (MoP)",
    description: "Muriate of Potash - Important for overall plant health and disease resistance",
    benefits: [
      "High potassium content",
      "Improves crop quality",
      "Enhances disease resistance",
      "Better water regulation"
    ],
    applicationRate: "60-100 kg/hectare",
    suitableCrops: ["ধান (Rice)", "আলু (Potato)", "আখ (Sugarcane)", "কলা (Banana)", "টমেটো (Tomato)"],
    icon: "https://i.ibb.co.com/C5rWFT2J/MoP1.png"
  },
  {
    id: "dap",
    name: "ডিএপি (DAP)",
    description: "Di-ammonium Phosphate - Balanced fertilizer for both nitrogen and phosphorus",
    benefits: [
      "Contains both N and P",
      "Promotes early growth",
      "Improves seed formation",
      "Enhances yield quality"
    ],
    applicationRate: "120-180 kg/hectare",
    suitableCrops: ["ধান (Rice)", "গম (Wheat)", "ভুট্টা (Corn)", "আখ (Sugarcane)", "তুলা (Cotton)"],
    icon: "https://i.ibb.co.com/LhYRTsff/DAP.jpg"
  },{
    id: "gypsum",
    name: "জিপসাম (Gypsum)",
    description: "Calcium Sulfate - Enhances soil structure and provides calcium and sulfur to crops",
    benefits: [
      "Improves soil structure",
      "Supplies essential calcium and sulfur",
      "Reduces soil salinity",
      "Enhances nutrient uptake"
    ],
    applicationRate: "100-200 kg/hectare",
    suitableCrops: ["ধান (Rice)", "গম (Wheat)", "টমেটো (Tomato)", "বেগুন (Eggplant)", "আলু (Potato)"],
    icon: "https://i.ibb.co.com/W4zwp6Gw/image.jpg"
  },
  {
    id: "zinc-sulfate",
    name: "জিংক সালফেট (Zinc Sulfate)",
    description: "Essential micronutrient for enzyme function and growth in plants",
    benefits: [
      "Prevents zinc deficiency",
      "Enhances chlorophyll production",
      "Promotes seed and grain formation",
      "Improves disease resistance"
    ],
    applicationRate: "5-10 kg/hectare",
    suitableCrops: ["ধান (Rice)", "গম (Wheat)", "ভুট্টা (Corn)", "মসুর (Lentil)", "সরিষা (Mustard)"],
    icon: "https://i.ibb.co.com/dsPs65P3/image.jpg"
  },
  {
    id: "boric-acid",
    name: "বোরিক এসিড (Boric Acid)",
    description: "Provides boron, essential for cell wall formation and reproductive growth",
    benefits: [
      "Prevents boron deficiency",
      "Enhances flowering and fruit setting",
      "Improves seed quality",
      "Supports root development"
    ],
    applicationRate: "1-2 kg/hectare",
    suitableCrops: ["সরিষা (Mustard)", "মসুর (Lentil)", "টমেটো (Tomato)", "সিম (Bean)", "পেঁয়াজ (Onion)"],
    icon: "https://i.ibb.co.com/zT9tk4pz/Boric-acid.jpg"
  },
  {
    id: "magnesium-sulfate",
    name: "ম্যাগনেসিয়াম সালফেট (Magnesium Sulfate)",
    description: "Provides magnesium and sulfur, essential for chlorophyll production",
    benefits: [
      "Enhances chlorophyll synthesis",
      "Prevents magnesium deficiency",
      "Improves photosynthesis",
      "Boosts overall crop health"
    ],
    applicationRate: "10-15 kg/hectare",
    suitableCrops: ["ধান (Rice)", "আলু (Potato)", "টমেটো (Tomato)", "বেগুন (Eggplant)", "কপি (Cabbage)"],
    icon: "https://i.ibb.co.com/fdjSVgsg/zinc-sulphate-crystal-500x500.png"
  }
  
];

export default function Fertilizer() {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const uniqueCrops = Array.from(new Set(fertilizers.flatMap(f => f.suitableCrops))).sort();

  const filteredFertilizers = fertilizers.filter(fertilizer => {
    const matchesSearch = fertilizer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fertilizer.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCrop = !selectedCrop || fertilizer.suitableCrops.includes(selectedCrop);
    return matchesSearch && matchesCrop;
  });

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search fertilizers..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
            >
              <option value="">All Crops</option>
              {uniqueCrops.map(crop => (
                <option key={crop} value={crop}>{crop}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="  pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFertilizers.map(fertilizer => (
            <div key={fertilizer.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={fertilizer.icon}
                alt={fertilizer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{fertilizer.name}</h3>
                <p className="text-gray-600 mt-2">{fertilizer.description}</p>

                <h4 className="font-medium text-gray-900 mt-4">Benefits:</h4>
                <ul className="mt-2 space-y-1">
                  {fertilizer.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-medium text-gray-900 mt-4">Application Rate:</h4>
                <p className="text-gray-600">{fertilizer.applicationRate}</p>

                <h4 className="font-medium text-gray-900 mt-4">Suitable Crops:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {fertilizer.suitableCrops.map((crop, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
