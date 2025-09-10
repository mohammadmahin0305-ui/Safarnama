import { useState } from "react";
import { Calendar, Users, User, Share2, Pencil, BookOpenText, Plus, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface Trip {
  id: string;
  title: string;
  location: string;
  image: string;
  date: string;
  type: "Group Trip" | "Solo Trip";
  status: "Upcoming" | "Completed";
  description: string;
  statusColor: string;
}

const trips: Trip[] = [
  {
    id: "1",
    title: "Goa",
    location: "Beaches & Sunsets",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    date: "Jan 2025",
    type: "Group Trip",
    status: "Upcoming",
    description: "A much-awaited trip to the sunny beaches of Goa. Planning to explore the north and south coasts.",
    statusColor: "bg-primary"
  },
  {
    id: "2", 
    title: "Manali",
    location: "Snow-Capped Peaks & Thrills",
    image: "https://images.unsplash.com/photo-1605538883669-825200433431?q=80&w=2070&auto=format&fit=crop",
    date: "Dec 2024",
    type: "Solo Trip",
    status: "Completed",
    description: "An epic solo journey through the snow-covered Himalayas. Conquered treacherous trails, witnessed stunning sunrise over Rohtang Pass, and discovered hidden mountain villages.",
    statusColor: "bg-accent-indigo"
  }
];

interface TripCardsProps {
  onOpenItineraryModal: () => void;
}

const TripCards = ({ onOpenItineraryModal }: TripCardsProps) => {
  return (
    <>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-4 sm:mb-0">
          Your Trips
        </h3>
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2 text-sm font-medium border-2 hover:border-primary/50">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border-primary/20">
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">All Trips</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Upcoming Only</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Completed Only</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Solo Adventures</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Group Travels</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Add Trip Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary flex items-center space-x-2 text-sm font-medium">
                <Plus className="w-4 h-4" />
                <span>Add Trip</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <div>
                  <div className="font-semibold">Plan New Journey</div>
                  <div className="text-xs text-muted-foreground">
                    Create a detailed itinerary from scratch.
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div>
                  <div className="font-semibold">Log a Past Trip</div>
                  <div className="text-xs text-muted-foreground">
                    Add a completed trip to your journal.
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onOpenItineraryModal}>
                <div>
                  <div className="font-semibold">✨ Generate with AI</div>
                  <div className="text-xs text-muted-foreground">
                    Let our AI plan your next adventure.
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Trip Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </>
  );
};

interface TripCardProps {
  trip: Trip;
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-md hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Card Image */}
      <div className="relative">
        <img 
          src={trip.image} 
          alt={`${trip.title} - ${trip.location}`}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Image Overlay Content */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white font-bold text-2xl font-playfair">
            {trip.title}
          </h3>
          <p className="text-primary-light text-sm">
            {trip.location}
          </p>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge className={`${trip.statusColor} text-white text-xs font-semibold`}>
            {trip.status}
          </Badge>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-5">
        {/* Trip Details */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            {trip.date}
          </span>
          <span className="flex items-center">
            {trip.type === "Group Trip" ? (
              <Users className="w-4 h-4 mr-2 text-secondary" />
            ) : (
              <User className="w-4 h-4 mr-2 text-secondary" />
            )}
            {trip.type}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4">
          {trip.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary border-2 border-transparent hover:border-primary/20">
                <Share2 className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border-primary/20">
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Share with Friends</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Copy Link</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Export Itinerary</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {trip.status === "Completed" ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary border-2 border-transparent hover:border-primary/20">
                  <BookOpenText className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border-primary/20">
                <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                  <span className="font-medium">View Journal</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                  <span className="font-medium">Add Entry</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                  <span className="font-medium">Photo Gallery</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary border-2 border-transparent hover:border-primary/20">
                  <Pencil className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border-primary/20">
                <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                  <span className="font-medium">Edit Details</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                  <span className="font-medium">Update Itinerary</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                  <span className="font-medium">Invite Friends</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripCards;