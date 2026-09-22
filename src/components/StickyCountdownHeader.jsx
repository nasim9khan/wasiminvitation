import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/wedding-data';

export const StickyCountdownHeader = () => {
  const nikahEvent = weddingData.events.find(e => e.id === 'nikkah') || weddingData.events[2];
  // Nikkah is at 7:00 PM IST on 24 October 2026
  const targetDate = new Date('2026-10-24T19:00:00+05:30').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPassed: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky-countdown-header">
      <div className="header-overlay" />
      <div className="header-content">
        {timeLeft.isPassed ? (
          <div className="countdown-passed">Nikkah Mubarak! 💍</div>
        ) : (
          <div className="countdown-units">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.days}</span>
              <span className="countdown-unit">Days</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-item">
              <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-item">
              <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-item">
              <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
