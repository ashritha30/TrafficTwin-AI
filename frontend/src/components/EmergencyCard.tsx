const vehicles = [
  "🚑 Ambulance - ETA 4 min",
  "🚒 Fire Truck - ETA 8 min",
  "🚓 Police - ETA 3 min",
];

export default function EmergencyCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-5">
        🚑 Emergency Vehicles
      </h2>

      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle}
            className="bg-slate-800 rounded-lg p-4"
          >
            {vehicle}
          </div>
        ))}
      </div>
    </div>
  );
}