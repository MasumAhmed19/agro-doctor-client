import { Users, Soup, Heart, Leaf } from 'lucide-react';

const sdgCards = [
  {
    id: 1,
    title: 'No Poverty',
    description: 'Supporting farmers with sustainable income opportunities and market access',
    icon: <Users className="h-6 w-6" />,
    color:'bg-red-100'
  },
  {
    id: 2,
    title: 'Zero Hunger',
    description: 'Improving food security through advanced farming techniques',
    icon: <Soup className="h-6 w-6" />,
    color:'bg-yellow-100'
  },
  {
    id: 3,
    title: 'Good Health',
    description: 'Promoting organic farming and healthy agricultural practices',
    icon: <Heart className="h-6 w-6" />,
    color:'bg-green-100'
  },
  {
    id: 13,
    title: 'Climate Action',
    description: 'Implementing sustainable farming methods to reduce environmental impact',
    icon: <Leaf className="h-6 w-6" />,
    color:'bg-purple-100'
  },
];

function SustainableAgriculture() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-6xl text-gray-900 mb-4">
            Sustainable Agriculture Initiatives
          </h2>
          <p className="text-lg text-gray-600">
            Our commitment to sustainable farming practices and global development goals
          </p>
        </div>

        {/* SDG Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sdgCards.map((card) => (
            <div
              key={card.id}
              className={`group ${card.color} border border-gray-100 rounded-lg p-6 transition-all duration-200`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-lg text-green-600">
                  {card.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SustainableAgriculture;
