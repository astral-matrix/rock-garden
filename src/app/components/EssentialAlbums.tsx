import React from 'react';
import type { ArtistProfile } from '../utils/api';

interface EssentialAlbumsProps {
  artistData: ArtistProfile;
}

// Generate a unique gradient for each album based on album title
const getAlbumGradient = (title: string, index: number) => {
  const colors = [
    ['#614385', '#516395'], // In Rainbows
    ['#2b5876', '#4e4376'], // Ok Computer
    ['#42275a', '#734b6d']  // The Bends
  ];
  
  return `linear-gradient(45deg, ${colors[index % colors.length][0]}, ${colors[index % colors.length][1]})`;
};

export default function EssentialAlbums({ artistData }: EssentialAlbumsProps) {
  return (
    <div>
      <h2 className="section-title">Essential Albums</h2>
      
      <div className="albums-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {artistData.essential_albums.map((album, index) => (
          <div key={`${album.title}-${index}`} className="album-item p-3">
            <div className="album-image aspect-square mb-3 overflow-hidden rounded-md shadow-lg">
              {/* Placeholder gradient for album image */}
              <div 
                className="w-full h-full"
                style={{
                  background: getAlbumGradient(album.title, index),
                }}
              />
            </div>
            
            <h3 className="font-medium">{album.title}</h3>
            <p className="text-sm text-gray-500">{album.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 