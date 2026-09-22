import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { weddingData } from '../data/wedding-data';

export const Scene4_Verse = () => {
  const handleWhatsAppRSVP = () => {
    const message = encodeURIComponent(
      `Assalamu Alaikum, I would love to confirm my attendance for the wedding celebrations of ${weddingData.groom.name} & ${weddingData.bride.name}!`
    );
    window.open(
      `https://wa.me/${weddingData.rsvp.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section className="scene" style={{
      background: 'radial-gradient(ellipse at 50% 50%, rgba(30, 4, 15, 0.3) 0%, rgba(5, 1, 3, 0.7) 75%)',
      zIndex: 4,
      padding: '2.5rem 1.2rem 4rem'
    }}>
      <div style={{ maxWidth: '94%', width: '440px', position: 'relative', zIndex: 5, wordBreak: 'break-word', overflowWrap: 'anywhere' }}>

        {/* Heart */}
        <div className="reveal-scale delay-1" style={{ marginBottom: '1rem' }}>
          <div style={{
            width: '46px', height: '46px', borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
          }}>
            <Heart size={22} fill="#D4AF37" color="#D4AF37" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="reveal delay-2">
          <p className="font-decorative" style={{
            fontSize: 'clamp(0.55rem, 2vw, 0.7rem)',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: '#E8C36A',
            marginBottom: '0.2rem',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
          }}>
            RSVP & Warm Wishes
          </p>
        </div>

        <div className="reveal delay-3">
          <div className="gold-divider" style={{ margin: '0.6rem auto 1rem' }} />
        </div>

        {/* Title */}
        <div className="reveal-blur delay-3" style={{ overflow: 'visible' }}>
          <h2 className="font-script gold-gradient-text" style={{
            fontSize: 'clamp(2.5rem, 9vw, 4rem)',
            lineHeight: 1.35,
            paddingTop: '0.15em',
            paddingBottom: '0.15em',
            marginBottom: '0.5rem'
          }}>
            Join Us In Our Joy
          </h2>
        </div>

        {/* Description */}
        <div className="reveal delay-4">
          <p className="font-heading" style={{
            fontSize: 'clamp(0.85rem, 3vw, 1.02rem)',
            color: '#F0E4CE',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            padding: '0 0.3rem'
          }}>
            Your presence and prayers are the greatest blessings as we step into this new journey together.
          </p>
        </div>


        {/* Contacts */}
        <div className="reveal delay-6" style={{ marginTop: '1.8rem' }}>
          <p className="font-sans" style={{
            fontSize: '0.62rem', letterSpacing: '2px', textTransform: 'uppercase',
            color: '#B89A80', marginBottom: '0.4rem'
          }}>
            For inquiries please contact
          </p>
          {weddingData.rsvp.contactPersons.map((person, idx) => (
            <div key={idx} className="reveal delay-7" style={{ marginTop: '0.5rem' }}>
              <p className="font-heading" style={{ color: '#E8C36A', fontSize: '0.88rem', fontWeight: 500 }}>
                {person.name} {/* <span style={{ color: '#E88DA0', fontSize: '0.78rem' }}>({person.relation})</span> */}
              </p>
              <a
                href={`tel:${person.phone}`}
                className="font-sans"
                style={{
                  color: '#FDF6EB',
                  fontSize: '0.88rem',
                  letterSpacing: '0.8px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  marginTop: '2px',
                  cursor: 'pointer'
                }}
              >
                {person.phone}
              </a>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className="reveal-scale delay-5" style={{ marginTop: '2.2rem' }}>
          <button onClick={handleWhatsAppRSVP} style={{
            width: '100%',
            padding: '0.85rem 1.4rem',
            borderRadius: '40px',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: '#FFF',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '1.5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            boxShadow: '0 6px 25px rgba(37, 211, 102, 0.3), 0 0 20px rgba(37, 211, 102, 0.1)',
            textTransform: 'uppercase'
          }}>
            <MessageCircle size={18} /> Confirm via WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};
