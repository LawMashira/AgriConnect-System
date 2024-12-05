import React from "react";

const MarketModule = () => {
  // Mock Data
  const crops = [
    {
      name: "Maize",
      prices: [
        { buyer: "Local Market", price: 150 },
        { buyer: "Wholesaler", price: 140 },
        { buyer: "Exporter", price: 160 },
      ],
    },
    {
      name: "Rice",
      prices: [
        { buyer: "Local Market", price: 200 },
        { buyer: "Wholesaler", price: 190 },
        { buyer: "Exporter", price: 210 },
      ],
    },
    {
      name: "Wheat",
      prices: [
        { buyer: "Local Market", price: 180 },
        { buyer: "Wholesaler", price: 175 },
        { buyer: "Exporter", price: 190 },
      ],
    },
  ];

  // Predictive Analytics (Mocked)
  const predictions = [
    { crop: "Maize", advice: "Sell in 2 weeks for higher demand." },
    { crop: "Rice", advice: "Sell now for peak prices." },
    { crop: "Wheat", advice: "Hold for another month to maximize profit." },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Market Information</h1>

      {/* Crop Prices Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-3 px-4">Crop</th>
              <th className="py-3 px-4">Buyer</th>
              <th className="py-3 px-4">Price (per kg)</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop, index) => (
              <React.Fragment key={index}>
                {crop.prices.map((price, subIndex) => (
                  <tr
                    key={subIndex}
                    className={`${
                      subIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="py-2 px-4">
                      {subIndex === 0 ? crop.name : ""}
                    </td>
                    <td className="py-2 px-4">{price.buyer}</td>
                    <td className="py-2 px-4">₹{price.price}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Predictive Analytics */}
      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
        Predictive Analytics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {predictions.map((prediction, index) => (
          <div
            key={index}
            className="bg-green-100 p-4 rounded-lg shadow-sm border border-green-300"
          >
            <h3 className="text-lg font-bold text-green-700">{prediction.crop}</h3>
            <p className="text-gray-600">{prediction.advice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketModule;
