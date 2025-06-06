
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PrayerReminders = () => {
  const reminders = [
    { time: "08:00", label: "Marquer comme fait" },
    { time: "12:00", label: "Marquer comme fait" },
    { time: "20:00", label: "Marquer comme fait" }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center mb-4">
        <Bell className="w-5 h-5 mr-2 text-purple-600" />
        <span className="text-gray-800 font-semibold text-lg">Rappels de prière</span>
      </div>
      
      <div className="space-y-3">
        {reminders.map((reminder, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <span className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                🕐
              </span>
              <span className="font-medium text-gray-700">{reminder.time}</span>
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              {reminder.label}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
