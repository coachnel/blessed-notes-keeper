import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export interface PrayerReminder {
  id: string;
  user_id: string;
  time: string;
  label: string;
  done: boolean;
  created_at: string;
}

export const usePrayerReminders = () => {
  const { user } = useAuth();
  const [reminders, setReminders] = useState<PrayerReminder[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchReminders = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('prayer_reminders')
        .select('*')
        .eq('user_id', user.id)
        .order('time', { ascending: true });
      if (error) throw error;
      setReminders(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement des rappels de prière', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsDone = async (id: string) => {
    if (!user) return;
    try {
      const { error } = await supabase
        .from('prayer_reminders')
        .update({ done: true })
        .eq('id', id)
        .eq('user_id', user.id);
      if (error) throw error;
      setReminders(prev => prev.map(r => r.id === id ? { ...r, done: true } : r));
    } catch (error) {
      console.error('Erreur lors de la validation du rappel', error);
    }
  };

  const createReminder = async (time: string, label: string) => {
    if (!user) return;
    try {
      const { data, error } = await supabase
        .from('prayer_reminders')
        .insert({ user_id: user.id, time, label, done: false })
        .select()
        .single();
      if (error) throw error;
      setReminders(prev => [...prev, data]);
    } catch (error) {
      console.error('Erreur lors de la création du rappel', error);
    }
  };

  useEffect(() => {
    if (user) fetchReminders();
    else setReminders([]);
  }, [user]);

  return { reminders, loading, fetchReminders, markAsDone, createReminder };
};
