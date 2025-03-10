import { 
    Leaf, 
    Droplets, 
    Sun, 
    Wind, 
    Sprout, 
    TreePine, 
    Mountain, 
    Flower2 
  } from 'lucide-react';
  import { useState } from 'react';
  import WaterResourceManagement from '../../Dashboard/Dash-Pages/WaterResourceManagement';
  import SoilManagement from '../../Dashboard/Dash-Pages/SoilManagement';
  import CropManagement from '../../Dashboard/Dash-Pages/CropManagement';
  import DiseaseIdentify from '../../Dashboard/Dash-Pages/DiseaseIdentify';
  import Fertilizer from '../../Dashboard/Dash-Pages/Fertilizer';
  import Carbon from '../../Dashboard/Dash-Pages/Carbon';
  import LabourHire from '../../Dashboard/Dash-Pages/LabourHire';
  import MarketPrice from '../../Dashboard/Dash-Pages/MarketPrice';
  
  const tabs = [
    { id: 'water-management', icon: <Droplets className="w-5 h-5" />, label: 'Water Management' },
    { id: 'soil-management', icon: <Leaf className="w-5 h-5" />, label: 'Soil Management' },
    { id: 'crop-suggestion', icon: <Sun className="w-5 h-5" />, label: 'Crop Suggestion' },
    { id: 'diseases-identify', icon: <Wind className="w-5 h-5" />, label: 'Diseases Identify' },
    { id: 'fertilizer-suggestion', icon: <Sprout className="w-5 h-5" />, label: 'Fertilizer Suggestion' },
    { id: 'carbon-footprint', icon: <TreePine className="w-5 h-5" />, label: 'Carbon FootPrint' },
    { id: 'labour-hire', icon: <Mountain className="w-5 h-5" />, label: 'Labour Hire' },
    { id: 'market-place', icon: <Flower2 className="w-5 h-5" />, label: 'Market Place' },
  ];
  
  // Components for each tab content
  const TabContent = {
    'water-management': <WaterResourceManagement />,
    'soil-management': <SoilManagement />,
    'crop-suggestion': <CropManagement />,
    'diseases-identify': <DiseaseIdentify />,
    'fertilizer-suggestion': <Fertilizer />,
    'carbon-footprint': <Carbon />,
    'labour-hire': <LabourHire />,
    'market-place': <MarketPrice />,
  };
  
  const FeatureTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
  
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
  
    const ActiveTabContent = TabContent[activeTab];
  
    return (
      <div id='whatoffers' className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-6xl text-center text-gray-900 mb-12">
            What AgroDoctor Offers
          </h2>
  
          {/* Tabs Navigation at the Top */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-left
                  transition-all duration-200 whitespace-nowrap cursor-pointer
                  ${activeTab === tab.id
                    ? 'bg-green-50 text-green-700 border-green-200 border'
                    : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
  
          {/* Content Area - Full Width Below Tabs */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 h-full min-h-[400px]">
            {ActiveTabContent || <p className="text-gray-600 text-center">Select a tab to view content.</p>}
          </div>
        </div>
      </div>
    );
  };
  
  export default FeatureTabs;
  