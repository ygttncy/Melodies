import Button from "./common/Button";
import "../styles/components/hero.scss";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="hero">
      <Navbar />

      <div className="hero__overlay">
        <div className="hero__text">
          <h1>
            All the <span>Best Songs</span> <br /> in One Place
          </h1>
          <p>
            On our website, you can access an amazing collection of popular and new songs, stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!
          </p>

          <div className="hero__buttons">
            <Button variant="primary">Discover Now</Button>
            <Button variant="blue-outline">Create Playlist</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
