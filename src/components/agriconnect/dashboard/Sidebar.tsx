import React from 'react';
import {
  FaCloudSun,
  FaChartBar,
  FaWarehouse,
  FaSeedling,
  FaUserTie,
  FaShoppingCart,
  FaTruck,
  FaPiggyBank,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  setActiveModule: (module: string) => void;
  role: 'farmer' | 'buyer'; // Role of the logged-in user
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveModule, role }) => {
  const navigate = useNavigate();

  // Farmer-specific modules
  const farmerModules = [
  
    { name: 'Post Product', icon: <FaSeedling /> },
    { name: 'Post-Harvest', icon: <FaWarehouse /> },
    { name: 'Input Access', icon: <FaSeedling /> },
    { name: 'Expert Advisory', icon: <FaUserTie /> },
    { name: 'Marketplace', icon: <FaShoppingCart /> },
    { name: 'Weather', icon: <FaCloudSun /> }
   , // Farmer-specific
  ];

  // Buyer-specific modules
  const buyerModules = [
    { name: 'Browse Products', icon: <FaShoppingCart /> }, // Buyer-specific
    { name: 'Supply Chain', icon: <FaTruck /> },
    { name: 'Financial', icon: <FaPiggyBank /> },
    { name: 'Weather', icon: <FaCloudSun /> },
    
  ];

  const modules = role === 'farmer' ? farmerModules : buyerModules;

  const handleLogout = () => {
    navigate('/'); // Redirect to landing/login page
  };

  return (
    <div className="w-64 bg-green-600 text-white h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold py-6 text-center">AgroConnect</h2>
        <ul className="space-y-4 px-4">
          {modules.map((module, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 text-xl p-2 rounded cursor-pointer hover:bg-green-700"
              onClick={() => setActiveModule(module.name)}
            >
              {module.icon}
              <span>{module.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="w-full py-2 bg-red-600 hover:bg-red-700 text-center font-bold"
      >
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
