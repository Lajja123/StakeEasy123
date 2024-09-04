import React from "react";
import OperatorSelectionTable from "./OperatorSelectionTable";

function ValidatorRegistration() {
  return (
    <div
      className="relative mx-auto transition-all duration-300 w-[85%]"
      style={{
        background: "linear-gradient(to right, #1D1D1D 0%, #191919 100%)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "30px 40px",
        borderRadius: "20px",
      }}
    >
      <OperatorSelectionTable />
    </div>
  );
}

export default ValidatorRegistration;
