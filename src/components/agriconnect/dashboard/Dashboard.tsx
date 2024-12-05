import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import WeatherModule from "../pages/Weather";
import MarketModule from "../pages/MarketModule";
import PostProductModule from "../pages/PostProductModule";
import BrowseProductsModule from "../pages/BrowseProductsModule";
import { useNavigate } from "react-router-dom";
import { Product, Message } from "../pages/types/Message";
import MessagesModule from "../pages/types/MessageModule";

interface DashboardProps {
  products: Product[];
  onProductPost: (product: Product) => void;
  onProductClick: (product: Product) => void;
  onSendMessage: (message: Message) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  products,
  onProductPost,
  onProductClick,
  onSendMessage,
}) => {
  const [activeModule, setActiveModule] = useState<string>("Weather");
  const [role, setRole] = useState<"farmer" | "buyer" | null>(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.role) {
      navigate("/select-role");
    } else {
      setRole(user.role);
      setActiveModule(user.role === "farmer" ? "Post Product" : "Browse Products");
    }
  }, [navigate]);

  const toggleMessageModal = () => {
    setIsMessageModalOpen(!isMessageModalOpen);
  };

  if (role === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <Sidebar setActiveModule={setActiveModule} role={role} />
      <div className="flex flex-col flex-1">
        <TopBar onMessagesClick={toggleMessageModal} />
        <div className="p-6 bg-gray-50 flex-1">
          {role === "farmer" && activeModule === "Post Product" && (
            <PostProductModule onProductPost={onProductPost} />
          )}
          {role === "buyer" && activeModule === "Browse Products" && (
            <BrowseProductsModule
              products={products}
              onProductClick={onProductClick}
              onSendMessage={onSendMessage}
            />
          )}
          {activeModule === "Weather" && <WeatherModule />}
          {activeModule === "Market Info" && <MarketModule />}
          {isMessageModalOpen && (
            <MessagesModule
              products={products}
              messages={[]}
              toggleMessageModal={toggleMessageModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
