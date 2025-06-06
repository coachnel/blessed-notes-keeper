
export const ProfilePage = () => {
  const stats = [
    { count: 0, label: "Versets lus", icon: "📖" },
    { count: 0, label: "Favoris", icon: "❤️" },
    { count: 1, label: "Jours actifs", icon: "📅" },
    { count: 0, label: "Notes écrites", icon: "📝" }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl text-white">👤</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Utilisateur</h2>
            <p className="text-gray-600">Membre depuis aujourd'hui</p>
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-600">{stat.count}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
        <h3 className="text-lg font-semibold mb-4">⚙️ Notifications</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Verset du jour</div>
              <div className="text-sm text-gray-600">Recevoir le verset quotidien</div>
            </div>
            <div className="w-12 h-6 bg-purple-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Rappels de prière</div>
              <div className="text-sm text-gray-600">Notifications pour vos heures de prière</div>
            </div>
            <div className="w-12 h-6 bg-purple-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Rappels de lecture</div>
              <div className="text-sm text-gray-600">Encouragement à lire la Bible</div>
            </div>
            <div className="w-12 h-6 bg-purple-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
        <h3 className="text-lg font-semibold mb-4">Version de la Bible</h3>
        <div className="text-gray-600">
          <div className="font-medium">Version actuelle: LSG</div>
          <div className="text-sm mt-1">Plus de versions seront bientôt disponibles</div>
        </div>
      </div>
    </div>
  );
};
