
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Book, Search } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

export const BibleReader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  
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

  const filteredVerses = verses.filter(
    verse =>
      verse.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verse.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleFavorite = async (verse: any) => {
    if (isFavorite(verse.reference)) {
      // Find the favorite and remove it
      // Note: This would need the favorite ID in a real implementation
      console.log('Remove from favorites:', verse.reference);
    } else {
      await addToFavorites(verse.reference, verse.text);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center mb-4">
          <Book className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">Lecture de la Bible</h1>
        </div>
        
        <div className="flex space-x-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Rechercher un verset..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full bg-white/50"
            />
          </div>
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
        {filteredVerses.map((verse, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
            <div className="text-purple-600 font-medium mb-2">{verse.reference}</div>
            <p className="text-gray-700 leading-relaxed mb-4 italic">"{verse.text}"</p>
            <div className="flex justify-end">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={() => handleToggleFavorite(verse)}
              >
                <Heart 
                  className={`w-5 h-5 ${
                    isFavorite(verse.reference) 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-500'
                  }`} 
                />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
