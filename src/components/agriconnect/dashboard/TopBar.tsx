// TopBar.tsx
import React from "react";

interface TopBarProps {
  onMessagesClick: () => void; // Callback function to open the message modal
}

const TopBar: React.FC<TopBarProps> = ({ onMessagesClick }) => {
  const handleNotificationClick = () => {
    console.log("Notifications clicked");
    // Handle notification modal logic here
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
    // Handle profile menu or redirect
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 shadow-md flex justify-between items-center text-white">
      <h1 className="text-lg font-bold animate-pulse">
        AgroConnect System - Making Agriculture Easy
      </h1>

      <div className="flex space-x-4 items-center">
        {/* Notifications */}
        <button
          onClick={handleNotificationClick}
          className="relative p-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
        >
          🔔
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Messages */}
        <button
          onClick={onMessagesClick}
          className="p-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
        >
          💬
        </button>

        {/* Profile */}
        <button
          onClick={handleProfileClick}
          className="p-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
        >
          👤
        </button>
      </div>
    </div>
  );
};

export default TopBar;
