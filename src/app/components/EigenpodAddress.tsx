import React, { useState, useEffect } from "react";
import {
  Copy,
  CheckCircle,
  X,
  Info,
  MessageCircleQuestionIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function EigenpodAddress() {
  const [address, setAddress] = useState("EigenPod Address not created yet");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenEigenPodPopup");
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("hasSeenEigenPodPopup", "true");
    }
  }, []);

  const createPodAddress = () => {
    setLoading(true);
    setTimeout(() => {
      setAddress("0x1234...5678");
      setLoading(false);
    }, 1000);
  };

  const getPodAddress = () => {
    alert(`Current EigenPod Address: ${address}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div
      className="relative   mx-auto transition-all duration-300 w-[80%]"
      style={{
        background: "linear-gradient(to right, #1D1D1D 0%, #191919 100%)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "80px 40px",
        borderRadius: "20px",
      }}
    >
      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className=" p-6 rounded-lg shadow-xl w-[80%] max-w-lg relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome to EigenPod Address Creation
              </h3>
              <p className="text-gray-600 mb-4">
                This tool allows you to programmatically generate an EigenPod
                address, making the setup process easier and more convenient.
              </p>
              <button
                onClick={closePopup}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with Blur Effect */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-300 ${
          showPopup ? "blur-sm" : ""
        }`}
      >
        <div className="space-y-4">
          <h2
            className="text-2xl font-bold text-white mb-7"
            style={{ letterSpacing: "1px", fontWeight: "bold " }}
          >
            EigenPod Address Creation
          </h2>
          <p
            className="text-white leading-relaxed w-[70%]"
            style={{ fontWeight: "200", fontSize: "14px" }}
          >
            Programmatically generate an EigenPod address for users, reducing
            manual setup and enhancing convenience.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium text-[#CACACA] mb-2 "
              style={{
                fontWeight: "200",
                fontSize: "15px",
                letterSpacing: "1px",
              }}
            >
              EigenPod Address
            </label>
            <div className="flex items-center bg-[#161515] border focus:outline-none rounded-md overflow-hidden transition-all duration-300 focus-within:ring-2 ">
              <input
                type="text"
                value={address}
                readOnly
                className="flex-grow bg-transparent px-4 py-3 focus:outline-none"
                style={{ color: "rgba(202, 202, 202, 0.40)" }}
              />
              <button
                className={`p-3 text-[#FC8150] transition-colors ${
                  copied ? "text-[#FC8150]" : ""
                }`}
                onClick={copyToClipboard}
              >
                {copied ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <Copy className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={createPodAddress}
              disabled={loading}
              className={`flex-1 bg-[#161515] text-white font-medium py-3 px-4 rounded-md text-sm transition-all duration-300 ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
              style={{
                border: "1px solid transparent",
                borderImage: "linear-gradient(to right, #DA619C , #FF844A )",
                borderImageSlice: 1,
                background: "linear-gradient(to right, #DA619C, #FF844A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {loading ? "Creating..." : "Create Pod Address"}
            </button>
            <button
              onClick={getPodAddress}
              style={{
                border: "1px solid transparent",
                borderImage: "linear-gradient(to right, #DA619C , #FF844A )",
                borderImageSlice: 1,
                background: "linear-gradient(to right, #DA619C, #FF844A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="flex-1  font-medium py-3 px-4 rounded-md text-sm transition-all duration-300"
            >
              Get Pod Address
            </button>
          </div>
        </div>
      </div>

      {/* Button to Reopen Popup */}

      <div className="mt-8 text-center relative">
        <button
          onClick={openPopup}
          className=" absolute right-0 inline-flex items-center text-white py-2 px-4 rounded-md "
        >
          <MessageCircleQuestionIcon />
        </button>
      </div>
    </div>
  );
}

export default EigenpodAddress;
