export const fade = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 },
  },
};
export const toTop = {
  hidden: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
export let parents = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.4, duration: 0.5 },
  },
};

export const toRight = {
  hidden: {
    x: -500,
    transition: { duration: 0.4 },
  },
  show: {
    x: 0,
    transition: { duration: 0.4 },
  },
  exit: { x: -500, transition: { duration: 0.4 } },
};

export const ToScale = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.4 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  exit: { opacity: 1, scale: 0.5, transition: { duration: 0.4 } },
};
