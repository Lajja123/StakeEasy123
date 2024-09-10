"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OperatorCard from "./OperatorCard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Copy, Info, CheckCircle, ArrowLeft } from "lucide-react";
import icon from "../assets/icon.png";
import Image from "next/image";
import { Tooltip, Carousel } from "antd";

const operators = [
  {
    name: "ChainUp",
    id: 23,
    status: "Active",
    performance: "99.02%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Meria",
    id: 29,
    status: "Active",
    performance: "98.09%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Stakely",
    id: 30,
    status: "Active",
    performance: "89.85%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Openbitlab",
    id: 37,
    status: "Active",
    performance: "54.72%",
    fee: "0.0 SSV",
  },
  {
    name: "ChainUp",
    id: 23,
    status: "Active",
    performance: "99.02%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Meria",
    id: 29,
    status: "Active",
    performance: "98.09%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Stakely",
    id: 30,
    status: "Active",
    performance: "89.85%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Openbitlab",
    id: 37,
    status: "Active",
    performance: "54.72%",
    fee: "0.0 SSV",
  },
  {
    name: "ChainUp",
    id: 23,
    status: "Active",
    performance: "99.02%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Meria",
    id: 29,
    status: "Active",
    performance: "98.09%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Stakely",
    id: 30,
    status: "Active",
    performance: "89.85%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Openbitlab",
    id: 37,
    status: "Active",
    performance: "54.72%",
    fee: "0.0 SSV",
  },
  {
    name: "ChainUp",
    id: 23,
    status: "Active",
    performance: "99.02%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Meria",
    id: 29,
    status: "Active",
    performance: "98.09%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Stakely",
    id: 30,
    status: "Active",
    performance: "89.85%",
    fee: "0.0 SSV",
  },
  {
    name: "Lido - Openbitlab",
    id: 37,
    status: "Active",
    performance: "54.72%",
    fee: "0.0 SSV",
  },
];

