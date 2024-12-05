import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
  farmer: string; // Farmer's name or contact
}

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

const ProductDetailsModule: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent to ${product.farmer}: "${message}"`);
      setMessage("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <button onClick={onBack} className="text-blue-500 mb-4">
        &larr; Back to Products
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-700">{product.name}</h1>
          <p className="text-gray-600 my-4">{product.description}</p>
          <p className="text-green-700 font-bold text-lg">₹{product.price} per kg</p>
          <p className="text-sm text-gray-500">Available: {product.quantity} kg</p>
          <p className="text-sm text-gray-700 mt-2">
            Farmer: <span className="font-bold">{product.farmer}</span>
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Message the Farmer</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
          className="w-full border border-gray-300 rounded-lg p-2 my-2"
        ></textarea>
        <button
          onClick={handleSendMessage}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsModule;
