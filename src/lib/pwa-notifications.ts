// Ce fichier gère l'enregistrement du service worker et l'abonnement aux notifications push
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // Optionnel : afficher une notification pour recharger
  },
  onOfflineReady() {
    // Optionnel : notifier que l'app est prête hors-ligne
  },
});

// Exemple d'envoi de notification locale (à appeler côté client)
export function sendLocalNotification(title: string, body: string) {
  if (Notification.permission === 'granted') {
    new Notification(title, { body });
  }
}

// Demander la permission à l'utilisateur au démarrage
export function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
}
