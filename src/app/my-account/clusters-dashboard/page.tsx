import React from "react";
import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ClusterDashboard from "@/app/components/ClusterDashboard";

const page = () => {
  return (
    <div className="main">
      <NavBar />
      <ClusterDashboard />
      <Footer />
    </div>
  );
};

export default page;
