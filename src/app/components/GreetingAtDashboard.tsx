import React from 'react';

const GreetingAtDashboard: React.FC = () => {

  return (
    <div className="flex items-center justify-center bg-white bg-opacity-50 z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full text-white">
        <h2 className="text-lg font-semibold mb-4">Welcome to the SSV Network!</h2>
        <p className="mb-4">
          Your new validator is managed by the following cluster:
        </p>
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <p className="font-medium mb-2">Validator Cluster 6040...7c3e</p>
          <div className="flex space-x-4 justify-center">
            {/* Replace these with real images if necessary */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-500 mb-2"></div>
              <span className="text-sm">Operator 1</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-500 mb-2"></div>
              <span className="text-sm">Operator 2</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-500 mb-2"></div>
              <span className="text-sm">Operator 3</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-500 mb-2"></div>
              <span className="text-sm">Operator 4</span>
            </div>
          </div>
        </div>
        <p className="mb-4">
          Your cluster operators have been notified and will start your validator operation instantly.
        </p>
        <div className="mt-6 flex justify-center w-full">
          <button className="w-full text-white py-2 px-4 font-bold focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-opacity-50"
          style={{
            border: "1px solid transparent",
            borderImage: "linear-gradient(to right, #DA619C , #FF844A )",
            borderImageSlice: 1,
            background: "linear-gradient(to right, #DA619C, #FF844A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Manage Cluster
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreetingAtDashboard;
