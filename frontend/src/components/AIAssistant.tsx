import { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  Loader2,
  User,
} from "lucide-react";
import { askAI } from "../services/aiService";

export default function AIAssistant() {
  const [message, setMessage] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Analyze MG Road traffic",
    "Predict congestion for next 30 minutes",
    "Suggest alternate route",
    "Emergency vehicle route",
  ];

  const handleAsk = async (text?: string) => {
    const query = text || message;

    if (!query.trim()) return;

    setLoading(true);

    try {
      const data = await askAI(query);
      setAnalysis(data.response);

      if (!text) setMessage("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 h-full flex flex-col">

      {/* Header */}

      <div className="flex justify-between items-center mb-5">

        <div className="flex items-center gap-3">

          <div className="bg-cyan-500/20 p-3 rounded-xl">
            <Bot className="text-cyan-400" size={24} />
          </div>

          <div>

            <h2 className="text-xl font-bold">
              AI Traffic Assistant
            </h2>

            <p className="text-gray-400 text-sm">
              Powered by Gemini AI
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2">

          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

          <span className="text-green-400 text-sm font-medium">
            Online
          </span>

        </div>

      </div>

      {/* Suggestions */}

      <div className="mb-5">

        <p className="text-gray-400 text-sm mb-3">
          Suggested Questions
        </p>

        <div className="flex flex-wrap gap-2">

          {suggestions.map((item) => (

            <button
              key={item}
              onClick={() => handleAsk(item)}
              className="bg-slate-800 hover:bg-cyan-600 transition px-3 py-2 rounded-lg text-sm"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Input */}

      <div className="flex gap-2">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAsk();
            }
          }}
          placeholder="Ask TrafficTwin AI..."
          className="flex-1 bg-slate-800 rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-500"
        />

        <button
          onClick={() => handleAsk()}
          className="bg-cyan-500 hover:bg-cyan-600 rounded-xl px-5 transition"
        >
          <Send />
        </button>

      </div>

      {/* Response */}

      <div className="flex-1 overflow-auto mt-6">

        {loading && (

          <div className="flex items-center gap-3 bg-slate-800 rounded-xl p-4">

            <Loader2 className="animate-spin text-cyan-400" />

            <span>
              Gemini is analyzing traffic...
            </span>

          </div>

        )}

        {!loading && analysis && (

          <div className="space-y-4">

            {/* User */}

            <div className="flex gap-3">

              <div className="bg-slate-700 p-2 rounded-full">

                <User size={18} />

              </div>

              <div className="bg-slate-800 rounded-xl p-4 flex-1">

                {message || "Suggested Prompt"}

              </div>

            </div>

            {/* AI */}

            <div className="flex gap-3">

              <div className="bg-cyan-500/20 p-2 rounded-full">

                <Bot
                  className="text-cyan-400"
                  size={18}
                />

              </div>

              <div className="bg-slate-800 rounded-xl p-4 flex-1">

                {typeof analysis === "string" ? (

                  <p className="whitespace-pre-wrap">
                    {analysis}
                  </p>

                ) : (

                  <>

                    <div className="flex items-center gap-2">

                      <Sparkles
                        className="text-yellow-400"
                        size={18}
                      />

                      <h3 className="font-bold text-cyan-400">
                        AI Analysis
                      </h3>

                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4">

                      <div className="bg-slate-700 rounded-lg p-3">

                        <p className="text-gray-400 text-sm">
                          Traffic Level
                        </p>

                        <h4 className="text-red-400 font-bold">
                          {analysis.trafficLevel}
                        </h4>

                      </div>

                      <div className="bg-slate-700 rounded-lg p-3">

                        <p className="text-gray-400 text-sm">
                          Risk Score
                        </p>

                        <h4 className="text-yellow-400 font-bold">
                          {analysis.riskScore}%
                        </h4>

                      </div>

                    </div>

                    <div className="mt-5">

                      <h4 className="font-semibold text-green-400">
                        Recommendations
                      </h4>

                      <ul className="list-disc ml-5 mt-2 space-y-1">

                        {analysis.recommendations?.map(
                          (item: string, index: number) => (

                            <li key={index}>
                              {item}
                            </li>

                          )
                        )}

                      </ul>

                    </div>

                  </>

                )}

              </div>

            </div>

          </div>

        )}

      </div>

      {/* Footer */}

      <div className="mt-5 pt-4 border-t border-slate-800 text-center text-xs text-gray-500">

        🚀 Powered by Gemini AI & TrafficTwin Intelligence

      </div>

    </div>
  );
}