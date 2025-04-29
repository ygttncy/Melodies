import { FiHeart } from "react-icons/fi";
import { useAudio } from "../context/AudioContext"; 
import "../styles/components/long-song-card.scss";

const LongSongCard = ({
  index,
  image,
  songname,
  artist,
  releaseDate,
  album,
  duration,
  audio 
}) => {
  const { setCurrentSong, setIsPlaying } = useAudio();

  const handleClick = () => {
    if (audio) {
      setCurrentSong({ image, songname, title: artist, audio });
      setIsPlaying(true);
    }
  };

  return (
    <div className="long-song-card" onClick={handleClick}>
      <span className="long-song-card__index">#{index}</span>

      <img src={image} alt={songname} className="long-song-card__image" />

      <div className="long-song-card__info">
        <h4 className="long-song-card__songname">{songname}</h4>
        <p className="long-song-card__artist">{artist}</p>
      </div>

      <span className="long-song-card__date">{releaseDate}</span>
      <span className="long-song-card__album">{album}</span>

      <div className="long-song-card__actions">
        <FiHeart className="long-song-card__icon" />
        <span className="long-song-card__duration">{duration}</span>
      </div>
    </div>
  );
};

export default LongSongCard;
