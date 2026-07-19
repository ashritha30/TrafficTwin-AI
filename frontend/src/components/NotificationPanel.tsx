import {
  Bell,
  AlertTriangle,
  Ambulance,
  CloudRain,
  TrafficCone,
} from "lucide-react";

const alerts = [
  {
    type: "Accident",
    icon: <AlertTriangle className="text-red-400" size={18} />,
    message: "Accident reported near Silk Board",
    time: "2 min ago",
    color: "border-red-500",
  },
  {
    type: "Weather",
    icon: <CloudRain className="text-blue-400" size={18} />,
    message: "Heavy rain near Electronic City",
    time: "5 min ago",
    color: "border-blue-500",
  },
  {
    type: "Emergency",
    icon: <Ambulance className="text-green-400" size={18} />,
    message: "Ambulance dispatched to Outer Ring Road",
    time: "Just now",
    color: "border-green-500",
  },
  {
    type: "Signal",
    icon: <TrafficCone className="text-yellow-400" size={18} />,
    message: "Signal timing updated at KR Puram",
    time: "8 min ago",
    color: "border-yellow-500",
  },
];

export default function NotificationPanel() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">

      {/* Header */}

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-xl font-bold flex items-center gap-2">
            <Bell className="text-cyan-400" size={22} />
            Live Alerts
          </h2>

          <p className="text-gray-400 text-sm">
            Recent traffic updates
          </p>

        </div>

        <span className="flex items-center gap-2 text-green-400 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Live
        </span>

      </div>

      {/* Alerts */}

      <div className="space-y-3 max-h-72 overflow-y-auto pr-1">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className={`bg-slate-800 rounded-xl border-l-4 ${alert.color} p-4 hover:bg-slate-700 transition`}
          >

            <div className="flex justify-between items-start">

              <div className="flex gap-3">

                <div className="mt-1">
                  {alert.icon}
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {alert.type}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {alert.message}
                  </p>

                </div>

              </div>

              <span className="text-xs text-gray-500 whitespace-nowrap">
                {alert.time}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}