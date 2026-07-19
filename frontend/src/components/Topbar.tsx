import {
  Bell,
  Search,
  UserCircle2,
  CloudRain,
  Wifi,
  Menu,
} from "lucide-react";
import LiveClock from "./LiveClock";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name") || "User";
  const role = localStorage.getItem("role") || "Admin";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl px-4 md:px-6 py-5">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left Section */}

        <div className="flex items-center gap-4">

          <button className="lg:hidden bg-slate-800 p-2 rounded-xl">
            <Menu size={22} />
          </button>

          <div>

            <h1 className="text-2xl md:text-3xl font-bold text-white">
              🚦 Traffic Command Center
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              AI Powered Smart Traffic Management
            </p>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex flex-wrap items-center gap-3 justify-start lg:justify-end">

          {/* System Status */}

          <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-4 py-2 shadow">

            <Wifi
              size={18}
              className="text-green-400 animate-pulse"
            />

            <span className="text-green-400 text-sm font-semibold">
              Online
            </span>

          </div>

          {/* Clock */}

          <div className="bg-slate-800 rounded-xl px-4 py-2 shadow">

            <LiveClock />

          </div>

          {/* Weather */}

          <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-4 py-2 shadow">

            <CloudRain
              className="text-cyan-400"
              size={18}
            />

            <span className="font-medium">
              24°C
            </span>

          </div>

          {/* Search */}

          <button className="bg-slate-800 hover:bg-cyan-600 transition-all duration-300 rounded-xl p-3 shadow">

            <Search size={20} />

          </button>

          {/* Notifications */}

          <button className="relative bg-slate-800 hover:bg-cyan-600 transition-all duration-300 rounded-xl p-3 shadow">

            <Bell size={20} />

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

          </button>

          {/* User */}

          <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2 shadow">

            <UserCircle2
              size={38}
              className="text-cyan-400"
            />

            <div>

              <p className="font-semibold text-white">
                {name}
              </p>

              <p className="text-xs text-gray-400">
                {role}
              </p>

            </div>

          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300 rounded-xl px-5 py-3 font-semibold shadow-lg"
          >
            Logout
          </button>

        </div>

      </div>

    </header>
  );
}