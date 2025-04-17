import SongCard from "./SongCard";

import "../styles/components/song-list.scss";
import ViewAllCard from "./ViewAllCard";

const SongList = ({ title = "", highlight = "", data = [], onViewAll }) => {
  return (
    <section className="song-list">
      <div className="song-list__header">
        <h2 className="song-list__title">
          {title} <span>{highlight}</span>
        </h2>
      </div>

      <div className="song-list__scroll">
        {data.map((song) => (
          <SongCard
            key={song.id}
            image={song.image}
            title={song.title}
            songname={song.songname}
          />
        ))}

 
        <ViewAllCard onClick={onViewAll} />
      </div>
    </section>
  );
};

export default SongList;
