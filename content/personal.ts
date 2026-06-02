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

export const gallery: GalleryPhoto[] = [
  { src: "/personal/gallery/000017630008.jpeg", alt: "Shot by Nad — photograph 1" },
  { src: "/personal/gallery/001269730024.jpeg", alt: "Shot by Nad — photograph 2" },
  { src: "/personal/gallery/001468200015.jpeg", alt: "Shot by Nad — photograph 3" },
  { src: "/personal/gallery/001468200036.jpeg", alt: "Shot by Nad — photograph 4" },
  { src: "/personal/gallery/001683560006.jpeg", alt: "Shot by Nad — photograph 5" },
  { src: "/personal/gallery/001683580006.jpeg", alt: "Shot by Nad — photograph 6" },
  { src: "/personal/gallery/001683580011.jpeg", alt: "Shot by Nad — photograph 7" },
  { src: "/personal/gallery/001683580014.jpeg", alt: "Shot by Nad — photograph 8" },
  { src: "/personal/gallery/IMG_0672.jpeg", alt: "Shot by Nad — photograph 9" },
  { src: "/personal/gallery/IMG_1227.jpeg", alt: "Shot by Nad — photograph 10" },
  { src: "/personal/gallery/IMG_1798.jpeg", alt: "Shot by Nad — photograph 11" },
  { src: "/personal/gallery/IMG_2120.jpeg", alt: "Shot by Nad — photograph 12" },
  { src: "/personal/gallery/IMG_3327.jpeg", alt: "Shot by Nad — photograph 13" },
  { src: "/personal/gallery/R1-01400-0031.jpeg", alt: "Shot by Nad — photograph 14" },
  { src: "/personal/gallery/R1-06097-001A.jpeg", alt: "Shot by Nad — photograph 15" },
  { src: "/personal/gallery/R1-06097-025A.jpeg", alt: "Shot by Nad — photograph 16" },
  { src: "/personal/gallery/R1-08184-0011.jpeg", alt: "Shot by Nad — photograph 17" },
];

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

export type Scripture = { arabic: string; english: string; source: string };

export const quranVerses: Scripture[] = [
  {
    arabic:
      "إِنَّ فِى خَلْقِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ وَٱخْتِلَٰفِ ٱلَّيْلِ وَٱلنَّهَارِ لَءَايَٰتٍۢ لِّأُو۟لِى ٱلْأَلْبَٰبِ",
    english:
      "Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding.",
    source: "Qur'an 3:190 — Āl ʿImrān",
  },
  {
    arabic: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    english: "Allah does not charge a soul except [with that within] its capacity.",
    source: "Qur'an 2:286 — al-Baqarah",
  },
];

export const hadith: Scripture[] = [
  {
    arabic:
      "مَنْ أَصْبَحَ مِنْكُمْ مُعَافًى فِي جَسَدِهِ آمِنًا فِي سِرْبِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا",
    english:
      "Whoever among you wakes up physically healthy, feeling safe and secure within himself, with food for the day, it is as if he acquired the whole world.",
    source: "Prophet Muhammad ﷺ — Sunan al-Tirmidhī",
  },
];
