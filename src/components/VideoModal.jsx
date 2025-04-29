import "../styles/components/video-modal.scss";

const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className="video-modal">
      <div className="video-modal__overlay" onClick={onClose}></div>
      <div className="video-modal__content">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <button className="video-modal__close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default VideoModal;
