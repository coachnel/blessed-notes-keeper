
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const NotesJournal = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Journal spirituel</h1>
          <Button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            +
          </Button>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/20 text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          📝
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Aucune note pour le moment
        </h3>
        <p className="text-gray-600 mb-6">
          Commencez à écrire vos réflexions spirituelles
        </p>
        <Button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          Créer ma première note
        </Button>
      </div>
    </div>
  );
};
