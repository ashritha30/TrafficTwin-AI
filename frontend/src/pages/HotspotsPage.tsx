import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import MapCard from "../components/MapCard";
import RecommendationPanel from "../components/RecommendationPanel";
import PredictionCard from "../components/PredictionCard";

export default function HotspotsPage() {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <Topbar />

        <h1 className="text-4xl font-bold text-cyan-400 mt-8">
          📍 Traffic Hotspots
        </h1>

        <p className="text-gray-400 mt-2">
          AI detected congestion hotspots across the city.
        </p>

        <div className="mt-8">
          <MapCard />
        </div>

        <div className="mt-8">
          <RecommendationPanel />
        </div>

        <div className="mt-8">
          <PredictionCard />
        </div>

      </div>

    </div>
  );
}