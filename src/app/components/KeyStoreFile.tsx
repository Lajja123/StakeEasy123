import React, { useState, useEffect } from "react";
import { CheckCircle, Eye, EyeOff, CloudUpload, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SelectTime from "./SelectTime";

function KeyStoreFile() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showSelectTime, setShowSelectTime] = useState(false);

  //   const generateValidatorKey = () => {
  //     console.log("Generating validator key with password:", password);
  //     if (file) {
  //       console.log("File uploaded:", file.name);
  //       // You would typically make an API call here
  //     } else {
  //       console.log("No file uploaded");
  //     }
  //   };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSelectTime = () => {
    setShowSelectTime(true);
  };

  if (showSelectTime) {
    return <SelectTime />;
  }

  return (
    <div>
      {/* Main Content with Blur Effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-red-500 mb-6">
            Key Store File
          </h2>

          <p className="text-sm text-white">
            Programmatically generate an Eigenpod address for users, reducing
            manual setup and enhancing convenience
          </p>
          <p className="text-sm text-white">
            Programmatically generate an Eigenpod address for users, reducing
            manual setup and enhancing convenience
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-300 rounded-md overflow-hidden p-6 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500">
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                {file ? (
                  <CheckCircle className="h-12 w-12 text-gray-500 mb-4" />
                ) : (
                  <CloudUpload className="h-12 w-12 text-gray-500 mb-4" />
                )}
                <p className="text-gray-500 mb-2">
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

          <div>
            <label className="block text-sm font-medium text-whitemb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <button
            onClick={handleSelectTime}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded border border-blue-200 text-sm transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default KeyStoreFile;
