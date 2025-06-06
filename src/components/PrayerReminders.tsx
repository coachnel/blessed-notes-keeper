import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePrayerReminders } from "@/hooks/usePrayerReminders";
import { useState } from "react";

export const PrayerReminders = () => {
  const { reminders, markAsDone, createReminder } = usePrayerReminders();
  const [newTime, setNewTime] = useState("");
  const [newLabel, setNewLabel] = useState("");

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center mb-4">
        <Bell className="w-5 h-5 mr-2 text-purple-600" />
        <span className="text-gray-800 font-semibold text-lg">Rappels de prière</span>
      </div>
      <form
        className="flex gap-2 mb-4"
        onSubmit={e => {
          e.preventDefault();
          if (newTime && newLabel) {
            createReminder(newTime, newLabel);
            setNewTime("");
            setNewLabel("");
          }
        }}
      >
        <input
          type="time"
          value={newTime}
          onChange={e => setNewTime(e.target.value)}
          className="rounded px-2 py-1 border"
          required
        />
        <input
          type="text"
          value={newLabel}
          onChange={e => setNewLabel(e.target.value)}
          placeholder="Nom du rappel"
          className="rounded px-2 py-1 border"
          required
        />
        <Button type="submit" size="sm">Ajouter</Button>
      </form>
      <div className="space-y-3">
        {reminders.map((reminder) => (
          <div key={reminder.id} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <span className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                🕐
              </span>
              <span className="font-medium text-gray-700">{reminder.time} - {reminder.label}</span>
            </div>
            <Button
              variant={reminder.done ? "secondary" : "outline"}
              size="sm"
              className="rounded-full"
              disabled={reminder.done}
              onClick={() => markAsDone(reminder.id)}
            >
              {reminder.done ? "Fait" : "Marquer comme fait"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
