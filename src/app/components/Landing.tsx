"use client";
import React, { useState } from "react";
import "../css/Landing.css";
import { useRouter } from "next/navigation";
import { X, HelpCircle, Copy, ChevronRight } from "lucide-react";
import copy from "copy-to-clipboard";
import { toast, Toaster } from "react-hot-toast";
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

  const handleCopy = (addr: string) => {
    copy(addr);
    toast("Copied 🎊🎉");
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
                <div className="flex justify-between items-center mb-4">
                  <h1
                    className="inline-block py-1 text-sm"
                    style={{
                      borderRadius: "8px",
                      fontSize: "1.7rem",
                      textAlign: "justify",
                      background: "linear-gradient(to right, #DA619C, #FF844A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
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

                <div className="flex gap-2 items-center">
                  <ChevronRight
                    className="mb-[4px] text-[#FFA800]"
                    size={16}
                    style={{
                      border: "1px solid #FFA800",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 className="text-justify mb-1 text-lg">Get SSV Tokens</h3>
                </div>

                <div className="text-justify mb-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus vero nihil voluptates aliquam qui, debitis placeat
                  officiis cumque, nobis molestias voluptas nostrum aspernatur
                  pariatur nulla.
                </div>

                <div className="bg-black p-3 rounded-xl flex justify-between items-center mb-[5px]">
                  <a
                    href="https://faucet.ssv.network/"
                    target="blank"
                    style={{ color: "#A257EC" }}
                  >
                    https://faucet.ssv.network/
                  </a>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleCopy("https://faucet.ssv.network/")}
                    title="Copy"
                  >
                    <Copy size={20} className="cursor-pointer" />
                  </span>
                </div>

                <div className="flex justify-between items-center mb-4 mt-10">
                  <h1
                    className="inline-block py-1  text-sm"
                    style={{
                      borderRadius: "8px",
                      fontSize: "1.7rem",
                      textAlign: "justify",
                      background: "linear-gradient(to right, #DA619C, #FF844A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
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

                <div className="flex gap-2 items-center">
                  <ChevronRight
                    className="mb-[4px] text-[#FFA800]"
                    size={16}
                    style={{
                      border: "1px solid #FFA800",
                      borderRadius: "10px",
                    }}
                  />
                  <h3 className="text-justify mb-1 text-lg">Download Wagyu</h3>
                </div>

                <div className="mb-2 text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus vero nihil voluptates aliquam qui, debitis placeat
                  officiis cumque, nobis molestias voluptas nostrum aspernatur
                  pariatur nulla.
                </div>

                <div className="bg-black p-3 rounded-xl flex justify-between items-center mb-[5px]">
                  <a
                    href="https://wagyu.gg/"
                    target="blank"
                    style={{ color: "#A257EC" }}
                  >
                    https://wagyu.gg/
                  </a>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleCopy("https://wagyu.gg/")}
                    title="Copy"
                  >
                    <Copy size={20} className="cursor-pointer" />
                  </span>
                </div>

                <button
                  onClick={() => handleMainSteps("/join")}
                  style={{
                    background: "linear-gradient(to right, #A257EC, #D360A6)",
                    textAlign: "center",
                    color: "white",
                    marginTop: "30px",
                  }}
                  className="w-[30%] text-white hover:scale-110 duration-500 py-2 px-4 rounded-md shadow-lg text-center"
                >
                  Stake
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-3 bg-[#f28357]"></div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "18px",
            backgroundColor: "#f28357",
            opacity: "0.7",
            color: "#fff",
            boxShadow: "none",
            borderRadius: "12px",
            padding: "6px 10px",
          },
        }}
      />
    </div>
  );
};

export default Landing;
