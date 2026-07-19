import type { ReactNode } from "react";
import { Activity } from "lucide-react";

type Props = {
  title: string;
  value: string;
  color: string;
  subtitle?: string;
  icon?: ReactNode;
};

export default function StatCard({
  title,
  value,
  color,
  subtitle,
  icon,
}: Props) {
  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
      shadow-lg
      hover:-translate-y-1
      hover:shadow-cyan-500/20
      transition-all
      duration-300
      group
    "
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-gray-400 uppercase tracking-wide text-sm">
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </h2>

        </div>

        <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition">

          {icon}

        </div>

      </div>

      <div className="flex justify-between items-center mt-6">

        <div>

          <p className="text-gray-400 text-sm">
            {subtitle}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Updated Just Now
          </p>

        </div>

        <div className="flex items-center gap-2">

          <Activity
            className="text-green-400 animate-pulse"
            size={16}
          />

          <span className="text-green-400 text-sm">
            Live
          </span>

        </div>

      </div>

    </div>
  );
}