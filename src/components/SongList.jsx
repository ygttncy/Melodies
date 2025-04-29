import { useState } from "react";
import SongCard from "./SongCard";
import "../styles/components/song-list.scss";

const SongList = ({ title, highlight, data = [], limit }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? data : data.slice(0, limit);

  return (
    <section className="song-list">
      <div className="song-list__header">
        <h2 className="song-list__title">
          {title} <span>{highlight}</span>
        </h2>
      </div>

      <div className="song-list__scroll">
        {displayedData.map((item) => (
          <SongCard
            key={item.id}
            image={item.image}
            title={item.title}
            songname={item.songname}
            audio={item.audio}
          />
        ))}
           {!showAll && limit && data.length > limit && (
        <button className="song-list__view-all" onClick={() => setShowAll(true)}>
          View All
        </button>
      )}
      </div>

   
    </section>
  );
};

export default SongList;
