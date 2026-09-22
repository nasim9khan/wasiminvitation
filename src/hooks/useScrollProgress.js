import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook that returns 0..1 progress based on how far the element
 * has been scrolled through the viewport.
 *
 * `start` - fraction of viewport where tracking starts (default 1 = bottom of viewport)
 * `end`   - fraction of viewport where tracking reaches 1.0 (default 0 = top of viewport)
 */
export function useScrollProgress(options = {}) {
  const { start = 1.0, end = 0.3 } = options;
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const vh = window.innerHeight;

    // Element's top position relative to viewport
    const topRatio = rect.top / vh;

    // Map from start..end range to 0..1
    const raw = (start - topRatio) / (start - end);
    setProgress(Math.max(0, Math.min(1, raw)));
  }, [start, end]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return [ref, progress];
}

/**
 * Intersection-Observer based visibility class toggler.
 * Adds 'visible' class to elements with 'reveal' / 'reveal-left' / 'reveal-right' / 'reveal-scale'
 */
export function useRevealObserver() {
  useEffect(() => {
    const SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(SELECTORS);
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Observe newly added elements dynamically (e.g. dynamic scene cards)
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
