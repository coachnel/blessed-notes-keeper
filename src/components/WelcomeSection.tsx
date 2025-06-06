
import { Heart } from "lucide-react";

export const WelcomeSection = () => {
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
      <div className="text-center">
        <div className="text-2xl mb-2">☀️ Bonjour, Utilisateur !</div>
        <p className="text-gray-600 mb-4">
          Que cette journée soit remplie de la paix de Dieu 🕊️
        </p>
        <div className="flex items-center justify-center text-purple-600 font-medium">
          <Heart className="w-5 h-5 mr-2 text-pink-500" />
          Jour 1 de votre parcours spirituel
        </div>
      </div>
    </div>
  );
};
