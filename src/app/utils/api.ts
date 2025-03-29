export interface TopSong {
    image: string;
    title: string;
    album: string;
    year: string;
}

export interface EssentialAlbum {
    image: string;
    title: string;
    year: string;
}

export interface ArtistProfile {
    artist_id: string;
    artist_name: string;
    location: string;
    follower_count: number;
    monthly_listeners: number;
    collabs: string[];
    bio: string;
    bio_image: string;
    top_songs: TopSong[];
    essential_albums: EssentialAlbum[];
}

/**
 * Fetches the artist profile data for a given artist ID
 * @param artistId The ID of the artist to fetch
 * @returns Promise containing the artist profile data
 */
export async function fetchArtistProfile(artistId: string): Promise<ArtistProfile> {
    // In a real application, we would pass the artistId as a query parameter
    // Use the absolute URL pattern to avoid the parsing error
    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`;

    const response = await fetch(`${baseUrl}/api/profile`, { next: { revalidate: 60 } });

    if (!response.ok) {
        throw new Error('Failed to fetch artist profile');
    }

    return response.json();
} 