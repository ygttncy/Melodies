import "../styles/components/video-card.scss";

const VideoCard = ({ title, artist, views, thumbnail }) => {
  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} className="video-card__thumbnail" />
      <div className="video-card__info">
        <div className="video-card__left">
          <h4>{title}</h4>
          <p>{artist}</p>
        </div>
        <div className="video-card__right">
          <span>{views} views</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
