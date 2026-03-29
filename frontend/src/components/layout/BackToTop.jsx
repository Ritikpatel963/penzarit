import { useState, useEffect, useCallback } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 1200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`back-to-top-wrapper${visible ? ' back-to-top-btn-show' : ''}`}>
      <button id="back_to_top" type="button" className="back-to-top-btn" onClick={scrollToTop}>
        <span className="back_to_top_icon"><i className="tji-arrow-up-4"></i></span>
        <span className="back_to_top_text">Scroll Top</span>
      </button>
    </div>
  );
}
