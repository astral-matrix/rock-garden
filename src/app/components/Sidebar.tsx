import React from 'react';
import type { ArtistProfile } from '../utils/api';

// Function to format number with commas
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

interface SidebarProps {
  artistData: ArtistProfile;
}

export default function Sidebar({ artistData }: SidebarProps) {
  return (
    <div className="sidebar">
      <h1 className="text-3xl font-bold mb-8">{artistData.artist_name}</h1>
      
      <div className="mb-8">
        <h2 className="text-sm mb-1">Location</h2>
        <p>{artistData.location}</p>
      </div>
      
      <div className="mb-8">
        <p className="stat-value">{formatNumber(artistData.follower_count)}</p>
        <p className="stat-label">Followers</p>
      </div>
      
      <div>
        <p className="stat-value">{formatNumber(artistData.monthly_listeners)}</p>
        <p className="stat-label">Monthly Listeners</p>
      </div>
    </div>
  );
} 