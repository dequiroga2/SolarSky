import React, { useRef, useEffect } from 'react';

const VideoIntroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadstart', () => console.log('Video loading started'));
      video.addEventListener('canplay', () => console.log('Video can start playing'));
      video.addEventListener('error', (e) => console.error('Video error:', e));
      
      // Force play attempt
      video.play().catch(error => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="video-intro-section">
      <div className="video-container">
        <video
          ref={videoRef}
          className="intro-video"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </section>
  );
};

export default VideoIntroSection;
