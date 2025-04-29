import "../styles/components/music-genres-list.scss";

const MusicGenresList = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="loading">Loading genres...</div>;
  }

  return (
    <section className="music-genres-list">
      <h2 className="music-genres-list__title">Music <span>Genres</span></h2>
      <div className="music-genres-list__content">
        {data.map((genre) => (
          <div key={genre.id} className="genre-card">
            <img src={genre.coverImage} alt={genre.genreName} />
            <p>{genre.genreName}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicGenresList;
