import HeroSection from "../components/HeroSection";
import allSongs from "../data/songs.json";
import SongList from "../components/SongList";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />

      <SongList
        title="Weekly Top"
        highlight="Songs"
        data={allSongs.weeklyTop}
        onViewAll={() => console.log("View All - Weekly")}
      />

      <SongList
        title="New Release"
        highlight="Songs"
        data={allSongs.newReleases}
        onViewAll={() => console.log("View All - New Releases")}
      />
    </div>
  );
};

export default Home;
