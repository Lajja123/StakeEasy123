import React from "react";
import OperatorCard from "../components/OperatorCard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

interface Operator {
  name: string;
  id: number;
  status: string;
  performance: string;
  fee: string;
}

interface ClusterDashboardProps {
  operators: Operator[];
}

const operators = [
  {
    name: "ChainUp",
    id: 23,
    status: "Active",
    performance: "99.02%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Meria",
    id: 29,
    status: "Active",
    performance: "98.09%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Stakely",
    id: 30,
    status: "Active",
    performance: "89.85%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Openbitlab",
    id: 37,
    status: "Active",
    performance: "54.72%",
    fee: "0.0 SSV",
  },
];

const ClusterDashboard: React.FC<ClusterDashboardProps> = () => {
  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center p-8 h-[100vh]">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-full max-w-5xl">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Cluster | 6040...7c3e</h2>
          </div>

          {/* Operator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {operators.map((operator, index) => (
              <OperatorCard key={index} {...operator} />
            ))}
          </div>

          {/* Balance & Validators Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Balance Card */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <div className="mb-4">
                <h3 className="text-sm font-semibold">Balance</h3>
                <p className="text-xl font-bold">1.49 SSV</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold">
                  Est. Operational Runway
                </h3>
                <p className="text-xl font-bold">182 days</p>
              </div>
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
                  Deposit
                </button>
                <button className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none">
                  Withdraw
                </button>
              </div>
            </div>

            {/* Validators Card */}
            <div className="md:col-span-2 bg-gray-700 p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold">Validators</h3>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
                  Add Validator +
                </button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm">Public Key</p>
                  <p className="text-sm">Status</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">0xa6...f581</p>
                  <p className="text-sm text-red-500">Inactive</p>
                </div>
                <div className="flex justify-end mt-2 space-x-4">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button className="text-blue-500 hover:underline">
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClusterDashboard;
