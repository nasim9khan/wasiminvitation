import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';

export const Scene_Video = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoEl = videoRef.current;
    const containerEl = containerRef.current;
    if (!videoEl || !containerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start playing when video enters viewport
            const playPromise = videoEl.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => setIsPlaying(true))
                .catch((err) => console.log('Autoplay deferred:', err));
            }
          } else {
            // Pause when video leaves viewport
            videoEl.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerEl);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="scene scene--video" style={{
      background: 'radial-gradient(ellipse at 50% 50%, rgba(35, 5, 18, 0.4) 0%, rgba(5, 1, 3, 0.8) 80%)',
      zIndex: 4
    }}>
      <div ref={containerRef} className="video-section-container">

        {/* Header */}
        <div className="reveal delay-1" style={{ overflow: 'visible' }}>
          <h2 className="font-script gold-gradient-text" style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.8rem)',
            lineHeight: 1.35,
            paddingTop: '0.15em',
            paddingBottom: '0.15em',
            marginBottom: '0.5rem'
          }}>
            Together, Into Forever
          </h2>
        </div>

        <div className="reveal-blur delay-2">
          <p className="font-decorative" style={{
            fontSize: 'clamp(0.6rem, 2.2vw, 0.75rem)',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: '#E8C36A',
            marginBottom: '0.4rem',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
          }}>
            Through a new door, into a lifetime together.
          </p>
        </div>

        <div className="reveal-scale delay-3">
          <div className="gold-divider" style={{ margin: '0.8rem auto 1.5rem' }} />
        </div>

        {/* Video Card with Royal Gold Frame on Desktop, Edge-to-Edge on Mobile */}
        <div className="video-card-wrapper reveal-blur delay-4">
          <div className="video-inner-container">
            <video
              ref={videoRef}
              src="/wedding-video.mp4"
              playsInline
              muted={isMuted}
              loop
              className="full-video-element"
            />

            {/* Video Overlays / Controls — pointer-events restored on button wrapper */}
            <div style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              display: 'flex',
              gap: '8px',
              zIndex: 10,
              pointerEvents: 'auto',
              touchAction: 'manipulation'
            }}>
              {/* Mute / Unmute Button */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(18, 2, 10, 0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  color: '#E8C36A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              {/* Play / Pause Toggle Button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(18, 2, 10, 0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  color: '#E8C36A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="reveal delay-5" style={{ marginTop: '1.2rem' }}>
          <p className="font-heading" style={{
            fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
            color: '#E88DA0',
            fontStyle: 'italic',
            letterSpacing: '1px'
          }}>
            <Sparkles size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: '#D4AF37' }} />
            Capturing the magical moments leading to our union
          </p>
        </div>

      </div>
    </section>
  );
};
