import React from "react";
import { ArrowRight } from "lucide-react";

const ValidatorClusters: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Validator Clusters</h1>
        <div className="flex space-x-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center">
            Fee Address
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add Cluster
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-800 rounded-lg p-4">
        {/* Table Header */}
        <div className="flex text-gray-400 mb-4">
          <div className="flex-1">Cluster ID</div>
          <div className="flex-1">Operators</div>
          <div className="flex-1">Validators</div>
          <div className="flex-1">Est Operational Runway</div>
          <div className="w-16"></div>
        </div>

        {/* Table Row */}
        <div className="flex items-center bg-gray-700 text-white rounded-lg p-4 hover:bg-gray-600 transition">
          <div className="flex-1 truncate">6040...7c3e</div>
          <div className="flex-1 flex space-x-2">
            {/* Icons for operators */}
            <img
              src="/icons/operator1.svg"
              alt="Operator 1"
              className="h-6 w-6"
            />
            <img
              src="/icons/operator2.svg"
              alt="Operator 2"
              className="h-6 w-6"
            />
            <img
              src="/icons/operator3.svg"
              alt="Operator 3"
              className="h-6 w-6"
            />
            <img
              src="/icons/operator4.svg"
              alt="Operator 4"
              className="h-6 w-6"
            />
          </div>
          <div className="flex-1">1</div>
          <div className="flex-1">182 Days</div>
          <div className="w-16 flex justify-end">
            <button className="text-gray-400 hover:text-white">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidatorClusters;
