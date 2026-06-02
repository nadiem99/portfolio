// Data for the Personal page (/personal).
// NOTE: gallery photos are still PLACEHOLDERS — replace with real Shot by Nad
// photos. Country lists and Spotify playlist are Nadiem's real values.

export const personal = {
  instagram: "https://www.instagram.com/shot.by.nad/",
  instagramHandle: "@shot.by.nad",
  // "Current rotation" playlist.
  spotifyPlaylistId: "4FtLqnDZgT5TNk7UTG4sot",
};

// Country names MUST match the world-atlas topojson names
// (public/personal/world-110m.json -> objects.countries -> properties.name).
// Examples: "United States of America", "Saudi Arabia", "Ethiopia", "Canada".

// Places that are "home" — born, heritage, lived. Rendered in full accent.
export const countriesHome: string[] = [
  "Canada",
  "Saudi Arabia",
  "United States of America",
  "Ethiopia",
];

// Visited (home countries above take visual priority). Note: Singapore and
// Bahrain are also visited but omitted here because they are too small to
// render as polygons on the 110m map.
export const countriesVisited: string[] = [
  // Asia
  "Japan",
  "South Korea",
  "Indonesia",
  "Thailand",
  // Middle East
  "Qatar",
  "United Arab Emirates",
  "Oman",
  "Yemen",
  "Kuwait",
  "Syria",
  "Jordan",
  "Turkey",
  // Africa
  "Egypt",
  "Morocco",
  // Europe
  "Spain",
  "France",
  "Italy",
  "Switzerland",
  "United Kingdom",
  // Americas
  "Mexico",
  "Cuba",
  "Panama",
];

export const countriesWishlist: string[] = [
  "Brazil",
  "Kenya",
  "Tanzania",
  "South Africa",
  "Kyrgyzstan",
  "Vietnam",
  "China",
];

export type GalleryPhoto = { src: string; alt: string };

// TODO: replace placeholders with real Shot by Nad photos
// (drop files in public/personal/gallery/ and update this list).
export const gallery: GalleryPhoto[] = Array.from({ length: 6 }, (_, i) => ({
  src: `/personal/gallery/placeholder-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Shot by Nad — placeholder ${i + 1}`,
}));

export type Team = { name: string; logo: string; note: string };

export const teams: Team[] = [
  { name: "Real Madrid", logo: "/personal/teams/real-madrid.png", note: "Hala Madrid" },
  { name: "Arsenal", logo: "/personal/teams/arsenal.png", note: "COYG" },
  {
    name: "Portland Trail Blazers",
    logo: "/personal/teams/trail-blazers.png",
    note: "Rip City — yes, really",
  },
];
