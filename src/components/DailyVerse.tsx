
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DailyVerse = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100/80 to-blue-100/80 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center mb-4">
        <span className="text-purple-600 font-semibold text-lg">Verset du jour ✨</span>
      </div>
      
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
        "Confie-toi en l'Éternel de tout ton cœur, Et ne t'appuie pas sur ta sagesse."
      </blockquote>
      
      <div className="flex items-center justify-between">
        <span className="text-purple-500 font-medium">Proverbes 3:5</span>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <span>📤</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
