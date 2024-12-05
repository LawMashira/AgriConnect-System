import React from "react";
import { Product, Message } from "./types/Message";

interface BrowseProductsProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onSendMessage: (message: Message) => void;
}

const BrowseProductsModule: React.FC<BrowseProductsProps> = ({
  products,
  onProductClick,
  onSendMessage,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Browse Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow-md cursor-pointer"
            onClick={() => onProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <p className="mt-2 font-bold text-green-500">${product.price}</p>
            <p className="text-sm text-gray-500 mt-1">
              Posted by: <span className="font-medium">{product.farmerName}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProductsModule;
