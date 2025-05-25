import React from 'react';
import { IMAXVenue } from '../types';
import { Film, MapPin, Maximize2, Users, Calendar, Volume2, Youtube } from 'lucide-react';

interface VenueCardProps {
  venue: IMAXVenue;
}

export const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-900 text-green-100';
      case 'Closed':
        return 'bg-red-900 text-red-100';
      case 'Under Construction':
        return 'bg-yellow-900 text-yellow-100';
      case 'Approvals Pending':
        return 'bg-orange-900 text-orange-100';
      default:
        return 'bg-blue-900 text-blue-100';
    }
  };

  const getTheaterLogo = (location: string) => {
    if (location.startsWith('INOX')) {
      return 'https://files.catbox.moe/ppm921.png';
    } else if (location.startsWith('PVR')) {
      return 'https://files.catbox.moe/zshhnm.png';
    } else if (location.startsWith('Miraj')) {
      return 'https://files.catbox.moe/naly9n.png';
    }
    return '';
  };

  const logo = getTheaterLogo(venue.Location);

  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-2">
        {logo && (
          <img 
            src={logo} 
            alt="Theater Logo" 
            className="w-8 h-8 rounded-full object-cover bg-white"
          />
        )}
        <h3 className="text-xl font-bold text-white">{venue.Location}</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-400">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{venue.City}</span>
        </div>
        
        <div className="flex items-center text-gray-400">
          <Film className="w-5 h-5 mr-2" />
          <span>{venue.Projection}</span>
        </div>
        
        <div className="flex items-center text-gray-400">
          <Maximize2 className="w-5 h-5 mr-2" />
          <span>{venue.Width}' × {venue.Height}' ({venue["Aspect Ratio"]})</span>
        </div>
        
        <div className="flex items-center text-gray-400">
          <Users className="w-5 h-5 mr-2" />
          <span>{venue.Seats} seats</span>
        </div>
        
        <div className="flex items-center text-gray-400">
          <Calendar className="w-5 h-5 mr-2" />
          <span>Opened: {venue.Year}</span>
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-2 flex-wrap">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(venue.Status)}`}>
          {venue.Status}
        </span>

        {venue.Audio === '12 CH' && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-100">
            <Volume2 className="w-4 h-4 mr-1" />
            12CH
          </span>
        )}
        
        {venue.Video && (
          <a
            href={venue.Video}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-900 text-red-100 hover:bg-red-800 transition-colors hover:scale-110 transform duration-200 ml-auto"
          >
            <Youtube className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};