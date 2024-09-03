import React from 'react';

interface OperatorCardProps {
  name: string;
  id: number;
  status: string;
  performance: string;
  fee: string;
}

const OperatorCard: React.FC<OperatorCardProps> = ({ name, id, status, performance, fee }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-xs text-gray-400">ID: {id}</div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs">Status</div>
        <div className={`text-xs ${status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{status}</div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs">30D Perform.</div>
        <div className="text-xs">{performance}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs">Yearly Fee</div>
        <div className="text-xs">{fee}</div>
      </div>
    </div>
  );
};

export default OperatorCard;
