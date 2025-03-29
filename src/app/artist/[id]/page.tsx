import React from 'react';
import Sidebar from '../../components/Sidebar';
import ArtistHeader from '../../components/ArtistHeader';
import ArtistBio from '../../components/ArtistBio';
import TopSongs from '../../components/TopSongs';
import EssentialAlbums from '../../components/EssentialAlbums';
import { ArtistProfile } from '../../utils/api';

interface ArtistPageProps {
  params: {
    id: string;
  };
}

// Get the hardcoded artist data directly in the Server Component
async function getArtistData(id: string): Promise<ArtistProfile> {
  // In a real app, this would fetch from a database using the artist ID
  return {
    "artist_id": "12345",
    "artist_name": "Radiohead",
    "location": "London, England",
    "follower_count": 11777312,
    "monthly_listeners": 31553777,
    "collabs": ["Kanye Project", "Fender Guitars", "Moog Music"],
    "bio": "Radiohead are a touchstone for all that is fearless and adventurous in rock, evolving from self-loathing anthems to moody prog rock suites to weathered, if shimmering ballads. Inheritors of a throne previously occupied by , , and (from whom they took their name), the British band spliced 's spaciness with 's messianic arena rock heft and bridged the gap with guitar skronk borrowed from the '80s American underground.",

    "top_songs": [
      {
        "image": "/images/pablo-honey.jpg",
        "title": "Creep",
        "album": "Pablo Honey",
        "year": "1992"
      },
      {
        "image": "/images/ok-computer.jpg",
        "title": "Karma Police",
        "album": "Ok Computer",
        "year": "1997"
      },
      {
        "image": "/images/in-rainbows.jpg",
        "title": "All I Need",
        "album": "In Rainbows",
        "year": "2007"
      },
      {
        "image": "/images/the-bends.jpg",
        "title": "Fake Plastic Trees",
        "album": "The Bends",
        "year": "1995"
      }
    ],

    "essential_albums": [
      {
        "image": "/images/in-rainbows.jpg",
        "title": "In Rainbows",
        "year": "2007"
      },
      {
        "image": "/images/ok-computer.jpg",
        "title": "Ok Computer",
        "year": "1997"
      },
      {
        "image": "/images/the-bends.jpg",
        "title": "The Bends",
        "year": "1995"
      }
    ]
  };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  // Ensure params is properly awaited before accessing properties
  const id = params?.id || '12345';
  
  // Get artist data directly on the server
  const artistData = await getArtistData(id);

  return (
    <div className="artist-layout">
      <Sidebar artistData={artistData} />
      
      <div className="main-content bg-gradient-to-b from-gray-900 to-black text-white">
        <ArtistHeader artistData={artistData} />
        <ArtistBio artistData={artistData} />
        <TopSongs artistData={artistData} />
        <EssentialAlbums artistData={artistData} />
      </div>
    </div>
  );
} 