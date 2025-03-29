import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // In a real app, we would use the artist_id from the request
    // const { searchParams } = new URL(request.url);
    // const artistId = searchParams.get('artist_id');

    // For now, we'll return hardcoded data for Radiohead
    const artistData = {
        "artist_id": "12345",
        "artist_name": "Radiohead",
        "location": "London, England",
        "follower_count": 11777312,
        "monthly_listeners": 31553777,
        "collabs": ["Kanye Project", "Fender Guitars", "Moog Music"],
        "bio_image": "/images/radiohead-profile.jpg",
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

    return NextResponse.json(artistData);
} 