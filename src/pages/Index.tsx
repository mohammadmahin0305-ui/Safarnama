import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/travel/Header";
import Hero from "@/components/travel/Hero";
import StatsCards from "@/components/travel/StatsCards";
import TripCards from "@/components/travel/TripCards";
import MapSection from "@/components/travel/MapSection";
import AIChatbot from "@/components/travel/AIChatbot";
import AIItineraryModal from "@/components/travel/AIItineraryModal";
import JournalModal from "@/components/travel/JournalModal";

const Index = () => {
  const [isItineraryModalOpen, setIsItineraryModalOpen] = useState(false);
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Safarnama - Your AI Travel Companion</title>
        <meta name="description" content="Plan, track, and journal your travels with AI-powered assistance. Discover destinations, create itineraries, and share your adventures." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Header with Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-5xl -mt-20 relative z-10">
        {/* Statistics Cards */}
        <StatsCards />

        {/* Trip Management Section */}
        <TripCards onOpenItineraryModal={() => setIsItineraryModalOpen(true)} />

        {/* Interactive Map */}
        <MapSection />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t mt-12 bg-card">
        <p className="text-muted-foreground text-sm">
          &copy; 2025 Safarnama. Happy travels!
        </p>
      </footer>

      {/* AI-Powered Modals and Components */}
      <AIChatbot 
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
      />
      
      <AIItineraryModal 
        isOpen={isItineraryModalOpen}
        onClose={() => setIsItineraryModalOpen(false)}
      />
      
      <JournalModal 
        isOpen={isJournalModalOpen}
        onClose={() => setIsJournalModalOpen(false)}
      />
    </div>
  );
};

export default Index;