import {
  Camera,
  Radio,
  MapPin,
  Clock,
} from "lucide-react";

export default function TrafficCamera() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">

      {/* Header */}

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-xl font-bold flex items-center gap-2">
            <Camera className="text-cyan-400" size={22} />
            Live Traffic Camera
          </h2>

          <p className="text-gray-400 text-sm">
            Real-time CCTV monitoring
          </p>

        </div>

        <span className="flex items-center gap-2 text-green-400 text-sm">
          <Radio size={16} />
          LIVE
        </span>

      </div>

      {/* Camera Feed */}

      <div className="aspect-video rounded-xl overflow-hidden border border-slate-700">

        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/21X5lGlDOfg"
          title="Traffic Camera"
          allowFullScreen
        />

      </div>

      {/* Footer */}

      <div className="mt-4 flex justify-between items-center text-sm">

        <div className="flex items-center gap-2 text-gray-400">
          <MapPin size={16} />
          MG Road Junction
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <Clock size={16} />
          Updated Just Now
        </div>

      </div>

      {/* Status */}

      <div className="mt-4 bg-slate-800 rounded-xl p-3 flex justify-between items-center">

        <span className="text-gray-400">
          Camera Status
        </span>

        <span className="flex items-center gap-2 text-green-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          ONLINE
        </span>

      </div>

    </div>
  );
}