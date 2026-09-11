import { type Variants, type Transition } from 'framer-motion';

/**
 * High-precision quintic easing curve tailored for industrial, clinical, and high-tech UI.
 * Creates an authoritative, confident, yet ultra-smooth deceleration.
 */
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const transitionSmooth: Transition = {
  duration: 0.6,
  ease: EASE_PREMIUM,
};

export const transitionFast: Transition = {
  duration: 0.3,
  ease: EASE_PREMIUM,
};

/**
 * Standard Viewport Observer Configuration
 * Triggers once to avoid distracting re-animations during reciprocal scrolling.
 */
export const viewportConfig = {
  once: true,
  amount: 0.15,
};

/**
 * Fade In from Bottom (Standard Section and Card Entrance)
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSmooth,
  },
};

/**
 * Fade In from Top (Navbars, Eyebrows, Badges)
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSmooth,
  },
};

/**
 * Fade In with subtle Scale (Showcase hardware, media cards, focus highlights)
 */
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Stagger Container for Grids, Lists, and Metrics
 */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Child item for staggered grids
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSmooth,
  },
};
