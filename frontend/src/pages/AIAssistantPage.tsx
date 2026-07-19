import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AIAssistant from "../components/AIAssistant";

export default function AIAssistantPage() {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-6">

        <Topbar />

        <div className="mt-8">

          <h1 className="text-3xl font-bold">
            🤖 AI Traffic Assistant
          </h1>

          <p className="text-gray-400 mt-2">
            Analyze traffic, weather, congestion and emergency situations using Gemini AI.
          </p>

          <div className="mt-8">
            <AIAssistant />
          </div>

        </div>

      </div>

    </div>
  );
}