import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from './components/agriconnect/pages/Landing';

import WeatherModule from './components/agriconnect/pages/Weather';
import PostHarvestModule from "./components/agriconnect/pages/Postharvest";
import MarketModule from "./components/agriconnect/pages/MarketModule";
import MarketplaceModule from "./components/agriconnect/pages/MarketplaceModule";
import ExpertAdvisoryModule from "./components/agriconnect/pages/ExpertAdvisoryModule";
import InputAccessModule from "./components/agriconnect/pages/InputAccessModule";
import Dashboard from "./components/agriconnect/dashboard/Dashboard";
import ContactPage from "./components/agriconnect/pages/ContactPage";
import RegistrationForm from "./components/agriconnect/auth/RegistrationForm";
import RoleSelection from "./components/agriconnect/auth/RoleSelection";
import LoginForm from "./components/agriconnect/auth/LoginForm";
import { useState } from "react";
import { Product, Message } from "./components/agriconnect/pages/types/Message";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleProductPost = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleProductClick = (product: Product) => {
    console.log("Product clicked:", product);
  };

  const handleSendMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };
  
  return (
    <Router>
    <Routes>
      {/* Default route: Landing Page */}
      <Route path="/" element={<LandingPage />} />
      {/* Dashboard route: accessible via direct URL */}
      
      <Route
          path="/dashboard"
          element={
            <Dashboard
              products={products}
              onProductPost={handleProductPost}
              onProductClick={handleProductClick}
              onSendMessage={handleSendMessage}
            />
          }
        />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/register" element={<RegistrationForm/>} />
      <Route path="/select-role" element={<RoleSelection/>} />
      <Route path="/login" element={<LoginForm/>} />
      
    </Routes>
  </Router>
    

  );
}

export default App;
