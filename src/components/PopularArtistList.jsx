import { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import "../styles/components/artist-card.scss";

const PopularArtistList = () => {
  const [popularArtists, setPopularArtists] = useState([]);

  useEffect(() => {
    fetch("/public/data/musicData.json")
      .then((res) => res.json())
      .then((data) => setPopularArtists(data.popularArtists))
      .catch((err) => console.error("Popüler sanatçılar yüklenemedi:", err));
  }, []);

  if (!popularArtists.length) {
    return <div className="loading">Loading artists...</div>;
  }

  return (
    <section className="popular-artist-list">
      <h2 className="popular-artist-list__title">Popular <span>Artists</span></h2>

      <div className="popular-artist-list__content">
        {popularArtists.map((artist) => (
          <ArtistCard
            key={artist.id}
            id={artist.id}
            name={artist.name}
            image={artist.image}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularArtistList;
