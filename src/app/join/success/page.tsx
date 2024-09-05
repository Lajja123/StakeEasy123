import React from "react";
import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GreetingAtDashboard from "@/app/components/GreetingAtDashboard";

const page = () => {
  return (
    <div className="main">
      <NavBar />
      <GreetingAtDashboard />
      <Footer />
    </div>
  );
};

export default page;
