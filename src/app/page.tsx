import Navbar from "@/app/components/Navbar";
import Stepper from "@/app/pages/Stepper";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import ValidatorCluster from "./components/ValidatorCluster";

import "../app/css/Landing.css"

export default function Home() {
  return (
    <div className="main bg_image">
      <Navbar />
      {/* <Stepper /> */}
      <Landing />
      {/* <ValidatorCluster /> */}
      <Footer />
    </div>
  );
}
