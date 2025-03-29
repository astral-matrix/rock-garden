import React from 'react';
import type { ArtistProfile } from '../utils/api';

interface ArtistBioProps {
  artistData: ArtistProfile;
}

export default function ArtistBio({ artistData }: ArtistBioProps) {
  return (
    <div className="artist-bio">
      <p>{artistData.bio}</p>
    </div>
  );
} 