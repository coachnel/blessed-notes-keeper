
export const DailyStats = () => {
  const stats = [
    { count: 0, label: "Versets", color: "text-purple-600" },
    { count: 0, label: "Favoris", color: "text-green-600" },
    { count: 0, label: "Notes", color: "text-blue-600" }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center mb-4">
        <span className="text-gray-800 font-semibold text-lg">✨ Statistiques du jour</span>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-3xl font-bold ${stat.color}`}>
              {stat.count}
            </div>
            <div className="text-gray-600 text-sm mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
