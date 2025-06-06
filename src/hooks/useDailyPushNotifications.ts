import { useEffect } from "react";
import { requestNotificationPermission, sendLocalNotification } from "@/lib/pwa-notifications";

export function useDailyPushNotifications() {
  useEffect(() => {
    requestNotificationPermission();
    // Exemple : notification quotidienne à 20h
    const now = new Date();
    const millisTill20 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0, 0).getTime() - now.getTime();
    if (millisTill20 > 0) {
      setTimeout(() => {
        sendLocalNotification("Lecture quotidienne", "Vous n'avez pas lu vos notes aujourd'hui !");
      }, millisTill20);
    }
    // TODO : Pour production, utiliser un service push backend ou un worker pour notifications récurrentes
  }, []);
}
