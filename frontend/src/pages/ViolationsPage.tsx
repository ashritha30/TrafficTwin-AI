import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import ViolationCard from "../components/ViolationCard";
import TrafficCamera from "../components/TrafficCamera";
import TrafficChart from "../components/TrafficChart";

export default function ViolationsPage() {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <Topbar />

        <h1 className="text-4xl font-bold text-red-400 mt-8">
          🚨 Traffic Violations
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor AI-detected traffic violations in real time.
        </p>

        <div className="mt-8">
          <ViolationCard />
        </div>

        <div className="mt-8">
          <TrafficCamera />
        </div>

        <div className="mt-8">
          <TrafficChart />
        </div>

      </div>

    </div>
  );
}