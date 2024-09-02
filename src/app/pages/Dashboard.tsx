import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="flex justify-between items-center p-4 bg-blue-100">
        <div className="text-lg font-bold">My Dashboard</div>
        <div className="flex items-center">
          <span className="mr-2">0x7FB4...4700</span>
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm font-semibold">Avg. Entries/s</h3>
          <p className="text-xl">299</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm font-semibold">SSV</h3>
          <p className="text-xl">7.99</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm font-semibold">Balance</h3>
          <p className="text-xl">7.99 SSV</p>
          <div className="flex space-x-2 mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Deposit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Withdraw
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm font-semibold">Validators</h3>
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded w-full mt-2"
          />
          <select className="border p-2 rounded w-full mt-2">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
            Add Validator
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
