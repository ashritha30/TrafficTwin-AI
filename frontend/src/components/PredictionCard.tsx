import { useEffect, useState } from "react";
import {
  BrainCircuit,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
import { getPrediction } from "../services/predictionService";

export default function PredictionCard() {
  const [prediction, setPrediction] = useState<any>(null);

  const loadPrediction = async () => {
    try {
      const data = await getPrediction();
      setPrediction(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadPrediction();

    const interval = setInterval(loadPrediction, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!prediction)
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 animate-pulse">
        <div className="h-5 bg-slate-700 rounded w-1/2 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-slate-700 rounded"></div>
          <div className="h-4 bg-slate-700 rounded"></div>
          <div className="h-4 bg-slate-700 rounded"></div>
          <div className="h-4 bg-slate-700 rounded"></div>
        </div>
      </div>
    );

  const trendIcon =
    prediction.trend === "Increasing" ? (
      <TrendingUp className="text-red-400" size={22} />
    ) : prediction.trend === "Decreasing" ? (
      <TrendingDown className="text-green-400" size={22} />
    ) : (
      <Minus className="text-yellow-400" size={22} />
    );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">

        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BrainCircuit className="text-cyan-400" />
            AI Prediction
          </h2>

          <p className="text-gray-400 text-sm">
            Traffic forecast
          </p>
        </div>

        <span className="flex items-center gap-2 text-green-400 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Live
        </span>

      </div>

      {/* Forecast */}

      <div className="grid grid-cols-2 gap-3">

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-gray-400 text-xs">Current</p>
          <h3 className="text-cyan-400 text-xl font-bold">
            {prediction.current}%
          </h3>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-gray-400 text-xs">15 Min</p>
          <h3 className="text-yellow-400 text-xl font-bold">
            {prediction.next15}%
          </h3>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-gray-400 text-xs">30 Min</p>
          <h3 className="text-orange-400 text-xl font-bold">
            {prediction.next30}%
          </h3>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-gray-400 text-xs">60 Min</p>
          <h3 className="text-green-400 text-xl font-bold">
            {prediction.next60}%
          </h3>
        </div>

      </div>

      {/* Trend */}

      <div className="mt-5 bg-slate-800 rounded-xl p-4 flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">
            Trend
          </p>

          <h3 className="text-white font-semibold mt-1">
            {prediction.trend}
          </h3>

        </div>

        {trendIcon}

      </div>

    </div>
  );
}