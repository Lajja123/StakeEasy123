"use client";
import React from "react";
import "../css/Landing.css";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";

const Landing = () => {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    router.push(url);
  };

  const handleMainSteps = (url: string) => {
    router.push(url);
  };

  return (
    <div className="w-full my-[10px] bg-transparent rounded-xl flex flex-col justify-center items-center">
      <div className="text-white flex flex-col items-center justify-center gap-4 relative mx-auto transition-all duration-300 w-[80%]">
        <h1 className="text-5xl">Stake - Earn - Spend</h1>
        <h3 className="text-2xl">
          Stake ETH, get eETH - the liquid restaking token that rewards you more
          across DeFi.
        </h3>
        <button
          className="w-[25%] border-2 border-gray-100 hover:scale-105 transform hover:border-gray-300 text-white font-medium py-3 px-4 rounded-md text-sm transition-all duration-500"
          onClick={() => handleMainSteps("/join")}
        >
          <span className="text-2xl">Stake</span>
        </button>
        <div className="flex items-center gap-3">
          {/* Sepolia Faucet Redirect */}
          <div className="relative group flex-2/3 flex items-center gap-1">
            <button
              onClick={() => handleNavigation("https://faucet.ssv.network/")}
              className="text-center font-bold text-white py-2 pr-8 pl-3 rounded border border-white"
            >
              <p>Don&apos;t have SSV faucets? Click here to get it</p>
            </button>
            <HelpCircle className="w-5 h-5 text-white cursor-pointer absolute right-2" />

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              You will further need SSV tokens to run your validator
            </div>
          </div>

          {/* Wagyu Download Redirect */}
          <div className="relative group flex-1 flex items-center gap-1">
            <button
              onClick={() => handleNavigation("https://wagyu.gg/")}
              className="text-center font-bold text-white py-2 pr-8 pl-3 rounded border border-white"
            >
              Download Wagyu
            </button>
            <HelpCircle className="w-5 h-5 text-white cursor-pointer absolute right-2" />

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Please download the app first because for the generation of the
              validator keys you will need it further
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
