import { useEffect, useState } from "react";
import SongList from "../components/SongList";
import PlaylistList from "../components/PlaylistList";
import VideoCardList from "../components/VideoCardList";
import AlbumList from "../components/AlbumList";
import PopularArtistList from "../components/PopularArtistList";
import VideoModal from "../components/VideoModal";
import MusicGenresList from "../components/MusicGenresList";

const Discover = () => {
  const [musicData, setMusicData] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(null);

  useEffect(() => {
    fetch("/public/data/musicData.json")
      .then((res) => res.json())
      .then((data) => setMusicData(data))
      .catch((err) => console.error("Veri yüklenemedi:", err));
  }, []);

  if (!musicData) return <div>Loading...</div>;

  const newReleaseSongs = musicData.newReleases || [];
  const popularArtists = musicData.popularArtists || [];
  const musicVideos = musicData.musicVideos || [];
  const topAlbums = musicData.topAlbums || [];
  const moodPlaylists = musicData.moodPlaylists || [];

  return (
    <div className="discover-page">
      <MusicGenresList data={musicData.musicGenres} />

      <SongList
        title="New Release"
        highlight="Songs"
        data={newReleaseSongs}
        limit={5}
      />

      <PopularArtistList
        title="Popular"
        highlight="Artists"
        data={popularArtists}
        limit={6}
      />

      <VideoCardList
        title="Music"
        highlight="Videos"
        data={musicVideos}
        onVideoClick={setActiveVideoId}
        limit={4}
      />

      <AlbumList title="Top" highlight="Albums" data={topAlbums} limit={5} />

      <PlaylistList
        title="Mood"
        highlight="Playlists"
        data={moodPlaylists}
        limit={6}
      />

      <VideoModal
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />
    </div>
  );
};

export default Discover;
