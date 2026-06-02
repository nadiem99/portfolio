import { personal } from "@/content/personal";

export default function SpotifyEmbed() {
  return (
    <div className="overflow-hidden border border-foreground/10">
      <iframe
        title="Nadiem's current rotation"
        src={`https://open.spotify.com/embed/playlist/${personal.spotifyPlaylistId}?utm_source=generator&theme=0`}
        width="100%"
        height="352"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        style={{ border: 0, display: "block" }}
      />
    </div>
  );
}
