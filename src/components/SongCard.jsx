import { useAudio } from "../context/AudioContext";
import "../styles/components/song-card.scss";

const SongCard = ({ image, title, songname, audio }) => {
  const { setCurrentSong, setIsPlaying, setIsPlayerVisible } = useAudio();

  const handleClick = () => {
    if (!audio) {
      alert("Bu şarkının önizlemesi bulunamadı!");
      return;
    }

    setCurrentSong({ title, songname, image, audio });
    setIsPlaying(true);
    setIsPlayerVisible(true); 
  };

  return (
    <div className="song-card" onClick={handleClick}>
      <img src={image} alt={title} className="song-card__image" />
      <div className="song-card__info">
        <h4 className="song-card__songname">{songname}</h4>
        {title && <span className="song-card__title">{title}</span>}
      </div>
    </div>
  );
};

export default SongCard;
