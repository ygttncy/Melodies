import "../styles/components/song-card.scss";

const SongCard = ({
  image,
  title,
  songname,

  onClick,
  variant = "default",
}) => {
  return (
    <div className={`song-card song-card--${variant}`} onClick={onClick}>
      <img src={image} alt={title} className="song-card__image" />
      <div className="song-card__info">
        <h4 className="song-card__songname">{songname}</h4>

        {title && <span className="song-card__title">{title}</span>}
      </div>
    </div>
  );
};

export default SongCard;
