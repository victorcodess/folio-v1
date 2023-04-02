export const riseWithFade = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.65, 0, 0.35, 1],
      duration: 0.7,
    },
  },
};

export const imageAnimation = {
  initial: {
    y: 50,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: `0em`,
    transition: {
      delay: 6.5,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 1,
    },
  },
};

export const wordAnimation2 = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 1,
    },
  },
};

export const bodyAnimation = {
  initial: {
    opacity: 0,
    y: `1em`,
  },
  animate: {
    opacity: 1,
    y: `0em`,
    transition: {
      delay: 5.5,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};
