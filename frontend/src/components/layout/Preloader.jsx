import { useState, useEffect } from 'react';

export default function Preloader() {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'loaded' | 'hidden'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('loaded'), 1000);
    const t2 = setTimeout(() => setPhase('hidden'), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        opacity: phase === 'loaded' ? 0 : 1,
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* Spinner ring */}
      <div style={{ position: 'relative', width: 120, height: 120 }}>
        <svg
          style={{ position: 'absolute', inset: 0, animation: 'preloader-spin 1.4s linear infinite' }}
          viewBox="0 0 120 120"
          width="120"
          height="120"
        >
          <circle
            cx="60" cy="60" r="54"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="4"
          />
          <circle
            cx="60" cy="60" r="54"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="80 260"
            strokeDashoffset="0"
          />
        </svg>

        {/* Logo centred inside spinner */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
          <img
            src="/assets/images/logos/primary-logo-new.png"
            alt="Loading"
            style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes preloader-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
