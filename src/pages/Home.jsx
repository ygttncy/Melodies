import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SongList from "../components/SongList";
import TrendingSongs from "../components/TrendingSongs";
import AlbumList from "../components/AlbumList";   
import PlaylistList from "../components/PlaylistList"; 
import VideoModal from "../components/VideoModal";
import PopularArtistList from "../components/PopularArtistList";
import VideoCardList from "../components/VideoCardList";

const Home = () => {
  const [musicData, setMusicData] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(null);

  useEffect(() => {
    fetch('/public/data/musicData.json')
      .then(res => res.json())
      .then(data => setMusicData(data))
      .catch(err => console.error('Veri yüklenemedi:', err));
  }, []);

  if (!musicData) {
    return <div className="loading">Loading...</div>; // İstersen burada bir skeleton da verebiliriz
  }

  const allSongs = musicData.artists.flatMap(artist => artist.songs);
  const trendingSongs = allSongs.filter(song => song.isTrending);
  const newReleaseSongs = musicData.newReleases || [];
  const popularArtists = musicData.popularArtists || [];
  const musicVideos = musicData.musicVideos || [];
  const topAlbums = musicData.topAlbums || [];
  const moodPlaylists = musicData.moodPlaylists || [];

  return (
    <div className="home-page">
      <HeroSection />

      {/* Weekly Top Songs */}
      <SongList
        title="Weekly Top"
        highlight="Songs"
        data={allSongs}
        limit={6} 
      />

      {/* New Release Songs */}
      <SongList
        title="New Release"
        highlight="Songs"
        data={newReleaseSongs}
        limit={5} 
      />

      {/* Trending Songs */}
      <TrendingSongs
        data={trendingSongs}
        limit={10} 
      />

      {/* Popular Artists */}
      <PopularArtistList
        title="Popular"
        highlight="Artists"
        data={popularArtists}
        limit={6} 
      />

      {/* Music Videos */}
      <VideoCardList
        title="Music"
        highlight="Videos"
        data={musicVideos}
        onVideoClick={setActiveVideoId}
        limit={4} 
      />

      {/* Top Albums */}
      <AlbumList
        title="Top"
        highlight="Albums"
        data={topAlbums}
        limit={5} 
      />

      {/* Mood Playlists */}
      <PlaylistList
        title="Mood"
        highlight="Playlists"
        data={moodPlaylists}
        limit={6} 
      />

      {/* Video Modal */}
      <VideoModal
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />
    </div>
  );
};

export default Home;
