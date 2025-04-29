import { useState } from "react";
import "../styles/components/playlist-list.scss";

const PlaylistList = ({ title, highlight, data = [], limit }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? data : data.slice(0, limit);

  return (
    <section className="playlist-list">
      <div className="playlist-list__header">
        <h2 className="playlist-list__title">
          {title} <span>{highlight}</span>
        </h2>
      </div>

      <div className="playlist-list__content">
        {displayedData.map((playlist) => (
          <div className="playlist-card" key={playlist.id}>
            <img src={playlist.coverImage} alt={playlist.mood} className="playlist-card__image" />
            <div className="playlist-card__info">
              <h4>{playlist.mood}</h4>
            </div>
          </div>
        ))}
           {!showAll && limit && data.length > limit && (
        <button className="playlist-list__view-all" onClick={() => setShowAll(true)}>
          View All
        </button>
      )}
      </div>

   
    </section>
  );
};

export default PlaylistList;