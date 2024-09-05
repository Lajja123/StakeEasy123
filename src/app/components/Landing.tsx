"use client";
import React, { useState } from "react";
import "../css/Landing.css";
import { useRouter } from "next/navigation";
import { X, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Landing = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const handleNavigation = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  const handleMainSteps = (url: string) => {
    router.push(url);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div className="w-full my-[10px] bg-transparent rounded-xl flex flex-col justify-center items-center">
      <div className="text-white flex flex-col items-center justify-center gap-4 relative mx-auto transition-all duration-300 w-[80%]">
        <h1 className="text-5xl">Stake - Earn - Spend</h1>
        <h3 className="text-2xl">
          Stake ETH, get eETH - the liquid restaking token that rewards you more
          across DeFi.
        </h3>
        {/* <button
          className="w-[25%] border-2 border-gray-100 hover:scale-105 transform hover:border-gray-300 text-white font-medium py-3 px-4 rounded-md text-sm transition-all duration-500"
          onClick={() => handleMainSteps("/join")}
        > */}
        <button
          className="w-[25%] border-2 border-gray-100 hover:scale-105 transform hover:border-gray-300 text-white font-medium py-3 px-4 rounded-md text-sm transition-all duration-500"
          onClick={openPopup}
        >
          <span className="text-2xl">Stake</span>
        </button>

        <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                border: "1px solid transparent",
                borderImage: "linear-gradient(to right, #A257EC , #DA619C )",
                borderImageSlice: 1,
                color: "white",
                textAlign: "center",
                background: "linear-gradient(to right, #121212, #252525)",
                boxShadow: "18px 26px 70px 0px rgba(255, 231, 105, 0.09);",
                padding: "4rem 3rem",
              }}
              className="rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <div className="flex justify-between items-center mb-2 ">
                <h1
                  className="inline-block py-1 text-sm"
                  style={{
                    borderRadius: "8px",
                    fontSize: "1.7rem",
                    textAlign: "justify",
                  }}
                >
                  Prerequisite 1
                </h1>
                <button
                  onClick={closePopup}
                  style={{
                    padding: "5px",
                  }}
                  className="absolute top-2 right-2 text-[#FC8150] "
                >
                  <X size={24} />
                </button>
              </div>

              <div className="text-justify">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus vero nihil voluptates aliquam qui, debitis placeat officiis cumque, nobis molestias voluptas nostrum aspernatur pariatur nulla.
              </div>

              <div className="flex justify-between items-center mb-2 mt-10">
                <h1
                  className="inline-block py-1  text-sm"
                  style={{
                    borderRadius: "8px",
                    fontSize: "1.7rem",
                    textAlign: "justify",
                  }}
                >
                  Prerequisite 2
                </h1>
                <button
                  onClick={closePopup}
                  style={{
                    padding: "5px",
                  }}
                  className="absolute top-2 right-2 text-[#FC8150] "
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 text-justify">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus vero nihil voluptates aliquam qui, debitis placeat officiis cumque, nobis molestias voluptas nostrum aspernatur pariatur nulla.
              </div>

              <button
                onClick={closePopup}
                style={{
                  background: "linear-gradient(to right, #A257EC, #D360A6)",
                  textAlign: "center",
                  color: "white",
                  marginTop: "30px",
                }}
                className=" text-white py-2 px-4 rounded-md shadow-lg text-center"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        <div className="flex items-center gap-3">
          {/* Sepolia Faucet Redirect */}
          {/* <div className="relative group flex-2/3 flex items-center gap-1">
            <button
              onClick={() => handleNavigation("https://faucet.ssv.network/")}
              className="text-center font-bold text-white py-2 pr-8 pl-3 rounded border border-white"
            >
              <p>Don&apos;t have SSV faucets? Click here to get it</p>
            </button>
            <HelpCircle className="w-5 h-5 text-white cursor-pointer absolute right-2" />

            <div className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              You will further need SSV tokens to run your validator
            </div>
          </div> */}

          {/* Wagyu Download Redirect */}
          {/* <div className="relative group flex-1 flex items-center gap-1">
            <button
              onClick={() => handleNavigation("https://wagyu.gg/")}
              className="text-center font-bold text-white py-2 pr-8 pl-3 rounded border border-white"
            >
              Download Wagyu
            </button>
            <HelpCircle className="w-5 h-5 text-white cursor-pointer absolute right-2" />

            <div className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Please download the app first because for the generation of the
              validator keys you will need it further
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
