// TrendingSongs.jsx
import { useState } from "react";
import LongSongCard from "./LongSongCard";
import { FiPlus } from "react-icons/fi";
import "../styles/components/trending-songs.scss";

const TrendingSongs = ({ data = [], limit }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? data : data.slice(0, limit);

  return (
    <section className="trending-songs">
      <div className="trending-songs__header">
        <h2>
          Trending <span>Songs</span>
        </h2>

        <div className="trending-songs__columns">
          <span className="release__date">Release Date</span>
          <span className="album">Album</span>
          <span className="time">Time</span>
        </div>
      </div>

      <div className="trending-songs__list">
        {displayedData.map((song, index) => (
          <LongSongCard
            key={song.id}
            index={index + 1}
            image={song.image}
            songname={song.songname}
            artist={song.artist}
            releaseDate={song.releaseDate}
            album={song.album}
            duration={song.duration}
            audio={song.audio}
          />
        ))}
      </div>

      {!showAll && limit && data.length > limit && (
        <button className="trending-songs__view-all" onClick={() => setShowAll(true)}>
          <FiPlus /> View All
        </button>
      )}
    </section>
  );
};

export default TrendingSongs;