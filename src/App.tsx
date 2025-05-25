import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { imaxVenues } from './data';
import { VenueCard } from './components/VenueCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVenues = useMemo(() => {
    if (!searchQuery) return imaxVenues;
    
    const query = searchQuery.toLowerCase();
    return imaxVenues.filter((venue) => 
      venue.City.toLowerCase().includes(query) ||
      venue.Location.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800 py-6">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex items-center justify-center">
            <img src="https://files.catbox.moe/vo8hk0.svg" alt="IMAX" className="h-12" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 xl:px-16 py-8 flex-grow">
        <div className="relative max-w-xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-4 py-3 border border-zinc-800 rounded-lg bg-zinc-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue, index) => (
            <div
              key={venue.Location}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <VenueCard venue={venue} />
            </div>
          ))}
        </div>

        {filteredVenues.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-400 text-lg">No Results : (</p>
          </div>
        )}
      </main>

      <footer className="bg-zinc-900 text-gray-400 py-6">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center space-y-2">
          <p>© 2025 IMAX-Theatres</p>
          <p className="text-sm">
            This is an unofficial fan website. Not affiliated with, endorsed, sponsored, or specifically approved by IMAX Corporation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
