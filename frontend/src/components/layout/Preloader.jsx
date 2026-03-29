import { useState, useEffect } from 'react';

export default function Preloader() {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'loaded' | 'hidden'

  useEffect(() => {
    // Phase 1: After 1s, switch from loading animation to loaded
    const t1 = setTimeout(() => {
      setPhase('loaded');
    }, 1000);

    // Phase 2: After 1.6s total, fade out completely
    const t2 = setTimeout(() => {
      setPhase('hidden');
    }, 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div
      className={`preloader ${phase === 'loading' ? 'is-loading' : 'is-loaded'}`}
      style={phase === 'loaded' ? { opacity: 0, transition: 'opacity 0.6s ease' } : {}}
    >
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="/assets/images/logos/logo-icon.webp" alt="Loading" />
        </div>
      </div>
    </div>
  );
}
