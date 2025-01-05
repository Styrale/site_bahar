import { useRef } from 'react';

export const useDoubleClick = (onClick, onDbClick, delay = 300) => {
  const timePassed = useRef(0);

  return (e) => {
    if (e.detail === 1) {
      // Si c'est un clic simple, on attend le délai avant d'exécuter onClick
      setTimeout(() => {
        if (Date.now() - timePassed.current >= delay) {
          onClick();
        }
      }, delay);
    }

    if (e.detail === 2) {
      // Si c'est un double-clic, on exécute directement onDbClick
      timePassed.current = Date.now();
      onDbClick();
    }
  };
};
