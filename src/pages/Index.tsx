
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Book, Heart, Notes } from "lucide-react";
import { WelcomeSection } from "@/components/WelcomeSection";
import { DailyVerse } from "@/components/DailyVerse";
import { PrayerReminders } from "@/components/PrayerReminders";
import { DailyStats } from "@/components/DailyStats";
import { BottomNavigation } from "@/components/BottomNavigation";
import { BibleReader } from "@/components/BibleReader";
import { NotesJournal } from "@/components/NotesJournal";
import { ProfilePage } from "@/components/ProfilePage";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const renderCurrentPage = () => {
    switch (currentTab) {
      case "bible":
        return <BibleReader />;
      case "notes":
        return <NotesJournal />;
      case "profile":
        return <ProfilePage />;
      default:
        return (
          <div className="space-y-6">
            <WelcomeSection />
            <DailyVerse />
            <PrayerReminders />
            <DailyStats />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pb-20">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {renderCurrentPage()}
      </div>
      <BottomNavigation currentTab={currentTab} onTabChange={setCurrentTab} />
    </div>
  );
};

export default Index;
