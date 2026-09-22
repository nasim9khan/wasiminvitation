import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { StickyCountdownHeader } from './components/StickyCountdownHeader';
import { RoseScatterCanvas } from './components/RoseScatterCanvas';
import { AudioPlayer } from './components/AudioPlayer';
import { Scene0_DarkEntry } from './components/Scene0_DarkEntry';
import { Scene1_Names } from './components/Scene1_RosePetals';
import { Scene2_ArchCurtain } from './components/Scene2_ArchCurtain';
import { Scene4_Verse } from './components/Scene4_Verse';
import { Scene_Video } from './components/Scene_Video';
import { Scene5_Farewell } from './components/Scene5_Farewell';
import { useRevealObserver } from './hooks/useScrollProgress';
import { weddingData } from './data/wedding-data';

export function App() {
  // Activate smooth scrolling across the entire site
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Activate the IntersectionObserver for all .reveal / .reveal-left / .reveal-right elements
  useRevealObserver();

  return (
    <div className="invitation-container">
      {/* Sticky Slim Header with Nikkah Countdown */}
      <StickyCountdownHeader />

      {/* card6 style rose background image — subtle fixed behind everything */}
      <div className="rose-bg" />

      {/* Interactive Rose Petal Scatter + Glitter Canvas */}
      <RoseScatterCanvas />

      {/* Floating Audio Control */}
      <AudioPlayer />

      {/* ═══ Scene 0: Dark Entry — Bismillah & Quran Verse ═══ */}
      <Scene0_DarkEntry />

      {/* ═══ Scene 1: Rose Petals Scatter + Names Reveal ═══ */}
      <Scene1_Names />

      {/* ═══ Scene 2 & 3: Curtain Arch Reveal — Events ═══ */}
      {weddingData.events.map((event, index) => (
        <Scene2_ArchCurtain key={event.id} event={event} index={index} />
      ))}

      {/* ═══ Scene 4: RSVP & WhatsApp ═══ */}
      <Scene4_Verse />

      {/* ═══ Scene Video: Moments of Celebration (plays when in viewport) ═══ */}
      <Scene_Video />

      {/* ═══ Scene 5: Farewell ═══ */}
      <Scene5_Farewell />
    </div>
  );
}

export default App;
