const violations = [
  {
    vehicle: "KA01AB1234",
    type: "Red Light",
    location: "MG Road",
    time: "2 mins ago",
  },
  {
    vehicle: "KA05XY7890",
    type: "Overspeed",
    location: "Outer Ring Road",
    time: "5 mins ago",
  },
  {
    vehicle: "KA09PQ4567",
    type: "Wrong Lane",
    location: "Silk Board",
    time: "10 mins ago",
  },
];

export default function ViolationCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-5">
        🚨 Recent Violations
      </h2>

      <div className="space-y-4">
        {violations.map((item) => (
          <div
            key={item.vehicle}
            className="bg-slate-800 rounded-lg p-4"
          >
            <h3 className="font-semibold text-red-400">
              {item.type}
            </h3>

            <p>{item.vehicle}</p>

            <p className="text-gray-400 text-sm">
              {item.location}
            </p>

            <p className="text-xs text-gray-500">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}