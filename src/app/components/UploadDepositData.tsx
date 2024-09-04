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
              <div className="flex flex-col items-center justify-center bg-[#161515] rounded-md overflow-hidden p-6 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  {file ? (
                    <CheckCircle className="h-12 w-12 text-gray-500 mb-4" />
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
