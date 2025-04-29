
import ArtistCard from "./ArtistCard";
import musicData from "../data/musicData.json";
import "../styles/components/artist-card.scss";

const PopularArtistList = () => {
  const popularArtists = musicData.popularArtists;

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
