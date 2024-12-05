import React from "react";

// Mock Data for the Marketplace Listings
const cropsForSale = [
  {
    id: 1,
    name: "Maize",
    image: "https://via.placeholder.com/150",
    price: 150,
    quantity: 50, // quantity in kilograms
    description: "High-quality maize suitable for consumption or seed.",
  },
  {
    id: 2,
    name: "Rice",
    image: "https://via.placeholder.com/150",
    price: 200,
    quantity: 30,
    description: "Premium rice, grown with minimal pesticide use.",
  },
  {
    id: 3,
    name: "Wheat",
    image: "https://via.placeholder.com/150",
    price: 180,
    quantity: 100,
    description: "Fresh wheat with high gluten content, ideal for baking.",
  },
];

const MarketplaceModule = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Marketplace</h1>

      {/* Crop Listings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cropsForSale.map((crop) => (
          <div
            key={crop.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{crop.name}</h2>
            <p className="text-gray-600 mb-2">{crop.description}</p>
            <p className="text-green-700 font-bold">₹{crop.price} per kg</p>
            <p className="text-sm text-gray-500 mb-4">Available: {crop.quantity} kg</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
              Place Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceModule;
