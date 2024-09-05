"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronRight,
  ChevronLeft,
  Plus,
  Key,
  Pencil,
  Upload,
  X,
  MessageCircleQuestionIcon,
} from "lucide-react";
import starImg from "../assets/Frame 5.png";
import { useRouter } from "next/navigation";

// Import your step components here
import EigenpodAddress from "../components/EigenpodAddress";
import KeyGeneration from "../components/KeyGeneration";
import UploadDepositData from "../components/UploadDepositData";
import ValidatorRegistration from "../components/ValidatorRegistration";

interface StepDetails {
  title: string;
  content: string[][];
}

const steps = [
  { title: "Personal Info", component: EigenpodAddress, icon: Plus },
  { title: "Account Setup", component: KeyGeneration, icon: Key },
  { title: "Completion", component: ValidatorRegistration, icon: Pencil },
  { title: "Confirmation", component: UploadDepositData, icon: Upload },
];

const stepDetails: { [key: number]: StepDetails } = {
  0: {
    title: "Eigenpod Address",
    content: [
      [
        "You will generate an EigenPod address, which will serve as the withdrawal address for any amounts restaked by your validator. This address is used to manage the funds restaked between different operators",
      ],
    ],
  },
  1: {
    title: "Key Generation",
    content: [
      [
        "Here, you will generate your validator key using the Eigenpod address you created earlier. You will need to set a keystore password, which will be used to decrypt your key file later",
      ],
      [
        "Two files named Keystore and Deposit will be created along with a seed phrase. Keep these along with keystore password in a secure and offline location.",
      ],
    ],
  },
  2: {
    title: "Validator Registration",
    content: [
      [
        "Here, you will select operators to run your validator on the SSV network. The 3m+1 criteria will ensure that your validator remains operational even if one operator fails. For example, if you select four operators, at least three of them must sign transactions.",
      ],
      [
        "You can choose from a variety of operators, view detailed statistics about their performance and reliability, and make an informed decision. Additionally, you will manage the fees associated with each operator, ensuring that your validator is set up with the right balance of cost and redundancy",
      ],
      [
        "You will also configure the duration for which your selected operators will run. You can choose from predefined time periods or enter a custom duration that suits your needs. The fees for running your operators will vary based on the selected time period. Once you have made your selection, a comprehensive summary of the total fees will be displayed, showing the amount you need to pay to register your validator on the Stake Easy network",
      ],
      [
        "Then you will have to enter a keystore password that you have generated before in the second step with the keystore file under Enter Validator Key step",
      ],
    ],
  },
  3: {
    title: "Upload Deposit Data",
    content: [
      [
        " Here, you have to upload the deposit file and confirm the transaction for staking 32 ETH for Validator beacon node activation.",
      ],
    ],
  },
};

function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === steps.length - 1) {
      // Navigate to dashboard when on the last step
      router.push("/join/success"); // Adjust the path as needed
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="w-full my-[10px] bg-transparent rounded-xl flex flex-col justify-between ">
      <Image
        src={starImg}
        alt=""
        className="w-70 h-70 absolute bottom-16 left-0"
      />
      <div className="mb-12 relative w-full">
        <div className="flex justify-between items-center w-full relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`step flex flex-col items-center relative w-full`}
              >
                <motion.div
                  className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    index <= currentStep
                      ? "bg-gradient-to-b from-[#FC8151] to-[#C951C0]"
                      : "bg-[#585858]"
                  } ${
                    index === 0 && currentStep === 0 ? "  ring-opacity-50" : ""
                  } z-10`}
                  animate={{
                    scale: index === currentStep ? 1.2 : 1,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#414141] transform -translate-y-1/2" />

        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#FC8151] to-[#C951C0] transform -translate-y-1/2 z-0"
          initial={{ width: "14%" }}
          animate={{
            width: `${Math.max(14, (currentStep / (steps.length - 1)) * 100)}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div>
        <CurrentStepComponent />
      </div>

      <div className="flex justify-end mt-12 w-[90%]">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          style={{
            border: "1px solid transparent",
            borderImage: "linear-gradient(to right, #A257EC , #DA619C )",
            borderImageSlice: 1,
            color: "white",
            background: "linear-gradient(to right, #121212, #252525)",
          }}
          className="px-6 py-2 mx-2.5 my-0  rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-colors flex items-center"
        >
          <ChevronLeft size={20} className="mr-2 text-white" />
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2  disabled:opacity-50 transition-colors flex items-center"
          style={{
            border: "1px solid transparent",
            borderImage: "linear-gradient(to right, #A257EC , #DA619C )",
            borderImageSlice: 1,
            color: "white",
            background: "linear-gradient(to right, #121212, #252525)",
          }}
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
          <ChevronRight size={20} className="ml-2" />
        </button>
      </div>

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
                <h1
                  className="inline-block 3 py-1  text-sm mb-3"
                  style={{
                    borderRadius: "8px",
                    fontSize: "1.7rem",
                    textAlign: "justify",
                  }}
                >
                  {stepDetails[currentStep].title}
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

              <div className="space-y-4 text-justify">
                {stepDetails[currentStep].content.map((paragraph, index) => (
                  <p key={index} className="text-gray-300">
                    {paragraph.map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        {lineIndex < paragraph.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                ))}
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
      <button
        onClick={openPopup}
        className="absolute right-[5%] bottom-[7%] inline-flex items-center text-white py-2 px-4 rounded-md"
      >
        <MessageCircleQuestionIcon size={35} />
      </button>
    </div>
  );
}

export default Stepper;
