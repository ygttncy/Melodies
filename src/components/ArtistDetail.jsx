import { useEffect, useState } from "react";
import { getArtistDetails, getTopTracksByArtist } from "../utils/spotify";
import { useParams } from "react-router-dom";
import { useAudio } from "../context/AudioContext";
import SongCard from "../components/SongCard";

const ArtistDetail = () => {
  const { id } = useParams(); // URL'den artist id alınır
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { setCurrentSong, setIsPlaying } = useAudio();

  useEffect(() => {
    getArtistDetails(id).then(setArtist);
    getTopTracksByArtist(id).then(setTracks);
  }, [id]);

  if (!artist) return <p>Yükleniyor...</p>;

  return (
    <div className="artist-detail">
      <div className="artist-detail__header">
        <img src={artist.images[0]?.url} alt={artist.name} />
        <div>
          <h2>{artist.name}</h2>
          <p>{artist.genres.join(", ")}</p>
          <p>{artist.followers.total.toLocaleString()} takipçi</p>
        </div>
      </div>

      <h3>Top Tracks</h3>
      <div className="song-list__scroll">
        {tracks.slice(0, 10).map((track) => (
          <SongCard
            key={track.id}
            image={track.album.images[0]?.url}
            songname={track.name}
            title={track.artists[0].name}
            audio={track.preview_url}
            onClick={() => {
              setCurrentSong({
                image: track.album.images[0]?.url,
                songname: track.name,
                title: track.artists[0].name,
                audio: track.preview_url
              });
              setIsPlaying(true);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistDetail;
