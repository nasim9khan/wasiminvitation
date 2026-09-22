import React, { useEffect, useRef } from 'react';

/**
 * Full-screen background canvas:
 * 1. Rich gold & rose glitter dust throughout the background
 * 2. Gentle ambient falling petals drifting gracefully down
 */
export const RoseScatterCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ─── GLITTER DUST (dense, gold & rose sparkles) ───
    class Glitter {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.8 + 0.3;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.025 + 0.008;
        this.driftX = (Math.random() - 0.5) * 0.15;
        this.driftY = -Math.random() * 0.12 - 0.03;
        this.brightness = Math.random();
        // Glitter colors: gold, rose gold, white
        const colors = ['#FCF6BA', '#E8C36A', '#FFF', '#E88DA0', '#D4AF37'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.driftX;
        this.y += this.driftY;
        this.phase += this.speed;
        if (this.y < -5 || this.x < -5 || this.x > width + 5) {
          this.x = Math.random() * width;
          this.y = height + 5;
        }
      }
      draw() {
        const alpha = (Math.sin(this.phase) + 1) * 0.5 * 0.85;
        if (alpha < 0.05) return;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;

        // Draw star shape for bigger glitters
        if (this.size > 1.8) {
          const s = this.size;
          ctx.beginPath();
          for (let i = 0; i < 4; i++) {
            const a = (i / 4) * Math.PI * 2 + this.phase * 0.3;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + Math.cos(a) * s * 2, this.y + Math.sin(a) * s * 2);
          }
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    // ─── PURE WHITE SPARKLES (delicate, refined, site-wide) ───
    class WhiteSparkle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Two size tiers: 45% star sparkle (1.4-2.6px), 55% small dot (0.4-1.3px)
        const isLarge = Math.random() < 0.45;
        this.size = isLarge
          ? Math.random() * 1.2 + 1.4
          : Math.random() * 0.9 + 0.4;
        this.isLarge = isLarge;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.02 + 0.006;
        this.driftX = (Math.random() - 0.5) * 0.1;
        this.driftY = -Math.random() * 0.08 - 0.02;
      }
      update() {
        this.x += this.driftX;
        this.y += this.driftY;
        this.phase += this.speed;
        if (this.y < -5 || this.x < -5 || this.x > width + 5) {
          this.x = Math.random() * width;
          this.y = height + 5;
        }
      }
      draw() {
        const alpha = (Math.sin(this.phase) + 1) * 0.5 * 0.9;
        if (alpha < 0.04) return;
        ctx.save();
        ctx.globalAlpha = alpha;
        if (this.isLarge) {
          const s = this.size;
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          for (let i = 0; i < 4; i++) {
            const a = (i / 4) * Math.PI * 2 + this.phase * 0.3;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + Math.cos(a) * s * 1.35, this.y + Math.sin(a) * s * 1.35);
          }
          ctx.stroke();
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(this.x, this.y, s * 0.45, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    // ─── FALLING AMBIENT PETALS ───
    class FallingPetal {
      constructor(initial = true) {
        this.reset(initial);
      }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -50;
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.wobblePhase = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.015 + 0.005;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.015;
        this.opacity = Math.random() * 0.3 + 0.1;
        const colors = ['#7B0D25', '#4A0817', '#520815', '#8B1030'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update(scrollV) {
        const boost = 1 + Math.min(scrollV * 0.06, 2.5);
        this.y += this.speedY * boost;
        this.wobblePhase += this.wobbleSpeed;
        this.x += Math.sin(this.wobblePhase) * 0.4 + this.speedX;
        this.rotation += this.rotSpeed;
        if (this.y > height + 60) this.reset();
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        const s = this.size;
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(s, -s * 0.4, s * 1.1, s * 0.8, 0, s * 1.3);
        ctx.bezierCurveTo(-s * 1.1, s * 0.8, -s, -s * 0.4, 0, 0);
        ctx.fill();
        ctx.restore();
      }
    }

    // Instantiate ambient elements
    const glitters = Array.from({ length: 55 }, () => new Glitter());
    const whiteSparkles = Array.from({ length: 80 }, () => new WhiteSparkle());
    const fallingPetals = Array.from({ length: 14 }, () => new FallingPetal(true));

    let lastScrollY = window.scrollY;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const scrollY = window.scrollY;
      const scrollV = Math.abs(scrollY - lastScrollY);
      lastScrollY = scrollY;

      // Draw glitter sparkles
      glitters.forEach(g => { g.update(); g.draw(); });

      // Draw white sparkles (varied sizes, site-wide)
      whiteSparkles.forEach(s => { s.update(); s.draw(); });

      // Draw ambient falling petals
      fallingPetals.forEach(p => { p.update(scrollV); p.draw(); });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="petal-canvas" />;
};

