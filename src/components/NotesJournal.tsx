
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, FileText, Edit3 } from "lucide-react";
import { useNotes } from "@/hooks/useNotes";
import { NoteEditor } from "./NoteEditor";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const NotesJournal = () => {
  const { notes, loading, createNote, updateNote, deleteNote } = useNotes();
  const [selectedNote, setSelectedNote] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleCreateNote = () => {
    setSelectedNote(null);
    setIsEditing(true);
  };

  const handleEditNote = (note: any) => {
    setSelectedNote(note);
    setIsEditing(true);
  };

  const handleSaveNote = async (title: string, content: string) => {
    if (selectedNote?.id) {
      await updateNote(selectedNote.id, title, content);
    } else {
      await createNote(title, content);
    }
    setIsEditing(false);
    setSelectedNote(null);
  };

  const handleBack = () => {
    setIsEditing(false);
    setSelectedNote(null);
  };

  if (isEditing) {
    return (
      <NoteEditor
        note={selectedNote}
        onSave={handleSaveNote}
        onDelete={selectedNote?.id ? deleteNote : undefined}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Journal spirituel</h1>
          <Button 
            onClick={handleCreateNote}
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            size="icon"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/20 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-gray-600">Chargement de vos notes...</p>
        </div>
      ) : notes.length === 0 ? (
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
          <Button 
            onClick={handleCreateNote}
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Créer ma première note
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {notes.map((note) => (
            <Card 
              key={note.id} 
              className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleEditNote(note)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
                      {note.title}
                    </h3>
                    {note.content && (
                      <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                        {note.content}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">
                      {format(new Date(note.updated_at), 'dd MMMM yyyy à HH:mm', { locale: fr })}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full shrink-0 ml-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditNote(note);
                    }}
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
