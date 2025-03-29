import React from 'react';
import type { ArtistProfile } from '../utils/api';

interface ArtistHeaderProps {
  artistData: ArtistProfile;
}

export default function ArtistHeader({ artistData }: ArtistHeaderProps) {
  return (
    <div className="artist-header">
      {/* Full-width image */}
      <img 
        src={artistData.bio_image || '/images/placeholder.jpg'} 
        alt={`${artistData.artist_name} profile`}
        className="w-full h-auto"
      />
      
      <div className="p-6 flex items-center">
        <div>
          <div className="flex items-center mb-2">
            <button className="bg-red-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center mr-3">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <h1 className="text-3xl font-bold">{artistData.artist_name}</h1>
          </div>
          
          <div className="flex items-center space-x-4 mt-4">
            <button className="bg-transparent border border-gray-400 rounded-full p-1 w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </button>
            <button className="bg-transparent border border-gray-400 rounded-full p-1 w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 