
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';

interface Note {
  id?: string;
  title: string;
  content: string | null;
}

interface NoteEditorProps {
  note?: Note;
  onSave: (title: string, content: string) => Promise<any>;
  onDelete?: (id: string) => Promise<boolean>;
  onBack: () => void;
}

export const NoteEditor = ({ note, onSave, onDelete, onBack }: NoteEditorProps) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setTitle(note?.title || '');
    setContent(note?.content || '');
  }, [note]);

  const handleSave = async () => {
    if (!title.trim()) return;
    
    setIsSaving(true);
    await onSave(title, content);
    setIsSaving(false);
  };

  const handleDelete = async () => {
    if (!note?.id || !onDelete) return;
    
    if (confirm('Êtes-vous sûr de vouloir supprimer cette note ?')) {
      const success = await onDelete(note.id);
      if (success) {
        onBack();
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <CardTitle className="text-lg">
              {note?.id ? 'Modifier la note' : 'Nouvelle note'}
            </CardTitle>
            <div className="flex space-x-2">
              {note?.id && onDelete && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDelete}
                  className="rounded-full text-red-500 hover:text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              )}
              <Button
                onClick={handleSave}
                disabled={!title.trim() || isSaving}
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                size="icon"
              >
                <Save className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Titre de votre note..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg font-medium bg-white/50 border-none"
          />
          <Textarea
            placeholder="Commencez à écrire vos réflexions spirituelles..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[400px] bg-white/50 border-none resize-none"
          />
        </CardContent>
      </Card>
    </div>
  );
};
