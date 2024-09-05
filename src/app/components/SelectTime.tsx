"use client";
import React, { useState } from "react";
import TransactionDetails from "./TransactionDetails";

const StakingInterface: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [customPeriod, setCustomPeriod] = useState<number | string>(0);
  const [showTxDetails, setShowTxDetails] = useState(false);

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  const handleCustomPeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove leading zeros
    const sanitizedValue = value.replace(/^0+/, "");
    setCustomPeriod(sanitizedValue ? Number(sanitizedValue) : "");
  };

  const handleTxDeatils = () => {
    setShowTxDetails(true);
  };
  if (showTxDetails) {
    return <TransactionDetails />;
  }

  const getNetworkFee = () => {
    if (selectedPeriod === "6 Months") {
      return 0.5;
    } else if (selectedPeriod === "1 Year") {
      return 1;
    } else {
      return Number((Number(customPeriod) / 365 * 1).toFixed(5));
    }
  };

  return (
    <div className="max-w-lg mx-auto text-white shadow-md rounded-lg border-2 border-gray-200 p-6">
      <h2 className="text-2xl font-bold mb-4">
        Select your validator funding period
      </h2>
      <p className="mb-4">
        The SSV amount you deposit will determine your validator operational
        runway. (You can always manage it later by withdrawing or depositing
        more funds).
      </p>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-2 border-gray-300 p-2 rounded-[8px]">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedPeriod === "6 Months"}
              onChange={() => handlePeriodChange("6 Months")}
              className="mr-2 custom-checkbox"
            />
            <span>6 Months</span>
          </label>
          <span className="font-bold">0.5 SSV</span>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-300 p-2 rounded-[8px]">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedPeriod === "1 Year"}
              onChange={() => handlePeriodChange("1 Year")}
              className="mr-2 custom-checkbox"
            />
            <span>1 Year</span>
          </label>
          <span className="font-bold">1 SSV</span>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-300 p-2 rounded-[8px]">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedPeriod === "Custom Period"}
              onChange={() => handlePeriodChange("Custom Period")}
              className="mr-2 custom-checkbox"
            />
            <span>Custom Period</span>
          </label>
          <input
            type="number"
            value={customPeriod}
            onChange={handleCustomPeriodChange}
            className="border p-2 rounded w-24 text-white bg-[#161515]"
          />
          <span className="ml-0 pl-0">days</span>
          <span className="font-bold">{Number(Number(customPeriod)/365 * 1).toFixed(5)} SSV</span>
        </div>
      </div>

      <div className="w-[calc(100%+48px)] border-b-2 border-gray-400 mt-4 -ml-6"></div>

      <h3
        className="text-xl font-bold mt-3"
        style={{
          background: "rgba(252, 129, 81, 1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Funding Summary
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Operator fee</span>
          <span>6 SSV</span>
        </div>
        <div className="flex justify-between">
          <span>Network fee</span>
          <span>{getNetworkFee()} SSV</span>
        </div>
        <div className="flex justify-between">
          <span>Liquidation collateral</span>
          <span>1 SSV</span>
        </div>
        <div className="w-[calc(100%+48px)] border-b-2 border-gray-400 mt-4 -ml-6"></div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span className="">
            {/* here 7 is sum amount of static Liquidation collateral and static operator fee */}
            {7 +
              (selectedPeriod === "Custom Period"
                ? Number((Number(customPeriod) / 365 * 1).toFixed(5))
                : selectedPeriod === "6 Months"
                ? 0.5
                : selectedPeriod === "1 Year"
                ? 1
                : 0)}{" "}
            SSV
          </span>
        </div>
      </div>

      <button
        // className="mt-6 w-full bg-blue-500 text-white py-2 rounded"
        onClick={handleTxDeatils}
        style={{
          border: "1px solid transparent",
          borderImage: "linear-gradient(to right, #DA619C , #FF844A )",
          borderImageSlice: 1,
          background: "linear-gradient(to right, #DA619C, #FF844A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="font-bold mt-4 w-full text-white py-[6px] px-4 rounded-[6px] focus:outline-none focus:ring-1 focus:ring-orange-600 focus:ring-opacity-50"
      >
        Next
      </button>

      <style jsx>{`
        .custom-checkbox {
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          background: black;
          border: 2px solid transparent;
          background-image: linear-gradient(black, black),
            linear-gradient(90deg, orange, purple);
          background-origin: border-box;
          background-clip: content-box, border-box;
          position: relative;
          transition: background 0.3s ease-in-out;
        }

        .custom-checkbox:checked {
          background-image: linear-gradient(black, black),
            linear-gradient(90deg, orange, purple);
          background-clip: content-box, border-box;
        }

        .custom-checkbox:checked::before {
          content: "✔";
          color: white;
          position: absolute;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};

export default StakingInterface;
