import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import MapCard from "../components/MapCard";
import EmergencyCard from "../components/EmergencyCard";
import RecommendationPanel from "../components/RecommendationPanel";

export default function GreenCorridorPage() {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <Topbar />

        <h1 className="text-4xl font-bold text-lime-400 mt-8">
          🟢 Green Corridor Management
        </h1>

        <p className="text-gray-400 mt-2">
          AI-assisted emergency route optimization and corridor monitoring.
        </p>

        <div className="mt-8">
          <MapCard />
        </div>

        <div className="mt-8">
          <EmergencyCard />
        </div>

        <div className="mt-8">
          <RecommendationPanel />
        </div>

      </div>

    </div>
  );
}