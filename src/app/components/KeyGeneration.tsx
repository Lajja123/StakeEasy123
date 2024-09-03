import React, { useState, useEffect } from "react";
import { X, Info, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function KeyGeneration() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [showTerminalSteps, setShowTerminalSteps] = useState(false);
  const [showGUISteps, setShowGUISteps] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the main popup
    const hasSeenPopup = localStorage.getItem("hasSeenKeyGenPopup");
    if (!hasSeenPopup) {
      setPopupType("main");
      setShowPopup(true);
      localStorage.setItem("hasSeenKeyGenPopup", "true");
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    setPopupType("");
  };

  const openPopup = (type: any) => {
    setPopupType(type);
    setShowPopup(true);
  };

  const acceptTerms = () => {
    setShowPopup(false);
    if (popupType === "terminal") {
      setShowTerminalSteps(true);
    } else if (popupType === "gui") {
      setShowGUISteps(true);
    }
    setPopupType("");
  };
  
  const goBack = () => {
    setShowTerminalSteps(false);
    setShowGUISteps(false);
  };

  // Steps for Method 1 (Terminal)
  const terminalSteps = [
    "Open Terminal",
    "Navigate to Directory",
    "Enter Key Generation Command",
    "Input Required Information",
    "Verify Key Generation Output",
    "Store the Key Securely",
  ];

  // Steps for Method 2 (Wagyu GUI App)
  const guiSteps = [
    "Download and Install Wagyu",
    "Open the Wagyu App",
    "Select 'Generate Key'",
    "Follow the On-Screen Instructions",
    "Save the Generated Key",
    "Verify the Key in the App",
  ];

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm p-8 mx-auto max-w-4xl">
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
              className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative max-h-[80vh] overflow-y-auto"
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
              {popupType === "main" && (
                <>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Validator Key Generation Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to generate your validator key using either the
                    Terminal method or the Wagyu GUI app. Follow the steps
                    carefully to ensure your key is generated and stored
                    securely.
                  </p>
                  <button
                    onClick={closePopup}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg"
                  >
                    Got it!
                  </button>
                </>
              )}
              {popupType === "terminal" && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Before you begin the key generation process, there are a few
                    important points to keep in mind
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Prepare pen and paper to write down important information.
                    This includes the 24-word secret recovery phrase (also
                    called the “mnemonic”, or the “seed phrase”) and the
                    keystore password. Safely storing and keeping these details
                    secure is your responsibility.
                  </p>
                  <p className="text-gray-600 mb-4">
                    It is vital to have multiple secure backups of your secret
                    recovery phrase and password. The secret recovery phrase is
                    the only way to withdraw your stake, so treat it with
                    extreme care. Losing this information will result in
                    permanent loss of access to your funds.
                  </p>
                  <p className="text-gray-600 mb-4">
                    If possible, use an air-gapped computer during the key
                    generation process. An air-gapped computer is one that is
                    not and has not been connected to any network, minimizing
                    the risk of exposing your secret recovery phrase. If an
                    air-gapped computer is not available, ensure you disconnect
                    from the internet by turning off all networking options
                    (unplugging Ethernet, switching off Wi-Fi, etc.) while
                    generating your keys.
                  </p>
                  <button
                    onClick={acceptTerms}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg"
                  >
                    Accept Terms
                  </button>
                </>
              )}
              {popupType === "gui" && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Before you begin the key generation process, there are a few
                    important points to keep in mind
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Prepare pen and paper to write down important information.
                    This includes the 24-word secret recovery phrase (also
                    called the “mnemonic”, or the “seed phrase”) and the
                    keystore password. Safely storing and keeping these details
                    secure is your responsibility.
                  </p>
                  <p className="text-gray-600 mb-4">
                    It is vital to have multiple secure backups of your secret
                    recovery phrase and password. The secret recovery phrase is
                    the only way to withdraw your stake, so treat it with
                    extreme care. Losing this information will result in
                    permanent loss of access to your funds.
                  </p>
                  <p className="text-gray-600 mb-4">
                    If possible, use an air-gapped computer during the key
                    generation process. An air-gapped computer is one that is
                    not and has not been connected to any network, minimizing
                    the risk of exposing your secret recovery phrase. If an
                    air-gapped computer is not available, ensure you disconnect
                    from the internet by turning off all networking options
                    (unplugging Ethernet, switching off Wi-Fi, etc.) while
                    generating your keys.
                  </p>
                  <button
                    onClick={acceptTerms}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg"
                  >
                    Accept Terms
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Main Content with Blur Effect */}
      <div
        className={`transition-all duration-300 ${showPopup ? "blur-sm" : ""}`}
      >
        {(showTerminalSteps || showGUISteps) && (
          <button
            onClick={goBack}
            className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        )}
        {showTerminalSteps && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center">
              Terminal Key Generation Steps
            </h3>
            <ol className="list-decimal list-inside space-y-2">
              {terminalSteps.map((step, index) => (
                <li key={index} className="text-gray-800">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
        {showGUISteps && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center">
              GUI Key Generation Steps
            </h3>
            <ol className="list-decimal list-inside space-y-2">
              {guiSteps.map((step, index) => (
                <li key={index} className="text-gray-800">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
        {!showTerminalSteps && !showGUISteps && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-red-500 mb-4 text-center">
              Generate Keys
            </h3>
            <div>
              Staking keys play a crucial role in Ethereum staking as validators
              use them to sign attestations and proposals. These keys are also
              necessary for depositing the 32 ETH stake. Additionally, the
              staking keys will be used to set the Withdrawal Address for
              receiving rewards and making final withdrawals.
            </div>
            <div>
              As a user looking to participate in staking, you will need to
              generate your own staking keys.
            </div>
            <div>
              <button
                onClick={() => openPopup("terminal")}
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg mr-4"
              >
                Terminal commands
              </button>
              <button
                onClick={() => openPopup("gui")}
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg"
              >
                GUI commands
              </button>
            </div>
          </div>
        )}
        <div className="mt-8 text-center">
          <button
            onClick={() => openPopup("main")}
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg"
          >
            <Info className="w-5 h-5 mr-2" />
            Show Key Generation Guide
          </button>
        </div>
      </div>
    </div>
  );
}

export default KeyGeneration;
