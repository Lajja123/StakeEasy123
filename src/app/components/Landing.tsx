import React from "react";
import Image from "next/image";
import { HelpCircle } from "lucide-react";

const Landing = () => {
  return (
    <div className="w-full my-[10px] bg-transparent rounded-xl flex flex-col justify-center items-center">
      {/* <Image
        src={starImg}
        alt=""
        className="w-70 h-70 absolute bottom-16 left-0"
      /> */}
      <div className="text-white flex flex-col items-center justify-center gap-4 relative mx-auto transition-all duration-300 w-[80%]">
        <h1 className="text-5xl">Stake, Earn, Spend</h1>
        <h3 className="text-2xl">
          Stake ETH, get eETH - the liquid restaking token that rewards you more
          across DeFi.
        </h3>
        <button
          className="w-[25%] bg-[#161515] text-white font-medium py-3 px-4 rounded-md text-sm transition-all duration-300"
          style={{
            border: "1px solid transparent",
            borderImage: "linear-gradient(to right, #DA619C , #FF844A )",
            borderImageSlice: 1,
            background: "linear-gradient(to right, #DA619C, #FF844A)",
            WebkitBackgroundClip: "text",
          }}
        >
          <span className="text-2xl">Stake</span>
        </button>
        <div className="flex items-center gap-3">
          <a
            href="https://faucet.ssv.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-2/3 text-center font-bold text-white py-2 px-4 rounded"
            style={{
              border: "1px solid transparent",
              borderImage: "linear-gradient(to right, #DA619C , #FF844A )",
              borderImageSlice: 1,
              background: "linear-gradient(to right, #DA619C, #FF844A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Do not have SSV faucets? Click here to get it
          </a>

          <a
            href="https://wagyu.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center font-bold text-white py-2 px-4 rounded"
            style={{
              border: "1px solid transparent",
              borderImage: "linear-gradient(to right, #DA619C , #FF844A )",
              borderImageSlice: 1,
              background: "linear-gradient(to right, #DA619C, #FF844A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Download Wagyu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
