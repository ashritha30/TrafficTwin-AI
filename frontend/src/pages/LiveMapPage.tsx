import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import MapCard from "../components/MapCard";
import WeatherCard from "../components/WeatherCard";
import EmergencyCard from "../components/EmergencyCard";
import ViolationCard from "../components/ViolationCard";

export default function LiveMapPage() {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <Topbar />

        <h1 className="text-4xl font-bold text-cyan-400 mt-8">
          🗺️ Live Traffic Map
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor traffic, weather, emergencies and violations in real time.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8">

          {/* Map */}
          <div className="col-span-2">
            <MapCard />
          </div>

          {/* Live Status */}
          <div className="space-y-6">
            <WeatherCard />
            <EmergencyCard />
            <ViolationCard />
          </div>

        </div>

      </div>

    </div>
  );
}