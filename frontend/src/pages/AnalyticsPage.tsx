import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import TrafficChart from "../components/TrafficChart";
import RecommendationPanel from "../components/RecommendationPanel";
import PredictionCard from "../components/PredictionCard";
import NotificationPanel from "../components/NotificationPanel";

export default function AnalyticsPage() {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-6">

        <Topbar />

        <h1 className="text-4xl font-bold text-cyan-400 mt-8">
          📊 Traffic Analytics
        </h1>

        <p className="text-gray-400 mt-2">
          AI-powered traffic analytics, congestion trends and predictions.
        </p>

        <div className="mt-8">
          <TrafficChart />
        </div>

        <div className="mt-8">
          <RecommendationPanel />
        </div>

        <div className="mt-8">
          <PredictionCard />
        </div>

        <div className="mt-8">
          <NotificationPanel />
        </div>

      </div>

    </div>
  );
}