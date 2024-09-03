import Navbar from "@/app/components/Navbar";
import Stepper from "@/app/pages/Stepper";
import Footer from "./components/Footer";
import SelectTime from "./components/SelectTime";
import Tx from "./components/Tx";
import KeyShareConfirmation from "./components/KeyShareConfirmation";
import GreetingAtDashboard from "./components/GreetingAtDashboard";
import ClusterDashboard from "./components/ClusterDashboard";
import ValidatorCluster from "./components/ValidatorCluster";

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
];

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      {/* <SelectTime />
      <Tx />
      <KeyShareConfirmation />
      <GreetingAtDashboard />
      <ClusterDashboard operators={operators} />
      <ValidatorCluster /> */}
      <Stepper />
      <Footer />
    </div>
  );
}
