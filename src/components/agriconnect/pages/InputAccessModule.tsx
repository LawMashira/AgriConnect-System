import React, { useState } from "react";

// Mock Data for Inputs (seeds, fertilizers, pesticides)
const inputs = [
  {
    id: 1,
    name: "Maize Seeds",
    category: "Seeds",
    price: 100,
    quantity: 200, // quantity in kg
    supplier: "AgroSupplier Ltd.",
    description: "High-yield maize seeds suitable for all seasons.",
  },
  {
    id: 2,
    name: "Nitrogen Fertilizer",
    category: "Fertilizers",
    price: 300,
    quantity: 50,
    supplier: "FertPro Suppliers",
    description: "Organic nitrogen fertilizer to boost crop growth.",
  },
  {
    id: 3,
    name: "Pesticide Spray",
    category: "Pesticides",
    price: 150,
    quantity: 100,
    supplier: "CropCare Ltd.",
    description: "Pesticide spray to protect against common pests.",
  },
];

const InputAccessModule = () => {
  // State for filtering by category
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  // Filter inputs based on selected category
  const filteredInputs = categoryFilter === "All" 
    ? inputs 
    : inputs.filter((input) => input.category === categoryFilter);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Input Access</h1>

      {/* Filter Options */}
      <div className="mb-4">
        <label className="mr-4 text-gray-700">Filter by Category:</label>
        <select 
          value={categoryFilter} 
          onChange={(e) => setCategoryFilter(e.target.value)} 
          className="px-4 py-2 border rounded-lg text-gray-700"
        >
          <option value="All">All</option>
          <option value="Seeds">Seeds</option>
          <option value="Fertilizers">Fertilizers</option>
          <option value="Pesticides">Pesticides</option>
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredInputs.map((input) => (
          <div
            key={input.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800">{input.name}</h2>
            <p className="text-gray-600 mb-2">{input.description}</p>
            <p className="text-green-700 font-bold">₹{input.price} per kg</p>
            <p className="text-sm text-gray-500 mb-4">Available: {input.quantity} kg</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputAccessModule;
