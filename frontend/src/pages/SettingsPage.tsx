import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {
  Server,
  Database,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <Topbar />

        <h1 className="text-4xl font-bold text-cyan-400 mt-8">
          ⚙️ System Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor TrafficTwin AI system health and services.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <Server className="text-cyan-400 mb-3" size={40}/>
            <h2 className="text-2xl font-bold">Backend</h2>
            <p className="text-green-400 mt-2">🟢 Running</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <Database className="text-yellow-400 mb-3" size={40}/>
            <h2 className="text-2xl font-bold">Firebase</h2>
            <p className="text-green-400 mt-2">🟢 Connected</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <BrainCircuit className="text-purple-400 mb-3" size={40}/>
            <h2 className="text-2xl font-bold">Gemini AI</h2>
            <p className="text-green-400 mt-2">🟢 Active</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <ShieldCheck className="text-green-400 mb-3" size={40}/>
            <h2 className="text-2xl font-bold">Authentication</h2>
            <p className="text-green-400 mt-2">🟢 JWT Enabled</p>
          </div>

        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">
            System Information
          </h2>

          <div className="space-y-3 text-gray-300">

            <p><b>Project:</b> TrafficTwin AI</p>
            <p><b>Frontend:</b> React + TypeScript</p>
            <p><b>Backend:</b> FastAPI</p>
            <p><b>Database:</b> Firestore</p>
            <p><b>AI Model:</b> Gemini 2.5 Flash</p>
            <p><b>Authentication:</b> JWT</p>

          </div>
        </div>

      </div>
    </div>
  );
}