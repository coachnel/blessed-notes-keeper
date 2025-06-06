
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const BibleReader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const verses = [
    {
      reference: "Jean 3:16",
      text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."
    },
    {
      reference: "Philippiens 4:13",
      text: "Je puis tout par celui qui me fortifie."
    },
    {
      reference: "Psaumes 23:1",
      text: "L'Éternel est mon berger: je ne manquerai de rien."
    },
    {
      reference: "Proverbes 3:5",
      text: "Confie-toi en l'Éternel de tout ton cœur, Et ne t'appuie pas sur ta sagesse."
    },
    {
      reference: "Matthieu 6:33",
      text: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus."
    },
    {
      reference: "Romains 8:28",
      text: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein."
    },
    {
      reference: "Ésaïe 40:31",
      text: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles; Ils courent, et ne se lassent point, Ils marchent, et ne se fatiguent point."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center mb-4">
          <Book className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">Lecture de la Bible</h1>
        </div>
        
        <div className="flex space-x-2 mb-4">
          <Input
            placeholder="Rechercher un verset..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 rounded-full bg-white/50"
          />
          <Button className="rounded-full bg-purple-600 hover:bg-purple-700">
            🔍
          </Button>
        </div>
        
        <select className="w-full p-3 rounded-lg bg-white/50 border border-gray-200">
          <option>Choisir un livre...</option>
          <option>Genèse</option>
          <option>Exode</option>
          <option>Matthieu</option>
          <option>Jean</option>
          <option>Romains</option>
        </select>
      </div>

      <div className="space-y-4">
        {verses.map((verse, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
            <div className="text-purple-600 font-medium mb-2">{verse.reference}</div>
            <p className="text-gray-700 leading-relaxed mb-4 italic">"{verse.text}"</p>
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
