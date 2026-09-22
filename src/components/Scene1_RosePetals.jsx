import React from 'react';
import { weddingData } from '../data/wedding-data';

/**
 * Scene 1: Each text element is standalone, appearing with staggered animations.
 * Section is very tall (200vh) for extended scroll.
 * Better typography — using Playfair Display, Cinzel Decorative, Great Vibes with glow.
 */
export const Scene1_Names = () => {
  return (
    <section
      className="scene scene--tall"
      style={{
        background: 'transparent',
        zIndex: 4,
        gap: '2vh'
      }}
    >
      {/* ═══ Header ═══ */}
      <div className="reveal delay-1">
        <p className="font-decorative" style={{
          fontSize: 'clamp(0.55rem, 2vw, 0.75rem)',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          color: '#E8C36A',
          textShadow: '0 0 15px rgba(212, 175, 55, 0.3)',
          fontWeight: 400
        }}>
          {weddingData.families.invitationHeader}
        </p>
      </div>

      {/* ═══ Invitation text ═══ */}
      <div className="reveal delay-2" style={{ maxWidth: '340px' }}>
        <p className="font-heading" style={{
          fontSize: 'clamp(0.9rem, 3.2vw, 1.1rem)',
          color: '#F0E4CE',
          lineHeight: 1.6,
          fontWeight: 400,
          fontStyle: 'italic'
        }}>
          {weddingData.families.invitationSubtext}
        </p>
      </div>

      {/* ═══ Divider ═══ */}
      <div className="reveal-scale delay-2">
        <div className="gold-divider" style={{ margin: '1rem auto' }} />
      </div>

      {/* ═══ Groom Name — slides from LEFT ═══ */}
      <div className="reveal-left delay-3" style={{ margin: '1.5vh 0', overflow: 'visible' }}>
        <h2 className="font-script gold-gradient-text" style={{
          fontSize: 'clamp(3.5rem, 14vw, 7rem)',
          lineHeight: 1.35,
          paddingTop: '0.15em',
          paddingBottom: '0.15em',
          textShadow: '0 0 40px rgba(212, 175, 55, 0.3)'
        }}>
          {weddingData.groom.name}
        </h2>
        <span className="font-heading" style={{
          display: 'block',
          marginTop: '0.3rem',
          fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
          color: '#E88DA0',
          letterSpacing: '2px',
          fontWeight: 400,
          fontStyle: 'italic'
        }}>
          Son of {weddingData.groom.fatherName} & {weddingData.groom.motherName}
        </span>
      </div>

      {/* ═══ Ampersand — blooms from center with glow ═══ */}
      <div className="reveal-scale delay-4" style={{ margin: '0.5vh 0' }}>
        <span className="font-script" style={{
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
          color: '#D4AF37',
          textShadow: '0 0 25px rgba(212, 175, 55, 0.6), 0 0 50px rgba(212, 175, 55, 0.2), 0 0 80px rgba(212, 175, 55, 0.1)'
        }}>
          &
        </span>
      </div>

      {/* ═══ Bride Name — slides from RIGHT ═══ */}
      <div className="reveal-right delay-5" style={{ margin: '1.5vh 0', overflow: 'visible' }}>
        <h2 className="font-script gold-gradient-text" style={{
          fontSize: 'clamp(3.5rem, 14vw, 7rem)',
          lineHeight: 1.35,
          paddingTop: '0.15em',
          paddingBottom: '0.15em',
          textShadow: '0 0 40px rgba(212, 175, 55, 0.3)'
        }}>
          {weddingData.bride.name}
        </h2>
        <span className="font-heading" style={{
          display: 'block',
          marginTop: '0.3rem',
          fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
          color: '#E88DA0',
          letterSpacing: '2px',
          fontWeight: 400,
          fontStyle: 'italic'
        }}>
          Daughter of {weddingData.bride.fatherName} & {weddingData.bride.motherName}
        </span>
      </div>

      {/* ═══ Divider ═══ */}
      <div className="reveal-scale delay-6">
        <div className="gold-divider" style={{ margin: '1rem auto' }} />
      </div>

      {/* ═══ Date — fades up with blur ═══ */}
      <div className="reveal-blur delay-7" style={{ marginTop: '1vh' }}>
        <p className="font-decorative" style={{
          fontSize: 'clamp(0.9rem, 3.5vw, 1.3rem)',
          color: '#E8C36A',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          textShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
        }}>
          24 OCTOBER 2026
        </p>
      </div>
    </section>
  );
};
