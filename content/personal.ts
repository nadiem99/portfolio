// Data for the Personal page (/personal).
// NOTE: Country lists, gallery photos, and the Spotify playlist below are
// PLACEHOLDERS seeded for layout. Replace with Nadiem's real values.

export const personal = {
  instagram: "https://www.instagram.com/shot.by.nad/",
  instagramHandle: "@shot.by.nad",
  // TODO: replace with Nadiem's "current rotation" playlist id
  // (from a Spotify playlist URL: open.spotify.com/playlist/<THIS_ID>)
  spotifyPlaylistId: "37i9dQZF1DXcBWIGoYBM5M",
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

// TODO: replace with Nadiem's real travel history.
export const countriesVisited: string[] = [
  "United Kingdom",
  "France",
  "Spain",
  "Italy",
  "United Arab Emirates",
  "Turkey",
  "Mexico",
];

// TODO: replace with Nadiem's real wishlist.
export const countriesWishlist: string[] = [
  "Japan",
  "Morocco",
  "Brazil",
  "South Africa",
  "Indonesia",
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
