
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

interface Favorite {
  id: string;
  verse_reference: string;
  verse_text: string;
  created_at: string;
}

export const useFavorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFavorites = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFavorites(data || []);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = async (verse_reference: string, verse_text: string) => {
    if (!user) return false;

    try {
      const { data, error } = await supabase
        .from('favorites')
        .insert({
          user_id: user.id,
          verse_reference,
          verse_text,
        })
        .select()
        .single();

      if (error) throw error;

      setFavorites(prev => [data, ...prev]);
      toast({
        title: "Ajouté aux favoris",
        description: "Le verset a été ajouté à vos favoris",
      });

      return true;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter aux favoris",
        variant: "destructive",
      });
      return false;
    }
  };

  const removeFromFavorites = async (id: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      setFavorites(prev => prev.filter(fav => fav.id !== id));
      toast({
        title: "Retiré des favoris",
        description: "Le verset a été retiré de vos favoris",
      });

      return true;
    } catch (error) {
      console.error('Error removing from favorites:', error);
      toast({
        title: "Erreur",
        description: "Impossible de retirer des favoris",
        variant: "destructive",
      });
      return false;
    }
  };

  const isFavorite = (verse_reference: string) => {
    return favorites.some(fav => fav.verse_reference === verse_reference);
  };

  useEffect(() => {
    if (user) {
      fetchFavorites();
    } else {
      setFavorites([]);
    }
  }, [user]);

  return {
    favorites,
    loading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    refetch: fetchFavorites,
  };
};