const ValidatorDashboard = () => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      // Simulating API delay
      await new Promise((resolve) => setTimeout(resolve, 4000));
      // Here you would typically fetch your data
      // For now, we'll just set loading to false after the delay
      setLoading(false);
    };

    fetchData();
  }, []);

  const router = useRouter();
  
  const itemsPerPage = 4;
  const pages = Math.ceil(operators.length / itemsPerPage);

  const slides = [];
  for (let i = 0; i < pages; i++) {
    const startIndex = i * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = operators.slice(startIndex, endIndex);

    slides.push(
      <div key={i}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {currentItems.map((operator) => (
            <OperatorCard key={operator.id} {...operator} />
          ))}
        </div>
      </div>
    );
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText("  76668699....887797");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const goBack = () => {
    router.push("clusters-dashboard");
  };

  if (loading) {
    return (
      <div className="main">
        <div className="flex items-center justify-center p-8">
          <div
            className="p-6 rounded-lg text-white w-full max-w-7xl"
            style={{
              background: "linear-gradient(to right, #1D1D1D 0%, #191919 100%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "30px 40px",
              borderRadius: "20px",
            }}
          >
            <div className="flex items-center mb-4 text-white">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <div className="w-16 h-6 bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="mb-6 flex">
              <div className="w-48 h-7 bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Operator Cards Skeleton */}
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 h-[25vh] p-4 rounded-lg shadow-md flex flex-col justify-between"
                    style={{
                      border: "1px solid #A6A6A6",
                      borderRadius: "10px",
                      background: "linear-gradient(to right, #1d1d1d, #0f0f0f)",
                    }}
                  >
                    <div className="flex flex-col mb-4">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 bg-gray-700 rounded-full mr-2 animate-pulse"></div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="w-24 h-5 bg-gray-700 rounded animate-pulse"></div>
                        <div className="w-12 h-4 bg-gray-700 rounded animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2">
                      <div className="flex flex-col justify-between gap-[20px]">
                        <div className="w-16 h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="w-16 h-4 bg-gray-700 rounded animate-pulse"></div>
                      </div>
                      <div className="flex flex-col justify-between gap-[20px]">
                        <div className="w-24 h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="w-16 h-4 bg-gray-700 rounded animate-pulse"></div>
                      </div>
                      <div className="flex flex-col justify-between gap-[20px]">
                        <div className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="w-16 h-4 bg-gray-700 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="w-16 h-2 bg-gray-700 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Balance & Validators Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Balance Card Skeleton */}
              <div
                className="rounded-lg shadow-md"
                style={{
                  border: "1px solid #A6A6A6",
                  borderRadius: "10px",
                  color: "white",
                  background: "linear-gradient(to right, #171717, #252525)",
                }}
              >
                <div className="p-5">
                  <div className="w-24 h-4 bg-gray-700 rounded mb-3 animate-pulse"></div>
                  <div className="w-32 h-6 bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div style={{ borderBottom: "1px solid #A6A6A6" }}></div>
                <div className="text-xs flex items-center p-4">
                  <div className="w-40 h-4 bg-gray-700 rounded mr-1 animate-pulse"></div>
                  <Info size={10} />
                </div>
                <div className="w-24 h-6 bg-gray-700 rounded ml-4 mb-4 animate-pulse"></div>
                <div className="flex justify-between gap-4 p-4">
                  <div className="w-20 h-8 flex-1 bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-20 h-8 flex-1 bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Validators Card Skeleton */}
              <div
                className="md:col-span-2 bg-gray-700 p-4 rounded-lg shadow-md"
                style={{
                  border: "1px solid #A6A6A6",
                  borderRadius: "10px",
                  color: "white",
                  background: "linear-gradient(to right, #171717, #252525)",
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="w-32 h-6 bg-gray-800 rounded animate-pulse"></div>
                </div>
                <div
                  className="bg-gray-800 m-2 mt-7"
                  style={{
                    border: "1px solid #A6A6A6",
                    borderRadius: "10px",
                    background: "linear-gradient(to right, #1d1d1d, #0f0f0f)",
                  }}
                >
                  <div className="flex justify-between items-center p-4">
                    <div className="w-24 h-4 bg-gray-700 rounded animate-pulse"></div>
                    <div className="w-16 h-4 bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  <div style={{ borderBottom: "1px solid #A6A6A6" }}></div>
                  <div className="flex justify-between items-center p-3">
                    <div className="w-40 h-4 bg-gray-700 rounded animate-pulse"></div>
                    <div className="w-16 h-6 bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="main">
        <div className=" flex items-center justify-center p-8 ">
          <div
            className=" p-6 rounded-lg  text-white w-full max-w-7xl"
            style={{
              background: "linear-gradient(to right, #1D1D1D 0%, #191919 100%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "30px 40px",
              borderRadius: "20px",
            }}
          >
            <button
              onClick={goBack}
              className="flex items-center mb-4 text-white "
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <div className="mb-6 flex">
              <h2
                className="text-xl font-semibold"
                style={{ letterSpacing: "1px", fontSize: "20px" }}
              >
                Cluster | <span style={{ fontSize: "12px" }}>6040...7c3e</span>
              </h2>
            </div>
            {/* Operator Cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {operators.map((operator, index) => (
                <OperatorCard key={index} {...operator} />
              ))}
            </div> */}

            <Carousel dots={true} arrows className="carousel mb-2">
              {slides}
            </Carousel>
            {/* Balance & Validators Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Balance Card */}
              <div
                className="rounded-lg shadow-md"
                style={{
                  border: "1px solid #A6A6A6",
                  borderRadius: "10px",
                  color: "white",
                  background: "linear-gradient(to right, #171717, #252525)",
                }}
              >
                <div className=" p-5">
                  <h3 className="text-sm font-semibold text-[#A6A6A6] mb-3">
                    Balance
                  </h3>
                  <p className="text-md font-bold">1.49 SSV</p>
                </div>
                <div style={{ borderBottom: "1px solid #A6A6A6" }}></div>

                <div className="text-xs flex items-center p-4">
                  <span className="mr-1 text-sm font-semibold ">
                    Est. Operational Runway
                  </span>
                  <Tooltip
                    title="Estimated amount of days the cluster balance is sufficient to run all it’s validators"
                    color="#121212"
                    overlayInnerStyle={{
                      border: "1px solid transparent",
                      borderImage:
                        "linear-gradient(to right, #A257EC , #DA619C )",
                      borderImageSlice: 1,
                      fontSize: "12px",
                    }}
                  >
                    <Info size={10} />
                  </Tooltip>
                </div>
                <p className="text-md font-bold p-4 pt-0">
                  182 <span className="text-[#A6A6A6] font-[300] ">days</span>
                </p>

                <div className="flex justify-between p-4 gap-4">
                  <button
                    className="flex-1 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
                    style={{
                      border: "1px solid transparent",
                      borderImage:
                        "linear-gradient(to right, #DA619C , #FF844A )",
                      borderImageSlice: 1,
                      background: "linear-gradient(to right, #DA619C, #FF844A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Deposit
                  </button>
                  <button
                    className="flex-1 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none"
                    style={{
                      border: "1px solid transparent",
                      borderImage:
                        "linear-gradient(to right, #DA619C , #FF844A )",
                      borderImageSlice: 1,
                      background: "linear-gradient(to right, #DA619C, #FF844A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Validators Card */}
              <div
                className="md:col-span-2 bg-gray-700 p-4 rounded-lg shadow-md"
                style={{
                  border: "1px solid #A6A6A6",
                  borderRadius: "10px",

                  color: "white",
                  background: "linear-gradient(to right, #171717, #252525)",
                }}
              >
                <div className="flex justify-between items-center ">
                  <h3
                    className="text-xl font-semibold"
                    style={{ letterSpacing: "1px" }}
                  >
                    Validators{" "}
                  </h3>
                  {/* <button
                    className=" text-white py-2 px-4 rounded-md focus:outline-none"
                    style={{
                      border: "1px solid transparent",
                      borderImage:
                        "linear-gradient(to right, #DA619C , #FF844A )",
                      borderImageSlice: 1,
                      background: "linear-gradient(to right, #DA619C, #FF844A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Add Validator +
                  </button> */}
                </div>
                <div
                  className="bg-gray-800  m-2 mt-7"
                  style={{
                    border: "1px solid #A6A6A6",
                    borderRadius: "10px",
                    background: "linear-gradient(to right, #1d1d1d, #0f0f0f)",
                  }}
                >
                  <div className="flex justify-between items-center p-4">
                    <p className="text-sm">Public Key</p>
                    <div className="text-xs flex items-center">
                      <span className="mr-1 text-sm font-semibold">Status</span>
                      <Tooltip
                        title="Refers to the validator’s status in the SSV network (not beacon chain), and reflects whether its operators are consistently performing their duties (according to the last 2 epochs)"
                        color="#121212"
                        overlayInnerStyle={{
                          border: "1px solid transparent",
                          borderImage:
                            "linear-gradient(to right, #A257EC , #DA619C )",
                          borderImageSlice: 1,
                          fontSize: "12px",
                        }}
                      >
                        <Info size={10} />
                      </Tooltip>
                    </div>
                  </div>
                  <div style={{ borderBottom: "1px solid #A6A6A6" }}></div>

                  <div className="flex justify-between items-cente p-3">
                    <div className="text-xs flex items-center">
                      <span className="mr-2 text-sm font-semibold">
                        76668699....887797
                      </span>

                      <button
                        className={`text-[#FC8150] transition-colors ${
                          copied ? "text-[#FC8150]" : ""
                        }`}
                        onClick={copyToClipboard}
                      >
                        {copied ? (
                          <CheckCircle className="w-3 h-3" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                    <div className="text-xs text-green-500 bg-[#D5F5E3] rounded-[5px] p-[5px] ">
                      Active
                    </div>
                  </div>
                  {/* <div className="flex justify-end mt-2 space-x-4">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button className="text-blue-500 hover:underline">
                    Settings
                  </button>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidatorDashboard;
