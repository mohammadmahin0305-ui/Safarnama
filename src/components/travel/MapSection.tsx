import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
const customMarkerIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface TravelLocation {
  name: string;
  coordinates: [number, number];
  description: string;
  type: 'visited' | 'planned';
}

const locations: TravelLocation[] = [
  {
    name: 'New Delhi',
    coordinates: [28.6139, 77.2090],
    description: 'The heart of India.',
    type: 'visited'
  },
  {
    name: 'Mumbai',
    coordinates: [19.0760, 72.8777],
    description: 'The city of dreams.',
    type: 'visited'
  },
  {
    name: 'Goa',
    coordinates: [15.2993, 74.1240],
    description: 'Upcoming beach adventure.',
    type: 'planned'
  },
  {
    name: 'Manali',
    coordinates: [32.2396, 77.1887],
    description: 'Mountain adventure completed.',
    type: 'visited'
  }
];

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([22.9734, 78.6569], 5);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers for travel locations
    locations.forEach((location) => {
      const markerColor = location.type === 'visited' ? '#059669' : '#ea580c'; // green for visited, orange for planned
      
      const marker = L.marker(location.coordinates, { icon: customMarkerIcon })
        .addTo(map)
        .bindPopup(`
          <div class="p-2">
            <div class="font-semibold text-lg">${location.name}</div>
            <div class="text-sm text-gray-600 mb-2">${location.description}</div>
            <div class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium" style="background-color: ${markerColor}20; color: ${markerColor}">
              ${location.type === 'visited' ? '✓ Visited' : '📍 Planned'}
            </div>
          </div>
        `);

      // Custom marker styling based on type
      if (location.type === 'planned') {
        marker.getElement()?.style.setProperty('filter', 'hue-rotate(30deg)');
      }
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-foreground mb-4">
        Explore Your World
      </h3>
      <div 
        ref={mapRef} 
        className="w-full h-96 rounded-2xl shadow-lg border border-border overflow-hidden"
        style={{ minHeight: '400px' }}
      />
      
      {/* Map Legend */}
      <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          <span className="text-muted-foreground">Visited</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
          <span className="text-muted-foreground">Planned</span>
        </div>
      </div>
    </div>
  );
};

export default MapSection;