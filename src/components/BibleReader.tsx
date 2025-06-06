import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Book, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { LSG_BIBLE } from "@/lib/lsg-bible";

export const BibleReader = () => {
  const { addToFavorites, removeFromFavorites, isFavorite, favorites } = useFavorites();
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Liste des livres
  const books = Object.keys(LSG_BIBLE);
  const chapters = selectedBook ? Object.keys(LSG_BIBLE[selectedBook]) : [];
  const verses = selectedBook && selectedChapter ? LSG_BIBLE[selectedBook][selectedChapter] : null;

  // Navigation entre chapitres
  const goToPrevChapter = () => {
    if (!selectedBook || !selectedChapter) return;
    const idx = chapters.indexOf(selectedChapter);
    if (idx > 0) setSelectedChapter(chapters[idx - 1]);
  };
  const goToNextChapter = () => {
    if (!selectedBook || !selectedChapter) return;
    const idx = chapters.indexOf(selectedChapter);
    if (idx < chapters.length - 1) setSelectedChapter(chapters[idx + 1]);
  };

  // Favoris
  const handleToggleFavorite = async (verseNum: string, verseText: string) => {
    const ref = `${selectedBook} ${selectedChapter}:${verseNum}`;
    if (isFavorite(ref)) {
      const favorite = favorites.find(fav => fav.verse_reference === ref);
      if (favorite) await removeFromFavorites(favorite.id);
    } else {
      await addToFavorites(ref, verseText);
    }
  };

  // Recherche sur les versets du chapitre sélectionné
  let displayedVerses: [string, string][] = [];
  if (verses) {
    displayedVerses = Object.entries(verses)
      .filter(([num, text]) =>
        `${selectedBook} ${selectedChapter}:${num}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(text).toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(([num, text]) => [num, String(text)]);
  }

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
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full bg-white/50"
            />
          </div>
        </div>
        {!selectedBook ? (
          <select
            className="w-full p-3 rounded-lg bg-white/50 border border-gray-200"
            onChange={e => setSelectedBook(e.target.value)}
            value={selectedBook || ''}
          >
            <option value="">Choisir un livre...</option>
            {books.map(book => (
              <option key={book} value={book}>{book}</option>
            ))}
          </select>
        ) : !selectedChapter ? (
          <div className="flex flex-wrap gap-2">
            {chapters.map(chap => (
              <Button key={chap} onClick={() => setSelectedChapter(chap)}>{chap}</Button>
            ))}
            <Button variant="ghost" onClick={() => setSelectedBook(null)}><ChevronLeft /> Livres</Button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-2">
              <Button variant="ghost" onClick={() => setSelectedChapter(null)}><ChevronLeft /> Chapitres</Button>
              <div className="flex gap-2">
                <Button variant="ghost" onClick={goToPrevChapter} disabled={chapters.indexOf(selectedChapter) === 0}><ChevronLeft /></Button>
                <span>Chapitre {selectedChapter}</span>
                <Button variant="ghost" onClick={goToNextChapter} disabled={chapters.indexOf(selectedChapter) === chapters.length - 1}><ChevronRight /></Button>
              </div>
            </div>
            <div className="space-y-2">
              {displayedVerses.map(([num, text]) => (
                <div key={num} className="flex items-center justify-between border-b py-2">
                  <div>
                    <span className="text-purple-600 font-medium">{num}</span>
                    <span className="ml-2 text-gray-700 italic">{String(text)}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => handleToggleFavorite(num, text as string)}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite(`${selectedBook} ${selectedChapter}:${num}`) ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
