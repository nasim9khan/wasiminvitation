import React from 'react';
import { MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

/**
 * Arch Event Reveal Scene:
 * - Mughal arch with glowing lanterns
 * - Event details appear standalone on scroll
 */
export const Scene2_ArchCurtain = ({ event, index }) => {
  const [sectionRef, progress] = useScrollProgress({ start: 0.8, end: -0.2 });

  const lightIntensity = Math.min(1, Math.max(0, (progress - 0.05) * 2.2));

  return (
    <section
      ref={sectionRef}
      className="scene scene--medium"
      style={{
        zIndex: 4,
        background: `radial-gradient(ellipse at 50% 45%, 
          rgba(${42 + lightIntensity * 25}, ${6 + lightIntensity * 8}, ${20 + lightIntensity * 12}, ${0.35 + lightIntensity * 0.25}) 0%, 
          rgba(5, 1, 3, 0.8) 75%)`
      }}
    >
      {/* ═══ Card4 glitter background in this section ═══ */}
      <div className="glitter-bg" style={{ opacity: 0.08 + lightIntensity * 0.06 }} />

      {/* ═══ Arch frame (golden outline) ═══ */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '92%',
        maxWidth: '400px',
        height: '76%',
        maxHeight: '600px',
        borderTopLeftRadius: '50% 35%',
        borderTopRightRadius: '50% 35%',
        border: `2px solid rgba(212, 175, 55, ${0.15 + lightIntensity * 0.25})`,
        boxShadow: `inset 0 0 ${30 + lightIntensity * 40}px rgba(212, 175, 55, ${0.05 + lightIntensity * 0.1})`,
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'border-color 0.3s, box-shadow 0.3s'
      }} />

      {/* ═══ Lanterns ═══ */}
      <div className="lantern-group" style={{
        top: '4%',
        left: '8%',
        opacity: 0.3 + lightIntensity * 0.7
      }}>
        <div className="lantern-chain" style={{ height: '65px' }} />
        <div className="lantern-body-shape" style={{
          boxShadow: `0 0 ${10 + lightIntensity * 35}px rgba(212, 175, 55, ${0.3 + lightIntensity * 0.5})`
        }}>
          <div className="lantern-flame" />
        </div>
      </div>

      <div className="lantern-group" style={{
        top: '8%',
        right: '10%',
        animationDelay: '2s',
        opacity: 0.2 + lightIntensity * 0.6
      }}>
        <div className="lantern-chain" style={{ height: '45px' }} />
        <div className="lantern-body-shape" style={{
          width: '24px', height: '38px',
          boxShadow: `0 0 ${8 + lightIntensity * 25}px rgba(212, 175, 55, ${0.2 + lightIntensity * 0.4})`
        }}>
          <div className="lantern-flame" style={{ width: '5px', height: '8px' }} />
        </div>
      </div>

      {/* ═══ Ambient warm glow that blooms ═══ */}
      <div className="ambient-glow" style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 65%)',
        opacity: lightIntensity * 0.5,
        top: '35%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 0,
        transition: 'opacity 0.4s'
      }} />

      {/* ═══ EVENT CONTENT — standalone text ═══ */}
      <div style={{
        position: 'relative',
        zIndex: 8,
        maxWidth: '86%',
        width: '360px',
        wordBreak: 'break-word',
        overflowWrap: 'anywhere'
      }}>

        {/* Arabic event title */}
        <div className="reveal-blur delay-1">
          <span className="font-arabic" style={{
            fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
            color: '#D4AF37',
            display: 'block',
            textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
            overflowWrap: 'anywhere'
          }}>
            {event.arabicTitle}
          </span>
        </div>

        {/* Event name */}
        <div className="reveal delay-2">
          <h2 className="font-decorative" style={{
            fontSize: 'clamp(1.4rem, 4.8vw, 2.2rem)',
            color: '#E8C36A',
            textShadow: '0 2px 15px rgba(0,0,0,0.6), 0 0 20px rgba(212, 175, 55, 0.2)',
            margin: '0.3rem 0',
            letterSpacing: '2px'
          }}>
            {event.title}
          </h2>
        </div>

        {/* Gold divider */}
        <div className="reveal-scale delay-3">
          <div className="gold-divider" style={{ margin: '0.8rem auto' }} />
        </div>

        {/* Description */}
        <div className="reveal delay-4">
          <p className="font-heading" style={{
            fontSize: 'clamp(0.82rem, 2.8vw, 1rem)',
            color: '#E88DA0',
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 1.6,
            margin: '0.4rem 0 1.2rem',
            padding: '0 0.25rem'
          }}>
            {event.description}
          </p>
        </div>

        {/* ── Date ── */}
        <div className="reveal-left delay-5" style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem' }}>
            <Calendar size={17} color="#D4AF37" flexShrink={0} />
            <span className="font-heading" style={{ fontSize: '0.95rem', letterSpacing: '1.5px', color: '#FDF6EB', fontWeight: 500 }}>
              {event.date}
            </span>
          </div>
        </div>

        {/* ── Time ── */}
        <div className="reveal-right delay-6" style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem' }}>
            <Clock size={17} color="#D4AF37" flexShrink={0} />
            <span className="font-heading" style={{ fontSize: '0.95rem', letterSpacing: '1.5px', color: '#FDF6EB', fontWeight: 500 }}>
              {event.time}
            </span>
          </div>
        </div>

        {/* ── Venue ── */}
        <div className="reveal delay-7" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '0.7rem' }}>
            <MapPin size={17} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span className="font-heading" style={{ fontSize: '0.95rem', letterSpacing: '1.5px', color: '#FDF6EB', fontWeight: 500, overflowWrap: 'anywhere', textAlign: 'left' }}>
              {event.venue}, {event.location}
            </span>
          </div>
        </div>

        {/* ── View Location ── */}
        <div className="reveal-scale delay-8">
          <a
            href={event.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.7rem 1.6rem',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)',
              color: '#12020A',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.78rem',
              letterSpacing: '1.5px',
              fontFamily: 'var(--font-sans)',
              boxShadow: '0 4px 20px rgba(212, 175, 55, 0.35), 0 0 15px rgba(212, 175, 55, 0.15)',
              textTransform: 'uppercase'
            }}
          >
            <Sparkles size={13} /> View Venue
          </a>
        </div>
      </div>
    </section>
  );
};
