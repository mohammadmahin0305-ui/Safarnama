import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative h-[60vh] sm:h-[80vh] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `var(--gradient-overlay), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')`
        }}
      />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 animate-fade-in">
            Welcome, Explorer 👋
          </h2>
          <p className="text-lg text-primary-light mb-8 animate-fade-in">
            Where will your story take you next?
          </p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative max-w-lg mx-auto animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for destinations, routes, or journals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-sm text-foreground border-0 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </div>
  );
};

export default Hero;