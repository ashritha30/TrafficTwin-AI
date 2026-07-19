export default function WeatherCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-5">
        🌦 Weather
      </h2>

      <div className="text-center">
        <h1 className="text-6xl">🌧</h1>

        <p className="text-4xl mt-4">
          24°C
        </p>

        <p className="text-gray-400">
          Moderate Rain
        </p>

        <div className="mt-6 text-green-400">
          Low Traffic Risk
        </div>
      </div>
    </div>
  );
}