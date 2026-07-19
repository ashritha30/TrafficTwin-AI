import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { getHotspots } from "../services/mapService";
import { analyzeHotspot } from "../services/hotspotAIService";
import { getDigitalTwin } from "../services/digitalTwinService";
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type Hotspot = {
  name: string;
  lat: number;
  lng: number;
  level: string;
  description: string;
};

export default function MapCard() {
  const [hotspots, setHotspots] = useState<Hotspot[]>([]);
  const [analysis, setAnalysis] = useState("");
const [selectedSpot, setSelectedSpot] = useState("");
const [digitalTwin, setDigitalTwin] = useState<any>(null);
 useEffect(() => {
  const loadHotspots = async () => {
    try {
      const data = await getHotspots();
      setHotspots(data.hotspots);
    } catch (err) {
      console.error(err);
    }
  };

  loadHotspots();

  const interval = setInterval(loadHotspots, 15000);

  return () => clearInterval(interval);
}, []);
const handleMarkerClick = async (name: string) => {
  try {
    setSelectedSpot(name);

    const twin = await getDigitalTwin(name);
    setDigitalTwin(twin);

    const ai = await analyzeHotspot(name);
    setAnalysis(ai.analysis);

  } catch (error) {
    console.error(error);
  }
};
  return (
   <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6">

  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">

    <div>

      <h2 className="text-2xl font-bold text-white">
        🗺 Live Traffic Monitoring
      </h2>

      <p className="text-gray-400 mt-1">
        Real-time congestion and hotspot tracking
      </p>

    </div>

    <div className="flex items-center gap-2 mt-4 lg:mt-0">

      <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

      <span className="text-green-400 font-semibold">
        LIVE
      </span>

    </div>

  </div>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

  <div className="bg-slate-800 rounded-xl p-4 text-center">
    <p className="text-gray-400 text-sm">Hotspots</p>
    <h3 className="text-2xl font-bold text-red-400">
      {hotspots.length}
    </h3>
  </div>

  <div className="bg-slate-800 rounded-xl p-4 text-center">
    <p className="text-gray-400 text-sm">Cameras</p>
    <h3 className="text-2xl font-bold text-cyan-400">
      18
    </h3>
  </div>

  <div className="bg-slate-800 rounded-xl p-4 text-center">
    <p className="text-gray-400 text-sm">Incidents</p>
    <h3 className="text-2xl font-bold text-yellow-400">
      2
    </h3>
  </div>

  <div className="bg-slate-800 rounded-xl p-4 text-center">
    <p className="text-gray-400 text-sm">Road Status</p>
    <h3 className="text-2xl font-bold text-green-400">
      Stable
    </h3>
  </div>

</div>
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        style={{
  height: "500px",
  width: "100%",
  borderRadius: "16px",
}}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hotspots.map((spot, index) => (
          <Marker
  key={index}
  position={[spot.lat, spot.lng]}
  eventHandlers={{
    click: () => handleMarkerClick(spot.name),
  }}
>
         <Popup>
 <h3 className="text-lg font-bold">
  {spot.name}
</h3>

  <hr />

  {selectedSpot === spot.name && digitalTwin && (
    <>
      <p>🚗 Vehicles: {digitalTwin.vehicles}</p>

      <p>🔴 Traffic: {digitalTwin.traffic}</p>

      <p>📈 Prediction: {digitalTwin.prediction}</p>

      <p>🌧 Weather: {digitalTwin.weather}</p>

      <p>⚠ Risk: {digitalTwin.risk}%</p>

      <p>🚑 {digitalTwin.emergency}</p>

      <p className="mt-2">
        <strong>Recommendation</strong>
      </p>

      <p>{digitalTwin.recommendation}</p>

      <hr />

      <strong>🤖 AI Analysis</strong>

      <p className="whitespace-pre-wrap">
        {analysis}
      </p>
    </>
  )}

</Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="flex flex-wrap items-center gap-6 mt-5 border-t border-slate-800 pt-4 text-sm">

  <div className="flex items-center gap-2">
    <span className="w-3 h-3 rounded-full bg-red-500"></span>
    Heavy Traffic
  </div>

  <div className="flex items-center gap-2">
    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
    Moderate Traffic
  </div>

  <div className="flex items-center gap-2">
    <span className="w-3 h-3 rounded-full bg-green-500"></span>
    Smooth Flow
  </div>

</div>
    </div>
  );
}