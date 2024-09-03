// components/ValidatorClusters.tsx
import React from 'react';

const ValidatorCluster: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-fit">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Validator Clusters</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Fee Address &</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Add Cluster</button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded p-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h2 className="font-semibold">Cluster ID</h2>
            <p>6040...7c3e</p>
          </div>
          <div>
            <h2 className="font-semibold">Operators</h2>
            <p>12/12</p>
          </div>
          <div>
            <h2 className="font-semibold">Validators</h2>
            <p>12/12</p>
          </div>
          <div>
            <h2 className="font-semibold">Up/Downstream Peers</h2>
            <p>182 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidatorCluster;
