export const fadeIn = (direction, delay, durationHidden = 1.2, durationShow = 1.2) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        // Prevent leave/enter overlap when element quickly toggles in/out of viewport.
        type: 'tween',
        duration: Math.min(durationHidden, 0.2),
        delay: 0,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: durationShow,
        delay: delay,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };
};
