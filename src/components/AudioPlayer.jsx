import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingData } from '../data/wedding-data';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    const sound = new Howl({
      src: [weddingData.music.src],
      loop: true,
      html5: true,
      autoplay: true,
      volume: 0.4,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
      onloaderror: (id, err) => console.log('Audio load warning:', err)
    });

    soundRef.current = sound;

    // Try playing immediately
    sound.play();

    const handleInteraction = () => {
      if (soundRef.current && !soundRef.current.playing()) {
        soundRef.current.play();
      }
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="audio-control-btn"
      aria-label="Toggle Background Music"
      title={isPlaying ? 'Pause Music' : 'Play Music'}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
};
