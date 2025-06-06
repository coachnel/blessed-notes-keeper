
import { Button } from "@/components/ui/button";
import { Book, Heart, Notes } from "lucide-react";

interface BottomNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation = ({ currentTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    { id: "home", label: "Accueil", icon: "📱" },
    { id: "bible", label: "Bible", icon: <Book className="w-5 h-5" /> },
    { id: "notes", label: "Notes", icon: <Notes className="w-5 h-5" /> },
    { id: "profile", label: "Profil", icon: "👤" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-white/20 px-4 py-2">
      <div className="flex justify-around max-w-md mx-auto">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all ${
              currentTab === tab.id ? "bg-purple-100 text-purple-600" : "text-gray-600"
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center mb-1">
              {typeof tab.icon === "string" ? tab.icon : tab.icon}
            </div>
            <span className="text-xs">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
