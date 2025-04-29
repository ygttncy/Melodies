// VideoCardList.jsx
import { useState } from "react";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import musicData from "../data/musicData.json";
import "../styles/components/video-card.scss";

const extractYouTubeId = (url) => {
  const match = url.match(/v=([^&]+)/) || url.match(/youtu\.be\/(.+)/);
  return match ? match[1] : null;
};

const VideoCardList = () => {
  const videos = musicData.musicVideos;
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const openModal = (videoUrl) => {
    const videoId = extractYouTubeId(videoUrl);
    setSelectedVideoId(videoId);
  };

  return (
    <section className="video-card-list">
      <h2 className="video-card-list__title">Music <span>Videos</span></h2>

      <div className="video-card-list__content">
        {videos.map((video) => (
          <div onClick={() => openModal(video.videoUrl)} key={video.id}>
            <VideoCard
              title={video.songname}
              artist={video.title}
              views={video.views}
              thumbnail={video.thumbnail}
            />
          </div>
        ))}
      </div>

      <VideoModal videoId={selectedVideoId} onClose={() => setSelectedVideoId(null)} />
    </section>
  );
};

export default VideoCardList;
