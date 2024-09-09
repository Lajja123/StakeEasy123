import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  Eye,
  MessageCircleQuestionIcon,
  CloudUpload,
  X,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function UploadDepositData() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showPopup, setShowPopup] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const hasSeenPopup = localStorage.getItem("hasSeenUploadPopup");
  //   if (!hasSeenPopup) {
  //     setShowPopup(true);
  //     localStorage.setItem("hasSeenUploadPopup", "true");
  //   }
  // }, []);

  const generateValidatorKey = () => {
    console.log("Generating validator key with password:", password);
    if (file) {
      console.log("File uploaded:", file.name);
      // You would typically make an API call here
    } else {
      console.log("No file uploaded");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
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
    <div
      className="relative mx-auto transition-all duration-300 w-[70%]"
      style={{
        background: "linear-gradient(to right, #1D1D1D 0%, #191919 100%)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "60px 40px",
        borderRadius: "20px",
      }}
    >
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
                padding: "3rem 2rem",
              }}
              className=" rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <div className="flex justify-between items-center mb-4 ">
                <h1
                  className=" py-1  text-sm "
                  style={{
                    borderRadius: "8px",
                    fontSize: "1.7rem",
                    textAlign: "justify",
                    lineHeight: "3rem",
                    background: "linear-gradient(to right, #DA619C, #FF844A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Upload Deposit Data
                </h1>
              </div>
              <button
                onClick={closePopup}
                style={{
                  padding: "5px",
                }}
                className="absolute top-2 right-2 text-[#FC8150] "
              >
                <X className="w-5 h-5" />
              </button>

              <div style={{ textAlign: "justify", paddingBottom: "10px" }}>
                Here, you have to upload the deposit file and confirm the
                transaction for staking 32 ETH for Validator beacon node
                activation.
              </div>

              <button
                onClick={closePopup}
                style={{
                  background: "linear-gradient(to right, #A257EC, #D360A6)",
                  textAlign: "center",
                  color: "white",
                  marginTop: "10px",
                }}
                className=" text-white py-2 px-4 rounded-md shadow-lg text-center"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative text-white rounded-xl  p-4 mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ${
            showPopup ? "blur-sm" : ""
          }`}
        >
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3">Upload Deposit Data</h2>

              <p className="text-white text-md">
                Upload deposit file which you had generated in step 2 <br />(
                Via CLI )
              </p>
            </div>

            <button
              onClick={openPopup}
              className="text-[#FC8150] flex items-center space-x-2 text-sm mt-3"
            >
              <MessageCircleQuestionIcon className="w-4 h-4" />
              <span>Learn more about Deposit Data</span>
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-6">
              <div
                style={{
                  boxShadow: " rgb(43 43 43) 0px 4px 6px",
                }}
                className="flex flex-col items-center justify-center  rounded-md overflow-hidden p-6 transition-all duration-300 focus-within:ring-1 focus-within:ring-blue-500"
              >
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  {file ? (
                    <CheckCircle className="h-16 w-16 p-4 bg-gradient-to-b from-[#FC8151] to-[#C951C0] text-white rounded-full" />
                  ) : (
                    <CloudUpload className="h-16 w-16 mb-4 p-4 bg-gradient-to-b from-[#FC8151] to-[#C951C0] text-white rounded-full" />
                  )}
                  <p className="text-white mt-2">
                    {file ? file.name : "Drag file to upload or browse"}
                  </p>
                </label>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
              </div>
              <button
                style={{
                  border: "1px solid transparent",
                  borderImage: "linear-gradient(to right, #DA619C , #FF844A )",
                  borderImageSlice: 1,
                  background: "linear-gradient(to right, #DA619C, #FF844A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="mx-auto w-[40%] grow text-white py-[6px] px-4 rounded-[6px] focus:outline-none focus:ring-1 focus:ring-orange-600 focus:ring-opacity-50 font-bold"
              >
                Stake
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadDepositData;
