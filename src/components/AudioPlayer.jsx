import { useAudio } from "../context/AudioContext";
import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaTimes } from "react-icons/fa"; 
import "../styles/components/audio-player.scss";

const AudioPlayer = () => {
  const { currentSong, isPlaying, setIsPlaying, setCurrentSong } = useAudio();
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  const handleProgressChange = (e) => {
    if (!audioRef.current) return;
    const duration = audioRef.current.duration;
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleClosePlayer = () => {
    setIsPlaying(false); // Şarkıyı durdur
    setCurrentSong(null); // Şarkı bilgisini sıfırla
  };

  if (!currentSong) return null; // Şarkı yoksa player görünmesin

  return (
    <div className="audio-player">
      {/* Sağ üst köşe kapatma butonu */}
      <button className="audio-player__close" onClick={handleClosePlayer}>
        <FaTimes size={18} />
      </button>

      <div className="audio-player__left">
        <img
          src={currentSong.image}
          alt="Cover"
          className="audio-player__cover"
        />
        <div className="audio-player__info">
          <h4>{currentSong.songname}</h4>
          <p>{currentSong.title}</p>
        </div>
      </div>

      <div className="audio-player__center">
        <button
          className="audio-player__button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="audio-player__progress">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
          />
        </div>

        <div className="audio-player__time">
          {audioRef.current && formatTime(audioRef.current.currentTime)} /{" "}
          {audioRef.current && formatTime(audioRef.current.duration)}
        </div>
      </div>

      <div className="audio-player__right">
        <FaVolumeUp size={20} color="#fff" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="audio-player__volume"
        />
      </div>

      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
};

export default AudioPlayer;
