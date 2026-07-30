import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/Statcard";
//import MapCard from "../components/MapCard";
import AIAssistant from "../components/AIAssistant";
import ViolationCard from "../components/ViolationCard";
import WeatherCard from "../components/WeatherCard";
import EmergencyCard from "../components/EmergencyCard";
import { useEffect, useState } from "react";
import RecommendationPanel from "../components/RecommendationPanel";
import PredictionCard from "../components/PredictionCard";
import { getLiveDashboard } from "../services/liveService";
import TrafficChart from "../components/TrafficChart";
import NotificationPanel from "../components/NotificationPanel";
import TrafficCamera from "../components/TrafficCamera";
import ReportButton from "../components/ReportButton";
import {
  Car,
  TrafficCone,
  ShieldAlert,
  Ambulance,
} from "lucide-react";
export default function Dashboard() {
  const [liveData, setLiveData] = useState<any>(null);
useEffect(() => {

  const loadLive = async () => {
    try {
      const data = await getLiveDashboard();
      setLiveData(data);
    } catch (error) {
      console.error(error);
    }
  };

  loadLive();

  const interval = setInterval(loadLive, 5000);

  return () => clearInterval(interval);

}, []);
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
     <main className="flex-1 p-4 md:p-6 overflow-auto animate-[fadeIn_.4s_ease]">

        {/* Top Navigation */}
        <Topbar />

        {/* Page Title */}
       <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

    <div>

      <p className="text-cyan-400 font-semibold uppercase tracking-widest">
        Smart Traffic Control
      </p>

      <h1 className="text-5xl font-extrabold text-white mt-2">
        TrafficTwin AI
      </h1>

      <p className="text-gray-400 mt-3 text-lg">
        AI Powered Smart Traffic Enforcement &
        Congestion Management
      </p>

    </div>

    <div className="text-right">

      <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-semibold">

        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

        System Live

      </div>

      <div className="mt-5">
        <ReportButton />
      </div>

    </div>

  </div>

</div>
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <StatCard
  title="Live Congestion"
  value={liveData?.trafficLevel ?? "Loading..."}
  color="text-red-400"
  subtitle="Road Status"
  icon={<TrafficCone size={30} />}
/>

<StatCard
  title="Vehicles"
  value={liveData?.vehicles?.toString() ?? "Loading..."}
  color="text-cyan-400"
  subtitle="Vehicles Today"
  icon={<Car size={30} />}
/>

<StatCard
  title="Violations"
  value={liveData?.violations?.toString() ?? "Loading..."}
  color="text-yellow-400"
  subtitle="Detected Today"
  icon={<ShieldAlert size={30} />}
/>

<StatCard
  title="Emergency"
  value={liveData?.emergency?.toString() ?? "Loading..."}
  color="text-green-400"
  subtitle="Active Response"
  icon={<Ambulance size={30} />}
/>

        </div>

        {/* Map + AI Assistant */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

          {/* Live Map */}
          <div className="xl:col-span-2">
            {/* <MapCard /> */}
          </div>

          {/* AI Assistant */}
          <AIAssistant />

        </div>
        <div className="mt-10">
    <RecommendationPanel />
</div>

       <div className="mt-10">
    <PredictionCard />
</div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

  <ViolationCard />
  <WeatherCard />
  <EmergencyCard />
  
</div>


<div className="mt-10">
    <TrafficChart />
</div>

<div className="mt-10">
    <NotificationPanel />
</div>

<div className="mt-10">
    <TrafficCamera />
</div>
      </main>
         
    </div>
    
  );
}