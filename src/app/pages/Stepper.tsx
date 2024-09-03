"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Joyride, { Step } from "react-joyride";
import EigenpodAddress from "../components/EigenpodAddress";
import KeyGeneration from "../components/KeyGeneration";
import UploadDepositData from "../components/UploadDepositData";
import ValidatorRegistration from "../components/ValidatorRegistration";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";

function Stepper() {
  const steps = [
    { title: "EigenPod Address Creation", component: EigenpodAddress },
    { title: "Key Generation", component: KeyGeneration },
    { title: "Upload Deposit Data", component: UploadDepositData },
    { title: "Validator Registration", component: ValidatorRegistration },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [runTour, setRunTour] = useState(false); // Initially set to false

  const joyrideSteps: Step[] = [
    {
      target: ".step-0", // Targeting the first step in the stepper
      content: "This is where you create an EigenPod address for users",
    },
    {
      target: ".step-1",
      content: "Here you can generate the validator keys securely.",
    },
    {
      target: ".step-2",
      content: "This step allows you to upload the necessary deposit data.",
    },
    {
      target: ".step-3",
      content: "Finally, register the validator on the SSV network.",
    },
  ];

  const startTour = () => {
    setRunTour(true);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="w-[70%] h-[70vh] mx-auto my-[50px] p-8 bg-transparent rounded-xl shadow-lg flex flex-col justify-between">
      {/* Joyride Tour Component */}
      
      <Joyride
        steps={joyrideSteps}
        run={runTour}
        continuous
        scrollToFirstStep
        showSkipButton
        styles={{
          options: {
            zIndex: 10000, // Ensure the tour is on top of everything
            primaryColor: "#ef4444", // Tailwind's red-500
            backgroundColor: "#ffffff",
            textColor: "#333333",
          },
        }}
        callback={(data) => {
          if (data.status === "finished" || data.status === "skipped") {
            setRunTour(false);
          }
        }}
      />

      {/* Start Tour Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={startTour}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Start Tour
        </button>
      </div>

      <div className="mb-12 relative">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-${index} flex flex-col items-center relative`}
            >
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  index <= currentStep ? "bg-red-500 z-10" : "bg-gray-300 z-10"
                }`}
                animate={{
                  scale: index === currentStep ? 1.2 : 1,
                }}
              >
                {index + 1}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-300 " />
        <motion.div
          className="absolute top-5 left-0 h-0.5 bg-red-500"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="overflow-y-auto custom-scrollbar">
        <CurrentStepComponent />
      </div>

      <div className="flex justify-between mt-12">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-colors flex items-center"
        >
          <ChevronLeft size={20} className="mr-2" />
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 transition-colors flex items-center"
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
          <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Stepper;
