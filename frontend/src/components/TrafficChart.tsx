import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Activity,
  Car,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

const todayData = [
  { time: "8 AM", traffic: 30, vehicles: 520, violations: 5 },
  { time: "9 AM", traffic: 45, vehicles: 680, violations: 8 },
  { time: "10 AM", traffic: 60, vehicles: 820, violations: 12 },
  { time: "11 AM", traffic: 75, vehicles: 930, violations: 15 },
  { time: "12 PM", traffic: 55, vehicles: 760, violations: 10 },
  { time: "1 PM", traffic: 40, vehicles: 620, violations: 6 },
  { time: "2 PM", traffic: 65, vehicles: 870, violations: 14 },
  { time: "3 PM", traffic: 80, vehicles: 1040, violations: 18 },
];

export default function TrafficChart() {
  const [range, setRange] = useState("Today");

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="text-cyan-400" />
            Traffic Analytics
          </h2>

          <p className="text-gray-400 mt-1">
            Live traffic trends and city statistics
          </p>

        </div>

        <div className="flex items-center gap-3">

          <span className="flex items-center gap-2 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            LIVE
          </span>

          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm"
          >
            <option>Today</option>
            <option>Week</option>
            <option>Month</option>
          </select>

        </div>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-slate-800 rounded-xl p-4 flex items-center justify-between">

          <div>

            <p className="text-gray-400 text-sm">
              Avg Traffic
            </p>

            <h3 className="text-2xl font-bold text-red-400">
              56%
            </h3>

          </div>

          <Activity className="text-red-400" size={32} />

        </div>

        <div className="bg-slate-800 rounded-xl p-4 flex items-center justify-between">

          <div>

            <p className="text-gray-400 text-sm">
              Vehicles
            </p>

            <h3 className="text-2xl font-bold text-cyan-400">
              7,240
            </h3>

          </div>

          <Car className="text-cyan-400" size={32} />

        </div>

        <div className="bg-slate-800 rounded-xl p-4 flex items-center justify-between">

          <div>

            <p className="text-gray-400 text-sm">
              Violations
            </p>

            <h3 className="text-2xl font-bold text-yellow-400">
              88
            </h3>

          </div>

          <ShieldAlert className="text-yellow-400" size={32} />

        </div>

      </div>

      {/* Chart */}

      <ResponsiveContainer width="100%" height={360}>

        <LineChart data={todayData}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
          />

          <XAxis
            dataKey="time"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: 12,
              color: "#fff",
            }}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="traffic"
            name="Traffic %"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />

          <Line
            type="monotone"
            dataKey="vehicles"
            name="Vehicles"
            stroke="#06b6d4"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />

          <Line
            type="monotone"
            dataKey="violations"
            name="Violations"
            stroke="#facc15"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}