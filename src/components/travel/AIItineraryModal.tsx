import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AIItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIItineraryModal = ({ isOpen, onClose }: AIItineraryModalProps) => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [interests, setInterests] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState("");

  const handleGenerate = async () => {
    if (!destination || !duration || !interests) {
      setGeneratedItinerary('<p class="text-red-500">Please fill out all fields.</p>');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation (replace with actual AI API call)
    setTimeout(() => {
      const itinerary = generateMockItinerary(destination, parseInt(duration), interests);
      setGeneratedItinerary(itinerary);
      setIsGenerating(false);
    }, 2000);
  };

  const generateMockItinerary = (dest: string, days: number, interests: string): string => {
    return `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-primary">${days}-Day Adventure in ${dest}</h3>
        
        <div class="space-y-3">
          ${Array.from({ length: days }, (_, i) => `
            <div class="border-l-4 border-primary pl-4">
              <h4 class="font-semibold text-lg">Day ${i + 1}</h4>
              <ul class="text-sm text-muted-foreground space-y-1 mt-2">
                <li>• Morning: Explore local ${interests.split(',')[0]?.trim() || 'attractions'}</li>
                <li>• Afternoon: Visit cultural sites and ${interests.split(',')[1]?.trim() || 'museums'}</li>
                <li>• Evening: Experience local cuisine and ${interests.split(',')[2]?.trim() || 'nightlife'}</li>
              </ul>
            </div>
          `).join('')}
        </div>
        
        <div class="mt-6 p-4 bg-primary/10 rounded-lg">
          <h4 class="font-semibold text-primary">Travel Tips</h4>
          <ul class="text-sm text-muted-foreground mt-2 space-y-1">
            <li>• Best time to visit: Spring and Fall</li>
            <li>• Pack comfortable walking shoes</li>
            <li>• Don't forget your camera!</li>
            <li>• Try local street food for authentic flavors</li>
          </ul>
        </div>
      </div>
    `;
  };

  const handleClose = () => {
    setDestination("");
    setDuration("");
    setInterests("");
    setGeneratedItinerary("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground">
            ✨ AI Itinerary Generator
          </DialogTitle>
          <DialogDescription>
            Describe your dream trip and let AI handle the planning.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="destination" className="text-sm font-medium text-foreground">
              Destination
            </Label>
            <Input
              id="destination"
              type="text"
              placeholder="e.g., Kyoto, Japan"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="duration" className="text-sm font-medium text-foreground">
              Duration (in days)
            </Label>
            <Input
              id="duration"
              type="number"
              placeholder="e.g., 7"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="interests" className="text-sm font-medium text-foreground">
              Interests
            </Label>
            <Input
              id="interests"
              type="text"
              placeholder="e.g., food, history, temples, nature"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        {generatedItinerary && (
          <ScrollArea className="max-h-64 mt-4 p-4 bg-muted/30 rounded-lg">
            <div dangerouslySetInnerHTML={{ __html: generatedItinerary }} />
          </ScrollArea>
        )}

        <div className="flex justify-end items-center space-x-3 mt-6">
          {isGenerating && (
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm">Generating...</span>
            </div>
          )}
          
          <Button variant="outline" onClick={handleClose}>
            Close
          </Button>
          
          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating}
            className="bg-primary hover:bg-primary/90"
          >
            Generate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIItineraryModal;