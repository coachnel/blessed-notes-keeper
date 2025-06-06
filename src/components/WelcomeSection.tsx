
import { Heart } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const WelcomeSection = () => {
  const { user } = useAuth();
  
  const getUserName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.split(' ')[0];
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return "Utilisateur";
  };

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
      <div className="text-center">
        <div className="text-2xl mb-2">☀️ Bonjour, {getUserName()} !</div>
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
