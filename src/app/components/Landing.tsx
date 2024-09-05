"use client";
import React, { useState, useRef, useEffect } from "react";
import "../css/Landing.css";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Landing = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleMainSteps = (url: string) => {
    router.push(url);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        closePopup();
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="w-full my-[10px] bg-transparent rounded-xl flex flex-col justify-center items-center">
      <div className="text-white flex flex-col items-center justify-center gap-2 relative mx-auto transition-all duration-300 w-full lg:w-[80%]">
        <h1 className="text-4xl lg:text-7xl font-bold">Stake - Earn - Spend</h1>
        <h3 className="text-[16px] lg:text-[20px] font-light text-center">
          Stake ETH, get eETH - the liquid restaking token that rewards
        </h3>
        <h3 className="text-[16px] lg:text-[20px] font-light text-center">
          you more across DeFi.
        </h3>

        <button
          className="stake border-2 border-gray-100 hover:scale-105 transform hover:border-gray-300 text-white py-2 px-8 lg:px-[60px] rounded-md text-[16px] lg:text-[20px] transition-all duration-500 mt-3"
          onClick={openPopup}
        >
          Stake
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
                ref={popupRef}
                initial={{ scale: 0.9, opacity: 0, y: -50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6"
                style={{
                  border: "1px solid transparent",
                  borderImage: "linear-gradient(to right, #A257EC , #DA619C )",
                  borderImageSlice: 1,
                  color: "white",
                  textAlign: "center",
                  background: "linear-gradient(to right, #121212, #252525)",
                  boxShadow: "18px 26px 70px 0px rgba(255, 231, 105, 0.09);",
                }}
              >
                <div className="flex justify-between items-center mb-2 ">
                  <h1 className="inline-block py-1 text-lg lg:text-2xl text-justify">
                    Prerequisite 1
                  </h1>
                  <button
                    onClick={closePopup}
                    className="absolute top-2 right-2 text-[#FC8150]"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="text-justify text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus vero nihil voluptates aliquam qui.
                </div>

                <div className="flex justify-between items-center mb-2 mt-10">
                  <h1 className="inline-block py-1 text-lg lg:text-2xl text-justify">
                    Prerequisite 2
                  </h1>
                </div>

                <div className="space-y-4 text-justify text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus vero nihil voluptates aliquam qui.
                </div>

                <button
                  onClick={closePopup}
                  className="text-white py-2 px-4 rounded-md mt-10 hover:scale-105 transform transition-all duration-500"
                  style={{
                    background: "linear-gradient(to right, #A257EC, #D360A6)",
                  }}
                >
                  Got it
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Landing;
