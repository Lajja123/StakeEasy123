import Navbar from "@/app/components/Navbar";
import Stepper from "@/app/pages/Stepper";
import Footer from "./components/Footer";
import OperatorSelectionTable from "./components/OperatorSelectionTable";
import Dashboard from "./pages/Dashboard";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      {/* <OperatorSelectionTable /> */}
      <Stepper />
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}
