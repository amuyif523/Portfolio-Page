import { gsap } from './index'
import { tokens } from '@/styles/tokens'

export const presets = {
  fadeUp: (target: gsap.TweenTarget, delay = 0) => {
    return gsap.fromTo(
      target,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: tokens.motion.duration.normal,
        ease: tokens.motion.ease.default.join(','),
        delay,
      }
    )
  },

  stagger: (targets: gsap.TweenTarget, delay = 0) => {
    return gsap.fromTo(
      targets,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: tokens.motion.duration.normal,
        ease: tokens.motion.ease.default.join(','),
        stagger: 0.1,
        delay,
      }
    )
  },

  clipReveal: (target: gsap.TweenTarget, delay = 0) => {
    return gsap.fromTo(
      target,
      {
        clipPath: 'inset(100% 0 0 0)',
      },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: tokens.motion.duration.slow,
        ease: tokens.motion.ease.default.join(','),
        delay,
      }
    )
  },
}
