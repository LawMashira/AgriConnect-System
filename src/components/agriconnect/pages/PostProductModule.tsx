import React, { useState } from "react";
import { Product } from "./types/Message";

interface PostProductModuleProps {
  onProductPost: (product: Product) => void;
}

const PostProductModule: React.FC<PostProductModuleProps> = ({
  onProductPost,
}) => {
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    price: "",
    quantity: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: Date.now(),
      name: productData.name,
      image: productData.image || "https://via.placeholder.com/150",
      price: parseFloat(productData.price),
      quantity: parseInt(productData.quantity, 10),
      description: productData.description,
      farmerName: "John Doe", // Replace with actual farmer name
    };

    onProductPost(newProduct);

    setProductData({
      name: "",
      image: "",
      price: "",
      quantity: "",
      description: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Post Your Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          required
          className="w-full border rounded-lg p-2"
        />
        <input
          type="text"
          name="image"
          value={productData.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="w-full border rounded-lg p-2"
        />
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
          className="w-full border rounded-lg p-2"
        />
        <input
          type="number"
          name="quantity"
          value={productData.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
          required
          className="w-full border rounded-lg p-2"
        />
        <textarea
          name="description"
          value={productData.description}
          onChange={handleInputChange}
          placeholder="Product Description"
          required
          className="w-full border rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Post Product
        </button>
      </form>
    </div>
  );
};

export default PostProductModule;
