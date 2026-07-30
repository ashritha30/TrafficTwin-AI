import { menuItems } from "../data/menu";
import { useNavigate, useLocation } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function Sidebar() {
  const role = localStorage.getItem("role") || "Admin";
  const name = localStorage.getItem("name") || "User";

  const menus =
    menuItems[role as keyof typeof menuItems] || menuItems.Admin;

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col min-h-screen shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-4xl font-extrabold text-cyan-400 tracking-wide">
          🚦 TrafficTwin
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Smart Traffic Command Center
        </p>

        <p className="text-gray-500 text-xs mt-1">
          Version 1.0
        </p>
      </div>

      {/* User Card */}
      <div className="m-5 rounded-2xl bg-slate-800 border border-slate-700 p-5">
        <p className="text-gray-400 text-sm">
          Welcome Back 👋
        </p>

        <h2 className="text-2xl font-bold text-white mt-2">
          {name}
        </h2>

        <p className="text-cyan-400 text-sm font-medium">
          {role}
        </p>

        <div className="flex items-center gap-2 mt-5">
          <ShieldCheck
            size={18}
            className="text-green-400 animate-pulse"
          />

          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
            SYSTEM ONLINE
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {menus.map((menu) => {
          const active = location.pathname === menu.path;

          return (
            <button
              key={menu.name}
              onClick={() => navigate(menu.path)}
              className={`w-full flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 ${
                active
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 border-l-4 border-cyan-200"
                  : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400"
              }`}
            >
              <menu.icon size={22} />

              <span className="font-semibold">
                {menu.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">
        <div className="text-center mt-5">
          <p className="text-gray-500 text-xs">
            TrafficTwin AI
          </p>

          <p className="text-gray-600 text-xs">
            Powered by Gemini AI
          </p>
        </div>
      </div>
    </aside>
  );
}