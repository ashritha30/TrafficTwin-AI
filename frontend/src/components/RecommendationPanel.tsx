import { useEffect, useState } from "react";
import {
  BrainCircuit,
  AlertTriangle,
  Siren,
  CheckCircle2,
} from "lucide-react";
import { getRecommendations } from "../services/recommendationService";

type Recommendation = {
  type: string;
  title: string;
  priority: string;
};

export default function RecommendationPanel() {
  const [items, setItems] = useState<Recommendation[]>([]);

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        const data = await getRecommendations();
        setItems(data.items);
      } catch (err) {
        console.error(err);
      }
    };

    loadRecommendations();

    const interval = setInterval(loadRecommendations, 10000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "emergency":
        return <Siren className="text-red-400" size={20} />;
      case "traffic":
        return <AlertTriangle className="text-yellow-400" size={20} />;
      default:
        return <CheckCircle2 className="text-green-400" size={20} />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "critical":
        return "bg-red-500/20 text-red-400";
      case "high":
        return "bg-orange-500/20 text-orange-400";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-green-500/20 text-green-400";
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BrainCircuit className="text-cyan-400" size={22} />
            AI Recommendations
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Live optimization suggestions
          </p>
        </div>

        <span className="flex items-center gap-2 text-green-400 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Live
        </span>

      </div>

      {/* Recommendation Cards */}
      <div className="space-y-3">

        {items.map((item, index) => (

          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-cyan-500 transition duration-300"
          >

            <div className="flex justify-between items-start">

              <div className="flex gap-3">

                <div className="mt-1">
                  {getIcon(item.type)}
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {item.type === "Traffic"
                      ? "Heavy congestion detected in this area."
                      : item.type === "Emergency"
                      ? "Emergency vehicle requires route priority."
                      : "AI recommends monitoring this location."}
                  </p>

                </div>

              </div>

              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(
                  item.priority
                )}`}
              >
                {item.priority}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}