import { useState } from "react";
import "../styles/components/album-list.scss";

const AlbumList = ({ title, highlight, data = [], limit }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? data : data.slice(0, limit);

  return (
    <section className="album-list">
      <div className="album-list__header">
        <h2 className="album-list__title">
          {title} <span>{highlight}</span>
        </h2>
      </div>

      <div className="album-list__content">
        {displayedData.map((album) => (
          <div className="album-card" key={album.id}>
            <img src={album.coverImage} alt={album.albumName} className="album-card__image" />
            <div className="album-card__info">
              <h4>{album.albumName}</h4>
              <p>{album.artistName}</p>
              <span>{album.releaseYear}</span>
            </div>
          </div>
        ))}
            {!showAll && limit && data.length > limit && (
        <button className="album-list__view-all" onClick={() => setShowAll(true)}>
          View All
        </button>
      )}
      </div>

  
    </section>
  );
};

export default AlbumList;