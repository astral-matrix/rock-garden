import React from 'react';
import type { ArtistProfile, TopSong } from '../utils/api';

interface TopSongsProps {
  artistData: ArtistProfile;
}

// Generate a unique gradient for each album based on album title
const getAlbumGradient = (title: string, index: number) => {
  const colors = [
    ['#8c1a6a', '#d4497e'], // Pablo Honey
    ['#2b5876', '#4e4376'], // Ok Computer
    ['#614385', '#516395'], // In Rainbows
    ['#42275a', '#734b6d']  // The Bends
  ];
  
  return `linear-gradient(45deg, ${colors[index % colors.length][0]}, ${colors[index % colors.length][1]})`;
};

export default function TopSongs({ artistData }: TopSongsProps) {
  return (
    <div>
      <h2 className="section-title flex items-center">
        Top Songs
        <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </h2>
      
      <div className="songs-list">
        {artistData.top_songs.map((song, index) => (
          <div
            key={`${song.title}-${index}`}
            className="song-item flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="song-image w-12 h-12 flex-shrink-0 mr-4 overflow-hidden rounded">
              {/* Placeholder gradient for song image */}
              <div 
                className="w-full h-full"
                style={{
                  background: getAlbumGradient(song.album, index),
                }}
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="font-medium">{song.title}</h3>
              <p className="text-sm text-gray-500">{song.album} • {song.year}</p>
            </div>
            
            <button className="ml-4 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 