// src/types.ts
export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    description: string;
    farmerName: string; // Farmer's name
  }
  
  export interface Message {
    from: string; // Sender (e.g., email or identifier)
    to: string;   // Receiver (e.g., email or identifier)
    productId: number; // Product ID related to the message
    content: string;   // Message content
  }
  