import React from 'react';
import { weddingData } from '../data/wedding-data';

export const Scene5_Farewell = () => {
  return (
    <section className="scene" style={{
      background: 'radial-gradient(ellipse at 50% 50%, rgba(42, 6, 20, 0.25) 0%, rgba(5, 1, 3, 0.65) 75%)',
      zIndex: 4,
      minHeight: '45dvh',
      padding: '2.5rem 1.2rem 6rem'
    }}>
      <div style={{ position: 'relative', zIndex: 5, maxWidth: '94%', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>

        <div className="reveal-blur delay-1">
          <span className="font-arabic" style={{
            fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
            color: '#D4AF37',
            display: 'block',
            textShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(212, 175, 55, 0.15)',
            marginBottom: '0.3rem'
          }}>
            جَزَاكُمُ ٱللَّٰهُ خَيْرًا
          </span>
        </div>

        <div className="reveal delay-2">
          <div className="gold-divider" style={{ margin: '0.6rem auto 1rem' }} />
        </div>

        <div className="reveal-blur delay-3" style={{ overflow: 'visible' }}>
          <h2 className="font-script gold-gradient-text" style={{
            fontSize: 'clamp(2.5rem, 10vw, 5rem)',
            lineHeight: 1.35,
            paddingTop: '0.15em',
            paddingBottom: '0.15em'
          }}>
            {weddingData.groom.name} & {weddingData.bride.name}
          </h2>
        </div>

        <div className="reveal delay-4">
          <p className="font-heading" style={{
            fontSize: 'clamp(0.8rem, 2.8vw, 0.95rem)',
            color: '#E88DA0',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginTop: '0.8rem',
            fontWeight: 400,
            fontStyle: 'italic'
          }}>
            We look forward to celebrating with you!
          </p>
        </div>

        {/* ═══ Family Members List ═══ */}
        {weddingData.familyMembers && weddingData.familyMembers.length > 0 && (
          <div className="reveal delay-5" style={{ marginTop: '1.2rem' }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.4rem 0.8rem',
              maxWidth: '360px',
              margin: '0 auto'
            }}>
              {weddingData.familyMembers.map((member, index) => (
                <span
                  key={index}
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
                    color: '#E8C36A',
                    letterSpacing: '1.5px',
                    fontWeight: 500,
                    textShadow: '0 0 10px rgba(212, 175, 55, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem'
                  }}
                >
                  {member.name}
                  {index < weddingData.familyMembers.length - 1 && (
                    <span style={{ color: '#D4AF37', opacity: 0.6, fontSize: '0.6rem' }}>✦</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="reveal delay-5">
          <div className="gold-divider" style={{ margin: '1.2rem auto 0.8rem' }} />
        </div>

        <div className="reveal delay-6">
          <p className="font-sans" style={{
            fontSize: '0.6rem',
            color: '#B89A80',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            © 2026 Blessed Union
          </p>
        </div>
      </div>
    </section>
  );
};
