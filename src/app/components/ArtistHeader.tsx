import React from 'react';
import Image from 'next/image';
import type { ArtistProfile } from '../utils/api';

interface ArtistHeaderProps {
  artistData: ArtistProfile;
}

export default function ArtistHeader({ artistData }: ArtistHeaderProps) {
  // Use a gradient background as a placeholder
  return (
    <div className="artist-header flex items-center p-6">
      <div className="relative h-48 w-48 mr-6">
        {/* Display a gradient background as a placeholder */}
        <div 
          className="w-full h-full rounded-md"
          style={{
            background: 'linear-gradient(45deg, #222, #444)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}
        />
      </div>
      
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
  );
} 