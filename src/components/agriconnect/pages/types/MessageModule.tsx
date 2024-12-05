// MessagesModule.tsx
import React from "react";
import { Product, Message } from "./Message";


interface MessagesModuleProps {
  products: Product[];
  messages: Message[];
  toggleMessageModal: () => void;
}

const MessagesModule: React.FC<MessagesModuleProps> = ({
  products,
  messages,
  toggleMessageModal,
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <button onClick={toggleMessageModal} className="absolute top-2 right-2">
          ❌
        </button>

        {messages.length > 0 ? (
          messages.map((message, index) => {
            const product = products.find((p) => p.id === message.productId);
            return (
              <div key={index} className="border p-4 rounded-lg mb-4">
                <h3 className="font-semibold">{product?.name}</h3>
                <p><strong>From:</strong> {message.from}</p>
                <p>{message.content}</p>
              </div>
            );
          })
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
    </div>
  );
};

export default MessagesModule;
