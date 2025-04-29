import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongCard from "../components/SongCard";
import "../styles/pages/artist-detail.scss";
import musicData from "../data/musicData.json";

const ArtistDetail = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  

  useEffect(() => {
    const foundArtist = musicData.find((artist) => artist.id === id);
    setArtist(foundArtist);
  }, [id]);

  if (!artist) return <p>Yükleniyor...</p>;

  return (
    <div className="artist-detail">
      <div className="artist-detail__header">
        <img
          src={artist.image}
          alt={artist.name}
          className="artist-detail__image"
        />
        <div className="artist-detail__info">
          <h2>{artist.name}</h2>
          <p>{artist.genres.join(", ")}</p>
          <p>{artist.followers.toLocaleString()} takipçi</p>
        </div>
        <div className="artist-detail__actions">
          <button>Share</button>
          <button>About</button>
          <button>Premium</button>
        </div>
      </div>

      {/* Sanatçının Şarkıları */}
      <h3>Popular Songs</h3>
      <div className="song-list__scroll">
        {artist.songs.map((track) => (
          <SongCard
            key={track.id}
            image={track.image}
            songname={track.songname}
            title={track.title}
            audio={track.audio}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistDetail;
