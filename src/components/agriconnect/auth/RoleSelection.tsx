import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelectionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: 'farmer' | 'buyer') => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    user.role = role;
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="h-screen bg-gradient-to-r from-green-300 to-green-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Choose Your Role</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          onClick={() => handleRoleSelect('farmer')}
          className="cursor-pointer bg-green-600 hover:bg-green-700 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Farmer</h2>
          <p className="text-center">
            Manage your products and connect with buyers to grow your business.
          </p>
        </div>
        <div
          onClick={() => handleRoleSelect('buyer')}
          className="cursor-pointer bg-green-900 hover:bg-green-700 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Buyer</h2>
          <p className="text-center">
            Explore products and purchase directly from farmers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
