"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import icon from "../assets/icon.png";
import { useRouter } from "next/navigation";

const operators = [
  { name: "Operator 1", image: icon },
  { name: "Operator 2", image: icon },
  { name: "Operator 3", image: icon },
  { name: "Operator 4", image: icon },
  { name: "Operator 5", image: icon },
  { name: "Operator 6", image: icon },
  { name: "Operator 7", image: icon },
  { name: "Operator 8", image: icon },
];

const ITEMS_PER_PAGE = 4;

const GreetingAtDashboard = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const [loading, setLoading] = useState(true);

  // Simulate data fetch delay (optional)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(operators.length / ITEMS_PER_PAGE) - 1)
    );
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentOperators = operators.slice(startIndex, endIndex);

  const handleClusterDashboard = () => {
    router.push("/my-account/clusters-dashboard");
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          <div
            className="animate-pulse p-12 rounded-lg max-w-lg w-full text-white"
            style={{
              background: "linear-gradient(to right, #1D1D1D 0%, #191919 100%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "30px 40px",
              borderRadius: "20px",
            }}
          >
            <div className="w-[75%] h-8 bg-gray-700 rounded-md mb-4"></div>
            <div className="h-4 bg-gray-700 rounded-md mb-4 w-full"></div>
            <div
              className="p-4 rounded-lg mb-4"
              style={{
                borderRadius: "14px",
                border: "1px solid gray",
              }}
            >
              <div className="h-4 bg-gray-700 rounded-md mb-4 w-2/3"></div>
              <div className="flex flex-wrap justify-center space-x-4 mb-3 mt-5">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 bg-gray-700 rounded-full mb-3"
                      style={{
                        padding: "3px",
                        border: "1px solid #A6A6A6",
                        background:
                          "linear-gradient(to right, #1d1d1d, #191919)",
                      }}
                    ></div>
                    <div className="h-4 bg-gray-700 rounded-md w-16"></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <div className="w-20 h-8 bg-gray-700 rounded-md"></div>
                <div className="w-20 h-8 bg-gray-700 rounded-md"></div>
              </div>
            </div>
            <div className="h-4 bg-gray-700 rounded-md mb-4"></div>
            <div className="h-12 bg-gray-700 rounded-md w-full mt-6"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div
            className="p-12 rounded-lg max-w-lg w-full text-white"
            // style={{
            //   borderRadius: "35px",
            //   color: "white",
            //   background: "linear-gradient(to right, #171717, #252525)",
            // }}
            style={{
              background: "linear-gradient(to right, #1D1D1D 0%, #191919 100%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "30px 40px",
              borderRadius: "20px",
            }}
          >
            <h2
              className="text-2xl font-medium mb-4"
              style={{
                background: "linear-gradient(to right, #DA619C, #FF844A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Welcome to the StakeEasy!
            </h2>
            <p className="mb-4 text-base font-light">
              Your new validator is managed by the following cluster:
            </p>
            <div
              className="p-4 rounded-lg mb-4"
              style={{
                borderRadius: "14px",
                border: "1px solid gray",
              }}
            >
              <p className="font-extralight mb-2">
                Validator Cluster:{" "}
                <span className="font-bold">6040...7c3e</span>
              </p>
              <div className="flex flex-wrap justify-center space-x-4 mb-3 mt-5">
                {currentOperators.map((operator, index) => (
                  <div key={index} className="flex flex-col items-center ">
                    <Image
                      src={operator.image}
                      alt={operator.name}
                      className="mb-3"
                      style={{
                        borderRadius: "20px",
                        padding: "3px",
                        border: "1px solid #A6A6A6",
                        background:
                          "linear-gradient(to right, #1d1d1d, #191919)",
                      }}
                    />
                    <span className="text-sm">{operator.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                  className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50 text-sm"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={
                    currentPage ===
                    Math.ceil(operators.length / ITEMS_PER_PAGE) - 1
                  }
                  className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50 text-sm"
                >
                  Next
                </button>
              </div>
            </div>
            <p
              className="mb-4 font-light text-[15px]"
              style={{ lineHeight: "1.4rem" }}
            >
              Your cluster operators have been notified and will start your
              validator operation instantly.
            </p>
            <div className="mt-6 flex justify-center w-full">
              <button
                className="w-full text-white py-3 px-4 font-bold focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-opacity-50"
                style={{
                  border: "1px solid transparent",
                  borderImage: "linear-gradient(to right, #DA619C , #FF844A )",
                  borderImageSlice: 1,
                  background: "linear-gradient(to right, #DA619C, #FF844A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                onClick={handleClusterDashboard}
              >
                Manage Cluster
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GreetingAtDashboard;
