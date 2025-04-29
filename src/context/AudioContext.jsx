import { createContext, useContext, useState } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false); // 🔥 yeni eklendi

  const value = {
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    isPlayerVisible,
    setIsPlayerVisible,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudio = () => useContext(AudioContext);
