import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface JournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripName?: string;
}

const JournalModal = ({ isOpen, onClose, tripName = "Manali" }: JournalModalProps) => {
  const [journalEntry, setJournalEntry] = useState("");
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleEnhance = async () => {
    if (!journalEntry.trim()) return;

    setIsEnhancing(true);
    
    // Simulate AI enhancement (replace with actual AI API call)
    setTimeout(() => {
      const enhanced = enhanceMockJournal(journalEntry);
      setJournalEntry(enhanced);
      setIsEnhancing(false);
    }, 2000);
  };

  const enhanceMockJournal = (originalEntry: string): string => {
    // Simple enhancement - in real app, this would call an AI service
    const enhanced = originalEntry
      .replace(/good/gi, "absolutely wonderful")
      .replace(/nice/gi, "breathtaking")
      .replace(/cool/gi, "refreshingly crisp")
      .replace(/fun/gi, "exhilarating");
    
    if (enhanced === originalEntry) {
      return `The journey through ${tripName} was truly transformative. ${originalEntry} Every moment was filled with discovery, from the majestic mountain vistas that stretched endlessly before us to the warm hospitality of the local people who made our adventure feel like coming home. The crisp mountain air and stunning landscapes created memories that will last a lifetime.`;
    }
    
    return enhanced;
  };

  const handleClose = () => {
    setJournalEntry("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground">
            My Travel Journal
          </DialogTitle>
          <DialogDescription>
            Reflect on your adventures in {tripName}.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Textarea
            placeholder="Start writing about your trip..."
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            className="min-h-[160px] resize-none"
          />
        </div>

        <div className="flex justify-end items-center space-x-3 mt-6">
          {isEnhancing && (
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm">Enhancing...</span>
            </div>
          )}
          
          <Button variant="outline" onClick={handleClose}>
            Close
          </Button>
          
          <Button 
            onClick={handleEnhance}
            disabled={!journalEntry.trim() || isEnhancing}
            className="bg-primary hover:bg-primary/90"
          >
            ✨ Enhance with AI
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JournalModal;