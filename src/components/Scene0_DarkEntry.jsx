import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { weddingData } from '../data/wedding-data';

/**
 * Scene 0: Opening — pitch dark, lights slowly bloom,
 * Bismillah appears from blur, Quran verse text appears standalone (NO card/panel).
 */
export const Scene0_DarkEntry = () => {
  return (
    <section
      className="scene scene--medium"
      style={{
        background: 'radial-gradient(ellipse at 50% 55%, rgba(42, 6, 20, 0.25) 0%, rgba(5, 1, 3, 0.65) 75%)',
        zIndex: 4
      }}
    >
      {/* Ambient gold glow — simulates lights slowly coming on */}
      <motion.div
        className="ambient-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0.2, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
          zIndex: 0
        }}
      />

      <motion.div
        className="ambient-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror', delay: 2 }}
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(123, 13, 37, 0.2) 0%, transparent 65%)',
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 5, maxWidth: '94%', width: '460px', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>

        {/* ═══ Bismillah Calligraphy — fades from deep blur ═══ */}
        <motion.h1
          className="font-arabic"
          initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.8 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2rem, 7.5vw, 4rem)',
            color: '#E8C36A',
            direction: 'rtl',
            textShadow: '0 0 40px rgba(212, 175, 55, 0.5), 0 0 80px rgba(212, 175, 55, 0.15)',
            marginBottom: '0.6rem',
            lineHeight: 1.4
          }}
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </motion.h1>

        {/* ═══ Translation — standalone ═══ */}
        <motion.p
          className="font-heading"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#E88DA0',
            fontWeight: 400,
            marginBottom: '1.8rem'
          }}
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </motion.p>

        {/* ═══ Decorative divider ═══ */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="gold-divider"
          style={{ marginBottom: '1.8rem' }}
        />

        {/* ═══ Quran Verse — each part standalone, NO card/panel ═══ */}
        <motion.p
          className="font-arabic"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          style={{
            fontSize: 'clamp(1.3rem, 4.5vw, 1.8rem)',
            color: '#FDF6EB',
            lineHeight: 1.8,
            direction: 'rtl',
            marginBottom: '0.6rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)'
          }}
        >
          {weddingData.blessing.arabic}
        </motion.p>

        <motion.p
          className="font-heading"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          style={{
            fontSize: 'clamp(0.85rem, 3vw, 1.05rem)',
            color: '#E8C36A',
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 1.6,
            marginBottom: '0.4rem'
          }}
        >
          {weddingData.blessing.translation}
        </motion.p>

        <motion.span
          className="font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{
            display: 'block',
            color: '#E88DA0',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '1px'
          }}
        >
          {weddingData.blessing.reference}
        </motion.span>

        {/* ═══ Scroll Indicator ═══ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 1.3, duration: 1 }}
          style={{ marginTop: '2.2rem' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          >
            <span className="font-sans" style={{
              fontSize: '0.65rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.3rem',
              color: '#B89A80'
            }}>
              Scroll Down
            </span>
            <ChevronDown size={22} color="#D4AF37" style={{ margin: '0 auto' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
