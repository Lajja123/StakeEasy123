import React, { useState, useEffect } from "react";
import { CheckCircle, Eye, EyeOff, CloudUpload, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function UploadDepositData() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenUploadPopup");
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("hasSeenUploadPopup", "true");
    }
  }, []);

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

  return (
    <div
      className="relative mx-auto transition-all duration-300 w-[80%]"
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
              className=" rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <div className="flex justify-between items-center mb-4 ">
                <div
                  className="inline-block 3 py-1  text-sm mb-3"
                  style={{
                    borderRadius: "8px",
                    fontSize: "1.7rem",
                    textAlign: "justify",
                  }}
                >
                  Upload deposit data
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
              </div>

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
      <div className="relative text-white rounded-xl shadow-sm p-4 mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ${
            showPopup ? "blur-sm" : ""
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2
              className="text-2xl font-bold mb-3"
              style={{
                background: "linear-gradient(to right, #DA619C, #FF844A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Upload Deposit Data
            </h2>

            <p className="text-white text-md">
              Learn how to seamlessly upload deposit data, ensuring your
              validator registration is complete and processed on the stake-easy
              network
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-col items-center justify-center bg-[#161515] rounded-md overflow-hidden p-6 transition-all duration-300 focus-within:ring-1 focus-within:ring-blue-500">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  {file ? (
                    <CheckCircle className="h-16 w-16 p-4 bg-gradient-to-b from-[#FC8151] to-[#C951C0] text-white rounded-full" />
                  ) : (
                    <CloudUpload className="h-16 w-16 mb-4 p-4 bg-gradient-to-b from-[#FC8151] to-[#C951C0] text-white rounded-full" />
                  )}
                  <p className="text-white mb-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadDepositData;
